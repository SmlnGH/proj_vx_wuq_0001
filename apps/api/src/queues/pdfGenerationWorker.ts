import { prisma } from "../lib/prisma";
import type { PdfJobStatus } from "@prisma/client";

function pdfStatusReady(status: any) {
  return status === "ready";
}

function mapPdfErrorToCode(_e: any) {
  return "PDF_RENDER_FAILED";
}

async function renderPdfBuffer(html: string) {
  await new Promise((r) => setTimeout(r, 300));
  return Buffer.from(`PDF_PLACEHOLDER\n${html.slice(0, 2000)}`);
}

export async function pdfGenerationWorker(job: {
  report_id: string;
  order_id: string;
  content_version: number;
  template_code: string;
  attemptIndex: number;
}) {
  const { report_id, order_id, content_version, template_code, attemptIndex } = job;

  const report = await prisma.report.findUnique({ where: { id: report_id } });
  if (!report) return;

  // stale discard
  if (report.contentVersion !== content_version) return;

  // already ready
  if (report.pdfGenerationStatus === "ready") return;

  // max retry (attemptIndex is 0-based)
  if (attemptIndex >= 3) {
    await prisma.report.update({
      where: { id: report_id },
      data: {
        pdfGenerationStatus: "failed",
        pdfLastErrorCode: "MAX_RETRY_REACHED",
        pdfLastAttemptAt: new Date(),
        pdfAttemptCount: 3,
      },
    });
    return;
  }

  try {
    const buffer = await renderPdfBuffer(report.contentHtml);
    void buffer;

    const storageKey = `reports/${order_id}/report_v${content_version}.pdf`;

    await prisma.report.update({
      where: { id: report_id },
      data: {
        pdfGenerationStatus: "ready",
        pdfStorageKey: storageKey,
        pdfLastErrorCode: null,
        pdfLastAttemptAt: new Date(),
        pdfAttemptCount: Math.min(3, attemptIndex + 1),
      },
    });
  } catch (e) {
    const errorCode = mapPdfErrorToCode(e);
    const nextAttemptIndex = attemptIndex + 1;
    const isFinal = nextAttemptIndex >= 3;

    await prisma.report.update({
      where: { id: report_id },
      data: {
        pdfGenerationStatus: isFinal ? "failed" : "pending",
        pdfLastErrorCode: errorCode,
        pdfLastAttemptAt: new Date(),
        pdfAttemptCount: Math.min(3, nextAttemptIndex),
      },
    });

    if (!isFinal) {
      // re-enqueue handled by retry endpoint or by next enqueue call in real queue.
      // MVP: retry via retry-pdf will re-trigger; setTimeout re-run is not auto-enqueued here.
    }
  }
}

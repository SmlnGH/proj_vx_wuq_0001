import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../../../lib/prisma";
import { ok, err } from "@shared/types/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const role = req.headers["x-role"] as string | undefined;
  if (!role || !["admin", "advisor"].includes(role)) {
    return res.status(403).json(err("FORBIDDEN", "Forbidden"));
  }

  const { orderId } = req.query as { orderId: string };

  const report = await prisma.report.findUnique({ where: { orderId } });
  if (!report) return res.status(404).json(err("REPORT_NOT_FOUND", "Report not found"));
  if (report.status !== "published") return res.status(409).json(err("REPORT_NOT_PUBLISHED", "Report not published"));

  if ((report.pdfAttemptCount ?? 0) >= 3) {
    return res.status(409).json(err("MAX_RETRY_REACHED", "Max retry reached"));
  }

  await prisma.report.update({
    where: { orderId },
    data: { pdfGenerationStatus: "pending" },
  });

  const { enqueuePdfGeneration } = await import("../../../../../lib/queueMock");
  await enqueuePdfGeneration(
    {
      report_id: report.id,
      order_id: orderId,
      content_version: report.contentVersion,
      template_code: report.templateCode,
    },
    Math.max(0, (report.pdfAttemptCount ?? 0))
  );

  return res.status(200).json(ok({ order_id: orderId, pdf_generation_status: "queued" }));
}

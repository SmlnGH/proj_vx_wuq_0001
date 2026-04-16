// apps/api/src/lib/queueMock.ts
// Mock queue: setTimeout + fire-and-forget.

type PdfJobPayload = {
  report_id: string;
  order_id: string;
  content_version: number;
  template_code: string;
};

const backoffMs = [10_000, 60_000, 300_000]; // retry=3

export async function enqueuePdfGeneration(payload: PdfJobPayload, attemptIndex = 0) {
  const delay = backoffMs[Math.min(attemptIndex, backoffMs.length - 1)];
  setTimeout(() => {
    void import("../queues/pdfGenerationWorker").then((m) =>
      m.pdfGenerationWorker({ ...payload, attemptIndex })
    );
  }, delay);
}

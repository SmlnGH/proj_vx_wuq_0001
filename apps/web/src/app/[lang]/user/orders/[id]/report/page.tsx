"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type ReportResp = {
  ok: true;
  data: {
    report_status: string;
    template_code: string;
    content_html: string;
    published_at: string | null;
    content_version: number;
    order_id: string;
  };
};

type PdfResp = {
  ok: true;
  data: { pdf_download_url: string; expires_at: string };
};

export default function ReportPage() {
  const params = useParams<{ id: string }>();
  const orderId = params?.id;

  const [report, setReport] = useState<ReportResp["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<any>(null);

  useEffect(() => {
    if (!orderId) return;
    let alive = true;
    (async () => {
      try {
        const userId = localStorage.getItem("userId") || "mock-user-id";
        const resp = await fetch(`/api/orders/${orderId}/report`, {
          headers: { "x-user-id": userId },
        });
        const data = await resp.json();
        if (!resp.ok || !data.ok) throw new Error(data?.error?.message ?? "Failed");
        if (alive) setReport(data.data);
      } catch (e: any) {
        if (alive) setErr(e?.message ?? e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [orderId]);

  async function downloadPdf() {
    if (!orderId) return;
    const userId = localStorage.getItem("userId") || "mock-user-id";
    const resp = await fetch(`/api/orders/${orderId}/report/pdf`, { headers: { "x-user-id": userId } });
    const data = await resp.json();
    if (!resp.ok || !data.ok) {
      alert(data?.error?.code ?? "PDF download failed");
      return;
    }
    const pdf = data.data as PdfResp["data"];
    window.open(pdf.pdf_download_url, "_blank");
  }

  if (loading) return <div className="p-6">Loading...</div>;
  if (err) return <div className="p-6 text-red-600">{String(err)}</div>;
  if (!report) return <div className="p-6">No report</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Your Report</h1>
        <button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={downloadPdf}>
          Download PDF
        </button>
      </div>
      <div className="text-sm text-gray-500 mb-3">Template: {report.template_code}</div>
      <div className="prose max-w-none border rounded p-4" dangerouslySetInnerHTML={{ __html: report.content_html }} />
    </div>
  );
}

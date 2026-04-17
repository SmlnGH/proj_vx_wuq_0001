

"use client";

export const runtime = 'edge';

import { useEffect, useState } from "react";

type OrdersMeItem = {
  order_id: string;
  package_code: string;
  order_status: string;
  payment_status: string | null;
  report_status: string | null;
  pdf_generation_status: string;
  created_at: string;
  published_at: string | null;
  can_view_report: boolean;
  can_download_pdf: boolean;
};

type OrdersMeResp = { ok: true; data: { items: OrdersMeItem[] } };

export default function UserOrdersPage() {
  const [items, setItems] = useState<OrdersMeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const userId = localStorage.getItem("userId") || "mock-user-id";
        const resp = await fetch("/api/orders/me", { headers: { "x-user-id": userId } });
        const data = await resp.json();
        if (!resp.ok || !data.ok) throw new Error(data?.error?.message ?? "Failed");
        if (alive) setItems(data.data.items);
      } catch (e: any) {
        if (alive) setErr(e?.message ?? "Unknown error");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  if (loading) return <div className="p-6">Loading...</div>;
  if (err) return <div className="p-6 text-red-600">{err}</div>;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-3">
      <h1 className="text-2xl font-semibold">Your Orders</h1>
      {items.length === 0 && <div>No orders yet</div>}
      {items.map((o) => (
        <div key={o.order_id} className="border rounded p-3">
          <div>Order: <b>{o.package_code}</b></div>
          <div>Status: {o.order_status}</div>
          <div>Report: {o.report_status ?? "—"}</div>
          <div>PDF: {o.pdf_generation_status}</div>
          <div className="mt-2">
            {o.can_view_report ? (
              <a className="text-blue-600" href={`/user/orders/${o.order_id}/report`}>View Report</a>
            ) : (
              <span className="text-gray-500">Report not delivered</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

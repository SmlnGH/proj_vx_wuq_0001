"use client";

import { useEffect, useMemo, useState } from "react";

type ConsentKey = "disclaimer" | "privacy" | "refund" | "cookie";

type ConsentVersionsItem = {
  key: ConsentKey;
  id: string;
  version: string;
  contentHash: string | null;
};

type ConsentVersionsResp = {
  ok: true;
  data: { items: ConsentVersionsItem[] };
};

export default function CheckoutPage() {
  const [items, setItems] = useState<ConsentVersionsItem[] | null>(null);
  const [loadingConsent, setLoadingConsent] = useState(true);
  const [consentErr, setConsentErr] = useState<string | null>(null);

  const consentMap = useMemo(() => {
    if (!items) return null;
    const m = new Map(items.map((x) => [x.key, x] as const));
    return m;
  }, [items]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const resp = await fetch("/api/legal/consent-versions");
        const data = await resp.json();
        if (!resp.ok || !data.ok) throw new Error(data?.error?.message ?? "Failed");
        if (alive) setItems(data.data.items);
      } catch (e: any) {
        if (alive) setConsentErr(e?.message ?? "Unknown error");
      } finally {
        if (alive) setLoadingConsent(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const [checked, setChecked] = useState({ disclaimer: false, privacy: false, refund: false });
  const [errMsg, setErrMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function submitOrder() {
    setErrMsg(null);
    if (!consentMap) return;
    if (!checked.disclaimer || !checked.privacy || !checked.refund) {
      setErrMsg("Please accept Disclaimer / Privacy / Refund.");
      return;
    }

    const userId = localStorage.getItem("userId") || "mock-user-id";

    const disclaimer = consentMap.get("disclaimer")!;
    const privacy = consentMap.get("privacy")!;
    const refund = consentMap.get("refund")!;
    const cookie = consentMap.get("cookie")!;

    setSubmitting(true);
    try {
      const resp = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": userId,
        },
        body: JSON.stringify({
          package_code: "bazi_basic",
          intake: { full_name: "Victor Pan", birth_date: "1992-08-21", birth_time_precision: "exact", birth_time: "14:35", birth_place: "US", gender: "male", consult_theme: "career" },
          appointment: null,
          consent: {
            form_type: "checkout",
            consent_disclaimer_version: disclaimer.version,
            consent_privacy_version: privacy.version,
            consent_refund_version: refund.version,
            consent_cookie_version: cookie.version,
            consent_accepted_at: new Date().toISOString(),
            consent_version_ids: {
              disclaimer: disclaimer.id,
              privacy: privacy.id,
              refund: refund.id,
              cookie: cookie.id,
            },
          },
        }),
      });
      const data = await resp.json();
      if (!resp.ok || !data.ok) throw new Error(data?.error?.message ?? "Create order failed");

      alert("Order created: " + data.data.order_id);
    } catch (e: any) {
      setErrMsg(e?.message ?? "Unknown error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Checkout (MVP mock)</h1>

      {loadingConsent && <div>Loading consent versions...</div>}
      {consentErr && <div className="text-red-600">{consentErr}</div>}

      {!loadingConsent && items && (
        <div className="space-y-3 border rounded p-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={checked.disclaimer} onChange={(e) => setChecked((v) => ({ ...v, disclaimer: e.target.checked }))} />
            Accept Disclaimer
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={checked.privacy} onChange={(e) => setChecked((v) => ({ ...v, privacy: e.target.checked }))} />
            Accept Privacy
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={checked.refund} onChange={(e) => setChecked((v) => ({ ...v, refund: e.target.checked }))} />
            Accept Refund
          </label>

          {errMsg && <div className="text-red-600">{errMsg}</div>}

          <button className="px-4 py-2 bg-blue-600 text-white rounded" disabled={submitting} onClick={submitOrder}>
            {submitting ? "Submitting..." : "Create Order"}
          </button>
        </div>
      )}
    </div>
  );
}

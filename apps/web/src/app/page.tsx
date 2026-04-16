import React from "react";

export default function HomePage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24, fontFamily: "system-ui" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>Five-Element Fortune Network</h1>
      <p style={{ marginBottom: 18, lineHeight: 1.6 }}>
        This is the Phase 1/1.1/1.2 homepage minimal landing page for <strong>proj_vx_wuq_0001</strong>.
        
        <br />
        <span style={{ color: "#555" }}>
          (Language switching is handled under <code>/[lang]</code> routes.)
        </span>
      </p>

      <section style={{ border: "1px solid #e5e5e5", borderRadius: 12, padding: 16, marginBottom: 14 }}>
        <h2 style={{ fontSize: 18, fontWeight: 650, marginBottom: 8 }}>Quick Links</h2>
        <ul style={{ paddingLeft: 18, margin: 0, lineHeight: 1.8 }}>
          <li>
            <a href="/en/checkout" style={{ color: "#2563eb" }}>
              /en/checkout
            </a>
          </li>
          <li>
            <a href="/zh/checkout" style={{ color: "#2563eb" }}>
              /zh/checkout
            </a>
          </li>
        </ul>
      </section>

      <p style={{ color: "#666", fontSize: 13 }}>
        Note: Keep this page as a direct HTML-rendering default route (GET / must return 200 with HTML).
      </p>
    </main>
  );
}

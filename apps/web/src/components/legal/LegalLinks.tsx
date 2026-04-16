import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';

export default function LegalLinks({ lang }: { lang: Lang }) {
  return (
    <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
      <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '合规与信任' : 'Compliance & Trust'}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10, marginTop: 12 }}>
        <a href="#disclaimer" style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 12, textDecoration: 'none' }}>{t('disclaimerLabel', lang)}</a>
        <a href="#privacy" style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 12, textDecoration: 'none' }}>{t('privacyLabel', lang)}</a>
        <a href="#refund" style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 12, textDecoration: 'none' }}>{t('refundLabel', lang)}</a>
      </div>

      <div style={{ marginTop: 14, color: '#444', fontSize: 13, lineHeight: 1.7 }}>
        <div id="disclaimer">{lang === 'zh' ? '免责声明：展示层内容不构成承诺或保证。' : 'Disclaimer: Display-layer content does not constitute guarantees.'}</div>
        <div id="privacy" style={{ marginTop: 8 }}>{lang === 'zh' ? '隐私：我们仅用于提升体验的最低必要展示。' : 'Privacy: Minimal data usage for experience improvement.'}</div>
        <div id="refund" style={{ marginTop: 8 }}>{lang === 'zh' ? '服务边界：不提供超出服务范围的承诺。' : 'Service boundary: No promises beyond the service scope.'}</div>
      </div>
    </section>
  );
}

import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';

export default function LegalLinks({ lang }: { lang: Lang }) {
  const links = [
    { key: 'disclaimer', label: t('disclaimerLabel', lang), href: `/${lang}/legal/disclaimer` },
    { key: 'privacy', label: t('privacyLabel', lang), href: `/${lang}/legal/privacy` },
    { key: 'refund', label: t('refundLabel', lang), href: `/${lang}/legal/boundary` },
  ];

  return (
    <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
      <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '合规与信任' : 'Compliance & Trust'}</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10, marginTop: 12 }}>
        {links.map((x) => (
          <a key={x.key} href={x.href} style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 12, textDecoration: 'none' }}>
            {x.label}
          </a>
        ))}
      </div>

      <div style={{ marginTop: 14, color: '#444', fontSize: 13, lineHeight: 1.7 }}>
        <div>{lang === 'zh' ? '展示层内容：仅用于体验引导，不构成承诺或保证。' : 'Display-layer content: experience-oriented only, not a guarantee or promise.'}</div>
      </div>
    </section>
  );
}

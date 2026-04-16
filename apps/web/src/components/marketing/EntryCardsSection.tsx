import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';

export default function EntryCardsSection({ lang }: { lang: Lang }) {
  const links = [
    { key: 'ai', title: t('entryAi', lang), href: `/${lang}/ai-tarot` },
    { key: 'vip', title: t('entryVip', lang), href: `/${lang}/vip-tarot` },
    { key: 'shop', title: t('entryShop', lang), href: `/${lang}/shop` },
  ];

  return (
    <section style={{ marginTop: 16 }}>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>{t('entryTitle', lang)}</h2>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        {links.map((x) => (
          <a
            key={x.key}
            href={x.href}
            style={{
              border: '1px solid #e5e5e5',
              borderRadius: 16,
              padding: 16,
              textDecoration: 'none',
              color: '#111',
              background: '#fff',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 16 }}>{x.title}</div>
            <div style={{ marginTop: 10, color: '#444', fontSize: 13 }}>{t('entryCta', lang)} →</div>
          </a>
        ))}
      </div>
    </section>
  );
}

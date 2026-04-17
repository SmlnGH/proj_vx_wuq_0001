import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';
import { CardGlyph } from './icons/BrandMarks';
import { uiTheme } from './theme';

export default function EntryCardsSection({ lang }: { lang: Lang }) {
  const links = [
    { key: 'ai', title: t('entryAi', lang), href: `/${lang}/ai-tarot`, glyph: 'spark' as const },
    { key: 'vip', title: t('entryVip', lang), href: `/${lang}/vip-tarot`, glyph: 'ring' as const },
    { key: 'shop', title: t('entryShop', lang), href: `/${lang}/shop`, glyph: 'seal' as const },
  ];

  return (
    <section style={{ marginTop: 22 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 20, marginBottom: 0 }}>{t('entryTitle', lang)}</h2>
        <div style={{ fontSize: 12, color: '#6b7280' }}>{lang === 'zh' ? '一键进入你的下一步' : 'One step ahead'}</div>
      </div>

      <div
        style={{
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          marginTop: 12,
        }}
      >
        {links.map((x) => (
          <a
            key={x.key}
            href={x.href}
            style={{
              border: `1px solid ${uiTheme.borderSoft}`,
              borderRadius: 18,
              padding: 16,
              textDecoration: 'none',
              color: uiTheme.text,
              background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
              boxShadow: '0 10px 30px rgba(2,6,23,0.04)',
              transition: 'transform 140ms ease, box-shadow 140ms ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ fontWeight: 800, fontSize: 16 }}>{x.title}</div>
              <div style={{ color: uiTheme.accent, opacity: 0.85 }}>
                <CardGlyph variant={x.glyph} />
              </div>
            </div>
            <div style={{ marginTop: 10, color: uiTheme.textMuted, fontSize: 13, lineHeight: 1.6 }}>
              <div style={{ fontWeight: 700 }}>{t('entryCta', lang)} →</div>
              <div style={{ fontSize: 12, marginTop: 4, color: uiTheme.textSubtle }}>
                {lang === 'zh' ? '隐私优先 · 节奏清晰' : 'Privacy-first · Clear next step'}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

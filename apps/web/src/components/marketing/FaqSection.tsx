import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';
import { CardGlyph } from './icons/BrandMarks';

export default function FaqSection({ lang }: { lang: Lang }) {
  const cards = [
    { q: t('faqQ1', lang), a: t('faqA1', lang), glyph: 'spark' as const },
    { q: t('faqQ2', lang), a: t('faqA2', lang), glyph: 'ring' as const },
    { q: t('faqQ3', lang), a: t('faqA3', lang), glyph: 'seal' as const },
  ];

  return (
    <section style={{ marginTop: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 20, marginBottom: 0 }}>{t('faqTitle', lang)}</h2>
        <div style={{ fontSize: 12, color: '#6b7280' }}>{lang === 'zh' ? '先看懂，再预约' : 'Know first, book next'}</div>
      </div>

      <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
        {cards.map((x, idx) => (
          <div key={idx} style={{ border: '1px solid rgba(229,231,235,0.95)', borderRadius: 16, padding: 14, background: '#fff' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 10 }}>
              <div>
                <div style={{ fontWeight: 800 }}>{x.q}</div>
                <div style={{ color: '#4b5563', marginTop: 6, lineHeight: 1.7 }}>{x.a}</div>
              </div>
              <div style={{ color: '#2563eb', opacity: 0.75, marginTop: 2 }}>
                <CardGlyph variant={x.glyph} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

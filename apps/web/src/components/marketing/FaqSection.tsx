import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';

export default function FaqSection({ lang }: { lang: Lang }) {
  return (
    <section style={{ marginTop: 16 }}>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>{t('faqTitle', lang)}</h2>
      <div style={{ display: 'grid', gap: 10 }}>
        <div style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 700 }}>{t('faqQ1', lang)}</div>
          <div style={{ color: '#444', marginTop: 6 }}>{t('faqA1', lang)}</div>
        </div>
        <div style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 700 }}>{t('faqQ2', lang)}</div>
          <div style={{ color: '#444', marginTop: 6 }}>{t('faqA2', lang)}</div>
        </div>
        <div style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 14 }}>
          <div style={{ fontWeight: 700 }}>{t('faqQ3', lang)}</div>
          <div style={{ color: '#444', marginTop: 6 }}>{t('faqA3', lang)}</div>
        </div>
      </div>
    </section>
  );
}

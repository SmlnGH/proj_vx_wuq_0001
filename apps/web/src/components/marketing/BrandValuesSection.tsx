import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';

export default function BrandValuesSection({ lang }: { lang: Lang }) {
  return (
    <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
      <h2 style={{ fontSize: 20, margin: 0 }}>{t('brandValuesTitle', lang)}</h2>
      <ul style={{ marginTop: 10, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
        <li>{t('brandValues1', lang)}</li>
        <li>{t('brandValues2', lang)}</li>
        <li>{t('brandValues3', lang)}</li>
      </ul>
    </section>
  );
}

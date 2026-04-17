import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';
import { SectionDividerOrnament } from './icons/BrandMarks';

export default function TrustProcessSection({ lang }: { lang: Lang }) {
  return (
    <section
      style={{
        border: '1px solid rgba(229,231,235,0.95)',
        borderRadius: 18,
        padding: 18,
        marginTop: 16,
        background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ color: '#2563eb', opacity: 0.8 }}>
          <SectionDividerOrnament size={18} />
        </div>
        <h2 style={{ fontSize: 20, margin: 0 }}>{t('trustTitle', lang)}</h2>
      </div>
      <ol style={{ marginTop: 10, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
        <li>{t('trustStep1', lang)}</li>
        <li>{t('trustStep2', lang)}</li>
        <li>{t('trustStep3', lang)}</li>
      </ol>
      <div style={{ marginTop: 12, fontSize: 12, color: '#6b7280' }}>
        {lang === 'zh' ? '用清晰流程建立信任。' : 'Build trust with a clear, calm flow.'}
      </div>
    </section>
  );
}

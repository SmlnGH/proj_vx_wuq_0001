export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../components/i18n/locale';
import { t } from '../../../components/i18n/locale';
import ContentPageTemplate from '../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../components/legal/LegalLinks';

export default function AiTarotPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <ContentPageTemplate lang={lang} title={t('aiPageTitle', lang)} lead={t('aiPageLead', lang)}>
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? 'AI 占卜入口（展示层）' : 'AI Fortune Entry (Display Layer)'}</h2>
        <p style={{ marginTop: 10, color: '#444', lineHeight: 1.8 }}>
          {lang === 'zh'
            ? 'AI 占卜以展示层方式先带你快速看到可能性；确认后再进入下一步。'
            : 'This page focuses on a high-quality display layer and conversion entry; future work will add theme selection and a fuller flow.'}
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}/ai-tarot/next`}
            style={{ border: '1px solid #2563eb', color: '#2563eb', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '下一步 →' : 'Next →'}
          </a>
          <a
            href={`/${lang}/vip-tarot`}
            style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '升级到 VIP 人工 →' : 'Upgrade to VIP Human →'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

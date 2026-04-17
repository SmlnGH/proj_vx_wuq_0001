export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../components/i18n/locale';
import { t } from '../../../components/i18n/locale';
import ContentPageTemplate from '../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../components/legal/LegalLinks';

export default function ShopPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <ContentPageTemplate lang={lang} title={t('shopPageTitle', lang)} lead={t('shopPageLead', lang)}>
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '精选入口（展示层）' : 'Featured Entries (Display)'}</h2>
        <p style={{ marginTop: 10, color: '#4b5563', lineHeight: 1.8 }}>
          {lang === 'zh'
            ? '先选你想探索的方向，再进入对应入口；确认偏好后我们会把下一步反馈带给你。'
            : 'Pick the direction you want to explore, then enter the matching flow; once we confirm your preferences, we’ll deliver the next feedback.'}
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}/shop/next`}
            style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '下一步 →' : 'Next →'}
          </a>
          <a
            href={`/${lang}/vip-tarot`}
            style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '需要更深沟通 →' : 'Need deeper communication →'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

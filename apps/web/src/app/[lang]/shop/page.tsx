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
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '精选入口（展示）' : 'Featured Entries (Display)'}</h2>
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

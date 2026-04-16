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
        <div style={{ marginTop: 12, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
          <a href="#" style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 14, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontWeight: 700 }}>{lang === 'zh' ? '定制服务包' : 'Premium Service Bundle'}</div>
            <div style={{ marginTop: 6, color: '#444', fontSize: 13 }}>{lang === 'zh' ? 'VIP 沟通 + 信任流程' : 'VIP communication + trust flow'}</div>
          </a>
          <a href="#" style={{ border: '1px solid #e5e5e5', borderRadius: 14, padding: 14, textDecoration: 'none', color: '#111' }}>
            <div style={{ fontWeight: 700 }}>{lang === 'zh' ? '双语咨询' : 'Bilingual Consultation'}</div>
            <div style={{ marginTop: 6, color: '#444', fontSize: 13 }}>{lang === 'zh' ? 'zh/en 展示与引导' : 'zh/en display & guidance'}</div>
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

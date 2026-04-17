export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../components/i18n/locale';
import { t } from '../../../components/i18n/locale';
import ContentPageTemplate from '../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../components/legal/LegalLinks';

export default function VipTarotPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <ContentPageTemplate lang={lang} title={t('vipPageTitle', lang)} lead={t('vipPageLead', lang)}>
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? 'VIP 人工信任流程（展示）' : 'VIP Human Trust Flow (Display)'}</h2>
        <ol style={{ marginTop: 10, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
          <li>{lang === 'zh' ? '确认免责声明与隐私边界' : 'Confirm privacy boundaries'}</li>
          <li>{lang === 'zh' ? '深度沟通：人工陪伴更贴合你的节奏' : 'Deep communication: human guidance that fits your pace'}</li>
          <li>{lang === 'zh' ? '完成定制感入口（展示层先行）' : 'Complete the tailored entry (display first)'}</li>
        </ol>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}/vip-tarot/next`}
            style={{ border: '1px solid #2563eb', color: '#2563eb', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '下一步 →' : 'Next →'}
          </a>
          <a
            href={`/${lang}/shop`}
            style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '查看商城 →' : 'Visit Shop →'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

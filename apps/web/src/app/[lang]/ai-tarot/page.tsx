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
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? 'AI 占卜入口（展示）' : 'AI Fortune Entry (Display)'}</h2>
        <p style={{ marginTop: 10, color: '#444', lineHeight: 1.8 }}>
          {lang === 'zh'
            ? '本页先交付高质量展示层与转化入口，后续接入主题选择与更完整的咨询闭环。'
            : 'This page focuses on a high-quality display layer and conversion entry; future work will add theme selection and a fuller flow.'}
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={`/${lang}/vip-tarot`} style={{ border: '1px solid #2563eb', color: '#2563eb', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}>
            {lang === 'zh' ? '升级到 VIP 人工 →' : 'Upgrade to VIP Human →'}
          </a>
          <a href={`/${lang}/shop`} style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}>
            {lang === 'zh' ? '查看商城 →' : 'Visit Shop →'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

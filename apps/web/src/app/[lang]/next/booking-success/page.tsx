import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';

export default function BookingSuccessPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const copy = lang === 'zh'
    ? {
        title: '预约成功反馈（第一版）',
        lead: '感谢你的提交。当前为前端转化闭环展示层：你已经看到“成功反馈页”。后续将接入真实预约/通知流程。',
        h1: '我们已为你生成下一步指引',
        backAi: '返回 AI 占卜页',
        backVip: '返回 VIP 人工页',
        backShop: '返回 商城页',
      }
    : {
        title: 'Booking Success Feedback (v1)',
        lead: 'Thanks for submitting. This is a display-layer conversion loop: you have reached the “success feedback” page. Future work will integrate the real booking/notification flow.',
        h1: 'Next-step guidance is ready',
        backAi: 'Back to AI Fortune',
        backVip: 'Back to VIP Human',
        backShop: 'Back to Shop',
      };

  return (
    <ContentPageTemplate lang={lang} title={copy.title} lead={copy.lead}>
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{copy.h1}</h2>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={`/${lang}/ai-tarot`} style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}>
            {copy.backAi}
          </a>
          <a href={`/${lang}/vip-tarot`} style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}>
            {copy.backVip}
          </a>
          <a href={`/${lang}/shop`} style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}>
            {copy.backShop}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

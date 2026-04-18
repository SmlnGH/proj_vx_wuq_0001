export const runtime = 'edge';


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

        <p style={{ marginTop: 10, color: '#4b5563', lineHeight: 1.8 }}>
          {lang === 'zh'
            ? '我们会尽快确认你的信息并联系你。通常 1-2 个工作日内安排下一步。'
            : 'We’ll confirm your details and reach out shortly. Typically within 1–2 business days for the next step.'}
        </p>

        <div style={{ marginTop: 10, color: '#6b7280', fontSize: 13, lineHeight: 1.7 }}>
          {lang === 'zh'
            ? '下一步建议：继续浏览你感兴趣的方向，或直接返回对应入口完善偏好。'
            : 'Next suggested action: continue exploring what you like, or go back to refine your preferences.'}
        </div>

        <div style={{ marginTop: 14, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}`}
            style={{
              border: '1px solid rgba(37,99,235,0.35)',
              background: 'rgba(37,99,235,0.08)',
              color: '#1d4ed8',
              padding: '10px 14px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 900,
            }}
          >
            {lang === 'zh' ? '返回首页继续浏览' : 'Back to home & keep exploring'}
          </a>

          <a
            href={`/${lang}/shop/next`}
            style={{
              border: '1px solid #e5e5e5',
              background: '#fff',
              color: '#111827',
              padding: '10px 14px',
              borderRadius: 999,
              textDecoration: 'none',
              fontWeight: 750,
            }}
          >
            {lang === 'zh' ? '查看其他入口' : 'See other entries'}
          </a>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
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
        </div>
      </section>
    </ContentPageTemplate>
  );
}

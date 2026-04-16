import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';

export default function AiTarotNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const zh = {
    title: 'AI 占卜·提交你的需求（占位可填写表单）',
    lead: '为了给你更贴合的建议，请填写以下信息。当前为展示层可填写入口（不涉及真实支付/后端提交）。',
    step1: '选择偏好',
    q1: '你更关注哪类主题？',
    q2: '你的咨询时间范围？',
    step2: '联系方式（展示层）',
    c1: '微信/邮箱（可选）',
    c2: '是否需要 VIP 人工跟进？',
    step3: '确认与下一步',
    disclaimer: '我已阅读并理解免责声明/隐私说明/服务边界（展示层）。',
    btn: '生成下一步指引',
    back: '返回 AI 占卜页',
  };
  const en = {
    title: 'AI Fortune · Submit your request (fillable placeholder form)',
    lead: 'To provide more relevant guidance, please fill in the fields below. This is a display-layer form (no real payment / no backend submission).',
    step1: 'Choose preferences',
    q1: 'Which topic are you most interested in?',
    q2: 'Your consultation time range?',
    step2: 'Contact info (display layer)',
    c1: 'WeChat/Email (optional)',
    c2: 'Do you want VIP human follow-up?',
    step3: 'Confirm & next step',
    disclaimer: 'I have read and understood the disclaimer/privacy notice/service boundary (display layer).',
    btn: 'Generate next-step guidance',
    back: 'Back to AI Fortune',
  };
  const copy = lang === 'zh' ? zh : en;

  return (
    <ContentPageTemplate lang={lang} title={copy.title} lead={copy.lead}>
      <LegalLinks lang={lang} />

      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step1}</h2>

        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.q1}</div>
            <select defaultValue={lang === 'zh' ? '事业/学业' : 'Career/Study'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }}>
              <option>{lang === 'zh' ? '事业/学业' : 'Career/Study'}</option>
              <option>{lang === 'zh' ? '感情/婚恋' : 'Love/Relationships'}</option>
              <option>{lang === 'zh' ? '财运/机会' : 'Wealth/Opportunities'}</option>
              <option>{lang === 'zh' ? '健康/调理' : 'Health/Care'}</option>
            </select>
          </label>

          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.q2}</div>
            <select defaultValue={lang === 'zh' ? '未来 1-3 个月' : 'Next 1-3 months'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }}>
              <option>{lang === 'zh' ? '未来 1-3 个月' : 'Next 1-3 months'}</option>
              <option>{lang === 'zh' ? '未来 3-6 个月' : 'Next 3-6 months'}</option>
              <option>{lang === 'zh' ? '未来 6-12 个月' : 'Next 6-12 months'}</option>
            </select>
          </label>
        </div>
      </section>

      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step2}</h2>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.c1}</div>
            <input placeholder={lang === 'zh' ? '例如：name@example.com' : 'e.g. name@example.com'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }} />
          </label>
          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.c2}</div>
            <select defaultValue={lang === 'zh' ? '不需要' : 'No'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }}>
              <option>{lang === 'zh' ? '需要 VIP 人工' : 'Yes, VIP human'}</option>
              <option>{lang === 'zh' ? '不需要' : 'No'}</option>
            </select>
          </label>
        </div>
      </section>

      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step3}</h2>
        <label style={{ display: 'flex', gap: 10, marginTop: 12, alignItems: 'flex-start' }}>
          <input type="checkbox" defaultChecked />
          <span style={{ fontSize: 13, color: '#444', lineHeight: 1.7 }}>{copy.disclaimer}</span>
        </label>

        <button
          type="button"
          style={{ marginTop: 14, width: '100%', padding: '12px 16px', borderRadius: 14, border: '1px solid #2563eb', background: '#2563eb', color: '#fff', fontWeight: 800, cursor: 'pointer' }}
          onClick={() => {
            // display-only: no backend. Keep simple.
            alert(lang === 'zh' ? '已生成下一步指引（占位）。后续将接入真实咨询/预约闭环。' : 'Next-step guidance generated (placeholder). Future work will integrate the full consultation/booking loop.');
          }}
        >
          {copy.btn}
        </button>

        <a href={`/${lang}/ai-tarot`} style={{ display: 'inline-block', marginTop: 12, fontSize: 13, textDecoration: 'none', color: '#111' }}>
          {copy.back}
        </a>
      </section>
    </ContentPageTemplate>
  );
}

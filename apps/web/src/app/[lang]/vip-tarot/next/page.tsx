import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';

export default function VipTarotNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const zh = {
    title: 'VIP 人工·预约沟通（占位可填写表单）',
    lead: '填写你的沟通目标与偏好，我们将为你提供下一步的引导（展示层，不做真实提交）。',
    step1: '沟通目标',
    q1: '你想解决的核心问题？',
    q2: '你希望的沟通形式？',
    step2: '时间与联系方式（展示层）',
    c1: '可接受的时间段（可选）',
    c2: '联系方式（可选）',
    step3: '确认与下一步',
    disclaimer: '我已阅读并理解免责声明/隐私说明/服务边界（展示层）。',
    btn: '生成 VIP 沟通指引',
    back: '返回 VIP 人工页',
  };
  const en = {
    title: 'VIP Human · Book a consultation (fillable placeholder form)',
    lead: 'Tell us your communication goals and preferences. We’ll generate next-step guidance (display layer only, no real submission).',
    step1: 'Your goals',
    q1: 'What is your core question?',
    q2: 'Preferred communication format?',
    step2: 'Time & contact (display layer)',
    c1: 'Preferred time window (optional)',
    c2: 'Contact info (optional)',
    step3: 'Confirm & next step',
    disclaimer: 'I have read and understood the disclaimer/privacy notice/service boundary (display layer).',
    btn: 'Generate VIP guidance',
    back: 'Back to VIP Human',
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
            <input placeholder={lang === 'zh' ? '例如：如何把握机会与节奏' : 'e.g. How to seize opportunities and timing'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }} />
          </label>
          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.q2}</div>
            <select defaultValue={lang === 'zh' ? '一对一沟通' : '1:1'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }}>
              <option>{lang === 'zh' ? '一对一沟通' : '1:1'}</option>
              <option>{lang === 'zh' ? '深度提问问答' : 'Deep Q&A'}</option>
              <option>{lang === 'zh' ? '结构化复盘' : 'Structured review'}</option>
            </select>
          </label>
        </div>
      </section>

      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step2}</h2>
        <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.c1}</div>
            <input placeholder={lang === 'zh' ? '例如：周末/晚上' : 'e.g. weekends / evenings'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }} />
          </label>
          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.c2}</div>
            <input placeholder={lang === 'zh' ? '例如：name@example.com' : 'e.g. name@example.com'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }} />
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
            alert(lang === 'zh' ? 'VIP 沟通指引已生成（占位）。后续接入真实预约/对接流程。' : 'VIP guidance generated (placeholder). Future work will integrate real booking/coordination flow.');
          }}
        >
          {copy.btn}
        </button>

        <a href={`/${lang}/vip-tarot`} style={{ display: 'inline-block', marginTop: 12, fontSize: 13, textDecoration: 'none', color: '#111' }}>
          {copy.back}
        </a>
      </section>
    </ContentPageTemplate>
  );
}

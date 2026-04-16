import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';

export default function ShopNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const zh = {
    title: '商城下一步·选择服务包（占位可填写表单）',
    lead: '选择你感兴趣的服务方向，我们将给出下一步展示与指引（展示层，不做真实支付/后端提交）。',
    step1: '选择服务包',
    q1: '你想了解哪类服务？',
    q2: '你希望的投入强度？',
    step2: '确认（展示层）',
    disclaimer: '我已阅读免责声明/隐私说明/服务边界（展示层）。',
    btn: '生成服务推荐',
    back: '返回 商城页',
  };
  const en = {
    title: 'Shop Next · Choose a service bundle (fillable placeholder)',
    lead: 'Pick a service direction and get next-step guidance (display layer only, no real payment / backend submission).',
    step1: 'Choose a bundle',
    q1: 'Which service category are you interested in?',
    q2: 'Preferred depth level?',
    step2: 'Confirm (display layer)',
    disclaimer: 'I have read the disclaimer/privacy notice/service boundary (display layer).',
    btn: 'Generate recommendations',
    back: 'Back to Shop',
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
            <select defaultValue={lang === 'zh' ? 'AI 占卜展示' : 'AI fortune display'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }}>
              <option>{lang === 'zh' ? 'AI 占卜展示' : 'AI fortune display'}</option>
              <option>{lang === 'zh' ? 'VIP 人工深度' : 'VIP human deep dive'}</option>
              <option>{lang === 'zh' ? '双语咨询引导' : 'Bilingual consultation guidance'}</option>
            </select>
          </label>
          <label style={{ display: 'block' }}>
            <div style={{ fontSize: 13, color: '#444', marginBottom: 6 }}>{copy.q2}</div>
            <select defaultValue={lang === 'zh' ? '标准' : 'Standard'} style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid #ddd' }}>
              <option>{lang === 'zh' ? '标准' : 'Standard'}</option>
              <option>{lang === 'zh' ? '更深度' : 'More depth'}</option>
            </select>
          </label>
        </div>
      </section>

      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step2}</h2>
        <label style={{ display: 'flex', gap: 10, marginTop: 12, alignItems: 'flex-start' }}>
          <input type="checkbox" defaultChecked />
          <span style={{ fontSize: 13, color: '#444', lineHeight: 1.7 }}>{copy.disclaimer}</span>
        </label>

        <button
          type="button"
          style={{ marginTop: 14, width: '100%', padding: '12px 16px', borderRadius: 14, border: '1px solid #2563eb', background: '#2563eb', color: '#fff', fontWeight: 800, cursor: 'pointer' }}
          onClick={() => {
            alert(lang === 'zh' ? '已生成服务推荐（占位）。后续接入真实购买/下单闭环。' : 'Service recommendations generated (placeholder). Future work will integrate real purchase flow.');
          }}
        >
          {copy.btn}
        </button>

        <a href={`/${lang}/shop`} style={{ display: 'inline-block', marginTop: 12, fontSize: 13, textDecoration: 'none', color: '#111' }}>
          {copy.back}
        </a>
      </section>
    </ContentPageTemplate>
  );
}

'use client';
import React, { useMemo, useState } from 'react';
import type { Lang } from '../../../components/i18n/locale';
import { uiTheme } from '../../../components/marketing/theme';

export type ConsultationFormVariant = 'ai' | 'vip' | 'shop';

type ConsultationFormProps = {
  lang: Lang;
  variant: ConsultationFormVariant;
  onSuccess: () => void;
};

export default function ConsultationForm({ lang, variant, onSuccess }: ConsultationFormProps) {
  const copy = useMemo(() => {
    if (variant === 'ai') {
      return {
        step1: lang === 'zh' ? '选择偏好' : 'Choose preferences',
        q1: lang === 'zh' ? '你更关注哪类主题？' : 'Which topic do you care about most?',
        q2: lang === 'zh' ? '你的咨询时间范围？' : 'Your consultation time range?',
        step2: lang === 'zh' ? '联系方式（展示层）' : 'Contact info (display layer)',
        c1: lang === 'zh' ? '微信/邮箱（可选）' : 'WeChat/Email (optional)',
        c2: lang === 'zh' ? '是否需要 VIP 人工跟进？' : 'Do you want VIP human follow-up?',
        step3: lang === 'zh' ? '确认并完成' : 'Confirm & finish',
        disclaimer:
          lang === 'zh'
            ? '我已阅读并理解免责声明/隐私说明/服务边界（展示层）。'
            : 'I have read and understood the disclaimer/privacy notice/service boundary (display layer).',
        btn: lang === 'zh' ? '确认并预约成功 →' : 'Confirm & book success →',
      };
    }

    if (variant === 'vip') {
      return {
        step1: lang === 'zh' ? '沟通目标' : 'Your goals',
        q1: lang === 'zh' ? '你想解决的核心问题？' : 'What is your core question?',
        q2: lang === 'zh' ? '你希望的沟通形式？' : 'Preferred communication format?',
        step2: lang === 'zh' ? '时间与联系方式（展示层）' : 'Time & contact (display layer)',
        c1: lang === 'zh' ? '可接受的时间段（可选）' : 'Preferred time window (optional)',
        c2: lang === 'zh' ? '联系方式（可选）' : 'Contact info (optional)',
        step3: lang === 'zh' ? '确认并完成' : 'Confirm & finish',
        disclaimer:
          lang === 'zh'
            ? '我已阅读并理解免责声明/隐私说明/服务边界（展示层）。'
            : 'I have read and understood the disclaimer/privacy notice/service boundary (display layer).',
        btn: lang === 'zh' ? '确认并预约成功 →' : 'Confirm & book success →',
      };
    }

    // shop
    return {
      step1: lang === 'zh' ? '选择服务包' : 'Choose a bundle',
      q1: lang === 'zh' ? '你想了解哪类服务？' : 'Which service category?',
      q2: lang === 'zh' ? '你希望的投入强度？' : 'Preferred depth level?',
      step2: lang === 'zh' ? '确认（展示层）' : 'Confirm (display layer)',
      c1: lang === 'zh' ? '免责声明/隐私/边界已确认（展示层）' : 'I confirm disclaimer/privacy/boundary (display layer)',
      step3: lang === 'zh' ? '确认并完成' : 'Confirm & finish',
      disclaimer:
        lang === 'zh'
          ? '我已阅读免责声明/隐私说明/服务边界（展示层）。'
          : 'I have read the disclaimer/privacy notice/service boundary (display layer).',
      btn: lang === 'zh' ? '确认并预约成功 →' : 'Confirm & book success →',
    };
  }, [lang, variant]);

  const [agreed, setAgreed] = useState(true);

  // minimal errors/state (P2 step, conservative)
  const [errors, setErrors] = useState<Partial<Record<'q' | 'contactOrTime' | 'bundle', string>>>({});

  // minimal required inputs (shop) for controlled selects
  const [shopCategory, setShopCategory] = useState('');
  const [shopDepth, setShopDepth] = useState('');

  const validate = () => {
    // P2 minimal: shop only real checks (no other variants yet)
    if (variant !== 'shop') {
      setErrors({});
      return true;
    }

    const next: any = {};
    if (!shopCategory) next.q = 'shopCategory_required';
    if (!shopDepth) next.bundle = 'shopDepth_required';

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSuccess = () => {
    if (!agreed) return;
    if (!validate()) return;
    onSuccess();
  };

  return (
    <>
      <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step1}</h2>

      <div
        style={{
          marginTop: 12,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: 12,
        }}
      >
        {variant === 'shop' ? (
          <>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.q1}</div>
              <select
                value={shopCategory}
                onChange={(e) => setShopCategory(e.target.value)}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              >
                <option value="">{lang === 'zh' ? '请选择' : 'Select'}</option>
                <option value={lang === 'zh' ? 'AI 占卜展示' : 'AI fortune display'}>{lang === 'zh' ? 'AI 占卜展示' : 'AI fortune display'}</option>
                <option value={lang === 'zh' ? 'VIP 人工深度' : 'VIP human deep dive'}>{lang === 'zh' ? 'VIP 人工深度' : 'VIP human deep dive'}</option>
                <option value={lang === 'zh' ? '双语咨询引导' : 'Bilingual consultation guidance'}>{lang === 'zh' ? '双语咨询引导' : 'Bilingual consultation guidance'}</option>
              </select>
            </label>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.q2}</div>
              <select
                value={shopDepth}
                onChange={(e) => setShopDepth(e.target.value)}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              >
                <option value="">{lang === 'zh' ? '请选择' : 'Select'}</option>
                <option value={lang === 'zh' ? '标准' : 'Standard'}>{lang === 'zh' ? '标准' : 'Standard'}</option>
                <option value={lang === 'zh' ? '更深度' : 'More depth'}>{lang === 'zh' ? '更深度' : 'More depth'}</option>
              </select>
            </label>
          </>
        ) : (
          <>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.q1}</div>
              <input
                placeholder={lang === 'zh' ? '例如：我想解决的问题' : 'e.g. the question you want to solve'}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              />
            </label>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.q2}</div>
              <select
                defaultValue={lang === 'zh' ? '未来 1-3 个月' : 'Next 1-3 months'}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              >
                <option>{lang === 'zh' ? '未来 1-3 个月' : 'Next 1-3 months'}</option>
                <option>{lang === 'zh' ? '未来 3-6 个月' : 'Next 3-6 months'}</option>
                <option>{lang === 'zh' ? '未来 6-12 个月' : 'Next 6-12 months'}</option>
              </select>
            </label>
          </>
        )}
      </div>

      <section style={{ border: `1px solid ${uiTheme.border}`, borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step2}</h2>

        {variant === 'ai' ? (
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.c1}</div>
              <input
                placeholder={lang === 'zh' ? '例如：name@example.com' : 'e.g. name@example.com'}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              />
            </label>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.c2}</div>
              <select
                defaultValue={lang === 'zh' ? '不需要' : 'No'}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              >
                <option>{lang === 'zh' ? '需要 VIP 人工' : 'Yes, VIP human'}</option>
                <option>{lang === 'zh' ? '不需要' : 'No'}</option>
              </select>
            </label>
          </div>
        ) : variant === 'vip' ? (
          <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12 }}>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.c1}</div>
              <input
                placeholder={lang === 'zh' ? '例如：周末/晚上' : 'e.g. weekends / evenings'}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              />
            </label>
            <label style={{ display: 'block' }}>
              <div style={{ fontSize: 13, color: 'uiTheme.textMuted', marginBottom: 6 }}>{copy.c2}</div>
              <input
                placeholder={lang === 'zh' ? '例如：name@example.com' : 'e.g. name@example.com'}
                style={{ width: '100%', padding: 10, borderRadius: 12, border: '1px solid uiTheme.border' }}
              />
            </label>
          </div>
        ) : (
          <div style={{ marginTop: 12, fontSize: 13, color: 'uiTheme.textMuted', lineHeight: 1.7 }}>{copy.c1}</div>
        )}
      </section>

      <section style={{ border: `1px solid ${uiTheme.border}`, borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 18, margin: 0 }}>{copy.step3}</h2>
        <label style={{ display: 'flex', gap: 10, marginTop: 12, alignItems: 'flex-start' }}>
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
          <span style={{ fontSize: 13, color: 'uiTheme.textMuted', lineHeight: 1.7 }}>{copy.disclaimer}</span>
        </label>

        <button
          type="button"
          disabled={!agreed}
          style={{
            marginTop: 14,
            width: '100%',
            padding: '12px 16px',
            borderRadius: 14,
            border: '1px solid uiTheme.accent',
            background: agreed ? 'uiTheme.accent' : '#93c5fd',
            color: '#fff',
            fontWeight: 800,
            cursor: agreed ? 'pointer' : 'not-allowed',
          }}
          onClick={handleSuccess}
        >
          {copy.btn}
        </button>
      </section>
    </>
  );
}

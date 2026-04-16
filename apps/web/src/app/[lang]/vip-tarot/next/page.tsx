import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import { t } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';

export default function VipTarotNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <ContentPageTemplate
      lang={lang}
      title={lang === 'zh' ? 'VIP 人工下一步（占位页）' : 'VIP Human Next Step (Placeholder)'}
      lead={lang === 'zh' ? '这里将接入更深度沟通入口与信任确认流程。当前先提供明确转化去向。' : 'This is where a deeper communication entry and trust confirmation will be added. For now, we provide a clear conversion destination.'}
    >
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '下一步 CTA' : 'Next CTA'}</h2>
        <p style={{ marginTop: 10, color: '#444', lineHeight: 1.8 }}>
          {lang === 'zh'
            ? '完成免责声明与隐私确认后，我们将引导到后续体验（展示层）。'
            : 'After completing disclaimer and privacy confirmations, we’ll guide you to the next experience step (display layer).'}
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}/vip-tarot`}
            style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '返回 VIP 人工页' : 'Back to VIP Human'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

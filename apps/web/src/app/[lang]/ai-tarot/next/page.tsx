import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import { t } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';

export default function AiTarotNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <ContentPageTemplate
      lang={lang}
      title={lang === 'zh' ? 'AI 占卜下一步（占位页）' : 'AI Fortune Next Step (Placeholder)'}
      lead={lang === 'zh' ? '这里将接入主题选择与更完整的咨询流程。当前先保证转化路径可用。' : 'This is where theme selection and a fuller consultation flow will be added. For now we ensure a clear conversion path.'}
    >
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '下一步 CTA' : 'Next CTA'}</h2>
        <p style={{ marginTop: 10, color: '#444', lineHeight: 1.8 }}>
          {lang === 'zh'
            ? '确认你的偏好后，我们会引导到后续体验（展示层）。'
            : 'After confirming your preferences, we’ll guide you into the next experience step (display layer).'}
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}/ai-tarot`}
            style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '返回 AI 占卜页' : 'Back to AI Fortune'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

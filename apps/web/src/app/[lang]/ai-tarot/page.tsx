export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../components/i18n/locale';
import { t } from '../../../components/i18n/locale';
import ContentPageTemplate from '../../../components/marketing/templates/ContentPageTemplate';
import { uiTheme } from '../../../components/marketing/theme';

import LegalLinks from '../../../components/legal/LegalLinks';

export default function AiTarotPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <ContentPageTemplate lang={lang} title={t('aiPageTitle', lang)} lead={t('aiPageLead', lang)}>
      <LegalLinks lang={lang} />
      <section style={{ border: `1px solid ${uiTheme.border}`, borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? 'AI 占卜入口（展示层）' : 'AI Fortune Entry (Display Layer)'}</h2>
        <p style={{ marginTop: 10, color: 'uiTheme.textMuted', lineHeight: 1.8 }}>
          {lang === 'zh'
            ? '本页先交付高质量展示层与转化入口，后续接入主题选择与更完整的咨询闭环。'
            : 'This page focuses on a high-quality display layer and conversion entry; future work will add theme selection and a fuller flow.'}
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}/ai-tarot/next`}
            style={{ border: '1px solid uiTheme.accent', color: 'uiTheme.accent', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '下一步 →' : 'Next →'}
          </a>
          <a
            href={`/${lang}/vip-tarot`}
            style={{ border: `1px solid ${uiTheme.border}`, color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '升级到 VIP 人工 →' : 'Upgrade to VIP Human →'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}
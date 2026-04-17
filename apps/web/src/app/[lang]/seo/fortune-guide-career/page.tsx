export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import SeoMeta from '../../../../components/seo/SeoMeta';
import { type PageKey } from '../../../../components/seo/seoConfig';

export default function CareerSeoPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <>
      <SeoMeta lang={lang} page={'home' as PageKey} />
      <ContentPageTemplate
        lang={lang}
        title={lang === 'zh' ? '专题：事业/学业节奏与机会（SEO示例）' : 'Topic: Career/Study Timing & Opportunities (SEO example)'}
        lead={lang === 'zh' ? '把握节奏：以可执行建议为主，避免模糊承诺。' : 'Timing guidance with actionable suggestions; avoiding vague promises.'}
      >
        <LegalLinks lang={lang} />
        <section style={{ marginTop: 16 }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '内容结构' : 'Content structure'}</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
            <li>{lang === 'zh' ? '风险控制与合规表达' : 'Risk control & compliant wording'}</li>
            <li>{lang === 'zh' ? '沟通流程与用户信任' : 'Consultation flow & user trust'}</li>
            <li>{lang === 'zh' ? '选择 AI / VIP 的路线建议' : 'Route suggestions: AI / VIP'}</li>
          </ul>
        </section>
      </ContentPageTemplate>
    </>
  );
}

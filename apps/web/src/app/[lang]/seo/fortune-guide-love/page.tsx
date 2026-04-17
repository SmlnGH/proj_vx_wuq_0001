export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import SeoMeta from '../../../../components/seo/SeoMeta';
import { type PageKey } from '../../../../components/seo/seoConfig';

export default function LoveSeoPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <>
      <SeoMeta lang={lang} page={'home' as PageKey} />
      <ContentPageTemplate
        lang={lang}
        title={lang === 'zh' ? '专题：海外华人感情/婚恋指引（SEO示例）' : 'Topic: Love/Relationships Guidance (SEO example)'}
        lead={lang === 'zh' ? '结构化阅读框架：从现状判断到沟通边界表达。' : 'A structured reading framework: from current state to communication boundaries.'}
      >
        <LegalLinks lang={lang} />
        <section style={{ marginTop: 16 }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '建议阅读步骤' : 'Suggested reading steps'}</h2>
          <ol style={{ marginTop: 10, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
            <li>{lang === 'zh' ? '先澄清目标与边界' : 'Clarify goals and boundaries'}</li>
            <li>{lang === 'zh' ? '再选择 AI 或 VIP 人工入口' : 'Then choose AI or VIP human entry'}</li>
            <li>{lang === 'zh' ? '最后以展示层闭环完成体验' : 'Complete experience with display-layer guidance'}</li>
          </ol>
        </section>
      </ContentPageTemplate>
    </>
  );
}

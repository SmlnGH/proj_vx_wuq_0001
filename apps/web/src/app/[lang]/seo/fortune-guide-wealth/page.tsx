export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import SeoMeta from '../../../../components/seo/SeoMeta';
import { type PageKey } from '../../../../components/seo/seoConfig';

export default function WealthSeoPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <>
      <SeoMeta lang={lang} page={'home' as PageKey} />
      <ContentPageTemplate
        lang={lang}
        title={lang === 'zh' ? '专题：财运/机会的路径选择（SEO示例）' : 'Topic: Wealth/Opportunities Path (SEO example)'}
        lead={lang === 'zh' ? '把“选择与行动”变成可复用框架，支持后续引导闭环。' : 'Turn “choices and action” into a reusable framework for future guidance loops.'}
      >
        <LegalLinks lang={lang} />
        <section style={{ marginTop: 16 }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '快速要点' : 'Quick takeaways'}</h2>
          <ol style={{ marginTop: 10, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
            <li>{lang === 'zh' ? '先明确边界：不做超出承诺的表达' : 'Set boundaries: no over-promising'}</li>
            <li>{lang === 'zh' ? '再选择入口：AI 先试 / VIP 深入' : 'Choose entry: AI first / VIP deep dive'}</li>
            <li>{lang === 'zh' ? '最后以展示层闭环完成体验' : 'Finish with display-layer loop'}</li>
          </ol>
        </section>
      </ContentPageTemplate>
    </>
  );
}

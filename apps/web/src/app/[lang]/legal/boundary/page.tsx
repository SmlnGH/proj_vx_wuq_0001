import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import SeoMeta from '../../../../components/seo/SeoMeta';
import { type PageKey } from '../../../../components/seo/seoConfig';

export default function BoundaryPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <>
      <SeoMeta lang={lang} page={'home' as PageKey} />
      <ContentPageTemplate
        lang={lang}
        title={lang === 'zh' ? '服务边界说明（独立页面）' : 'Service Boundary (Independent Page)'}
        lead={lang === 'zh' ? '服务边界说明：当前以展示层表达为主，不做超出范围的承诺。' : 'Service boundary: currently display-layer oriented; no promises beyond scope.'}
      >
        <LegalLinks lang={lang} />
        <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
            <li>{lang === 'zh' ? '以用户体验与引导为中心' : 'User experience and guidance first'}</li>
            <li>{lang === 'zh' ? '不提供超出展示层的保证' : 'No guarantees beyond display layer'}</li>
            <li>{lang === 'zh' ? '如有后续真实流程，将在此更新' : 'If real flows are added later, this will be updated'}</li>
          </ul>
        </section>
      </ContentPageTemplate>
    </>
  );
}

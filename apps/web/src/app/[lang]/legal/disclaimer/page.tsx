export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import SeoMeta from '../../../../components/seo/SeoMeta';
import { type PageKey } from '../../../../components/seo/seoConfig';

export default function DisclaimerPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <>
      <SeoMeta lang={lang} page={'home' as PageKey} />
      <ContentPageTemplate
        lang={lang}
        title={lang === 'zh' ? '服务免责声明（独立页面）' : 'Service Disclaimer (Independent Page)'}
        lead={lang === 'zh' ? '展示层免责声明：不构成承诺或保证；体验为导向，边界清晰。' : 'Display-layer disclaimer: does not constitute guarantees or commitments; experience-oriented with clear boundaries.'}
      >
        <LegalLinks lang={lang} />
        <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
            <li>{lang === 'zh' ? '内容用于体验与建议，不替代专业意见' : 'Content is for experience and suggestions; not a substitute for professional advice'}</li>
            <li>{lang === 'zh' ? '不做超出服务边界的承诺' : 'No promises beyond service boundaries'}</li>
            <li>{lang === 'zh' ? '后续若接入更多服务，将更新展示层规则' : 'If more services are added later, display-layer rules will be updated'}</li>
          </ul>
        </section>
      </ContentPageTemplate>
    </>
  );
}

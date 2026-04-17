export const runtime = 'edge';


import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import SeoMeta from '../../../../components/seo/SeoMeta';
import { type PageKey } from '../../../../components/seo/seoConfig';

export default function PrivacyPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <>
      <SeoMeta lang={lang} page={'home' as PageKey} />
      <ContentPageTemplate
        lang={lang}
        title={lang === 'zh' ? '隐私说明（独立页面）' : 'Privacy Notice (Independent Page)'}
        lead={lang === 'zh' ? '展示层隐私说明：用于提供体验与页面内容呈现，不做超出范围的处理。' : 'Display-layer privacy notice: used to provide experience and content display, without processing beyond scope.'}
      >
        <LegalLinks lang={lang} />
        <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
          <ul style={{ margin: 0, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
            <li>{lang === 'zh' ? '我们仅呈现必要信息用于体验' : 'We show only necessary information for the experience'}</li>
            <li>{lang === 'zh' ? '不做超出展示层的默认采集' : 'No default collection beyond display-layer needs'}</li>
            <li>{lang === 'zh' ? '后续若接入真实数据流，将在此更新告知' : 'If real data flows are added later, this page will be updated'}</li>
          </ul>
        </section>
      </ContentPageTemplate>
    </>
  );
}

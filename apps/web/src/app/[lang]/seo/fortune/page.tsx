import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import { t } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import SeoMeta from '../../../../components/seo/SeoMeta';
import { type PageKey, getSeo } from '../../../../components/seo/seoConfig';

export default function FortuneSeoPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  // For this slug we treat it as a home-like SEO base, keeping it extensible.
  const seo = getSeo(lang, 'home');
  return (
    <>
      <SeoMeta lang={lang} page={'home' as PageKey} />
      <ContentPageTemplate
        lang={lang}
        title={lang === 'zh' ? '专题示例：海外华人高端占卜指南' : 'SEO Example Topic: Premium Fortune Guide for Overseas Chinese'}
        lead={lang === 'zh' ? '一个可持续扩展的 SEO 专题页面示例：结构清晰、可复用模板、可继续补充内容。' : 'A sustainable, extensible SEO topic example: clear structure, reusable template, ready for future content.'}
      >
        <LegalLinks lang={lang} />
        <section style={{ marginTop: 16 }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '你可以从这里开始' : 'Start Here'}</h2>
          <ul style={{ marginTop: 10, paddingLeft: 18, color: '#333', lineHeight: 1.8 }}>
            <li>{lang === 'zh' ? '确认你的需求与沟通偏好' : 'Clarify your needs and communication preferences'}</li>
            <li>{lang === 'zh' ? '阅读免责声明与隐私说明' : 'Review disclaimer and privacy notices'}</li>
            <li>{lang === 'zh' ? '选择 AI 或 VIP 人工入口' : 'Choose AI or VIP human entry'}</li>
          </ul>
        </section>
      </ContentPageTemplate>
    </>
  );
}

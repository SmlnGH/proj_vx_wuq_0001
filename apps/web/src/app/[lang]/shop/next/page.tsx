import React from 'react';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';

export default function ShopNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  return (
    <ContentPageTemplate
      lang={lang}
      title={lang === 'zh' ? '商城下一步（占位页）' : 'Shop Next Step (Placeholder)'}
      lead={lang === 'zh' ? '这里将接入具体商品列表与购买流程（本轮展示层先行）。' : 'Here we’ll add concrete product listings and purchase flow (display layer first for this round).'}
    >
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <h2 style={{ fontSize: 20, margin: 0 }}>{lang === 'zh' ? '下一步 CTA' : 'Next CTA'}</h2>
        <p style={{ marginTop: 10, color: '#444', lineHeight: 1.8 }}>
          {lang === 'zh' ? '当前提供跳转路径占位，确保入口页具备清晰转化去向。' : 'For now we provide a jump destination placeholder to ensure clear conversion paths.'}
        </p>
        <div style={{ marginTop: 12, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href={`/${lang}/shop`}
            style={{ border: '1px solid #e5e5e5', color: '#111', padding: '10px 14px', borderRadius: 999, textDecoration: 'none' }}
          >
            {lang === 'zh' ? '返回 商城页' : 'Back to Shop'}
          </a>
        </div>
      </section>
    </ContentPageTemplate>
  );
}

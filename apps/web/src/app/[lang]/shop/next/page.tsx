

"use client";

export const runtime = 'edge';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import { uiTheme } from '../../../../components/marketing/theme';
import LegalLinks from '../../../../components/legal/LegalLinks';
import ConsultationForm from '../../components/ConsultationForm';

export default function ShopNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const router = useRouter();
  const title = lang === 'zh' ? '商城·选择服务包' : 'Shop · Choose a service bundle';
  const lead = lang === 'zh' ? '选择你感兴趣的方向（展示层表单），一键进入成功反馈页。' : 'Choose the direction you’re interested in (display-layer form), then go to the success feedback page.';

  return (
    <ContentPageTemplate lang={lang} title={title} lead={lead}>
      <LegalLinks lang={lang} />
      <section style={{ border: `1px solid ${uiTheme.border}`, borderRadius: 16, padding: 18, marginTop: 16 }}>
        <ConsultationForm
          lang={lang}
          variant="shop"
          onSuccess={() => router.push(`/${lang}/next/booking-success`)}
        />
      </section>
    </ContentPageTemplate>
  );
}

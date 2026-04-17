

"use client";

export const runtime = 'edge';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import ConsultationForm from '../../components/ConsultationForm';

export default function ShopNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const router = useRouter();
  const title = lang === 'zh' ? '商城·选择服务包' : 'Shop · Choose a service bundle';
  const lead = lang === 'zh' ? '选择你要探索的方向并留下信息，我们确认后继续下一步' : 'Choose the direction you’re interested in and leave your details—after we confirm, we’ll continue to the next step';

  return (
    <ContentPageTemplate lang={lang} title={title} lead={lead}>
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <ConsultationForm
          lang={lang}
          variant="shop"
          onSuccess={() => router.push(`/${lang}/next/booking-success`)}
        />
      </section>
    </ContentPageTemplate>
  );
}

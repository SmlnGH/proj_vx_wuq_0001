

"use client";

export const runtime = 'edge';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import LegalLinks from '../../../../components/legal/LegalLinks';
import ConsultationForm from '../../components/ConsultationForm';

export default function VipTarotNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const router = useRouter();
  const title = lang === 'zh' ? 'VIP 人工·预约沟通' : 'VIP Human · Book a consultation';
  const lead = lang === 'zh' ? '填写你的沟通目标与联系方式，我们确认后安排下一步' : 'Tell us your communication goals and contact details—after we confirm, we’ll arrange the next step';

  return (
    <ContentPageTemplate lang={lang} title={title} lead={lead}>
      <LegalLinks lang={lang} />
      <section style={{ border: '1px solid #e5e5e5', borderRadius: 16, padding: 18, marginTop: 16 }}>
        <ConsultationForm
          lang={lang}
          variant="vip"
          onSuccess={() => router.push(`/${lang}/next/booking-success`)}
        />
      </section>
    </ContentPageTemplate>
  );
}

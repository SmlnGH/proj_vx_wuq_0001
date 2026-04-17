

"use client";

export const runtime = 'edge';

import React from 'react';
import { useRouter } from 'next/navigation';
import type { Lang } from '../../../../components/i18n/locale';
import ContentPageTemplate from '../../../../components/marketing/templates/ContentPageTemplate';
import { uiTheme } from '../../../../components/marketing/theme';
import LegalLinks from '../../../../components/legal/LegalLinks';
import ConsultationForm from '../../components/ConsultationForm';

export default function AiTarotNextPage({ params }: { params: { lang: Lang } }) {
  const lang = (params.lang ?? 'zh') as Lang;
  const router = useRouter();
  const title = lang === 'zh' ? 'AI 占卜·提交你的需求' : 'AI Fortune · Submit your request';
  const lead = lang === 'zh' ? '填写以下信息（展示层表单），一键进入成功反馈页。' : 'Fill in the details (display-layer form), then go to the success feedback page.';

  return (
    <ContentPageTemplate lang={lang} title={title} lead={lead}>
      <LegalLinks lang={lang} />
      <section style={{ border: `1px solid ${uiTheme.border}`, borderRadius: 16, padding: 18, marginTop: 16 }}>
        <ConsultationForm
          lang={lang}
          variant="ai"
          onSuccess={() => router.push(`/${lang}/next/booking-success`)}
        />
      </section>
    </ContentPageTemplate>
  );
}

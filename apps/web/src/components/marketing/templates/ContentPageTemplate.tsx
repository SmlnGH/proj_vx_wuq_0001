import React from 'react';
import type { Lang } from '../../i18n/locale';
import { t } from '../../i18n/locale';

export default function ContentPageTemplate({
  lang,
  title,
  lead,
  children,
}: {
  lang: Lang;
  title: string;
  lead: string;
  children?: React.ReactNode;
}) {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: 24, fontFamily: 'system-ui' }}>
      <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 10 }}>{title}</h1>
      <p style={{ color: '#444', lineHeight: 1.8, marginBottom: 18 }}>{lead}</p>
      {children}
      <div style={{ marginTop: 18, color: '#666', fontSize: 13 }}>{t('seoTagline', lang)}</div>
    </main>
  );
}

import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';
import { SectionDividerOrnament } from './icons/BrandMarks';

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{ marginTop: 28, padding: '18px 0 30px', color: '#6b7280', fontSize: 13 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
        <div style={{ color: '#2563eb', opacity: 0.7 }}>
          <SectionDividerOrnament size={18} />
        </div>
        <div>{t('footerRights', lang)}</div>
      </div>
    </footer>
  );
}

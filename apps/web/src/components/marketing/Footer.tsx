import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer style={{ marginTop: 28, padding: '18px 0 30px', color: '#666', fontSize: 13 }}>
      <div>{t('footerRights', lang)}</div>
    </footer>
  );
}

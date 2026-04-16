import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';
import LanguageSwitcher from '../i18n/LanguageSwitcher';

export default function HeroSection({ lang }: { lang: Lang }) {
  return (
    <section style={{ padding: '24px 0 10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: 34, lineHeight: 1.1, margin: 0 }}>{t('heroTitle', lang)}</h1>
          <p style={{ marginTop: 10, color: '#444', fontSize: 15, lineHeight: 1.7 }}>{t('heroSubtitle', lang)}</p>
        </div>
        <LanguageSwitcher lang={lang} />
      </div>
    </section>
  );
}

import React from 'react';
import type { Lang } from '../components/i18n/locale';
import { t } from '../components/i18n/locale';
import HeroSection from '../components/marketing/HeroSection';
import BrandValuesSection from '../components/marketing/BrandValuesSection';
import EntryCardsSection from '../components/marketing/EntryCardsSection';
import TrustProcessSection from '../components/marketing/TrustProcessSection';
import FaqSection from '../components/marketing/FaqSection';
import Footer from '../components/marketing/Footer';
import LegalLinks from '../components/legal/LegalLinks';

const lang: Lang = 'zh';

export default function HomePage() {
  return (
    <div style={{ background: '#fff', color: '#111', fontFamily: 'system-ui' }}>
      <header style={{ maxWidth: 980, margin: '0 auto', padding: '18px 24px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <div style={{ fontWeight: 800 }}>{t('siteName', lang)}</div>
          <nav style={{ display: 'flex', gap: 14, fontSize: 13, color: '#444' }}>
            <a href="/" style={{ textDecoration: 'none', color: '#444' }}>{t('navHome', lang)}</a>
            <a href={`/${lang}/ai-tarot`} style={{ textDecoration: 'none', color: '#444' }}>{t('navAi', lang)}</a>
            <a href={`/${lang}/vip-tarot`} style={{ textDecoration: 'none', color: '#444' }}>{t('navVip', lang)}</a>
            <a href={`/${lang}/shop`} style={{ textDecoration: 'none', color: '#444' }}>{t('navShop', lang)}</a>
          </nav>
        </div>
      </header>

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 24px' }}>
        <HeroSection lang={lang} />
        <BrandValuesSection lang={lang} />
        <EntryCardsSection lang={lang} />
        <TrustProcessSection lang={lang} />
        <LegalLinks lang={lang} />
        <FaqSection lang={lang} />
        <Footer lang={lang} />
      </div>
    </div>
  );
}

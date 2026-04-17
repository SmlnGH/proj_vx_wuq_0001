import React from 'react';
import { t } from '../i18n/locale';
import type { Lang } from '../i18n/locale';
import LanguageSwitcher from '../i18n/LanguageSwitcher';
import { HeroBackgroundMark, SectionDividerOrnament } from './icons/BrandMarks';

export default function HeroSection({ lang }: { lang: Lang }) {
  return (
    <section
      style={{
        padding: '34px 0 18px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: '0 -120px auto -120px',
        top: -40,
        color: '#0ea5e9',
        pointerEvents: 'none',
        opacity: 0.9,
      }}>
        <HeroBackgroundMark />
      </div>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: 640 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#2563eb' }}>
            <SectionDividerOrnament size={22} />
            <div style={{ fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase', opacity: 0.85 }}>
              {lang === 'zh' ? '高端咨询 · 可信交付' : 'Premium Guidance · Trust-first'}
            </div>
          </div>

          <h1 style={{ fontSize: 40, lineHeight: 1.05, margin: '14px 0 0', letterSpacing: -0.2 }}>{t('heroTitle', lang)}</h1>
          <p style={{ marginTop: 12, color: '#4b5563', fontSize: 15, lineHeight: 1.8, maxWidth: 540 }}>
            {t('heroSubtitle', lang)}
          </p>

          <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href={`/${lang}/ai-tarot/next`}
              style={{
                border: '1px solid rgba(37,99,235,0.35)',
                background: 'rgba(37,99,235,0.06)',
                color: '#1d4ed8',
                padding: '10px 14px',
                borderRadius: 999,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              {lang === 'zh' ? '预约咨询 →' : 'Book a consultation →'}
            </a>
            <a
              href={`/${lang}/shop`}
              style={{
                border: '1px solid #e5e7eb',
                background: '#fff',
                color: '#111827',
                padding: '10px 14px',
                borderRadius: 999,
                textDecoration: 'none',
                fontWeight: 650,
                fontSize: 14,
              }}
            >
              {lang === 'zh' ? '浏览精选服务 →' : 'Explore curated services →'}
            </a>
          </div>
        </div>

        <div>
          <LanguageSwitcher lang={lang} />
          <div style={{ marginTop: 10, fontSize: 12, color: '#6b7280', textAlign: 'right' }}>
            {lang === 'zh' ? '简洁流程 · 隐私优先' : 'Simple flow · Privacy-first'}
          </div>
        </div>
      </div>
    </section>
  );
}

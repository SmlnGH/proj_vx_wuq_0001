'use client';

import React from 'react';
import type { Lang } from './locale';

export default function LanguageSwitcher({ lang }: { lang: Lang }) {
  const other: Lang = lang === 'zh' ? 'en' : 'zh';
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
      <span style={{ fontSize: 12, opacity: 0.75 }}>Language</span>
      <a
        href={`/${other}`}
        style={{
          fontSize: 12,
          padding: '6px 10px',
          borderRadius: 999,
          border: '1px solid #e5e5e5',
          textDecoration: 'none',
        }}
      >
        {other === 'zh' ? '中文' : 'EN'}
      </a>
    </div>
  );
}

import React from 'react';
import Head from 'next/head';
import type { Lang } from '../i18n/locale';
import { getSeo, type PageKey } from './seoConfig';

export default function SeoMeta({ lang, page }: { lang: Lang; page: PageKey }) {
  const seo = getSeo(lang, page);
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}

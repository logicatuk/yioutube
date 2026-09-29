import { Metadata } from 'next';
import { SITE_CONFIG } from './config';

const APP_URL = process.env.APP_URL || 'https://tvyoutube.pro';

export function constructMetadata({
  title,
  description,
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
  const fullDescription = description || SITE_CONFIG.description;
  const canonicalUrl = canonical
    ? `${APP_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : APP_URL;

  return {
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${APP_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImage.startsWith('http') ? ogImage : `${APP_URL}${ogImage}`],
    },
  };
}

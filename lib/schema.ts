import { SITE_CONFIG } from './config';
import { Movie, Series, FAQItem, GuideItem } from './types';

const APP_URL = process.env.APP_URL || 'https://tvyoutube.pro';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: APP_URL,
    logo: `${APP_URL}/logo.png`,
    description: SITE_CONFIG.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contactEmail,
      contactType: 'Customer Support',
      availableLanguage: ['English', 'French', 'Spanish', 'German'],
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: APP_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${APP_URL}/movies?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${SITE_CONFIG.name} Premium Subscription`,
    description: SITE_CONFIG.description,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '14.99',
      highPrice: '89.99',
      offerCount: '4',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function getMovieSchema(movie: Movie) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Movie',
    name: movie.title,
    description: movie.overview,
    image: movie.posterPath,
    datePublished: movie.releaseDate,
    director: movie.director
      ? {
          '@type': 'Person',
          name: movie.director,
        }
      : undefined,
    actor: movie.cast.map((actor) => ({
      '@type': 'Person',
      name: actor.name,
    })),
    genre: movie.genres,
    duration: `PT${movie.runtime}M`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: movie.rating.toString(),
      bestRating: '10',
      ratingCount: (movie.voteCount || 500).toString(),
    },
  };
}

export function getSeriesSchema(series: Series) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TVSeries',
    name: series.title,
    description: series.overview,
    image: series.posterPath,
    startDate: series.firstAirDate,
    numberOfSeasons: series.seasonsCount,
    numberOfEpisodes: series.episodesCount,
    creator: series.creator
      ? {
          '@type': 'Person',
          name: series.creator,
        }
      : undefined,
    actor: series.cast.map((actor) => ({
      '@type': 'Person',
      name: actor.name,
    })),
    genre: series.genres,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: series.rating.toString(),
      bestRating: '10',
      ratingCount: '1200',
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${APP_URL}${item.url}`,
    })),
  };
}

export function getFaqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getHowToSchema(guide: GuideItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.description,
    totalTime: `PT${guide.durationMinutes}M`,
    supply: guide.requirements.map((req) => ({
      '@type': 'HowToSupply',
      name: req,
    })),
    step: guide.steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.title,
      text: s.description,
      position: s.stepNumber,
    })),
  };
}

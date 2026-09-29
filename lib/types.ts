export interface Movie {
  id: string | number;
  title: string;
  slug: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  releaseDate: string;
  year: number;
  rating: number; // 0 to 10
  voteCount: number;
  genres: string[];
  runtime: number; // minutes
  certification: string; // PG-13, R, etc.
  director?: string;
  cast: CastMember[];
  trailerYoutubeKey?: string;
  similarSlugs?: string[];
  tagLine?: string;
  language?: string;
}

export interface Series {
  id: string | number;
  title: string;
  slug: string;
  overview: string;
  posterPath: string;
  backdropPath: string;
  firstAirDate: string;
  year: number;
  rating: number;
  seasonsCount: number;
  episodesCount: number;
  genres: string[];
  certification: string;
  creator?: string;
  cast: CastMember[];
  trailerYoutubeKey?: string;
  similarSlugs?: string[];
  status?: string;
  network?: string;
}

export interface CastMember {
  id: string | number;
  name: string;
  character: string;
  profilePath: string;
}

export interface LiveChannel {
  id: string;
  name: string;
  slug: string;
  number: number;
  logo: string;
  category: 'News' | 'Sports' | 'Entertainment' | 'Kids' | 'Movies' | 'Documentary' | 'Music' | 'International';
  country: string;
  countryCode: string;
  language: string;
  quality: '4K' | 'FHD' | 'HD';
  epgNow: {
    title: string;
    time: string;
    progress: number;
  };
  epgNext: {
    title: string;
    time: string;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  periodMonths: number;
  billingPeriodLabel: string;
  priceUsd: number;
  priceEur: number;
  priceGbp: number;
  devicesCount: number;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  ctaLabel: string;
  checkoutUrl?: string;
}

export interface GuideItem {
  slug: string;
  title: string;
  shortTitle: string;
  device: string;
  category: string;
  difficulty: 'Easy' | 'Quick' | 'Intermediate';
  durationMinutes: number;
  requirements: string[];
  description: string;
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    tip?: string;
    codeSnippet?: string;
  }[];
  troubleshooting: {
    issue: string;
    solution: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Subscriptions' | 'Devices' | 'Installation' | 'Payments' | 'Troubleshooting' | 'Resellers';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export interface SearchResultItem {
  id: string | number;
  title: string;
  slug: string;
  type: 'movie' | 'series' | 'channel';
  year?: number;
  category?: string;
  rating?: number;
  image: string;
  url: string;
}

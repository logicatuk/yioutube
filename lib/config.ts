import { PricingPlan } from './types';

export const SITE_CONFIG = {
  name: 'TVYouTube.pro',
  legalName: 'TVYouTube.pro Media Services Ltd.',
  tagline: 'Premium Live TV & Streaming, Made Simple',
  description:
    'Enjoy premium live TV, latest blockbuster movies, and top-rated series on your favorite compatible devices with flexible subscription plans and instant setup.',
  url: process.env.APP_URL || 'https://tvyoutube.pro',
  contactEmail: 'support@tvyoutube.pro',
  salesEmail: 'resellers@tvyoutube.pro',
  businessHours: '24/7 Global Technical Desk & Automated Provisioning',
  averageActivationTime: '5 – 15 Minutes',
  supportedDevices: [
    { name: 'Amazon Fire TV / Stick', icon: 'Tv', popularity: 'Most Popular' },
    { name: 'Android TV & Google TV', icon: 'Smartphone', popularity: 'High' },
    { name: 'Apple TV (tvOS) & iOS', icon: 'Apple', popularity: 'High' },
    { name: 'Samsung & LG Smart TVs', icon: 'MonitorPlay', popularity: 'High' },
    { name: 'Windows & macOS', icon: 'Laptop', popularity: 'Medium' },
    { name: 'MAG & Formuler Boxes', icon: 'HardDrive', popularity: 'Specialized' },
  ],
  supportedPlayers: [
    { name: 'IBO Player', status: 'Official Recommended Partner', tier: 'Top Tier' },
    { name: 'TiviMate IPTV', status: 'Fully Supported', tier: 'Top Tier' },
    { name: 'IPTV Smarters Pro', status: 'Fully Supported', tier: 'Popular' },
    { name: 'XCIPTV Player', status: 'Fully Supported', tier: 'Popular' },
    { name: 'GSE Smart IPTV', status: 'Supported', tier: 'Legacy' },
  ],
  tmdbAttribution:
    'This product uses the TMDB API but is not endorsed or certified by TMDB. Film and television metadata and imagery are provided by The Movie Database.',
  guarantees: [
    {
      title: 'Rapid Automated Activation',
      desc: 'Get your M3U playlist & Xtream Codes credentials via email within 5 to 15 minutes of checkout.',
    },
    {
      title: 'Broad Device Compatibility',
      desc: 'Stream effortlessly across Firestick, Android TV, Apple TV, Smart TVs, and PC without extra hardware.',
    },
    {
      title: 'Anti-Freeze Technology',
      desc: 'Robust high-bandwidth content delivery network with multi-server failover for smooth streaming.',
    },
    {
      title: '24/7 Dedicated Support',
      desc: 'Our real technical support engineers are available day and night to assist with setup and inquiries.',
    },
  ],
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-1m',
    name: '1 Month',
    periodMonths: 1,
    billingPeriodLabel: 'per month',
    priceUsd: 14.99,
    priceEur: 13.99,
    priceGbp: 11.99,
    devicesCount: 1,
    isPopular: false,
    badge: 'Flexible Access',
    features: [
      'Full Live TV Channel Lineup',
      'Extensive VOD Movies & Series Catalog',
      '4K, FHD & HD Stream Quality',
      'Electronic Program Guide (EPG)',
      '1 Concurrent Connection',
      '7-Day Catch-up TV (Selected Channels)',
      'Fast 15-Minute Activation',
      '24/7 Customer Support',
    ],
    ctaLabel: 'Get 1 Month Plan',
  },
  {
    id: 'plan-3m',
    name: '3 Months',
    periodMonths: 3,
    billingPeriodLabel: 'billed quarterly',
    priceUsd: 34.99,
    priceEur: 32.99,
    priceGbp: 28.99,
    devicesCount: 1,
    isPopular: false,
    badge: 'Short-Term Value',
    features: [
      'All 1-Month Plan Features',
      'Save 22% over Monthly Plan',
      'Full 4K / UHD Available Streams',
      'Fast Anti-Freeze Load Times',
      '1 Concurrent Connection (Multi-room ready)',
      'M3U Playlist & Xtream Codes API',
      'Fast Activation & Full Setup Guides',
      'Priority Email Support',
    ],
    ctaLabel: 'Get 3 Months Plan',
  },
  {
    id: 'plan-6m',
    name: '6 Months',
    periodMonths: 6,
    billingPeriodLabel: 'billed biannually',
    priceUsd: 59.99,
    priceEur: 54.99,
    priceGbp: 48.99,
    devicesCount: 2,
    isPopular: false,
    badge: 'Save 33%',
    features: [
      'All 3-Month Plan Features',
      '2 Simultaneous Device Connections',
      'Multi-Room Streaming Support',
      'Complete Live TV + VOD Archive',
      'Real-time Dynamic EPG Guide',
      'Zero Throttling Server Nodes',
      'Express VIP Provisioning',
      'Priority 24/7 Live Desk Support',
    ],
    ctaLabel: 'Get 6 Months Plan',
  },
  {
    id: 'plan-12m',
    name: '12 Months',
    periodMonths: 12,
    billingPeriodLabel: 'billed annually',
    priceUsd: 89.99,
    priceEur: 82.99,
    priceGbp: 74.99,
    devicesCount: 2,
    isPopular: true,
    badge: 'Best Long-Term Value',
    features: [
      'All 6-Month Plan Features',
      'Save 50% Compared to Monthly',
      '2 Simultaneous Device Connections',
      'Premium 4K HDR & Dolby Audio Streams',
      'Dedicated High-Bandwidth Node',
      'Full Free Player Setup Assistance',
      'Free Playlist Migration & Updates',
      'VIP Priority Support & Instant Activation',
    ],
    ctaLabel: 'Get 12 Months Plan',
  },
];

export const COMPARISON_FEATURES = [
  { feature: 'Live TV Channels', m1: 'Included', m3: 'Included', m6: 'Included', m12: 'Included' },
  { feature: 'VOD Movies & TV Series', m1: 'Included', m3: 'Included', m6: 'Included', m12: 'Included' },
  { feature: 'Stream Quality (HD & FHD)', m1: 'Included', m3: 'Included', m6: 'Included', m12: 'Included' },
  { feature: 'True 4K UHD Streams', m1: 'Selected', m3: 'Included', m6: 'Included', m12: 'Included' },
  { feature: 'Simultaneous Devices', m1: '1 Device', m3: '1 Device', m6: '2 Devices', m12: '2 Devices' },
  { feature: 'Electronic Program Guide (EPG)', m1: 'Standard', m3: 'Real-time', m6: 'Real-time', m12: 'Real-time' },
  { feature: 'Catch-up TV', m1: '3 Days', m3: '7 Days', m6: '7 Days', m12: '14 Days' },
  { feature: 'Anti-Freeze Technology', m1: 'Standard', m3: 'Enhanced', m6: 'High-speed', m12: 'Dedicated Tier' },
  { feature: 'Setup Assistance', m1: 'Guides', m3: 'Guides + Email', m6: 'Priority Email', m12: 'VIP 1-on-1 Help' },
  { feature: 'Activation Time', m1: '< 15 mins', m3: '< 15 mins', m6: '< 10 mins', m12: 'Instant (< 5 mins)' },
];

export const TESTIMONIALS = [
  {
    name: 'David K.',
    country: 'United Kingdom',
    rating: 5,
    date: 'September 2026',
    comment:
      'Setup on IBO Player on my Samsung TV was completed in under 10 minutes following their tutorial. Crystal clear sports and zero buffering during peak weekend games.',
  },
  {
    name: 'Marc Lefebvre',
    country: 'Canada',
    rating: 5,
    date: 'August 2026',
    comment:
      'The movie library is updated constantly and the 4K stream quality looks brilliant on Apple TV 4K. By far the cleanest streaming experience I have tested.',
  },
  {
    name: 'Liam S.',
    country: 'Australia',
    rating: 5,
    date: 'September 2026',
    comment:
      'Great customer support. I had an issue locating my device MAC address on Fire TV Stick and their help desk resolved it immediately. Highly recommend the 12-month tier.',
  },
];

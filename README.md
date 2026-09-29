# TVYouTube.pro — Premium IPTV & Streaming Subscription Platform

A production-quality, modern, mobile-first IPTV subscription website built with **Next.js 15+ App Router**, **TypeScript**, and **Tailwind CSS**.

Designed with the aesthetic of premium streaming platforms (Netflix, HBO Max, Apple TV+) combined with high-converting SaaS conversion funnels, strong technical SEO, automated M3U/Xtream Codes credentials generation, and step-by-step device installation guides.

---

## Key Features

- **Cinematic Dark Theme**: Crafted with custom streaming color hierarchy (`#070B12`, `#0D131D`, `#111925`, `#E50914`, `#FFB800`).
- **Technical SEO Built-In**:
  - Dynamic OpenGraph and Twitter/X metadata cards.
  - Canonical URL resolution.
  - JSON-LD Structured Data: `Organization`, `WebSite`, `Product`/`AggregateOffer`, `Movie`, `TVSeries`, `HowTo`, `FAQPage`, and `BreadcrumbList`.
  - Auto-generated XML Sitemap (`/sitemap.xml`) and search engine crawler directives (`/robots.txt`).
- **Live TV Guide**:
  - Over 16+ curated high-definition sports, news, and entertainment feeds with real-time EPG program schedules, progress bars, and quality badges (4K UHD, 1080p FHD, 720p HD).
  - Instant filtering by Category, Country, Quality, and Search query.
- **Movies & TV Series Discovery**:
  - SEO-friendly URL routes (`/movies/[slug]`, `/series/[slug]`) with 2:3 card aspect ratios, hover previews, cast carousels, official YouTube trailers, and similar titles.
  - Full TMDB API service with local curated fallbacks.
- **Interactive Checkout & Activation Flow**:
  - Currency switcher (USD $, EUR €, GBP £).
  - 1, 3, 6, and 12-Month tiers with full specification comparison table.
  - Instant simulated checkout modal with device selector and real-time M3U/Xtream Codes credentials provisioning.
- **Device Installation Guides**:
  - Dedicated `/installation-guides/ibo-player` guide featuring device MAC and Key walkthroughs, playlist upload instructions, and troubleshooting.
  - Guides for Amazon Fire TV Stick, Android TV / Google TV, Samsung & LG Smart TVs, and Apple TV 4K.
- **Reseller Program**:
  - Wholesale credit tiers, margin overview, and partner application form.
- **Mobile Bottom Navigation**:
  - Sticky, touch-friendly mobile bottom bar (Home, Live TV, Movies, Series, Pricing).

---

## 1. How to Install the Project

Clone or open the repository in your terminal:

```bash
# Install dependencies
npm install

# Run development server (runs on port 3000)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. How to Configure TMDB (The Movie Database)

Movie and TV series metadata, trailers, backdrops, and cast information can be queried dynamically from The Movie Database (TMDB).

1. Sign up for a free TMDB account at [themoviedb.org](https://www.themoviedb.org/).
2. Request an API key in **Settings > API**.
3. Create or edit your `.env.local` file:

```env
TMDB_API_KEY="your_actual_tmdb_api_key_here"
```

*Note: If no TMDB key is provided, the platform automatically serves a rich, high-resolution curated catalog of blockbuster movies, critically acclaimed series, and official YouTube trailers without any broken images or downtime.*

---

## 3. How to Configure Pricing

All pricing plans and currency rates are centralized in `/lib/config.ts`.

To adjust plans or prices:
1. Open `/lib/config.ts`.
2. Edit `PRICING_PLANS`:

```typescript
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
    features: [ ... ],
    ctaLabel: 'Get 1 Month Plan',
  },
  // ... other plans
];
```

---

## 4. How to Configure Payment Links

To link plans directly to external payment gateways (such as Stripe Checkout, PayPal, Whop, or Sellix):

1. In `/lib/config.ts`, add the checkout link to any plan object:
   ```typescript
   checkoutUrl: 'https://buy.stripe.com/your_plan_link_here'
   ```
2. In `/components/CheckoutModal.tsx`, you can redirect to `plan.checkoutUrl` when the user submits their email.

---

## 5. How to Add Installation Guides

To add a new player or device guide:
1. Open `/lib/guides.ts`.
2. Add a new `GuideItem` object with your slug (e.g. `tivimate`), requirements, numbered steps, troubleshooting tips, and FAQs.
3. The dynamic route `/installation-guides/[slug]` and `/sitemap.xml` will automatically register and render the new guide with full `HowTo` Schema.org structured data.

---

## 6. How to Deploy

To create an optimized production build:

```bash
npm run build
npm run start
```

For containerized cloud deployment (Cloud Run, Vercel, Docker):
- The project output is configured for standalone Next.js deployment.
- Environment variable `APP_URL` should be set to your production domain (e.g. `https://tvyoutube.pro`).

---

## 7. How to Configure SEO & Brand Metadata

1. Open `/lib/config.ts` to adjust:
   - `SITE_CONFIG.name`
   - `SITE_CONFIG.tagline`
   - `SITE_CONFIG.description`
   - `SITE_CONFIG.url`
2. Title templates and openGraph defaults are located in `/app/layout.tsx` and `/lib/seo.ts`.

---

## 8. How to Submit Sitemap to Google Search Console

1. Verify ownership of your domain in [Google Search Console](https://search.google.com/search-console).
2. Go to **Sitemaps** in the left sidebar.
3. In **Add a new sitemap**, enter:
   ```
   sitemap.xml
   ```
4. Click **Submit**. Google will crawl all static pages, movie pages, TV series, device guides, and blog articles.

---

## Compliance & Attribution

This product uses the TMDB API but is not endorsed or certified by TMDB. Film and television metadata and imagery are provided by The Movie Database.

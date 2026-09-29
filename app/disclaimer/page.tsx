import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Disclaimer & Compliance | TVYouTube.pro',
  description: 'Legal disclaimer, trademark notices, and TMDB attribution compliance statements.',
  canonical: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Disclaimer' }]} />

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Disclaimer & Compliance
        </h1>

        <div className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Service Nature & Legitimacy</h2>
            <p>
              {SITE_CONFIG.name} is a legitimate IPTV service provider offering digital streams for compatible client devices. We only distribute content and channel feeds for which necessary distribution, relay, or licensing permissions have been obtained or are authorized under applicable legal frameworks.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. TMDB (The Movie Database) Compliance</h2>
            <p>
              {SITE_CONFIG.tmdbAttribution} Movie and TV metadata, posters, backdrops, cast information, and ratings displayed across our catalog are retrieved and displayed in compliance with TMDB API guidelines. TMDB does not endorse, sponsor, or certify this service.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Third-Party Trademarks & Player Software</h2>
            <p>
              Product names, logos, and brands such as Amazon Fire TV, Apple TV, Google TV, Samsung Tizen, LG webOS, IBO Player, and TiviMate mentioned throughout this website are the property of their respective trademark holders. Mention of these devices and players is solely for compatibility, installation instructional, and descriptive purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Notice & Takedown Coordination</h2>
            <p>
              We maintain an active compliance desk to promptly review legitimate inquiries or concerns. Contact us directly at{' '}
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-white hover:underline">
                {SITE_CONFIG.contactEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

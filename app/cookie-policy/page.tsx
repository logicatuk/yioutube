import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Cookie Policy | TVYouTube.pro',
  description: 'How TVYouTube.pro uses minimal functional cookies to maintain site performance and checkout.',
  canonical: '/cookie-policy',
});

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Cookie Policy
        </h1>

        <div className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <p className="text-white font-medium">Effective Date: September 2026</p>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Minimal Essential Cookies</h2>
            <p>
              {SITE_CONFIG.name} utilizes only essential, privacy-conscious first-party cookies necessary for core website functionality, such as retaining your preferred currency (USD, EUR, GBP) and managing encrypted checkout sessions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. No Invasive Tracking</h2>
            <p>
              We do not employ cross-site tracking cookies, third-party advertising surveillance pixels, or invasive behavioural profiling scripts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Managing Cookie Settings</h2>
            <p>
              You can configure your browser to block or delete cookies at any time through standard browser preferences. Disabling essential cookies may impair the functioning of our checkout simulation and preference persistence.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

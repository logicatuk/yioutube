import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service | TVYouTube.pro',
  description: 'Terms and conditions governing the use of TVYouTube.pro IPTV subscriptions and services.',
  canonical: '/terms',
});

export default function TermsPage() {
  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Terms of Service
        </h1>

        <div className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <p className="text-white font-medium">Last Updated: September 2026</p>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing {SITE_CONFIG.name} ({SITE_CONFIG.url}) or purchasing an IPTV subscription, you agree to be bound by these Terms of Service. If you do not accept these terms, please do not use our services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Subscription & Multi-Device Usage</h2>
            <p>
              Each subscription plan specifies an allowed number of concurrent connections (1 device for 1-month and 3-month plans; 2 devices for 6-month and 12-month plans). Utilizing simultaneous streams exceeding your plan allowance may lead to automated temporary throttling.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Activation & Account Credentials</h2>
            <p>
              Subscription credentials (M3U playlist URLs and Xtream Codes API keys) are generated exclusively for the customer email specified during checkout. Customers are strictly responsible for maintaining credential secrecy and preventing unauthorized redistribution.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Service Availability & Maintenance</h2>
            <p>
              While we engineer our content delivery networks for high availability and failover stability, occasional brief maintenance windows or satellite feed interruptions beyond our control may occur. We do not warrant continuous uninterrupted service during ISP-level packet drops.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Content & Trademark Disclaimers</h2>
            <p>
              Third-party channel names, brand trademarks, and film metadata displayed belong to their respective owners. {SITE_CONFIG.tmdbAttribution}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">6. Inquiries & Legal Notices</h2>
            <p>
              Questions regarding these Terms can be addressed to our legal desk at{' '}
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

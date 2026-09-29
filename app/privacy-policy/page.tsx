import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy | TVYouTube.pro',
  description: 'How TVYouTube.pro collects, uses, and protects customer data with privacy-first standards.',
  canonical: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Privacy Policy
        </h1>

        <div className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <p className="text-white font-medium">Effective Date: September 2026</p>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
            <p>
              To provision and deliver your IPTV streaming subscription, we collect only the necessary contact details provided during checkout: your email address, your preferred device type (for tailored setup instructions), and payment transaction IDs returned by our payment gateways.
            </p>
            <p>
              We never collect or store full credit card numbers or banking secrets on our servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To generate and email your automated M3U playlist and Xtream Codes credentials.</li>
              <li>To provide ongoing technical support and answer help desk inquiries.</li>
              <li>To send subscription expiry reminders and critical network maintenance notices.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Zero Selling of Personal Data</h2>
            <p>
              We strictly do not sell, rent, or trade your personal information or viewing habits to any third-party marketing firms or data brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Data Retention & Erasure</h2>
            <p>
              You have the right to request the complete deletion of your account records and order history at any time by contacting our support team at{' '}
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

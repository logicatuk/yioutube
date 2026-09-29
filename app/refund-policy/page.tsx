import React from 'react';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';
import { constructMetadata } from '@/lib/seo';

export const metadata: Metadata = constructMetadata({
  title: 'Refund Policy | TVYouTube.pro',
  description: 'Our fair, transparent refund and satisfaction policy for IPTV subscription orders.',
  canonical: '/refund-policy',
});

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs items={[{ label: 'Refund Policy' }]} />

        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Refund Policy
        </h1>

        <div className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 space-y-6 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
          <p className="text-white font-medium">Last Updated: September 2026</p>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Technical Resolution Guarantee</h2>
            <p>
              We want you to have an enjoyable streaming experience. If you experience technical problems or device compatibility issues after purchasing, our support desk will work with you to diagnose player configuration, provide alternate server ports, or re-issue your playlist.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. 7-Day Refund Window</h2>
            <p>
              If our technical team is unable to resolve your streaming issue or if our service cannot be made compatible with your supported device within 7 days of initial purchase, you are eligible for a full refund of your subscription fee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. How to Request a Refund</h2>
            <p>
              To initiate a refund review, email{' '}
              <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-white hover:underline">
                {SITE_CONFIG.contactEmail}
              </a>{' '}
              with your order number, account email, and a brief description of the technical hurdle encountered. Refunds are processed back to your original payment method within 3 to 5 business days.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

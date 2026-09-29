import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Clock,
  Sparkles,
  ChevronRight,
  BookOpen,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { INSTALLATION_GUIDES } from '@/lib/guides';
import { constructMetadata } from '@/lib/seo';
import { getHowToSchema, getBreadcrumbSchema } from '@/lib/schema';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = INSTALLATION_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return constructMetadata({
      title: 'Guide Not Found',
      description: 'The requested installation guide was not found.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${guide.shortTitle} | Step-by-Step IPTV Setup Tutorial`,
    description: guide.description.slice(0, 155),
    canonical: `/installation-guides/${guide.slug}`,
  });
}

export default async function InstallationGuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = INSTALLATION_GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const howToSchema = getHowToSchema(guide);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Installation Guides', url: '/installation-guides' },
    { name: guide.shortTitle, url: `/installation-guides/${guide.slug}` },
  ]);

  return (
    <article className="min-h-screen py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Installation Guides', href: '/installation-guides' },
            { label: guide.shortTitle },
          ]}
        />

        {/* Header Block */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#E50914]/15 text-[#E50914] font-bold">
              {guide.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-[#94A3B8]" />
              {guide.durationMinutes} min setup time
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-semibold">
              Difficulty: {guide.difficulty}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {guide.title}
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            {guide.description}
          </p>
        </header>

        {/* Requirements Box (Before You Start) */}
        <section className="p-6 sm:p-7 rounded-2xl bg-[#0D131D] border border-white/10 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Before You Start (Requirements)</span>
          </h2>

          <ul className="space-y-2.5 text-xs sm:text-sm text-white/90">
            {guide.requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] mt-2 flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Step-by-Step Instructions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-black text-white tracking-tight">
            Step-by-Step Setup Instructions
          </h2>

          <div className="space-y-6">
            {guide.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 sm:p-7 rounded-2xl bg-[#111925] border border-white/5 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#E50914] text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#E50914]/25">
                    {step.stepNumber}
                  </span>
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pl-12">
                  {step.description}
                </p>

                {step.tip && (
                  <div className="ml-12 mt-2 p-3.5 rounded-xl bg-[#0D131D] border border-[#FFB800]/20 text-xs text-[#FFB800] flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{step.tip}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting Section */}
        {guide.troubleshooting && guide.troubleshooting.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#FFB800]" />
              <span>Troubleshooting & Common Fixes</span>
            </h2>

            <div className="space-y-3">
              {guide.troubleshooting.map((t, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0D131D] border border-white/10 space-y-1.5 text-xs sm:text-sm"
                >
                  <p className="font-bold text-white">Issue: &quot;{t.issue}&quot;</p>
                  <p className="text-[#94A3B8] leading-relaxed">
                    <strong className="text-emerald-400">Solution:</strong> {t.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Guide FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#E50914]" />
              <span>Frequently Asked Questions</span>
            </h2>

            <div className="space-y-3">
              {guide.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#111925] border border-white/5 space-y-1.5 text-xs sm:text-sm"
                >
                  <p className="font-bold text-white">{faq.question}</p>
                  <p className="text-[#94A3B8] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Banner */}
        <section className="p-8 rounded-2xl bg-gradient-to-r from-[#111925] via-[#0D131D] to-[#111925] border border-white/10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2">
            <h3 className="text-xl font-black text-white">Need an Active Subscription?</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md">
              Choose your plan and receive your M3U and Xtream Codes credentials in your inbox within minutes.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-6 py-3.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-bold shadow-xl shadow-[#E50914]/40 flex-shrink-0 transition-transform hover:scale-105"
          >
            View Subscription Plans
          </Link>
        </section>

        {/* Navigation to Other Guides */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#94A3B8]">
          <Link href="/installation-guides" className="hover:text-white transition-colors">
            &larr; Back to all installation guides
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Ask support for help &rarr;
          </Link>
        </div>
      </div>
    </article>
  );
}

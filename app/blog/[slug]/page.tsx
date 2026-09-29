import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BLOG_POSTS } from '@/lib/blog';
import { constructMetadata } from '@/lib/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return constructMetadata({
      title: 'Article Not Found',
      description: 'The requested guide was not found.',
      noIndex: true,
    });
  }

  return constructMetadata({
    title: `${post.title} | TVYouTube.pro Guide`,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
    ogImage: post.image,
  });
}

export default async function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title },
          ]}
        />

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#94A3B8]">
            <span className="px-3 py-1 rounded-full bg-[#E50914]/15 text-[#E50914] font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-[#94A3B8]">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-semibold">{post.author}</p>
              <p className="text-[11px] text-[#94A3B8]">TVYouTube.pro Engineering</p>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#0D131D] border border-white/10 shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none text-[#94A3B8] leading-relaxed space-y-6 text-sm sm:text-base border-b border-white/10 pb-12">
          <div className="whitespace-pre-line text-white/90">
            {post.content}
          </div>
        </div>

        {/* Next Steps CTA */}
        <section className="p-8 rounded-2xl bg-[#0D131D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Ready for Seamless Streaming?</h3>
            <p className="text-xs text-[#94A3B8]">
              Get your activation credentials in 5–15 minutes with our risk-free subscription plans.
            </p>
          </div>
          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#E50914]/30 flex-shrink-0 transition-transform hover:scale-105"
          >
            View Pricing Plans
          </Link>
        </section>

        {/* Back link */}
        <div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all guides</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

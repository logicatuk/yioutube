'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Server,
  Layers,
  Send,
  HelpCircle,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ResellersPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    country: '',
    website: '',
    expectedCustomers: '10 - 50 customers/month',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Resellers' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mt-6 mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFB800]/15 border border-[#FFB800]/25 text-xs text-[#FFB800] font-bold">
            <Users className="w-3.5 h-3.5" />
            <span>Wholesale Media Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Become a Reseller
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Manage your own customer base with our turnkey reseller management panel, wholesale credit rates, sub-reseller creation, and 24/7 technical infrastructure.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0D131D] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#E50914]/15 text-[#E50914] flex items-center justify-center">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Full Xtream Management Panel</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Create, extend, disable, and monitor customer lines in real time through an intuitive web-based control dashboard with instant provisioning.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#0D131D] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FFB800]/15 text-[#FFB800] flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Wholesale Credit Economics</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Purchase credits in bulk at volume discounted tiers. Credits never expire and are only deducted when you actively generate customer lines.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#0D131D] border border-white/10 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Priority Technical Support</h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Direct escalation channel with our senior network engineers for rapid troubleshooting, stream diagnosis, and bespoke channel requests.
            </p>
          </div>
        </div>

        {/* Wholesale Tiers Overview */}
        <section className="mb-16 bg-[#111925] rounded-2xl border border-white/5 p-6 sm:p-8 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-black text-white">Reseller Credit Pricing Structure</h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              Flexible credit packs with instant panel creation upon approval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0D131D] border border-white/10 text-center space-y-3">
              <span className="text-xs uppercase font-bold text-[#94A3B8]">Starter Tier</span>
              <h4 className="text-2xl font-black text-white">100 Credits</h4>
              <p className="text-xs text-[#94A3B8]">Ideal for boutique agencies & new resellers</p>
              <ul className="text-xs text-white/80 space-y-2 pt-2 border-t border-white/5 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full Panel Access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Sub-Reseller Creation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Free Trial Generation
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#0D131D] border-2 border-[#E50914] text-center space-y-3 relative shadow-xl">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E50914] text-white text-[10px] font-black uppercase px-3 py-0.5 rounded-full">
                Most Popular
              </span>
              <span className="text-xs uppercase font-bold text-[#FFB800]">Pro Tier</span>
              <h4 className="text-2xl font-black text-white">250 Credits</h4>
              <p className="text-xs text-[#94A3B8]">For established streaming providers</p>
              <ul className="text-xs text-white/80 space-y-2 pt-2 border-t border-white/5 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Highest Margin Tier
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Dedicated Account Manager
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Custom DNS Support
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#0D131D] border border-white/10 text-center space-y-3">
              <span className="text-xs uppercase font-bold text-[#94A3B8]">Enterprise Tier</span>
              <h4 className="text-2xl font-black text-white">500+ Credits</h4>
              <p className="text-xs text-[#94A3B8]">For high-volume distribution networks</p>
              <ul className="text-xs text-white/80 space-y-2 pt-2 border-t border-white/5 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Maximum Volume Discount
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Priority Edge Node Access
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 24/7 Phone & Ticket Desk
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto bg-[#0D131D] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-white">Apply to Become a Reseller</h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1.5">
              Submit your business details below. Our partner operations team reviews all applications within 24 hours.
            </p>
          </div>

          {isSuccess ? (
            <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in zoom-in-95">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-lg font-bold text-white">Application Received!</h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our reseller team will review your application for <strong className="text-white">{formData.businessName || 'your business'}</strong> and email you at <strong className="text-white">{formData.email}</strong> with panel onboarding details within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Apex Media Ltd"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Country <span className="text-[#E50914]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    placeholder="United Kingdom / Canada / USA"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Website (Optional)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://mywebsite.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    Expected Customers
                  </label>
                  <select
                    value={formData.expectedCustomers}
                    onChange={(e) => setFormData({ ...formData, expectedCustomers: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                  >
                    <option value="10 - 50 customers/month">10 - 50 customers / month</option>
                    <option value="50 - 150 customers/month">50 - 150 customers / month</option>
                    <option value="150 - 500 customers/month">150 - 500 customers / month</option>
                    <option value="500+ customers/month">500+ customers / month</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                  Message / Existing Experience
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your target market, primary devices you support, or any questions..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-sm transition-all shadow-xl shadow-[#E50914]/30 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Apply to Become a Reseller</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-[#94A3B8] text-center pt-2">
                We respect your privacy. Reseller applications are handled under confidential enterprise review.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

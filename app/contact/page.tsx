'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Clock, ShieldCheck, CheckCircle2, Send, HelpCircle } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { SITE_CONFIG } from '@/lib/config';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: 'Setup / Activation Inquiry',
    message: '',
    honeypot: '', // spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Honeypot check for spam bots
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Support' }]} />

        {/* Headline */}
        <div className="text-center max-w-2xl mx-auto mt-6 mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 text-[#E50914] text-xs font-bold">
            <Mail className="w-3.5 h-3.5" />
            <span>24/7 Technical Desk</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Contact Customer Support
          </h1>

          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
            Have questions regarding device setup, playlist credentials, or subscription renewal? Our global engineering team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Info & SLAs */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D131D] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">Direct Assistance</h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[#94A3B8] block text-[11px] uppercase tracking-wider font-semibold">
                    Support Email
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="text-white hover:text-[#E50914] font-medium transition-colors"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[#94A3B8] block text-[11px] uppercase tracking-wider font-semibold">
                    Wholesale & Resellers
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.salesEmail}`}
                    className="text-white hover:text-[#E50914] font-medium transition-colors"
                  >
                    {SITE_CONFIG.salesEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[#94A3B8] block text-[11px] uppercase tracking-wider font-semibold">
                    Operating Hours
                  </span>
                  <span className="text-white/90">{SITE_CONFIG.businessHours}</span>
                </div>

                <div>
                  <span className="text-[#94A3B8] block text-[11px] uppercase tracking-wider font-semibold">
                    Response Expectations
                  </span>
                  <span className="text-emerald-400 font-semibold">
                    Usually within 15 to 30 minutes
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Link to FAQ */}
            <div className="p-6 rounded-2xl bg-[#111925] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-[#FFB800]" />
                <span>Need Instant Answers?</span>
              </div>
              <p className="text-xs text-[#94A3B8]">
                Check our knowledge base for instant answers on IBO Player setup, buffer optimization, and multi-device rules.
              </p>
              <Link
                href="/faq"
                className="inline-block text-xs font-semibold text-[#E50914] hover:underline pt-1"
              >
                Browse FAQ &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-2 bg-[#0D131D] rounded-2xl border border-white/10 p-6 sm:p-10 shadow-2xl">
            {isSuccess ? (
              <div className="p-8 text-center space-y-3 animate-in fade-in zoom-in-95">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">Ticket Submitted Successfully</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. A support ticket has been opened. Our duty engineer will reply to <strong className="text-white">{formData.email}</strong> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        orderNumber: '',
                        subject: 'Setup / Activation Inquiry',
                        message: '',
                        honeypot: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot hidden input for spam bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-[#E50914]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-[#E50914]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Order / Invoice # (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.orderNumber}
                      onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                      placeholder="e.g. AET-749102"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                    >
                      <option value="Setup / Activation Inquiry">Setup & Activation Assistance</option>
                      <option value="Playlist or EPG Issue">Playlist or EPG Issue</option>
                      <option value="Subscription Renewal / Upgrade">Subscription Renewal / Upgrade</option>
                      <option value="Reseller Inquiries">Reseller Inquiries</option>
                      <option value="Other Question">Other Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5">
                    How can we help? <span className="text-[#E50914]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your device model, player app (e.g. IBO Player), or specific question..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-xs sm:text-sm focus:outline-none focus:border-[#E50914]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-sm transition-all shadow-xl shadow-[#E50914]/30 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Support Ticket</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

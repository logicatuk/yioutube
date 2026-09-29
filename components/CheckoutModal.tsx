'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X, CheckCircle2, ShieldCheck, Zap, Copy, ExternalLink, Sparkles, Tv } from 'lucide-react';
import { PricingPlan } from '@/lib/types';
import { SITE_CONFIG } from '@/lib/config';

interface CheckoutModalProps {
  plan: PricingPlan | null;
  currency: 'USD' | 'EUR' | 'GBP';
  onClose: () => void;
}

export default function CheckoutModal({ plan, currency, onClose }: CheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [device, setDevice] = useState('Amazon Firestick / Fire TV');
  const [player, setPlayer] = useState('IBO Player (Recommended)');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    m3uUrl: string;
    username: string;
    serverUrl: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  if (!plan) return null;

  const getPrice = () => {
    switch (currency) {
      case 'EUR':
        return `€${plan.priceEur.toFixed(2)}`;
      case 'GBP':
        return `£${plan.priceGbp.toFixed(2)}`;
      case 'USD':
      default:
        return `$${plan.priceUsd.toFixed(2)}`;
    }
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsProcessing(true);

    // Simulate secure order provisioning
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      const randomOrder = `TYP-${Math.floor(100000 + Math.random() * 900000)}`;
      const randomUser = `user_${Math.random().toString(36).substring(2, 8)}`;
      setOrderDetails({
        orderId: randomOrder,
        serverUrl: 'http://stream.tvyoutube.pro:8080',
        username: randomUser,
        m3uUrl: `http://stream.tvyoutube.pro:8080/get.php?username=${randomUser}&password=secure_pass&type=m3u_plus`,
      });
    }, 1200);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-xl bg-[#0D131D] border border-white/15 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111925]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-ping" />
            <h3 className="text-base sm:text-lg font-bold text-white">
              {isSuccess ? 'Activation Confirmed!' : `Activate ${plan.name} Plan`}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          {!isSuccess ? (
            <form onSubmit={handleCheckoutSubmit} className="space-y-5">
              {/* Order Summary Box */}
              <div className="bg-[#111925] rounded-xl p-4 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#FFB800]">
                    Selected Subscription
                  </span>
                  <h4 className="text-lg font-extrabold text-white mt-0.5">{plan.name} Access</h4>
                  <p className="text-xs text-[#94A3B8]">
                    {plan.devicesCount} Concurrent {plan.devicesCount === 1 ? 'Device' : 'Devices'} • 4K UHD Streams
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-white">{getPrice()}</span>
                  <p className="text-[11px] text-[#94A3B8]">{plan.billingPeriodLabel}</p>
                </div>
              </div>

              {/* Delivery Email Input */}
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                  Delivery Email Address <span className="text-[#E50914]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#111925] border border-white/10 text-white placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                />
                <p className="text-[11px] text-[#94A3B8] mt-1.5 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#FFB800]" />
                  Your M3U playlist & Xtream credentials will be emailed here instantly.
                </p>
              </div>

              {/* Device Selector */}
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                  Primary Streaming Device
                </label>
                <select
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#111925] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                >
                  <option value="Amazon Firestick / Fire TV">Amazon Firestick / Fire TV 4K</option>
                  <option value="Samsung Smart TV (Tizen)">Samsung Smart TV (Tizen OS)</option>
                  <option value="LG Smart TV (webOS)">LG Smart TV (webOS)</option>
                  <option value="Android TV / Google TV">Android TV / Google TV</option>
                  <option value="Apple TV 4K / iOS">Apple TV 4K / iOS</option>
                  <option value="Windows PC / Mac">Windows PC / Mac</option>
                  <option value="MAG / Formuler Box">MAG / Formuler Device</option>
                </select>
              </div>

              {/* Preferred Player App */}
              <div>
                <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                  Preferred Player Application
                </label>
                <select
                  value={player}
                  onChange={(e) => setPlayer(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#111925] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E50914] transition-colors"
                >
                  <option value="IBO Player (Recommended)">IBO Player (Top Rated for Smart TV)</option>
                  <option value="TiviMate IPTV">TiviMate IPTV Player</option>
                  <option value="IPTV Smarters Pro">IPTV Smarters Pro</option>
                  <option value="XCIPTV Player">XCIPTV Player</option>
                  <option value="Other / VLC / M3U">Other / Generic M3U Player</option>
                </select>
              </div>

              {/* Security & Guarantees */}
              <div className="p-3 bg-white/5 rounded-xl flex items-center gap-3 text-xs text-[#94A3B8]">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>
                  Encrypted 256-bit SSL transaction. 24/7 automated provisioning and instant setup guide.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 px-6 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-sm sm:text-base transition-all shadow-xl shadow-[#E50914]/30 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Configuring Line & Generating Credentials...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Confirm & Generate Activation Line</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success & Credentials Display */
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-white">Your Streaming Line Is Active!</h4>
                <p className="text-xs sm:text-sm text-[#94A3B8]">
                  Order <span className="text-white font-mono font-semibold">{orderDetails?.orderId}</span> has been confirmed. A duplicate copy of this configuration has been sent to <span className="text-white font-medium">{email}</span>.
                </p>
              </div>

              {/* Credentials Box */}
              <div className="bg-[#111925] border border-emerald-500/30 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="font-bold text-white">Xtream Codes Credentials</span>
                  <span className="text-emerald-400 font-medium">Ready to Stream</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div>
                    <span className="text-[#94A3B8] block text-[10px] uppercase">Server URL</span>
                    <span className="text-white select-all">{orderDetails?.serverUrl}</span>
                  </div>

                  <div>
                    <span className="text-[#94A3B8] block text-[10px] uppercase">Username</span>
                    <span className="text-white select-all">{orderDetails?.username}</span>
                  </div>

                  <div>
                    <span className="text-[#94A3B8] block text-[10px] uppercase">Password</span>
                    <span className="text-white select-all">•••••••• (check your email)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => copyToClipboard(orderDetails?.m3uUrl || '')}
                    className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold text-white flex items-center justify-center gap-1.5 transition-colors border border-white/10"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'M3U URL Copied to Clipboard!' : 'Copy M3U Playlist URL'}</span>
                  </button>
                </div>
              </div>

              {/* Next Steps CTA */}
              <div className="space-y-2.5">
                <Link
                  href="/installation-guides/ibo-player"
                  onClick={onClose}
                  className="w-full py-3 px-4 rounded-xl bg-[#E50914] hover:bg-[#F40D17] text-white font-bold text-xs sm:text-sm text-center block transition-all shadow-lg shadow-[#E50914]/25"
                >
                  View Step-by-Step IBO Player Guide
                </Link>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-white text-xs font-medium text-center block transition-colors"
                >
                  Close & Return to Catalog
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

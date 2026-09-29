import { FAQItem } from './types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is IPTV and how does it work?',
    answer:
      'IPTV (Internet Protocol Television) delivers television programming and on-demand video content using internet network infrastructure rather than traditional satellite dishes or terrestrial cables. Content is streamed digitally directly to your compatible television, streaming stick, tablet, or phone.',
  },
  {
    id: 'faq-2',
    category: 'Subscriptions',
    question: 'How do I activate my subscription after ordering?',
    answer:
      'Immediately upon successful order confirmation, our automated provisioning system generates your unique M3U playlist link and Xtream Codes API login credentials. These details, accompanied by step-by-step setup instructions for your chosen device, are sent directly to your order email address within 5 to 15 minutes.',
  },
  {
    id: 'faq-3',
    category: 'Subscriptions',
    question: 'How long does account activation take?',
    answer:
      'Under standard operating conditions, activation is automated and takes between 5 to 15 minutes. During peak sporting events or international time-zone shifts, our verification desk ensures your line is fully tested before credentials arrive.',
  },
  {
    id: 'faq-4',
    category: 'Devices',
    question: 'What devices are compatible with TVYouTube.pro?',
    answer:
      'Our streams work seamlessly on Amazon Fire TV Stick / Cube, Android TVs (Sony, Philips, TCL, Hisense), Google TV Chromecast, Apple TV 4K & iOS, Samsung Tizen & LG webOS Smart TVs, Windows PCs, macOS, and dedicated IPTV hardware like MAG and Formuler boxes.',
  },
  {
    id: 'faq-5',
    category: 'Devices',
    question: 'Can I use my subscription on multiple devices simultaneously?',
    answer:
      'Yes! Our 1-Month and 3-Month plans support 1 active stream at a time, whereas our 6-Month and 12-Month premium plans support 2 simultaneous connections in different rooms or on different devices under one subscription.',
  },
  {
    id: 'faq-6',
    category: 'Installation',
    question: 'How do I install and configure IBO Player?',
    answer:
      'Download IBO Player from your TV app store, launch it to retrieve your Device MAC and Device Key, then visit the official portal at iboplayer.com/device/login to paste your TVYouTube.pro playlist link. Reload the app on your TV and you are ready to stream. Check our dedicated IBO Player guide for complete step-by-step instructions.',
  },
  {
    id: 'faq-7',
    category: 'Subscriptions',
    question: 'Can I upgrade or change my plan later?',
    answer:
      'Yes, you can upgrade your plan or extend your billing period at any time without losing your playlist configuration. Simply contact our support desk with your order email or select a renewal plan.',
  },
  {
    id: 'faq-8',
    category: 'Payments',
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit and debit cards (Visa, MasterCard, American Express), secure digital wallets, and approved regional payment gateways via encrypted SSL checkout. We never store payment card details on our servers.',
  },
  {
    id: 'faq-9',
    category: 'Troubleshooting',
    question: 'What happens if I experience buffering or stream stuttering?',
    answer:
      'Buffering is most commonly caused by local Wi-Fi interference, ISP video throttling, or incorrect player buffer settings. We recommend using a 5GHz Wi-Fi band or ethernet cable, verifying your internet speed is 25+ Mbps, and switching the player decoder to Hardware (HW) acceleration.',
  },
  {
    id: 'faq-10',
    category: 'Troubleshooting',
    question: 'Do you provide 24/7 technical support?',
    answer:
      'Yes, our technical desk is staffed around the clock to assist you with installation hurdles, playlist updates, EPG synchronization, and device troubleshooting via email and live ticket support.',
  },
  {
    id: 'faq-11',
    category: 'Resellers',
    question: 'Do you offer an IPTV Reseller Program?',
    answer:
      'Yes, we provide a comprehensive reseller panel with wholesale credit pricing, sub-reseller creation tools, instant line provisioning, and dedicated account management for established digital media retailers.',
  },
];

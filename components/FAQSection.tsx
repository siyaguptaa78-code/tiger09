'use client';

import { useState } from 'react';
import { WA_LINK } from './constants';

const faqs = [
  {
    id: 'whatsapp-number',
    question: "How do I get the Tiger365ID WhatsApp number?",
    answer:
      "It's super easy—just click any of the 'GET TIGER 365 ID' buttons on this page. They'll take you straight to our official WhatsApp where someone is always waiting to help you out. You can also save our number manually: +91 85578 77879. Shoot us a text whenever you're ready to get set up.",
  },
  {
    id: 'multiple-platforms',
    question: "Does one Tiger365ID work on different platforms?",
    answer:
      "You bet. One single Tiger365 ID is your all-access pass to a bunch of top betting exchanges and platforms. Whether you want to bet on a cricket match, play live casino games, or try your luck at Aviator or Teen Patti, we've got you covered. If you need help jumping between platforms, just ask our support team.",
  },
  {
    id: 'service-247',
    question: "Are you guys really available 24/7?",
    answer:
      "Yes, literally! Our support crew is online 24 hours a day, 7 days a week, 365 days a year (including weekends and holidays). So if you're up watching a match at 3 AM and need help making a deposit, we're right here waiting on WhatsApp, Telegram, or a phone call.",
  },
  {
    id: 'secure-login',
    question: "How safe is my Tiger365ID login?",
    answer:
      "It's incredibly safe. We treat security as our number one priority. Every Tiger365 ID account is locked down with industry-standard encryption and extra authentication layers. Your personal info and money are completely encrypted and never given to anyone else. We're constantly checking our systems to make sure you're protected.",
  },
  {
    id: 'cricket-aviator',
    question: "Can I bet on Cricket and play Aviator with my ID?",
    answer:
      "Absolutely! Your Tiger365 ID gives you the keys to both. You can jump from betting on IPL and World Cup matches straight into playing popular crash games like Aviator. You'll also get access to Dragon Tiger, Roulette, and a ton of other awesome casino games.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            FAQ<span className="text-red-500">&apos;S</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4">Everything you need to know about Tiger365 ID</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              id={`faq-${faq.id}`}
              className={`bg-[#1a1a1a] border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-red-500/60 shadow-lg shadow-red-500/10' : 'border-gray-800 hover:border-gray-700'
              }`}
            >
              {/* Question */}
              <button
                id={`faq-btn-${faq.id}`}
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4 flex-1 pr-4">
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-red-500 border-red-500 text-white'
                      : 'bg-transparent border-gray-700 text-gray-600 group-hover:border-red-500/40 group-hover:text-red-500'
                  }`}>
                    {index + 1}
                  </span>
                  <span className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                    openIndex === index ? 'text-red-400' : 'text-white group-hover:text-red-200'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-red-500 border-red-500 text-white rotate-180'
                    : 'border-gray-700 text-gray-500 group-hover:border-red-500/40 group-hover:text-red-500'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <div className="h-px bg-red-500/20 mb-4"></div>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 mb-6">Still have questions? Contact us on WhatsApp!</p>
          <a
            href={WA_LINK}
            id="faq-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red inline-flex items-center gap-3 text-white font-bold px-10 py-5 rounded-full text-lg uppercase tracking-wider"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            GET TIGER 365 ID
          </a>
        </div>
      </div>
    </section>
  );
}

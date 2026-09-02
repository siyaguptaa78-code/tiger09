'use client';

import { useState } from 'react';
import { WA_LINK } from './constants';

const faqs = [
  {
    id: 'q1',
    question: "What is Tiger365?",
    answer:
      "Tiger365 is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information.",
  },
  {
    id: 'q2',
    question: "How does a Tiger365 ID work?",
    answer:
      "An account ID is generally used to identify a user account. Refer to Tiger365's current account instructions and terms for the exact process.",
  },
  {
    id: 'q3',
    question: "How can I access Tiger365?",
    answer:
      "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site.",
  },
  {
    id: 'q4',
    question: "What sports are available on Tiger365?",
    answer:
      "Available sports can change. Check the current sports or betting section on the website for the latest list and availability.",
  },
  {
    id: 'q5',
    question: "Does Tiger365 provide live sports information?",
    answer:
      "Check the site's current sports section for any live-event information and the terms that apply to its use.",
  },
  {
    id: 'q6',
    question: "How can I get help with my Tiger365 account?",
    answer:
      "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts.",
  },
  {
    id: 'q7',
    question: "How do I find Tiger365 login information?",
    answer:
      "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel.",
  },
  {
    id: 'q8',
    question: "What payment options are supported?",
    answer:
      "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts.",
  },
  {
    id: 'q9',
    question: "What should I do if I have trouble accessing my account?",
    answer:
      "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel.",
  },
  {
    id: 'q10',
    question: "Where can I find the latest Tiger365 updates?",
    answer:
      "Refer to Tiger365's current website information and terms for the most accurate answer.",
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

'use client';

import { WA_LINK } from './constants';

const features = [
  {
    id: 'safe-reliable',
    title: 'Keep Things Safe, Secure, and Exciting',
    description:
      'We built Tiger365ID with your security in mind. Everything you do on our platform is protected by the best encryption out there, so you never have to worry about your money or personal info. Plus, we partner with top-tier betting exchanges to make sure you get accurate odds and get paid out fast.',
    icon: '🔒',
    highlight: 'Safe & Secure',
  },
  {
    id: 'full-potential',
    title: 'Take Your Betting Game to the Next Level',
    description:
      'It doesn\'t matter if you\'re a pro or just starting out—Tiger365ID has everything you need. From predicting the match winner to guessing player performances, we give you the data, insights, and odds to make smart, profitable bets on a huge variety of cricket markets.',
    icon: '📈',
    highlight: 'Maximum Potential',
  },
  {
    id: 'live-cricket',
    title: 'Get in on the Live Cricket Action',
    description:
      'Nothing beats the thrill of betting on a live match. With Tiger365ID, you can place bets on every ball, over, or wicket as it happens. Our odds update instantly, so you can watch the live scores and place your bets without missing a beat. And if you ever get stuck, our support team is just a click away.',
    icon: '⚡',
    highlight: 'Live Action',
  },
];

export default function CricketFeatures() {
  return (
    <section id="cricket-features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Cricket Betting{' '}
            <span className="text-red-500">Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Feature Cards */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              id={`feature-${feature.id}`}
              className="group relative bg-gradient-to-r from-[#1a1a1a] to-[#111111] border border-gray-800 hover:border-red-500/40 rounded-2xl p-8 transition-all duration-400 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-400 to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-3xl group-hover:bg-red-500/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/20">
                      {feature.highlight}
                    </span>
                    <span className="text-gray-700 text-sm">Feature {index + 1}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-50 transition-colors duration-300 mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 self-center hidden md:block">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-14">
          <a
            href={WA_LINK}
            id="cricket-features-cta"
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

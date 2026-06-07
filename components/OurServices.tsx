'use client';

const services = [
  { id: 'cricket-betting', title: 'Cricket Betting', emoji: '🏏', color: 'from-red-900/40 to-black' },
  { id: 'football-betting', title: 'Football Betting', emoji: '⚽', color: 'from-green-900/30 to-black' },
  { id: 'live-casino', title: 'Live Casino', emoji: '🎰', color: 'from-purple-900/30 to-black' },
  { id: 'aviator', title: 'Aviator Game', emoji: '✈️', color: 'from-blue-900/30 to-black' },
  { id: 'teen-patti', title: 'Teen Patti', emoji: '🃏', color: 'from-red-900/30 to-black' },
  { id: 'sports-exchange', title: 'Sports Exchange', emoji: '📊', color: 'from-yellow-900/30 to-black' },
];

export default function OurServices() {
  return (
    <section id="our-services" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Our <span className="text-red-500">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mx-auto mt-4"></div>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Access premium sports betting, live casino, and gaming all in one place with Tiger365 ID
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-b ${service.color} border border-gray-800 group-hover:border-red-500/50 rounded-2xl p-6 text-center transition-all duration-300`}>
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-red-500/40 group-hover:w-full transition-all duration-500 mx-auto mb-3"></div>

                {/* Title */}
                <h3 className="text-white text-sm font-bold group-hover:text-red-400 transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                {/* Play button on hover */}
                <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Play Now
                  </span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

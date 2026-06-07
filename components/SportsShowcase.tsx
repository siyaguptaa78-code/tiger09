'use client';

const sports = [
  {
    id: 'interface',
    title: 'INTERFACE',
    img: 'https://placehold.co/400x500/1a1a1a/dc2626?text=APP+INTERFACE&font=inter',
    description: 'Premium Gaming UI',
  },
  {
    id: 'football',
    title: 'FOOTBALL',
    img: 'https://placehold.co/400x500/1a1a1a/dc2626?text=FOOTBALL&font=inter',
    description: 'Bet on Football',
  },
  {
    id: 'betting',
    title: 'BETTING',
    img: 'https://placehold.co/400x500/1a1a1a/dc2626?text=BETTING&font=inter',
    description: 'Smart Betting',
  },
  {
    id: 'cricket',
    title: 'CRICKET',
    img: 'https://placehold.co/400x500/1a1a1a/dc2626?text=CRICKET&font=inter',
    description: 'Live Cricket',
  },
];

export default function SportsShowcase() {
  return (
    <section id="sports-showcase" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
            Our Platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Explore <span className="text-red-500">Sports & Games</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            From live cricket to football betting — all in one platform
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sports.map((sport, index) => (
            <div
              key={sport.id}
              id={`sport-card-${sport.id}`}
              className="sport-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <div
                  className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, #1a0800 0%, #0f0f0f 40%, #1a0800 100%)`,
                  }}
                >
                  {/* Sport icon/visual */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="text-6xl mb-4">
                      {sport.id === 'cricket' && '🏏'}
                      {sport.id === 'football' && '⚽'}
                      {sport.id === 'betting' && '🎲'}
                      {sport.id === 'interface' && '📱'}
                    </div>
                    <div className="w-full h-px bg-red-500/30 mb-4"></div>
                    <div className="text-center">
                      <div className="text-red-500 text-xs uppercase tracking-widest mb-1">{sport.description}</div>
                      <div className="flex justify-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-red-500' : 'bg-gray-700'}`}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Red border on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/60 transition-all duration-300"></div>

                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-red-500 font-black text-xl tracking-wider">{sport.title}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-8 h-0.5 bg-red-500 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>

                {/* Top right badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    LIVE
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { WA_LINK } from './constants';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Text Content */}
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
              About Tiger365 ID
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Tiger 365 ID:{' '}
              <span className="text-red-500">Your Gateway</span> to Online Gaming IDs and Sports Betting
            </h2>

            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                Tiger 365 ID is your trusted partner for online gaming and sports betting IDs in India.
                We specialize in providing official access credentials to leading betting exchanges and sports platforms,
                giving you the ability to enjoy cricket, football, tennis, and many more sports with complete peace of mind.
              </p>

              <p>
                Our platform provides seamless and secure access to premium sports betting experiences. Whether you are a
                seasoned bettor or new to the world of sports gaming, Tiger365 ID offers a straightforward and transparent
                process to get you started. Simply contact us via WhatsApp and our team will set up your account within minutes.
              </p>

              <p>
                With Tiger365 ID, you gain access to live cricket betting, real-time odds, and a massive selection of
                casino games and virtual sports. Our 24/7 availability ensures that no matter the time zone or match schedule,
                you are always covered. Our customer care team is always on standby to assist you with deposits, withdrawals,
                and any account issues.
              </p>

              <p>
                Security is our top priority. We use advanced encryption and authentication technologies to ensure that your
                account details and transactions remain completely private and protected. We support all major Indian payment
                methods including UPI, IMPS, and bank transfers, with INR as the primary currency, making deposits and
                withdrawals quick, easy, and hassle-free.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href={WA_LINK}
                id="about-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-red inline-flex items-center gap-3 text-white font-bold px-8 py-4 rounded-full text-lg uppercase tracking-wider"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                GET TIGER 365 ID
              </a>
            </div>
          </div>

          {/* Banner Image */}
          <div className="relative w-full rounded-3xl overflow-hidden">
            <div
              className="w-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-r from-red-950 via-gray-950 to-red-950 flex items-center justify-center relative overflow-hidden"
            >
              {/* Background pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(249,115,22,0.3) 0px, rgba(249,115,22,0.3) 1px, transparent 1px, transparent 40px)',
                }}
              ></div>

              <div className="relative z-10 text-center p-12">
                <div className="text-7xl mb-4">🏏</div>
                <div className="text-4xl font-black text-white mb-2">Tiger<span className="text-red-500">365</span> ID</div>
                <div className="text-red-400 text-lg font-medium">Premium Online Cricket Betting IDs</div>
                <div className="flex justify-center gap-6 mt-8">
                  {['Cricket', 'Football', 'Casino', 'Aviator'].map((item) => (
                    <div key={item} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mx-auto mb-2">
                        <span className="text-red-500 text-xl">
                          {item === 'Cricket' ? '🏏' : item === 'Football' ? '⚽' : item === 'Casino' ? '🎰' : '✈️'}
                        </span>
                      </div>
                      <span className="text-gray-400 text-xs">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Red accent lines */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-red-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

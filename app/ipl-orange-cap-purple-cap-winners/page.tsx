import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { WA_LINK } from '@/components/constants';

export const metadata: Metadata = {
  title: 'IPL Orange Cap & Purple Cap Winners (2008–2026)',
  description: "Every IPL Orange Cap and Purple Cap winner from 2008 to 2026 — including Vaibhav Sooryavanshi's record-breaking 2026 season. Full year-by-year lists with runs and wickets.",
  alternates: {
    canonical: '/ipl-orange-cap-purple-cap-winners',
  },
  openGraph: {
    title: 'IPL Orange Cap & Purple Cap Winners (2008–2026)',
    description: "Every IPL Orange Cap and Purple Cap winner from 2008 to 2026 — including Vaibhav Sooryavanshi's record-breaking 2026 season. Full year-by-year lists with runs and wickets.",
    url: 'https://tiger365now.com/ipl-orange-cap-purple-cap-winners',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IPL Orange Cap & Purple Cap Winners (2008–2026)',
    description: "Every IPL Orange Cap and Purple Cap winner from 2008 to 2026 — including Vaibhav Sooryavanshi's record-breaking 2026 season. Full year-by-year lists with runs and wickets.",
  },
};

const orangeCapWinners = [
  { year: 2008, player: 'Shaun Marsh', team: 'Kings XI Punjab', runs: 616 },
  { year: 2009, player: 'Matthew Hayden', team: 'Chennai Super Kings', runs: 572 },
  { year: 2010, player: 'Sachin Tendulkar', team: 'Mumbai Indians', runs: 618 },
  { year: 2011, player: 'Chris Gayle', team: 'Royal Challengers Bangalore', runs: 608 },
  { year: 2012, player: 'Chris Gayle', team: 'Royal Challengers Bangalore', runs: 733 },
  { year: 2013, player: 'Michael Hussey', team: 'Chennai Super Kings', runs: 733 },
  { year: 2014, player: 'Robin Uthappa', team: 'Kolkata Knight Riders', runs: 660 },
  { year: 2015, player: 'David Warner', team: 'Sunrisers Hyderabad', runs: 562 },
  { year: 2016, player: 'Virat Kohli', team: 'Royal Challengers Bangalore', runs: 973 },
  { year: 2017, player: 'David Warner', team: 'Sunrisers Hyderabad', runs: 641 },
  { year: 2018, player: 'Kane Williamson', team: 'Sunrisers Hyderabad', runs: 735 },
  { year: 2019, player: 'David Warner', team: 'Sunrisers Hyderabad', runs: 692 },
  { year: 2020, player: 'KL Rahul', team: 'Kings XI Punjab', runs: 670 },
  { year: 2021, player: 'Ruturaj Gaikwad', team: 'Chennai Super Kings', runs: 635 },
  { year: 2022, player: 'Jos Buttler', team: 'Rajasthan Royals', runs: 863 },
  { year: 2023, player: 'Shubman Gill', team: 'Gujarat Titans', runs: 890 },
  { year: 2024, player: 'Virat Kohli', team: 'Royal Challengers Bengaluru', runs: 741 },
  { year: 2025, player: 'Sai Sudharsan', team: 'Gujarat Titans', runs: 759 },
  { year: 2026, player: 'Vaibhav Sooryavanshi', team: 'Rajasthan Royals', runs: 776 },
];

const purpleCapWinners = [
  { year: 2008, player: 'Sohail Tanvir', team: 'Rajasthan Royals', wickets: 22 },
  { year: 2009, player: 'RP Singh', team: 'Deccan Chargers', wickets: 23 },
  { year: 2010, player: 'Pragyan Ojha', team: 'Deccan Chargers', wickets: 21 },
  { year: 2011, player: 'Lasith Malinga', team: 'Mumbai Indians', wickets: 28 },
  { year: 2012, player: 'Morne Morkel', team: 'Delhi Daredevils', wickets: 25 },
  { year: 2013, player: 'Dwayne Bravo', team: 'Chennai Super Kings', wickets: 32 },
  { year: 2014, player: 'Mohit Sharma', team: 'Chennai Super Kings', wickets: 23 },
  { year: 2015, player: 'Dwayne Bravo', team: 'Chennai Super Kings', wickets: 26 },
  { year: 2016, player: 'Bhuvneshwar Kumar', team: 'Sunrisers Hyderabad', wickets: 23 },
  { year: 2017, player: 'Bhuvneshwar Kumar', team: 'Sunrisers Hyderabad', wickets: 26 },
  { year: 2018, player: 'Andrew Tye', team: 'Kings XI Punjab', wickets: 24 },
  { year: 2019, player: 'Imran Tahir', team: 'Chennai Super Kings', wickets: 26 },
  { year: 2020, player: 'Kagiso Rabada', team: 'Delhi Capitals', wickets: 30 },
  { year: 2021, player: 'Harshal Patel', team: 'Royal Challengers Bangalore', wickets: 32 },
  { year: 2022, player: 'Yuzvendra Chahal', team: 'Rajasthan Royals', wickets: 27 },
  { year: 2023, player: 'Mohammed Shami', team: 'Gujarat Titans', wickets: 28 },
  { year: 2024, player: 'Harshal Patel', team: 'Punjab Kings', wickets: 24 },
  { year: 2025, player: 'Prasidh Krishna', team: 'Gujarat Titans', wickets: 25 },
  { year: 2026, player: 'Kagiso Rabada', team: 'Gujarat Titans', wickets: 29 },
];

const faqs = [
  {
    question: "Who won the Orange Cap in IPL 2026?",
    answer: "Vaibhav Sooryavanshi of Rajasthan Royals, with 776 runs — he also won MVP and Emerging Player."
  },
  {
    question: "Who won the Purple Cap in IPL 2026?",
    answer: "Kagiso Rabada, with 29 wickets — his second Purple Cap after 2020."
  },
  {
    question: "What is the Orange Cap and Purple Cap?",
    answer: "Season-long awards for the IPL's leading run-scorer (Orange) and leading wicket-taker (Purple), worn on-field by the current leader during the season."
  },
  {
    question: "Who has won the most Orange Caps?",
    answer: "David Warner, with three (2015, 2017, 2019). Chris Gayle and Virat Kohli have two each."
  },
  {
    question: "What is the record for most runs in an IPL season?",
    answer: "Virat Kohli's 973 in 2016 — still untouched a decade later."
  },
  {
    question: "What is the record for most wickets in an IPL season?",
    answer: "32 — shared by Dwayne Bravo (2013) and Harshal Patel (2021)."
  }
];

export default function IplCapWinnersPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Info banner */}
      <div className="w-full bg-red-950/60 border-b border-red-500/20 py-2 px-4 text-center">
        <p className="text-xs text-red-300/80">
          <span className="font-semibold">Note:</span> tiger365now.com is an informational website only and does not offer betting services.
        </p>
      </div>

      <Navbar />

      <article className="pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium mb-8 transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-red-500/10 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/20">
                IPL Records
              </span>
              <span className="text-gray-500 text-xs">5 min read</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-500 text-xs">July 10, 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              IPL Orange Cap & Purple Cap Winners (2008–2026)
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mb-8"></div>
          </header>

          {/* Feature/Emoji banner */}
          <div className="bg-gradient-to-r from-orange-600/30 to-black border border-gray-800 rounded-3xl p-12 text-center text-7xl mb-10 shadow-2xl">
            🧢
          </div>

          {/* Body and Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 text-gray-300 leading-relaxed text-base sm:text-lg">
              <p className="mb-6">
                Two caps, one season-long race each. The Orange Cap goes to the IPL&apos;s leading run-scorer, the Purple Cap to its leading wicket-taker — and in 2026 the Orange Cap went to a teenager who&apos;d won the U19 World Cup barely three months earlier. Every winner of both caps since the IPL began:
              </p>

              {/* Orange Cap Table */}
              <h2 className="text-2xl font-bold text-red-500 mt-8 mb-4">Orange Cap Winners: Year by Year</h2>
              <div className="overflow-x-auto my-6 border border-gray-800 rounded-2xl">
                <table className="min-w-full divide-y divide-gray-800 text-sm">
                  <thead className="bg-[#151515]">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-red-500 uppercase tracking-wider">Year</th>
                      <th className="px-6 py-4 text-left font-bold text-red-500 uppercase tracking-wider">Player</th>
                      <th className="px-6 py-4 text-left font-bold text-red-500 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-4 text-right font-bold text-red-500 uppercase tracking-wider">Runs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 bg-transparent">
                    {orangeCapWinners.map((row) => (
                      <tr key={row.year} className="hover:bg-red-500/5 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-white font-semibold">{row.year}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300 font-medium">{row.player}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-400">{row.team}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-amber-400 font-bold">{row.runs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Purple Cap Table */}
              <h2 className="text-2xl font-bold text-red-500 mt-10 mb-4">Purple Cap Winners: Year by Year</h2>
              <div className="overflow-x-auto my-6 border border-gray-800 rounded-2xl">
                <table className="min-w-full divide-y divide-gray-800 text-sm">
                  <thead className="bg-[#151515]">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold text-red-500 uppercase tracking-wider">Year</th>
                      <th className="px-6 py-4 text-left font-bold text-red-500 uppercase tracking-wider">Player</th>
                      <th className="px-6 py-4 text-left font-bold text-red-500 uppercase tracking-wider">Team</th>
                      <th className="px-6 py-4 text-right font-bold text-red-500 uppercase tracking-wider">Wickets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 bg-transparent">
                    {purpleCapWinners.map((row) => (
                      <tr key={row.year} className="hover:bg-red-500/5 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap text-white font-semibold">{row.year}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-300 font-medium">{row.player}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-400">{row.team}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-amber-400 font-bold">{row.wickets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 2026 section */}
              <h2 className="text-2xl font-bold text-red-500 mt-10 mb-4">The 2026 Caps: Sooryavanshi and Rabada</h2>
              <p className="mb-6">
                The Orange Cap race of 2026 was a coronation. Vaibhav Sooryavanshi — fresh from his 175 in the U19 World Cup final in February — piled up 776 runs and collected the Orange Cap, MVP and Emerging Player awards in one sweep. No cricketer has ever compressed a youth-to-superstar arc into a single spring like that.
              </p>
              <p className="mb-6">
                The Purple Cap went to Kagiso Rabada with 29 wickets from 17 games — his second, six years after his first in 2020, with RCB&apos;s Bhuvneshwar Kumar a close runner-up on 28.
              </p>

              {/* Records Section */}
              <h2 className="text-2xl font-bold text-red-500 mt-10 mb-4">Cap Records Worth Knowing</h2>
              <p className="mb-6">
                Kohli&apos;s 973 runs in 2016 remains the Everest — no one has come within 80 runs of it since. David Warner&apos;s three Orange Caps are the most by any batter. On the bowling side, Dwayne Bravo&apos;s 32 wickets in 2013 and Harshal Patel&apos;s 32 in 2021 share the single-season record, and Bravo, Bhuvneshwar, Harshal and now Rabada are the only two-time Purple Cap winners. And a quirk: Sunrisers Hyderabad batters won four Orange Caps in five years (2015–2019); no franchise has dominated a cap like that since.
              </p>

              {/* FAQ Accordion */}
              <h2 className="text-2xl font-bold text-red-500 mt-10 mb-6">Orange Cap & Purple Cap FAQs</h2>
              <div className="space-y-4 my-6">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 open:border-red-500/40 open:shadow-lg open:shadow-red-500/10"
                  >
                    <summary className="w-full flex items-center justify-between p-6 text-left cursor-pointer list-none select-none [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center gap-4 flex-1 pr-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border border-gray-700 text-gray-500 group-open:bg-red-500 group-open:border-red-500 group-open:text-white transition-all duration-300">
                          {index + 1}
                        </span>
                        <span className="font-bold text-base sm:text-lg text-white group-open:text-red-400 group-hover:text-red-200 transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-700 text-gray-500 group-open:bg-red-500 group-open:border-red-500 group-open:text-white group-open:rotate-180 transition-all duration-300 flex items-center justify-center">
                        <svg className="w-4 h-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="pl-12">
                        <div className="h-px bg-red-500/20 mb-4"></div>
                        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    </div>
                  </details>
                ))}
              </div>

              {/* Last Updated Muted Info */}
              <div className="mt-12 pt-6 border-t border-gray-800 text-gray-500 text-sm italic">
                Last updated: 10 July 2026 — includes IPL 2026. Updated live during each season, final after every edition. Stats per official records.
              </div>
            </div>

            {/* Sidebar CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#111111] border border-red-500/20 rounded-2xl p-6 shadow-2xl">
                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">🐯</span>
                  <h3 className="text-xl font-bold text-white mb-2">Get Your Cricket ID</h3>
                  <p className="text-xs text-gray-400">Join India&apos;s most trusted gaming exchange platform. 24/7 service.</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>100% Trusted & Secure</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>Instant Refills & Cashout</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500 font-bold">✓</span>
                    <span>24/7 WhatsApp Support</span>
                  </div>
                </div>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-red flex items-center justify-center gap-2 text-white font-bold py-3.5 px-6 rounded-full text-sm uppercase tracking-wider w-full text-center"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Get ID Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

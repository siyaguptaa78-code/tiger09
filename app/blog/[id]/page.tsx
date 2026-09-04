import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WA_LINK } from '@/components/constants';

const blogPosts = [
  {
    id: 'asian-games-2026-campaign',
    title: 'India’s Asian Games Campaign Takes Shape as Athletes Prepare for Aichi-Nagoya 2026',
    excerpt: "India's sporting calendar is entering a crucial phase as athletes prepare for the 2026 Asian Games in Aichi-Nagoya, Japan. The continental event will bring together athletes from across Asia, with India competing in disciplines beyond cricket.",
    category: 'Sports News',
    date: 'September 4, 2026',
    readTime: '6 min read',
    emoji: '🏅',
    color: 'from-blue-900/30 to-black',
    content: `
      <p class="mb-6">India's sporting calendar is entering a crucial phase as athletes prepare for the 2026 Asian Games in Aichi-Nagoya, Japan. The continental event, scheduled from September 19 to October 4, will bring together athletes from across Asia, with India expected to compete in a broad range of disciplines.</p>

      <p class="mb-6">For Indian sports fans, the Games will offer far more than cricket. Athletics, shooting, boxing, badminton, hockey and several other disciplines are expected to attract attention as Indian athletes look to build on the country's performances at previous editions.</p>

      <p class="mb-6">The 2026 Asian Games will feature 43 sports and 469 medal events, creating numerous opportunities for India's large contingent to compete for podium finishes. (<a href="https://www.olympics.com/en/news/asian-games-2026-sports-list?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">olympics.com</a>)</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Cricket Adds Another Major Attraction</h3>
      <p class="mb-6">Cricket will once again be one of the most closely followed sports for Indian audiences.</p>
      <p class="mb-6">India's men's cricket team will enter the tournament from the quarterfinal stage on September 28. The team will be defending the gold medal won at the previous Asian Games.</p>
      <p class="mb-6">The cricket competition is expected to use a relatively small playing area, with boundaries measuring approximately 65 metres. Organisers have also installed a hybrid pitch and upgraded drainage facilities to minimise weather-related interruptions. (<a href="https://timesofindia.indiatimes.com/sports/cricket/news/65m-boundaries-hybrid-pitch-inside-the-new-venue-for-indias-asian-games-campaign/articleshow/133750026.cms?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">timesofindia.indiatimes.com</a>)</p>
      <p class="mb-6">The shorter boundaries could make six-hitting an important feature of the tournament.</p>
      <p class="mb-6">For Indian batters, this could create opportunities to attack aggressively, while bowlers will need to focus on variations and accuracy.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">A Different Challenge for the Cricket Team</h3>
      <p class="mb-6">India's participation in the Asian Games presents an interesting selection challenge.</p>
      <p class="mb-6">The international cricket calendar is already crowded, and selectors need to balance the demands of the tournament with other international commitments.</p>
      <p class="mb-6">For players selected in the Asian Games squad, the event will provide an opportunity to perform in a multi-sport environment and represent India on another major stage.</p>
      <p class="mb-6">The possibility of a high-profile India-Pakistan encounter could also increase interest if both teams progress through the competition.</p>
      <p class="mb-6">However, knockout cricket leaves little room for error.</p>
      <p class="mb-6">A single poor performance can end a team's medal hopes, meaning India will need to maintain concentration from the quarterfinal stage onwards.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Hockey Remains a Major Medal Hope</h3>
      <p class="mb-6">Indian hockey will also be closely watched during the Asian Games.</p>
      <p class="mb-6">The men's team has traditionally been among the strongest hockey sides in Asia, while the women's team has also developed into a serious continental competitor.</p>
      <p class="mb-6">The Asian Games carry additional importance in hockey because the tournament provides direct competition against regional rivals.</p>
      <p class="mb-6">Matches against teams such as South Korea, Japan and Malaysia can be tactically demanding, while Pakistan remains a historically significant rival.</p>
      <p class="mb-6">India's ability to convert penalty corners, maintain possession and defend transitions could determine the team's medal prospects.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Athletics Brings Individual Opportunities</h3>
      <p class="mb-6">Athletics could provide India with several medal opportunities.</p>
      <p class="mb-6">The sport features numerous events, meaning success does not depend on one athlete or discipline.</p>
      <p class="mb-6">Indian athletes will compete across track and field events, with each competitor aiming to peak at the right moment.</p>
      <p class="mb-6">For many athletes, the Asian Games represent a crucial international test between domestic competitions and larger global championships.</p>
      <p class="mb-6">A strong performance can also boost confidence before future Olympic cycles.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Shooting Expected to Attract Attention</h3>
      <p class="mb-6">Shooting has become one of India's strongest medal-producing disciplines at major international events.</p>
      <p class="mb-6">Indian shooters will face intense competition in Aichi-Nagoya, but the depth of the country's shooting programme provides reasons for optimism.</p>
      <p class="mb-6">Unlike some team sports, shooting competitions can produce several medal opportunities within a single day.</p>
      <p class="mb-6">However, the pressure is immense.</p>
      <p class="mb-6">A small technical error can affect an athlete's ranking, making concentration and mental preparation essential.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Boxing Preparation Intensifies</h3>
      <p class="mb-6">Indian boxers have also been undergoing extensive preparation.</p>
      <p class="mb-6">A multinational training camp has been organised at the Netaji Subhas National Institute of Sports in Patiala, with Indian boxers expected to continue preparations in Nagoya before the competition begins. (<a href="https://www.ndtv.com/topic/asian-games-2026?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:underline">ndtv.com</a>)</p>
      <p class="mb-6">Training alongside international competitors can help India's boxers prepare for different fighting styles.</p>
      <p class="mb-6">The final weeks will be focused on balancing training intensity and recovery.</p>
      <p class="mb-6">Boxing tournaments can be physically demanding, and athletes need to arrive at the event without unnecessary fatigue.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Badminton Continues to Grow</h3>
      <p class="mb-6">Badminton has also become a major part of India's sporting identity.</p>
      <p class="mb-6">The emergence of world-class Indian players over the past decade has increased expectations at multi-sport events.</p>
      <p class="mb-6">Singles and doubles competitions offer multiple medal opportunities, although the depth of Asian badminton means competition will be extremely strong.</p>
      <p class="mb-6">China, Japan, Indonesia, South Korea and other nations have traditionally produced elite players.</p>
      <p class="mb-6">For India, success will depend on both established names and emerging competitors handling the pressure of knockout competition.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">The Importance of Young Athletes</h3>
      <p class="mb-6">One of the most valuable aspects of the Asian Games is the opportunity it provides to younger athletes.</p>
      <p class="mb-6">Not every competitor arrives with medal expectations.</p>
      <p class="mb-6">For some, simply reaching the event represents an important career milestone.</p>
      <p class="mb-6">Competing against experienced international athletes can accelerate development and provide lessons that cannot be gained through domestic competitions alone.</p>
      <p class="mb-6">India's long-term sporting success will depend partly on converting these experiences into future international performances.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Predictions Can Only Go So Far</h3>
      <p class="mb-6">With the Asian Games approaching, discussion around medal forecasts and predictions is naturally increasing.</p>
      <p class="mb-6">India's previous performances can provide useful indicators, but they cannot guarantee future results.</p>
      <p class="mb-6">Sport is unpredictable, particularly in individual events where injuries, draws, weather conditions and performance on a particular day can change the outcome.</p>
      <p class="mb-6">The same applies to team sports.</p>
      <p class="mb-6">A strong side can still be eliminated after one poor performance in a knockout competition.</p>
      <p class="mb-6">For supporters following predictions, the most useful approach is to consider them as probability-based assessments rather than certain outcomes.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">India's Broader Sporting Ambition</h3>
      <p class="mb-6">The Asian Games represent an important part of India's wider sporting development.</p>
      <p class="mb-6">While cricket receives the greatest attention in the country, success across multiple sports is increasingly becoming part of India's sporting identity.</p>
      <p class="mb-6">Medals in shooting, athletics, boxing, badminton and hockey can inspire young athletes to pursue disciplines that traditionally received less mainstream attention.</p>
      <p class="mb-6">The multi-sport nature of the Asian Games therefore provides an opportunity to showcase the breadth of Indian talent.</p>

      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">A Month to Remember</h3>
      <p class="mb-6">The Aichi-Nagoya Asian Games will provide Indian athletes with another opportunity to compete at the highest level in Asia.</p>
      <p class="mb-6">Cricket will draw enormous attention, particularly because India are defending champions. Hockey, athletics, shooting, boxing and badminton could provide additional medal opportunities.</p>
      <p class="mb-6">For the athletes, the focus will now shift from preparation to execution.</p>
      <p class="mb-6">The coming weeks will reveal which competitors can handle the pressure, adapt to the conditions and produce their best performances when medals are at stake.</p>
      <p class="mb-6">For Indian fans, September promises an exciting sporting period — one where established champions can strengthen their legacy and emerging athletes can introduce themselves to the country.</p>
      <p class="mb-6">The Asian Games are not simply about medal totals. They are also about identifying the next generation of Indian sporting stars.</p>
    `
  },
  {
    id: 'ipl-betting-tips-2024',
    title: 'Top IPL Betting Tips for 2026 Season',
    excerpt: 'Get the best strategies for IPL betting this season. Learn how to analyze team performance, pitch conditions, and player form to maximize your winnings.',
    category: 'Cricket Betting',
    date: 'June 1, 2026',
    readTime: '5 min read',
    emoji: '🏏',
    color: 'from-red-900/30 to-black',
    content: `
      <p class="mb-6">The Indian Premier League (IPL) 2026 is set to be one of the most exciting tournaments in cricket history. With teams packed with international stars and emerging domestic talents, betting on IPL matches requires deep analysis and a strategic approach. Here is our comprehensive guide to help you make informed decisions and get the most out of your Tiger365 ID.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">1. Understand Pitch and Weather Conditions</h3>
      <p class="mb-6">Pitch conditions play a vital role in the outcome of T20 matches in India. Venues like Wankhede (Mumbai) and Chinnaswamy (Bengaluru) are historically high-scoring due to short boundaries and flat wickets, making them ideal for backing the team chasing. On the other hand, slow, spin-friendly pitches like Chepauk (Chennai) favor teams with quality spin bowlers and require a different strategy.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">2. Analyze Player Form and Matchups</h3>
      <p class="mb-6">Pre-match matchups are highly critical. Check head-to-head stats of key batsmen against specific bowlers. For instance, if an opening batsman struggles against left-arm fast bowling, look at the opponent's bowling attack. Using your Tiger365 exchange ID, you can capitalize on these specific matchups live as they unfold.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">3. Live Betting is Key</h3>
      <p class="mb-6">T20 cricket swings rapidly. Backing a team before the match begins might offer lower odds compared to wait-and-watch tactics. Live betting on the Tiger365 platform allows you to assess the game's tempo, the dew factor in night matches, and the exact match situation before placing your bets.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">4. Manage Your Bankroll Wisely</h3>
      <p class="mb-6">Never wager more than you can afford to lose. Set a budget for the entire IPL season and divide it into smaller units. Typically, you should not stake more than 2% to 5% of your total bankroll on a single match.</p>
    `
  },
  {
    id: 't20-world-cup-guide',
    title: 'Complete Guide to T20 World Cup Betting',
    excerpt: 'Everything you need to know about betting on the T20 World Cup. Markets, odds, and expert predictions to help you make informed decisions.',
    category: 'Tournament Guide',
    date: 'May 28, 2026',
    readTime: '7 min read',
    emoji: '🏆',
    color: 'from-yellow-900/30 to-black',
    content: `
      <p class="mb-6">The T20 World Cup brings together the best international cricket teams in the ultimate showcase of speed and skill. With matches happening in quick succession across varied international pitches, tournament betting offers a unique set of opportunities and challenges. This guide will walk you through the essential strategies for T20 World Cup betting using your Tiger365 Online ID.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">1. Spotting Value in Group Stages</h3>
      <p class="mb-6">During the early group phases, top-tier teams often face associate nations. While the outright winner odds for the favorites will be very low, value can be found in alternative markets such as "Top Team Batsman", "Total Sixes in the Match", or "Highest Opening Partnership". Analyze the associative teams carefully—sometimes their spin bowlers can restrict bigger teams, leading to interesting under/over run-total bets.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">2. The Importance of Dew Factor</h3>
      <p class="mb-6">In day-night matches, especially in subcontinental regions, dew plays a massive role in the second innings. It makes the ball slippery, making spin bowling difficult and helping batsmen hit the ball easily. Historically, teams winning the toss choose to bowl first in such conditions. Factor this into your live betting strategy on Tiger365.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">3. Analyze Squad Depth and Rotation</h3>
      <p class="mb-6">Multi-week tournaments are physically demanding. Teams with strong bench strength and all-rounders have a clear advantage. Check for injuries and player fatigue, as rotation policies might rest key players in less critical matches, affecting the outcome.</p>
    `
  },
  {
    id: 'aviator-game-strategy',
    title: 'Aviator Game Strategy: How to Play Smart',
    excerpt: 'Master the Aviator crash game with these proven strategies. Understand the mechanics, manage your bankroll, and know when to cash out.',
    category: 'Casino Games',
    date: 'May 25, 2026',
    readTime: '4 min read',
    emoji: '✈️',
    color: 'from-blue-900/30 to-black',
    content: `
      <p class="mb-6">Aviator is one of the most popular crash games available on modern gaming platforms. Its simple premise—cashing out before the airplane flies away—is incredibly engaging. However, to win consistently, you need more than luck. You need a structured strategy. Here is how you can play smart and increase your success rate on Tiger365.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">1. Understand the Mechanics</h3>
      <p class="mb-6">Aviator works on a Provably Fair algorithm, which means every round is completely transparent and random. The multiplier starts at 1.00x and can grow infinitely, but the plane can fly away at any moment. There is no way to predict the exact time, but you can manage your risks.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">2. The Double Bet Strategy</h3>
      <p class="mb-6">This is one of the most effective strategies for Aviator. Place two bets before the round starts:</p>
      <ul class="list-disc list-inside mb-6 space-y-2 text-gray-300">
        <li><strong>Bet 1:</strong> Make it larger, and set the auto-cashout to 1.50x. This is designed to cover the stake of both bets if won.</li>
        <li><strong>Bet 2:</strong> Make it smaller, and let it ride to higher multipliers (e.g., 3.00x, 5.00x, or even more) to lock in pure profits.</li>
      </ul>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">3. Set Strict Stop-Loss Limits</h3>
      <p class="mb-6">Crash games are fast-paced, and it is easy to chase losses. Always decide on a maximum budget for your gaming session. If you hit your limit, stop playing immediately and come back another day.</p>
    `
  },
  {
    id: 'cricket-id-vs-exchange',
    title: 'Cricket ID vs Betting Exchange: What\'s the Difference?',
    excerpt: 'Confused about cricket IDs and betting exchanges? We explain the key differences, advantages, and how Tiger365 ID gives you access to both.',
    category: 'Beginner Guide',
    date: 'May 20, 2026',
    readTime: '6 min read',
    emoji: '📊',
    color: 'from-green-900/30 to-black',
    content: `
      <p class="mb-6">For newcomers to online sports gaming in India, the terminology can be confusing. You might have heard terms like "Online Cricket ID" and "Betting Exchange" used interchangeably. However, they refer to two different aspects of the gaming ecosystem. Understanding the difference is crucial for a smooth gaming journey, and Tiger365 ID gives you access to both.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">What is an Online Cricket ID?</h3>
      <p class="mb-6">Think of an Online Cricket ID as your universal passport or account. It is a secure username and password created by a trusted provider like Tiger365. This ID allows you to log into major betting platforms, deposit money securely in INR, and withdraw your winnings quickly via local methods like UPI or bank transfer.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">What is a Betting Exchange?</h3>
      <p class="mb-6">A traditional bookmaker sets the odds, and you bet against the house. In contrast, a <strong>Betting Exchange</strong> is a marketplace where players bet against other players. You can either back an outcome (agree that it will happen) or lay an outcome (bet that it will not happen). This gives you better odds and much more control over your bets.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">Why Choose Tiger365?</h3>
      <p class="mb-6">Tiger365 acts as a bridge. By getting a single Tiger365 ID, you gain direct access to India's top exchange platforms with 24/7 customer service and instant deposit/withdrawal processing, combining the best of both worlds.</p>
    `
  },
  {
    id: 'safe-betting-tips',
    title: '10 Tips for Safe and Responsible Betting in India',
    excerpt: 'Stay safe while enjoying online sports betting. These 10 essential tips will help you bet responsibly, manage your bankroll, and avoid common mistakes.',
    category: 'Safety',
    date: 'May 15, 2026',
    readTime: '8 min read',
    emoji: '🔒',
    color: 'from-purple-900/30 to-black',
    content: `
      <p class="mb-6">Online sports betting is a thrilling way to engage with your favorite sports, but safety and responsibility should always be your top priorities. To ensure you have a fun and secure experience, we have compiled the top 10 tips for safe betting in India using a verified Tiger365 ID.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">1. Use Only Verified Providers</h3>
      <p class="mb-6">Never buy IDs from unverified agents on social media. Always use official platforms like Tiger365 to ensure your funds are secure and you receive genuine support.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">2. Treat Betting as Entertainment, Not an Income</h3>
      <p class="mb-6">Keep a healthy mindset. Betting is designed for amusement. When you view it as a primary source of income, it leads to stressful decision-making and poor choices.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">3. Keep Your Account Details Secure</h3>
      <p class="mb-6">Never share your Tiger365 ID password or PIN with anyone. Change your password periodically and use strong combinations of letters, numbers, and symbols.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">4. Take Regular Breaks</h3>
      <p class="mb-6">Do not spend hours staring at odds. Set a time limit for your gaming sessions and stick to it to maintain absolute focus and emotional control.</p>
    `
  },
  {
    id: 'upi-betting-deposits',
    title: 'How to Deposit and Withdraw via UPI for Betting',
    excerpt: 'Step-by-step guide on making deposits and withdrawals for your cricket betting ID using UPI, IMPS, and other Indian payment methods.',
    category: 'Payments',
    date: 'May 10, 2026',
    readTime: '3 min read',
    emoji: '💳',
    color: 'from-red-900/30 to-black',
    content: `
      <p class="mb-6">UPI (Unified Payments Interface) has revolutionized digital transactions in India, making them instant and hassle-free. At Tiger365, we support UPI deposits and withdrawals to give you the fastest transaction times. Read this simple guide on how to manage your funds smoothly.</p>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">How to Deposit Funds</h3>
      <p class="mb-6">Follow these simple steps to add balance to your Tiger365 ID account:</p>
      <ol class="list-decimal list-inside mb-6 space-y-2 text-gray-300">
        <li>Contact our customer support team on WhatsApp to request the current deposit details.</li>
        <li>Open your preferred UPI app (Google Pay, PhonePe, Paytm, or BHIM) and make the transfer.</li>
        <li>Take a screenshot of the transaction receipt (showing the UTR or Transaction Ref Number).</li>
        <li>Send the screenshot along with your Tiger365 username to our WhatsApp chat. The balance will reflect in your account within 5-10 minutes.</li>
      </ol>
      
      <h3 class="text-2xl font-bold text-red-500 mt-8 mb-4">How to Withdraw Your Winnings</h3>
      <p class="mb-6">Cashing out your winnings is just as easy:</p>
      <ol class="list-decimal list-inside mb-6 space-y-2 text-gray-300">
        <li>Send a withdrawal request message to our WhatsApp support indicating your username and the amount you want to withdraw.</li>
        <li>Provide your UPI ID or bank account details.</li>
        <li>Our team will process the request and transfer the funds directly to your account. Withdrawals are processed 24/7.</li>
      </ol>
    `
  }
];



interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);
  if (!post) return { title: 'Post Not Found' };
  
  const canonicalUrl = `/blog/${post.id}`;
  const fullTitle = `${post.title} – Tiger 365 ID`;

  return {
    title: fullTitle,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: post.excerpt,
      url: `https://tiger365now.com${canonicalUrl}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

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
                {post.category}
              </span>
              <span className="text-gray-500 text-xs">{post.readTime}</span>
              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-500 text-xs">{post.date}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-amber-400 rounded-full mb-8"></div>
          </header>

          {/* Feature/Emoji banner */}
          <div className={`bg-gradient-to-r ${post.color} border border-gray-800 rounded-3xl p-12 text-center text-7xl mb-10 shadow-2xl`}>
            {post.emoji}
          </div>

          {/* Body and Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 text-gray-300 leading-relaxed text-base sm:text-lg">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="prose prose-invert max-w-none"
              />
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
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

'use client';

export default function Disclaimer() {
  return (
    <section id="disclaimer" className="py-10 bg-black border-t border-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111111] border border-red-500/10 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-3">
            {/* Warning icon */}
            <div className="flex-shrink-0 mt-0.5">
              <svg className="w-5 h-5 text-red-500/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-red-500/80 font-bold text-sm uppercase tracking-wider mb-3">Disclaimer</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-semibold text-gray-500">Heads up: tiger365now.com is just an informational site—we don't run a betting service ourselves.</span>{' '}
                Everything here is meant for informational and educational purposes. We aren't a gambling platform; we just help you get online gaming IDs.
                We aren't directly involved in the betting or wagering itself. It's totally up to you to check if using these kinds of services is legal where you live.
                We can't be held responsible for any money you might lose, any legal trouble you run into, or anything else that happens from using IDs you got through us.
                Please double-check your local laws before you dive in. By sticking around and using this site, you're agreeing to this disclaimer.
                Remember, gambling can be addictive, so always play it safe and bet responsibly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

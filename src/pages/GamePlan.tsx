import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { handleClioClick } from "@/lib/clioConversion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";
 
const GamePlan = () => {
  const handleGamePlanClick = (e) => {
    // Trigger Google Ads conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18170107582/mo-dCOjRqLgcEL6tl9hD',
        'value': 99.0,
        'currency': 'USD'
      });
    }
  };
 
  return (
    <div className="min-h-screen pt-16">
      <SEO
        title={"The GAME Plan | Scoreboard Legal"}
        description={"Legal and strategy membership for athletes, coaches, entertainers, and creators. Combining legal counsel with Scoreboard Strategy — starting at $99/month."}
        path={"/game-plan"}
      />
 
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            The <span className="text-brand-red">GAME</span> Plan
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Legal + Strategy for Athletes, Coaches &amp; Entertainers
          </p>
          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center justify-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Services
            </a>
          </div>
        </div>
      </section>

      {/* GAME Acronym Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { letter: 'G', word: 'Guidance', desc: 'Expert legal and business advice to navigate your career and every opportunity in it.' },
              { letter: 'A', word: 'Advocacy', desc: 'Protecting your interests, your name, and your rights at every stage.' },
              { letter: 'M', word: 'Management', desc: 'Strategic oversight of your business matters, brand, and off-field ventures.' },
              { letter: 'E', word: 'Execution', desc: 'Turning strategy into action with precision, preparation, and business rigor.' },
            ].map(({ letter, word, desc }) => (
              <div key={letter} className="bg-white rounded-lg border border-gray-200 p-6 text-center">
                <div className="text-5xl font-heading font-bold text-brand-red mb-2">{letter}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{word}</div>
                <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
              Your career moves fast. The GAME Plan is built to keep up.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
              Purpose-built for athletes, coaches, entertainers, and creators, it combines legal counsel with Scoreboard Strategy — ongoing business guidance for the deals, decisions, and opportunities that define your career. Every client has their own scoreboard. We take the time to learn what's on yours, then we get to work.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Month-to-month. No long-term commitment. Cancel anytime.
            </p>
            <a
              href="https://form.typeform.com/to/yfg59KJQ"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleGamePlanClick}
              className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Tier Cards Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
            Choose Your Tier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
 
            {/* Foundation Tier */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Foundation
              </h3>
              <p className="text-3xl font-bold text-brand-red mb-4">
                $99<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 flex-grow">
                {[
                  'Access to member portal, which includes a priority booking link and member-exclusive legal and business education content',
                  'Unlimited scheduled calls with attorney',
                  '5% discount on all flat-fee services',
                  'Standard response time',
                  'Monthly member newsletter — legal updates, practical guidance, and industry explainers',
                  'Quarterly Scoreboard Strategy session',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://form.typeform.com/to/yfg59KJQ"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGamePlanClick}
                className="block w-full text-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
 
            {/* Growth Tier */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Growth
              </h3>
              <p className="text-3xl font-bold text-brand-red mb-4">
                $249<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 flex-grow">
                {[
                  'Everything in Foundation',
                  '15% discount on all flat-fee services',
                  'One (1) contract review per month (up to 10 pages, full redline included) — benefits reset at the beginning of each month',
                  'Priority response time',
                  'Monthly Scoreboard Strategy session',
                  'Advisory on brand deals and business opportunities',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://form.typeform.com/to/yfg59KJQ"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGamePlanClick}
                className="block w-full text-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
 
            {/* Legacy Tier */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Legacy
              </h3>
              <p className="text-3xl font-bold text-brand-red mb-4">
                $499<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 flex-grow">
                {[
                  'Everything in Growth',
                  '25% discount on all flat-fee services',
                  'Two (2) contract reviews per month (up to 10 pages each, full redline included) — benefits reset at the beginning of each month',
                  'Dedicated phone line',
                  'Dedicated priority response time',
                  'Monthly Scoreboard Strategy session',
                  'Ongoing business management guidance',
                  'Annual legal audit — review of business structure, contracts, and compliance posture',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://form.typeform.com/to/yfg59KJQ"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleGamePlanClick}
                className="block w-full text-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
 
          </div>
        </div>
      </section>
 
      {/* How It Works Section */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            How It Works
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                {
                  n: 1,
                  title: 'Choose Your Tier',
                  desc: 'Select the membership tier that works for you and click Get Started to complete your intake.',
                },
                {
                  n: 2,
                  title: 'Access Your Member Portal',
                  desc: 'Once enrolled, you will receive access to your member portal within 24 hours. Your portal includes your member-exclusive booking link, which you can use to schedule calls, consultations, and contract review submissions.',
                },
                {
                  n: 3,
                  title: 'Use Your Benefits',
                  desc: 'Access your monthly contract reviews, Scoreboard Strategy sessions, member discounts, educational content, and priority response time. Benefits reset on the first of each month.',
                },
                {
                  n: 4,
                  title: 'Scale When You\'re Ready',
                  desc: 'Upgrade or downgrade your tier at any time. Changes take effect at the start of the next month.',
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{n}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
 
      {/* Scoreboard Strategy Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            Scoreboard Strategy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-8">
            The GAME Plan goes beyond legal. Scoreboard Strategy is the business advisory layer built for your career — helping you evaluate opportunities, build your brand, and make decisions that compound over time.
          </p>
          <div className="space-y-4">
            {[
              { title: 'Brand Deal and Partnership Advisory', desc: 'Guidance on evaluating and structuring brand deals, endorsements, and partnerships.' },
              { title: 'Business Opportunity Evaluation', desc: 'Help assessing off-field ventures, investments, and business opportunities before you commit.' },
              { title: 'Career and Business Planning', desc: 'Strategic planning for the business of your career — now and after the final whistle.' },
              { title: 'NIL Strategy and Deal Structure', desc: 'Guidance on NIL opportunities, deal evaluation, and positioning your name, image, and likeness.' },
              { title: 'Transfer Portal Strategy', desc: 'Strategic guidance on portal decisions, program evaluation, and navigating the process.' },
              { title: 'Ongoing Business Management (Legacy)', desc: 'Hands-on business management support for Legacy members — across brand, ventures, and career decisions.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Additional Flat-Fee Services Section */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            Additional Flat-Fee Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mb-8">
            Membership gives you ongoing access and discounts. When you need specific legal work done, the following services are available as separate flat-fee engagements — with your member discount applied.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Contract negotiations and redlines',
              'NIL agreement drafting and review',
              'Revenue sharing agreement drafting and review',
              'Transfer portal representation and agreement review',
              'Sponsorship and endorsement agreements',
              'Recording, publishing and distribution agreements',
              'Content, creator and brand agreements',
              'Media rights and licensing agreements',
              'Business formation and entity structuring',
              'Employment and compensation agreements',
            ].map((item) => (
              <div key={item} className="flex items-start">
                <svg className="w-5 h-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* What's Included Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            What's Included
          </h2>
          <div className="space-y-4">
            {[
              { title: 'Member Portal', desc: 'All members receive access to a member portal that includes your exclusive booking link, priority scheduling access, and member resources.' },
              { title: 'Scoreboard Strategy Sessions', desc: 'Foundation members receive a quarterly strategy session. Growth and Legacy members receive a monthly strategy session covering brand, business, and career decisions.' },
              { title: 'Service Discounts', desc: 'Save 5%, 15%, or 25% on all new Scoreboard Legal flat-fee engagements depending on your tier. Discounts apply to new matters only.' },
              { title: 'Legal and Business Education Content', desc: 'All members receive access to member-exclusive checklists, guides, and practical resources tailored to athletes, entertainers, and creators.' },
              { title: 'Contract Reviews', desc: 'Growth and Legacy members receive one or two attorney contract reviews per month respectively, up to 10 pages each, with full redline included. For contracts exceeding 10 pages, additional charges may apply.' },
              { title: 'Annual Legal Audit', desc: 'Legacy members receive an annual review of their business structure, contracts, and compliance posture.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* What's Not Included Section */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
            What's Not Included
          </h2>
          <div className="space-y-4">
            {[
              { title: 'General Retainer', desc: 'Membership does not constitute a general retainer or guarantee of availability for all legal matters.' },
              { title: 'Jurisdiction-Specific Matters Outside Illinois & Florida', desc: 'Scoreboard Legal, PLLC is licensed in Illinois and Florida. Members outside these states may require locally licensed counsel for jurisdiction-specific matters.' },
              { title: 'Litigation & Court Appearances', desc: 'Membership does not cover active litigation, contested matters, or court appearances. These are handled under separate engagement agreements.' },
              { title: 'Rollover Benefits', desc: 'Unused contract reviews do not roll over month to month and have no cash value. Benefits reset on the first of each month.' },
              { title: 'Negotiation & Correspondence', desc: 'Monthly contract reviews are redline and analysis only. Negotiation, correspondence with opposing counsel, and additional review rounds require a separate flat-fee engagement.' },
              { title: 'Agent Services', desc: 'Scoreboard Legal does not serve as a certified player agent. GAME Plan services are legal and business advisory in nature and do not constitute player representation under applicable sports agent regulations.' },
            ].map(({ title, desc }) => (
              <div key={title} className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
      {/* Expedited Note */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-red/5 border border-brand-red/20 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Need a faster turnaround on a contract review? Expedited review is available for Growth and Legacy member contract reviews subject to availability. Indicate your expedited request when submitting your contract and our team will confirm availability and any applicable fee.
            </p>
          </div>
        </div>
      </section>
 
      {/* FAQ Section */}
      <section className="bg-white py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="bg-gray-50 rounded-xl border border-gray-200 px-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                How do I access my member portal?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Your member portal access will be sent to you within 24 hours of enrollment. Your portal includes your member-exclusive booking link and access to member resources.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What is a Scoreboard Strategy session?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                A Scoreboard Strategy session is a scheduled call focused on the business side of your career. Topics may include brand deal evaluation, NIL strategy, business opportunity assessment, transfer portal decisions, off-field ventures, and career planning. Foundation members receive one session per quarter. Growth and Legacy members receive one session per month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Can I upgrade or downgrade my tier?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Yes. You can change your tier at any time. Changes take effect at the start of the next month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Do unused benefits roll over?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                No. Unused contract reviews and unused strategy sessions do not roll over month to month and have no cash value. Benefits reset at the beginning of each month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What counts as a contract review (Growth and Legacy tiers)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Each contract review covers a single document of up to 10 pages submitted in Word format, in English. The review includes a full attorney redline and written comments. For contracts exceeding 10 pages, additional charges may apply.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Is this the same as having a sports agent?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                No. Scoreboard Legal does not serve as a certified player agent and does not provide player representation under applicable sports agent regulations. The GAME Plan provides legal counsel and business advisory services. Contract negotiations are available as separate flat-fee engagements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Does membership create an attorney-client relationship?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Membership alone does not establish an attorney-client relationship for matters beyond those expressly described. A formal attorney-client relationship for any specific legal matter is established upon execution of a signed engagement letter.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Can I cancel anytime?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Yes. All memberships are month-to-month and cancellable with 30 days written notice. All membership fees are non-refundable.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
 
      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Ready to get on the board?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join today and get access to your member portal within 24 hours.
          </p>
          <a
            href="https://scoreboardlegal.cliogrow.com/intake/54241e64c761661243625875133ef0d0"
            onClick={handleGamePlanClick}
            className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Get Started
          </a>
        </div>
      </section>
 
      {/* Page-Level Disclaimer */}
      <section className="py-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            Legal Advertisement. The GAME Plan memberships are not a general retainer and do not establish an attorney-client relationship outside of separately executed engagement letters. Membership benefits are non-transferable, non-refundable, and do not roll over. Additional services billed separately. Membership discounts apply to new flat-fee engagements only and may not be combined with other promotions or discounts. Scoreboard Legal, PLLC is licensed in Illinois and Florida only. Membership does not constitute legal representation in other jurisdictions. Scoreboard Legal, PLLC does not serve as a certified player agent. Scoreboard Legal, PLLC reserves the right to cap enrollment at any tier or modify membership benefits upon 30 days written notice.
          </p>
        </div>
      </section>
    </div>
  );
};
 
export default GamePlan;
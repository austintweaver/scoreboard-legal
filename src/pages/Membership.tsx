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

const Membership = () => {
  const handleMembershipClick = (e) => {
    // Trigger Google Ads conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18170107582/mo-dCOjRqLgcEL6tl9hD',
        'value': 99.0,
        'currency': 'USD'
      });
    }
    // Don't prevent default - let the browser handle the navigation with target="_blank"
  };

  return (
    <div className="min-h-screen pt-16">
      <SEO title={"Legal Membership | Scoreboard Legal"} description={"Membership-based legal support for individuals, businesses, creators, and contractors. Monthly access to an attorney, service discounts, priority scheduling, and legal resources — starting at $99/month."} path={"/membership"} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Legal <span className="text-brand-red">Membership</span>
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            A lawyer in your corner. Every round. Every month.
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

      {/* Hero Section */}
      <section className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
              Working with an attorney shouldn't be intimidating, and quality legal help shouldn't be out of reach. Scoreboard Legal memberships are built to change both.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-4">
              Every client has their own scoreboard. Whether you're protecting a business, closing a deal, or navigating a major life moment, we take the time to understand what winning looks like for you, then we get to work. The Legal Membership is how we stay in your corner consistently, not just when things go wrong, but as an ongoing resource as you build, transact, and grow.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
              Month-to-month. No long-term commitment. Cancel anytime.
            </p>
            <a
              href="https://scoreboardlegal.cliogrow.com/intake/54241e64c761661243625875133ef0d0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleMembershipClick}
              className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Tier Cards Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
            Choose Your Tier
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* Essential Tier */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Essential
              </h3>
              <p className="text-3xl font-bold text-brand-red mb-4">
                $99<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to member portal, which includes a priority booking link, and member-exclusive legal education content</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Unlimited scheduled calls with attorney</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>5% discount on all flat-fee services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Monthly member newsletter — legal updates, practical guidance, and business law explainers</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standard response time</span>
                </li>
              </ul>
              <a
                href="https://scoreboardlegal.cliogrow.com/intake/54241e64c761661243625875133ef0d0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMembershipClick}
                className="block w-full text-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Plus Tier */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Plus
              </h3>
              <p className="text-3xl font-bold text-brand-red mb-4">
                $249<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Essential</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>15% discount on all flat-fee services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One (1) contract review per month (up to 10 pages, full redline included) — benefits reset at the beginning of each month</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to Scoreboard Legal's template library, including attorney-drafted contract templates for common business and individual needs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority response time</span>
                </li>
              </ul>
              <a
                href="https://scoreboardlegal.cliogrow.com/intake/54241e64c761661243625875133ef0d0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMembershipClick}
                className="block w-full text-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Premium Tier */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Premium
              </h3>
              <p className="text-3xl font-bold text-brand-red mb-4">
                $499<span className="text-lg text-gray-600">/month</span>
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Plus</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>25% discount on all flat-fee services</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Two (2) contract reviews per month (up to 10 pages each, full redline included) — benefits reset at the beginning of each month</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated phone line</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual legal audit — review of business structure, contracts, and compliance posture</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated priority response time</span>
                </li>
              </ul>
              <a
                href="https://scoreboardlegal.cliogrow.com/intake/54241e64c761661243625875133ef0d0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleMembershipClick}
                className="block w-full text-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Fractional General Counsel Tier */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-300 hover:shadow-md hover:border-brand-red/20 transition-all duration-300 flex flex-col">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Need More?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                If you need more than what our membership tiers offer, let's discuss our Fractional General Counsel service.
              </p>
              <ul className="space-y-3 mb-6 text-sm text-gray-600 flex-grow">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ongoing legal and strategic support integrated into your business operations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized engagement based on your specific needs and growth stage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Transparent pricing with no hidden fees or hourly billing surprises</span>
                </li>
              </ul>
              <a
                href="/fractional-general-counsel"
                className="block w-full text-center bg-brand-red hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
              How It Works
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Choose Your Tier
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Select the membership tier that works for you and click Get Started to complete your intake.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Access Your Member Portal
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Once enrolled, you will receive access to your member portal within 24 hours. Your portal includes your member-exclusive booking link, which you can use to schedule calls, consultations, and contract review submissions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Use Your Benefits
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Access your monthly contract templates or reviews, member discounts, educational content, and priority response time. Benefits reset on the first of each month.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Scale When You're Ready
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Upgrade or downgrade your tier at any time. Changes take effect at the start of the next month.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
              What's Included
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Member Portal
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All members receive access to a member portal that includes your exclusive booking link, priority scheduling access, and member resources.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Service Discounts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Save 5%, 15%, or 25% on all new Scoreboard Legal flat-fee engagements depending on your tier. Discounts apply to new matters only.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Legal Education Content
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All members receive access to member-exclusive checklists, guides, and practical resources on common legal topics for small business owners, creators, and individuals.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Contract Reviews
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Plus and Premium members receive one or two attorney contract reviews per month respectively, up to 10 pages each, with full redline included. For contracts exceeding 10 pages, additional charges may apply.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Template Library
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Plus and Premium members receive access to Scoreboard Legal's library of attorney-drafted contract templates for common business and individual needs.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Annual Legal Audit
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Premium members receive an annual review of their business structure, contracts, and compliance posture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Not Included Section */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4 text-center">
              What's Not Included
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  General Retainer
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Membership does not constitute a general retainer or guarantee of availability for all legal matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Jurisdiction-Specific Matters Outside Illinois & Florida
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Scoreboard Legal, PLLC is licensed in Illinois and Florida. Members outside these states may require locally licensed counsel for jurisdiction-specific matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Litigation & Court Appearances
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Membership does not cover active litigation, contested matters, or court appearances. These are handled under separate engagement agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Rollover Benefits
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Unused contract reviews do not roll over month to month and have no cash value. Benefits reset on the first of each month.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Negotiation & Correspondence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Monthly contract reviews are redline and analysis only. Negotiation, correspondence with opposing counsel, and additional review rounds require a separate flat-fee engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expedited Note */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-red/5 border border-brand-red/20 rounded-lg p-6">
            <p className="text-gray-700 leading-relaxed">
              Need a faster turnaround on a contract review? Expedited review is available for Plus and Premium member contract reviews subject to availability. Indicate your expedited request when submitting your contract and our team will confirm availability and any applicable fee.
            </p>
          </div>
        </div>
      </section>

      {/* Template Disclaimer */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-red/5 border border-brand-red/20 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Contract Templates — Important Notice
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The contract templates available to members are provided strictly for informational and general reference purposes and do not constitute legal advice, legal representation, or a legal opinion of any kind. Templates are generic in nature and are not drafted, reviewed, or tailored to any specific individual, situation, transaction, or jurisdiction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Use of any template does not create an attorney-client relationship between you and Scoreboard Legal, PLLC, its attorneys, or any affiliated personnel. Templates may not reflect current law in your jurisdiction and should not be relied upon as legally sufficient for any particular purpose without independent legal review.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Scoreboard Legal, PLLC expressly disclaims all warranties, express or implied, regarding the accuracy, completeness, suitability, or legal sufficiency of any template. Scoreboard Legal, PLLC assumes no liability for any damages, losses, disputes, or claims of any kind arising from or related to the use, modification, or execution of any template available through the membership program.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Before using, modifying, or executing any template, you are strongly encouraged to consult with a licensed attorney in your jurisdiction. Members requiring attorney review of a specific document may submit it for review under their applicable membership tier or contact Scoreboard Legal, PLLC directly to discuss a separate flat-fee engagement.
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
                Can I upgrade or downgrade my tier?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Yes. You can change your tier at any time. Changes take effect at the start of the next month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Do unused benefits roll over?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                No. Unused contract reviews (Plus and Premium tiers) do not roll over month to month and have no cash value. Benefits reset at the beginning of each month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What counts as a contract review (Plus and Premium tiers)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Each contract review covers a single document of up to 10 pages submitted in Word format, in English. The review includes a full attorney redline and written comments. For contracts exceeding 10 pages, additional charges may apply.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What is the template library (Plus and Premium tiers)?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Plus and Premium members receive access to Scoreboard Legal's library of attorney-drafted contract templates for common business and individual needs. Templates are provided as-is and are not customized to a specific transaction. Custom drafting is available as a separate flat-fee engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Does membership create an attorney-client relationship?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Membership alone does not establish an attorney-client relationship for matters beyond those expressly described. A formal attorney-client relationship for any specific legal matter is established upon execution of a signed engagement letter.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
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
            onClick={handleMembershipClick}
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
            Legal Advertisement. Scoreboard Legal memberships are not a general retainer and do not establish an attorney-client relationship outside of separately executed engagement letters. Membership benefits are non-transferable, non-refundable, and do not roll over. Additional services billed separately. Membership discounts apply to new flat-fee engagements only and may not be combined with other promotions or discounts. Scoreboard Legal, PLLC is licensed in Illinois and Florida only. Membership does not constitute legal representation in other jurisdictions. Scoreboard Legal, PLLC reserves the right to cap enrollment at any tier or modify membership benefits upon 30 days written notice.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Membership;

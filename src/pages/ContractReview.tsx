import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { handleClioClick } from "@/lib/clioConversion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContractReview = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Contract Review Services',
            'description': 'Professional Contract Review Services - Scoreboard Legal provides thorough contract review and analysis for businesses, founders, operators, athletes, and creators to ensure your agreements protect your interests and align with your business objectives.',
            'provider': {
              '@type': 'Organization',
              'name': 'Scoreboard Legal, PLLC',
              'url': 'https://www.scoreboardlegal.com'
            },
            'areaServed': 'Florida',
            'hasOfferCatalog': {
              '@type': 'OfferCatalog',
              'name': 'Legal Services',
              'itemListElement': [
                {
                  '@type': 'Offer',
                  'itemOffered': 'Contract review and analysis',
                  'name': 'Contract Review Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Risk assessment',
                  'name': 'Risk Assessment Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Contract negotiation support',
                  'name': 'Negotiation Support Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Redline and markup',
                  'name': 'Redline Services'
                }
              ]
            }
          })
        }}
      />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Flat-Fee <span className="text-brand-red">Contract Review</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transparent Legal Review for a Single Flat Fee
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
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Not every legal situation requires a full engagement. Sometimes you just need an attorney to read the contract, tell you what you're agreeing to, and flag what needs attention before you sign.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Scoreboard Legal offers straightforward legal feedback on contracts without the overhead of a traditional engagement. Our flat-fee structure means you know exactly what you're paying before we start.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Additional services — including negotiation support, additional review rounds, and follow-on advice — are scoped and priced separately, so you stay in control of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              How It Works
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Submit Your Intake
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Complete the intake form and submit your contract for scope confirmation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      15-Minute Attorney Call
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A licensed attorney connects with you briefly to get background on the contract and understand your goals before the review begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Attorney Review
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Your attorney reviews the contract and prepares a written redline with comments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Receive Your Redline
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      You receive your marked-up contract within 5 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Not Included Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              What's Not Included
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Opinion Letters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This engagement does not include formal legal opinion letters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real Estate Purchase Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Property acquisition contracts are outside the scope of this offering.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Settlement Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Matters involving dispute resolution or settlement are excluded.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Active Litigation Matters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If there is an existing dispute or legal proceeding, this offering does not apply.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Multi-Party Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This offering covers bilateral contracts only. Agreements with more than two parties require a separate scope.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  IP Assignments & Licensing Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intellectual property transfers and licensing deals are excluded due to their complexity.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Contracts Requiring Interpretation of Another State's Statutes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This review does not constitute legal advice regarding the laws of any jurisdiction other than Illinois and Florida.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Non-English Language Contracts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  All contracts submitted must be in English.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            Related Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/commercial-transactions"
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Commercial Transactions
              </h3>
              <p className="text-gray-600 text-sm">
                Drafting, review, and negotiation of business agreements
              </p>
            </Link>
            <Link
              to="/fractional-general-counsel"
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fractional General Counsel
              </h3>
              <p className="text-gray-600 text-sm">
                Ongoing legal support for businesses and founders
              </p>
            </Link>
            <Link
              to="/business-disputes"
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Business Disputes
              </h3>
              <p className="text-gray-600 text-sm">
                Legal support when agreements break down
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              Our Perspective
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Clarity Over Complexity
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      A contract review shouldn't feel like a mystery. We tell you plainly what you're agreeing to, what's been flagged, and why it matters — so you can make an informed decision before you sign.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Defined Scope Protects Everyone
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe flat-fee legal work is only fair when both sides know exactly what's included. That's why we're upfront about what this engagement covers and what it doesn't — no surprises on either end.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="bg-gray-50 rounded-xl border border-gray-200 px-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What types of contracts do you review?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                We review a wide range of bilateral commercial contracts including business agreements, vendor and service contracts, sponsorship and partnership deals, employment agreements, and sports and entertainment contracts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What does the $500 fee include?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                The fee covers intake and scope confirmation, a 15-minute attorney call, one full attorney review, and a written redline with comments. It does not include additional review rounds, negotiations, or follow-on legal advice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                How long does the review take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                You will receive your redline within 5 business days of the attorney call and scope confirmation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What if I need more than a review?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                If you need negotiation support, additional review rounds, or ongoing legal advice, we will scope that separately so you know the cost before any additional work begins.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What contracts are excluded from this offering?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                This offering does not cover opinion letters, real estate purchase agreements, settlement agreements, active litigation matters, multi-party agreements, IP assignments and licensing agreements, contracts requiring interpretation of another state's statutes, or non-English language contracts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Ready to get your contract reviewed?
          </h2>
          <a
            href="https://scoreboardlegal.cliogrow.com/intake/b73c29a4a400707057c4c05ee6fd4ecc"
            onClick={handleClioClick}
            className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Book Your Review
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContractReview;

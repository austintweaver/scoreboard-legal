import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { handleClioClick } from "@/lib/clioConversion";
import {
import SEO from "@/components/SEO";
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MergersAcquisitions = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO title={"M&A Attorney Illinois | Mergers & Acquisitions | Scoreboard Legal"} description={"Illinois mergers and acquisitions counsel for buyers and sellers. Due diligence, deal structuring, purchase agreements, and closing support."} path={"/mergers-acquisitions"} />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Mergers <span className="text-brand-red">&</span> Acquisitions Legal Services',
            'description': 'Strategic Legal Guidance for Business Transactions - Scoreboard Legal assists businesses, founders, operators, investors, and strategic transactions with mergers, acquisitions, strategic transactions, and related business matters.',
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
                  'itemOffered': 'Asset and equity purchase transactions',
                  'name': 'Asset Purchase Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Strategic acquisitions',
                  'name': 'Strategic Acquisition Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Transaction structuring',
                  'name': 'Transaction Structuring Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Due diligence support',
                  'name': 'Due Diligence Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Letter of intent review and drafting',
                  'name': 'Letter of Intent Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Purchase agreement coordination',
                  'name': 'Purchase Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Operational transaction planning',
                  'name': 'Operational Planning Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Investor and financing coordination',
                  'name': 'Investor Coordination Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Risk analysis and negotiation support',
                  'name': 'Risk Analysis Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Practical Deal Support',
                  'name': 'Deal Support Services'
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
            Mergers <span className="text-black">&</span> <span className="text-brand-red">Acquisitions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Strategic Legal Guidance for Business Transactions
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
              Acquisitions, investments, and strategic transactions require legal guidance that balances deal execution with long-term business considerations.
              <br /><br />
              Scoreboard Legal assists businesses, founders, operators, investors, and strategic transactions with mergers, acquisitions, strategic transactions, and related business matters. Our <Link to="/commercial-transactions" className="text-brand-red hover:underline">commercial transactions</Link> practice supports the underlying agreements that make deals work, while our <Link to="/corporate-formation-governance" className="text-brand-red hover:underline">corporate governance</Link> expertise ensures proper structure for complex transactions.
              <br /><br />
              We work closely with clients to help manage negotiations, diligence, transaction structuring, and operational considerations throughout the deal process. Our <Link to="/fractional-general-counsel" className="text-brand-red hover:underline">fractional general counsel</Link> services provide ongoing strategic guidance for businesses navigating growth and transition.
            </p>
                      </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 text-center">
              Services Include
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Asset and Equity Purchase Transactions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Acquisition and purchase of businesses, assets, and equity interests.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic Acquisitions
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic business acquisitions and growth transactions.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Transaction Structuring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deal structuring and transaction optimization services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Due Diligence Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive due diligence and analysis for M&A transactions.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Letter of Intent Review and Drafting
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic letter of intent development and negotiation support.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Purchase Agreement Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drafting and coordination of purchase agreements and closing documents.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Operational Transaction Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Integration planning for post-transaction operations and business integration.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Investor and Financing Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordination with investors, financing sources, and capital raising activities.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Risk Analysis and Negotiation Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deal risk assessment and strategic negotiation support.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Practical Deal Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Business-focused legal advice and operational guidance.
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
                Practical support for business transactions
              </p>
            </Link>
            <Link 
              to="/corporate-formation-governance" 
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Corporate Formation & Governance
              </h3>
              <p className="text-gray-600 text-sm">
                Building strong legal foundations for businesses
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
                Ongoing legal support for growing businesses
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
                      Strategic Evaluation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We help clients evaluate legal, financial, operational, and reputational considerations in order to pursue practical and business-minded solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Deal Execution
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We work closely with clients to help manage negotiations, diligence, transaction structuring, and operational considerations throughout the deal process.
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
                What types of M&A transactions do you handle?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                We handle asset purchases, stock purchases, mergers, strategic acquisitions, and joint ventures. Whether you're buying or selling a business, acquiring a competitor, or structuring a strategic partnership, we guide you through the entire transaction process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Why is due diligence important in M&A?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Due diligence reveals the true condition of a target business, identifying liabilities, risks, and opportunities that may not be apparent from surface-level review. Thorough due diligence helps you make informed decisions, negotiate appropriate terms, and avoid costly surprises after closing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                How long does an M&A transaction take?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                The timeline varies significantly based on transaction complexity, due diligence requirements, financing, and regulatory approvals. Simple transactions may close in a few weeks, while complex deals can take several months. We work efficiently to keep deals moving forward while ensuring thoroughness.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Discuss Your <span className="text-brand-red">Transaction</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can help structure, negotiate, and execute your M&A or strategic transaction.
          </p>
          <a
            href="https://scoreboardlegal.cliogrow.com/book"
            onClick={handleClioClick}
            className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default MergersAcquisitions;

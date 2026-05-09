import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RealEstate = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Real Estate Legal Services',
            'description': 'Real Estate Support for Businesses and Commercial Transactions - Scoreboard Legal provides practical legal support related to commercial real Estate transactions, operational agreements, and strategic business considerations involving real Estate assets and facilities.',
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
                  'itemOffered': 'Commercial lease review and negotiation',
                  'name': 'Commercial Lease Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Operational and facility agreements',
                  'name': 'Facility Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Vendor and property-related agreements',
                  'name': 'Property Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Real estate diligence support',
                  'name': 'Real Estate Due Diligence Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Transaction coordination',
                  'name': 'Transaction Coordination Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Commercial occupancy matters',
                  'name': 'Occupancy Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Development and operational considerations',
                  'name': 'Development Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Risk management support',
                  'name': 'Risk Management Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Business-related real estate strategy',
                  'name': 'Real Estate Strategy Services'
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
            Real <span className="text-brand-red">Estate</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Legal Support for Commercial and Residential Real Estate
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
              Real estate matters—whether commercial or residential—often play a critical role in business growth, personal finances, and long-term planning.
              <br /><br />
              Scoreboard Legal provides practical legal support for a wide range of real estate matters, from commercial transactions and business leases to residential leases and property-related agreements. We work with businesses, founders, operators, and individuals to navigate real estate matters with confidence.
              <br /><br />
              Whether you're leasing office space for your business, negotiating a commercial property transaction, or need assistance with residential lease matters, we provide practical guidance tailored to your specific situation.
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
                  Residential and Commercial Lease Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Assistance with residential leases, commercial lease negotiations, lease renewals, and lease amendments for both businesses and individuals.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Commercial Lease Review and Negotiation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive review, analysis, and negotiation of commercial leases and property agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Operational and Facility Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drafting and negotiation of operational agreements and facility-related legal matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vendor and Property-Related Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Contracts and agreements with vendors, suppliers, and property service providers.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real Estate Due Diligence Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Due diligence and analysis for real Estate transactions and acquisitions.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Transaction Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordination of Real Estate transactions and related legal matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Commercial Occupancy Matters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Legal guidance on commercial leasing, occupancy, and property use matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Development and Operational Considerations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Legal support for Real Estate development, construction, and operational matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Risk Management Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Risk assessment and mitigation for Real Estate transactions and operations.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Business-Related Real Estate Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic Real Estate planning within broader business context.
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
                      Operational Context
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We help clients evaluate Real Estate matters within context of their overall business objectives and operational needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Strategic Guidance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Real Estate decisions often impact broader operational and financial strategy.
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
                What types of real estate transactions do you handle?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                We handle commercial real estate transactions including purchases and sales, leases, lease negotiations, development agreements, real estate financing, and entity structuring for real estate investments. We work with businesses, investors, and property owners on a wide range of commercial real estate matters.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Why do I need legal counsel for real estate transactions?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Real estate transactions involve significant financial investment and complex legal considerations. An attorney helps identify and mitigate risks, ensures clear title, negotiates favorable terms, and ensures all documents properly protect your interests. Without proper legal review, you may face unexpected liabilities or disputes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Do you handle residential and commercial leases?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Yes, we assist with both residential and commercial lease matters. Whether you're a business owner negotiating an office lease, a landlord managing residential properties, or an individual needing help with a residential lease, we provide practical support to protect your interests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Discuss Your <span className="text-brand-red">Real Estate Needs</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how real estate legal support can help your business operations and growth strategies.
          </p>
          <a 
            href="https://scoreboardlegal.cliogrow.com/book" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;

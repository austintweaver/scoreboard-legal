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

const FractionalGeneralCounsel = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO title={"Fractional General Counsel Illinois | Scoreboard Legal"} description={"On-demand general counsel for Illinois businesses that need experienced legal support without the cost of in-house counsel. Flexible and scalable."} path={"/fractional-general-counsel"} />
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Fractional General Counsel Services',
            'description': 'Ongoing Legal Support for Growing Businesses - Scoreboard Legal provides fractional general counsel services for founders, executives, startups, agencies, sports and entertainment businesses, and growing companies that need experienced legal support integrated into day-to-day business operations.',
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
                  'itemOffered': 'Commercial contract review and negotiation',
                  'name': 'Commercial Contract Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Outside counsel management',
                  'name': 'Legal Management Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Operational and strategic legal guidance',
                  'name': 'Business Legal Advisory'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Vendor and partnership agreements',
                  'name': 'Partnership Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Employment and contractor matters',
                  'name': 'Employment Law Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Governance and compliance support',
                  'name': 'Corporate Governance Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Risk management',
                  'name': 'Business Risk Management'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Day-to-day business advisory support',
                  'name': 'Business Advisory Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Executive and operational collaboration',
                  'name': 'Executive Legal Services'
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
            Fractional <span className="text-brand-red">General Counsel</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Ongoing Legal Support for Growing Businesses
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
              Businesses often reach a point where they need consistent legal guidance, strategic support, and operational oversight without adding a full-time in-house legal department.
              <br /><br />
              Scoreboard Legal provides fractional general counsel services for founders, executives, startups, agencies, sports and entertainment businesses, and growing companies that need experienced legal support integrated into day-to-day business operations. Our <Link to="/commercial-transactions" className="text-brand-red hover:underline">commercial transactions</Link> practice complements this by handling the day-to-day contract work that arises from these relationships.
              <br /><br />
              Our approach combines legal guidance with practical business thinking to help clients navigate contracts, operations, partnerships, risk management, and growth initiatives with confidence. We also work closely with clients on <Link to="/employment" className="text-brand-red hover:underline">employment matters</Link> and <Link to="/corporate-formation-governance" className="text-brand-red hover:underline">corporate governance</Link> issues that often arise as businesses scale.
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
                  Commercial Contract Review and Negotiation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive review, analysis, and negotiation of commercial contracts with a focus on protecting business interests while maintaining operational flexibility.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Outside Counsel Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic coordination of external legal resources and ongoing management of legal matters to ensure consistent and cost-effective legal support.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Operational and Strategic Legal Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Day-to-day legal advice and strategic guidance aligned with business objectives and operational realities.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vendor and Partnership Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drafting, review, and negotiation of vendor contracts, partnership agreements, and strategic business relationships.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Employment and Contractor Matters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Guidance on employment relationships, contractor agreements, and workforce-related legal matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Governance and Compliance Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Assistance with corporate governance, compliance programs, and regulatory requirements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Risk Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proactive identification and mitigation of legal risks across operations, contracts, and business relationships.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Day-to-Day Business Advisory Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing business advisory support integrated with legal guidance to support operational decision-making.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Executive and Operational Collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Direct collaboration with executives and operational teams to align legal strategy with business objectives.
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
                Practical support for business transactions and agreements
              </p>
            </Link>
            <Link 
              to="/employment" 
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Employment & Workforce
              </h3>
              <p className="text-gray-600 text-sm">
                Guidance on hiring, contractors, and workforce matters
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
                      Integrated Legal Support
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We provide ongoing legal guidance integrated with business operations to support day-to-day decision-making and risk management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Business-Focused Guidance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our approach combines legal expertise with practical business thinking to help clients navigate contracts, operations, and growth initiatives.
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
                What is a fractional general counsel?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                A fractional general counsel provides ongoing legal counsel and strategic guidance on a part-time or as-needed basis, giving businesses access to experienced legal leadership without the cost of a full-time in-house attorney. This model is ideal for growing companies that need consistent legal support but don't require a dedicated in-house counsel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                When should a business hire fractional counsel?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Businesses typically consider fractional counsel when they outgrow ad-hoc legal support but aren't ready for a full-time general counsel. Signs include frequent legal questions, growing contract volume, need for strategic legal planning, or wanting a trusted advisor integrated into business decisions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                How does fractional counsel differ from traditional outside counsel?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Traditional outside counsel typically handles specific matters on a project basis and may not have deep familiarity with your business. Fractional counsel becomes an integrated part of your leadership team, providing ongoing strategic guidance, proactive risk management, and a deeper understanding of your operations, industry, and goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Discuss Your <span className="text-brand-red">Legal Needs</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how fractional general counsel services can support your business growth and operational needs.
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

export default FractionalGeneralCounsel;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmergingCompaniesVentureFinancing = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Emerging Companies <span className="text-brand-red">&</span><span className="text-green-600"> Venture Financing</span> Legal Services',
            'description': 'Legal Support for Growth-Stage Businesses and Capital Raises - Scoreboard Legal works with startups, founders, investors, and growth-stage businesses on strategic legal matters related to company formation, governance, financing structures, commercial operations, and business growth.',
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
                  'itemOffered': 'Startup formation and structuring',
                  'name': 'Startup Formation Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'SAFE and financing document review',
                  'name': 'SAFE Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Venture financing support',
                  'name': 'Venture Financing Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Founder and equity arrangements',
                  'name': 'Founder Equity Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Governance planning',
                  'name': 'Governance Planning Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Commercial contract support',
                  'name': 'Commercial Contract Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Investor-related legal coordination',
                  'name': 'Investor Relations Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Operational legal guidance',
                  'name': 'Operational Legal Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Incentive and equity structure considerations',
                  'name': 'Equity Structure Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Strategic growth support',
                  'name': 'Growth Strategy Services'
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
            Emerging Companies <span className="text-black">&</span> <span className="text-brand-red">Venture Financing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Legal Support for Growth-Stage Businesses and Capital Raises
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
              Emerging companies face unique legal and operational challenges as they scale, raise capital, and build long-term business infrastructure.
              <br /><br />
              Scoreboard Legal works with startups, founders, investors, and growth-stage businesses on strategic legal matters related to company formation, governance, financing structures, commercial operations, and business growth.
              <br /><br />
              We provide practical legal guidance designed to support both operational flexibility and future financing opportunities.
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
                  Startup Formation and Structuring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Business entity formation, LLC registration, and startup structuring services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SAFE and Financing Document Review
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Review and negotiation of SAFE notes, convertible instruments, and early-stage financing documents.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Venture Financing Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic guidance on venture capital, angel investment, and growth financing matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Founder and Equity Arrangements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Founder agreements, equity compensation, and ownership structure planning.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Governance Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Corporate governance framework development for startups and growth companies.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Commercial Contract Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing commercial contract support and legal advisory services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Investor-Related Legal Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordination with investors, legal due diligence, and investment matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Operational Legal Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Day-to-day legal advice and operational guidance for growing businesses.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Equity and Incentive Structure Considerations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stock option plans, equity compensation, and incentive structure design.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic Growth Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Long-term strategic legal support for business growth and scaling.
                </p>
              </div>
            </div>
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
                      Practical Guidance
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We provide practical legal guidance designed to support both operational flexibility and future financing opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Growth-Focused Strategy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We work with startups, founders, investors, and growth-stage businesses on strategic legal matters related to company formation, governance, financing structures, commercial operations, and business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Discuss Your <span className="text-brand-red">Growth Strategy</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can support your startup or growth-stage business with strategic legal guidance.
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

export default EmergingCompaniesVentureFinancing;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CorporateFormationGovernance = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Corporate Formation <span className="text-brand-red">&</span> Governance Services',
            'description': 'Building Strong Legal Foundations for Businesses - Scoreboard Legal works with founders, startups, investors, and growing businesses to establish practical legal structures and governance frameworks designed to support both current operations and future scalability.',
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
                  'itemOffered': 'LLC and corporate formations',
                  'name': 'Business Formation Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Operating agreements and bylaws',
                  'name': 'Operating Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Founder and ownership arrangements',
                  'name': 'Ownership Structure Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Governance planning',
                  'name': 'Corporate Governance Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Board and manager matters',
                  'name': 'Board Management Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Entity restructuring',
                  'name': 'Business Restructuring Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Strategic organizational planning',
                  'name': 'Strategic Planning Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Equity and incentive considerations',
                  'name': 'Equity Planning Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Ongoing governance support',
                  'name': 'Ongoing Governance Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Corporate maintenance guidance',
                  'name': 'Corporate Compliance Services'
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
            Corporate Formation & Governance
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Building Strong Legal Foundations for Businesses
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
              The way a business is structured impacts operations, governance, financing opportunities, ownership rights, and long-term growth.
              <br /><br />
              Scoreboard Legal works with founders, startups, investors, and growing businesses to establish practical legal structures and governance frameworks designed to support both current operations and future scalability.
              <br /><br />
              We help clients navigate formation decisions, ownership structures, governance matters, and organizational planning with a business-minded perspective.
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
                  LLC and Corporate Formations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Business entity formation, LLC registration, and corporate structuring services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Operating Agreements and Bylaws
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drafting and implementation of operating agreements, corporate bylaws, and governance documents.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Founder and Ownership Arrangements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ownership structure planning and founder agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Governance Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Corporate governance framework development and implementation.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Board and Manager Matters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Board composition, manager duties, and corporate governance matters.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Entity Restructuring
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Business entity restructuring and reorganization services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic Organizational Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Long-term organizational strategy and planning services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Equity and Incentive Considerations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stock option plans, equity compensation, and incentive structure design.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ongoing Governance Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Continuous corporate governance advisory and compliance support.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Corporate Maintenance Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Corporate compliance, annual requirements, and maintenance guidance.
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
                      Business Foundation
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe strong organizational planning creates alignment, supports operational efficiency, and positions businesses for long-term growth and future opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Business-Minded Approach
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We help clients navigate formation decisions, ownership structures, governance matters, and organizational planning with a practical, business-focused perspective.
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
            Discuss Your <span className="text-brand-red">Business Structure</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how proper corporate formation and governance can support your business growth and operational needs.
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

export default CorporateFormationGovernance;

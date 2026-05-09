import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Employment = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Employment Legal Services',
            'description': 'Employment and Workforce Support for Growing Businesses - Scoreboard Legal works with businesses, founders, operators, agencies, athletes, and creators on employment-related legal matters involving hiring, contractor relationships, workplace policies, and operational workforce considerations.',
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
                  'itemOffered': 'Employment agreements',
                  'name': 'Employment Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Independent contractor agreements',
                  'name': 'Contractor Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Workplace policies and operational guidance',
                  'name': 'Workplace Policy Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Employee onboarding considerations',
                  'name': 'Onboarding Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Workforce risk management',
                  'name': 'Risk Management Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Operational HR support',
                  'name': 'HR Support Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Executive employment arrangements',
                  'name': 'Executive Employment Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Confidentiality and restrictive covenant agreements',
                  'name': 'Confidentiality Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Day-to-day employment guidance',
                  'name': 'Employment Advisory Services'
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
            Employment <span className="text-black">&</span> <span className="text-brand-red">Workforce Support</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            for Growing Businesses
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
              Employment and workforce decisions impact every part of a business, from operations and culture to compliance and long-term growth.
              <br /><br />
              Scoreboard Legal works with businesses, founders, operators, agencies, athletes, and creators on employment-related legal matters involving hiring, contractor relationships, workplace policies, and operational workforce considerations.
              <br /><br />
              Our approach prioritizes practical problem-solving, business protection, and strategic resolution while remaining focused on broader operational and business objectives.
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
                  Employment Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive employment contracts, employee handbooks, and workplace policy development.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Independent Contractor Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drafting and negotiation of independent contractor and consulting agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Workplace Policies and Operational Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Development of employee handbooks, workplace policies, and operational procedures.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Employee Onboarding Considerations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic onboarding processes and new hire integration planning.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Workforce Risk Management
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Employment law compliance, risk assessment, and workforce protection strategies.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Operational HR Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Day-to-day HR guidance and operational workforce support.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Executive Employment Arrangements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Executive employment contracts, compensation agreements, and leadership arrangements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Confidentiality and Restrictive Covenant Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trade secret protection, non-compete agreements, and confidentiality provisions.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Day-to-Day Employment Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ongoing employment law advice and operational guidance for growing businesses.
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
                      Practical Judgment
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe Employment matters require practical business judgment alongside legal analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Strategic Focus
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We help clients navigate workforce-related issues with an approach focused on operations, compliance, and long-term business strategy.
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
            Discuss Your <span className="text-brand-red">Workforce Needs</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how we can help with employment agreements, workforce policies, and employment-related legal matters.
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

export default Employment;

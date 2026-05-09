import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IntellectualProperty = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Intellectual Property Legal Services',
            'description': 'Protecting Brands, Content, and Business Assets - Scoreboard Legal helps businesses, creators, athletes, entrepreneurs, and organizations protect and manage intellectual property related to brands, content, marketing, media, partnerships, and commercial operations.',
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
                  'itemOffered': 'Trademark strategy and coordination',
                  'name': 'Trademark Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Brand protection',
                  'name': 'Brand Protection Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Licensing agreements',
                  'name': 'Licensing Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Content and media agreements',
                  'name': 'Content Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Intellectual property provisions in commercial contracts',
                  'name': 'IP Contract Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Sponsorship and promotional rights',
                  'name': 'Sponsorship Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Marketing and usage rights',
                  'name': 'Marketing Rights Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'NIL and publicity rights considerations',
                  'name': 'NIL Rights Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'IP diligence support',
                  'name': 'IP Due Diligence Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Confidentiality and proprietary information protections',
                  'name': 'Confidentiality Services'
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
            Intellectual <span className="text-brand-red">Property</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Protecting Brands, Content, and Business Assets
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
              A company's intellectual property is often one of its most valuable business assets.
              <br /><br />
              Scoreboard Legal helps businesses, creators, athletes, entrepreneurs, and organizations protect and manage intellectual property related to brands, content, marketing, media, partnerships, and commercial operations.
              <br /><br />
              We provide practical guidance designed to help clients safeguard ownership rights while supporting long-term business growth and commercialization opportunities.
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
                  Trademark Strategy and Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive trademark search, registration, and portfolio management services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Brand Protection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic brand monitoring, enforcement, and protection against infringement.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Licensing Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drafting and negotiation of licensing agreements for commercial use.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Content and Media Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Contracts for content creation, media rights, and distribution.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  IP Provisions in Commercial Contracts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic IP clauses and protections for business agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sponsorship and Promotional Rights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Agreements for sponsorships, endorsements, and promotional activities.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Marketing and Usage Rights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Rights management for marketing materials and commercial usage.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  NIL and Publicity Rights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic guidance on name, image, and publicity rights management.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  IP Diligence Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Due diligence and analysis for IP transactions and acquisitions.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Confidentiality and Proprietary Information
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Trade secret protection and confidentiality agreement development.
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
                      Strategic Protection
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We believe intellectual property should support business growth, not simply exist as a legal filing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Business-Aligned Strategy
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We help clients approach intellectual property strategically by aligning protection efforts with branding, commercialization, partnerships, and operational realities.
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
            Discuss Your <span className="text-brand-red">Intellectual Property</span> Needs
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore how intellectual property protection can support your brand, content, and business growth strategies.
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

export default IntellectualProperty;

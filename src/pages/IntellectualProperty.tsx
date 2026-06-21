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

const IntellectualProperty = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEO title={"Intellectual Property Attorney Illinois | Scoreboard Legal"} description={"Protect your brand and IP with Scoreboard Legal. Illinois IP counsel for trademarks, licensing, and IP strategy for businesses, athletes, and creators."} path={"/intellectual-property"} />
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
              Scoreboard Legal helps businesses, creators, athletes, entrepreneurs, and organizations protect and manage intellectual property related to brands, content, marketing, media, partnerships, and commercial operations. Our <Link to="/commercial-transactions" className="text-brand-red hover:underline">commercial transactions</Link> practice ensures IP is properly addressed in licensing and partnership agreements.
              <br /><br />
              We provide practical guidance designed to help clients safeguard ownership rights while supporting long-term business growth and commercialization opportunities. For businesses with ongoing IP needs, our <Link to="/fractional-general-counsel" className="text-brand-red hover:underline">fractional general counsel</Link> services provide comprehensive IP strategy and management.
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

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="bg-gray-50 rounded-xl border border-gray-200 px-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What types of intellectual property can be protected?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                The main types of IP protection include trademarks (brand names, logos, slogans), copyrights (creative works, content, software), trade secrets (confidential business information), and patents (inventions, processes). Each type of protection serves different purposes and has different requirements.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Why is IP protection important for businesses?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                IP is often one of your most valuable business assets. Proper protection prevents competitors from copying your brand, products, or innovations. It also creates enforceable rights that can be licensed, sold, or used to attract investment. Without proper protection, you may lose the ability to control and monetize your intellectual property.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Do I need to register my trademarks?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                While you can establish common law rights through use, federal trademark registration provides significant advantages including nationwide protection, the ability to use the ® symbol, access to federal courts, and constructive notice of your claim. We can help you evaluate the best registration strategy for your brand.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
            href="/contact"
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

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CommercialTransactions = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Commercial Transaction Legal Services',
            'description': 'Practical Legal Support for Business Transactions and Agreements - Scoreboard Legal works with businesses, founders, operators, agencies, athletes, and creators to structure, negotiate, and manage a wide range of commercial transactions with a practical and business-focused approach.',
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
                  'itemOffered': 'Commercial contracts',
                  'name': 'Commercial Contract Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Vendor and service agreements',
                  'name': 'Vendor Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Sponsorship and partnership agreements',
                  'name': 'Partnership Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Licensing agreements',
                  'name': 'Licensing Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Consulting and advisory agreements',
                  'name': 'Consulting Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'SaaS and technology agreements',
                  'name': 'Technology Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Production and media agreements',
                  'name': 'Media Agreement Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Revenue share arrangements',
                  'name': 'Revenue Share Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Strategic negotiation support',
                  'name': 'Negotiation Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Practical Business Guidance',
                  'name': 'Business Advisory Services'
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
            Commercial <span className="text-brand-red">Transactions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Practical Legal Support for Business Transactions and Agreements
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
              Commercial agreements are the foundation of how businesses operate, generate revenue, and manage relationships.
              <br /><br />
              Scoreboard Legal works with businesses, founders, operators, agencies, athletes, and creators to structure, negotiate, and manage a wide range of commercial transactions with a practical and business-focused approach. For larger transactions, we often collaborate with our <Link to="/mergers-acquisitions" className="text-brand-red hover:underline">mergers and acquisitions</Link> team to ensure seamless execution.
              <br /><br />
              We help clients move deals forward efficiently while protecting long-term business interests and operational flexibility. Our <Link to="/intellectual-property" className="text-brand-red hover:underline">intellectual property</Link> practice ensures that IP considerations are properly addressed in commercial agreements, while our <Link to="/fractional-general-counsel" className="text-brand-red hover:underline">fractional general counsel</Link> services provide ongoing support for businesses with recurring transaction needs.
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
                  Commercial Contracts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Drafting, review, and negotiation of business-to-business and commercial agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vendor and Service Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive vendor contracts and service level agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sponsorship and Partnership Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic partnership and sponsorship agreement development.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Licensing Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intellectual property and commercial licensing arrangements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Consulting and Advisory Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic consulting and advisory service agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  SaaS and Technology Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Software-as-a-Service and technology service agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Production and Media Agreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Content production, media rights, and distribution agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Revenue Share Arrangements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Revenue sharing and joint venture agreements.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic Negotiation Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Deal negotiation support and strategic advisory services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Practical Business Guidance
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
              to="/mergers-acquisitions" 
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mergers & Acquisitions
              </h3>
              <p className="text-gray-600 text-sm">
                Strategic guidance for business transactions
              </p>
            </Link>
            <Link 
              to="/intellectual-property" 
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Intellectual Property
              </h3>
              <p className="text-gray-600 text-sm">
                Protecting brands, content, and business assets
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
                      Practical Agreements
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We focus on creating agreements that are clear, commercially realistic, and aligned with broader business objectives rather than unnecessarily overcomplicated legal documents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Business-Focused Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We help clients evaluate legal, financial, operational, and reputational considerations in order to pursue practical and business-minded solutions.
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
                What types of commercial agreements do you handle?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                We handle a wide range of commercial agreements including vendor and service agreements, sponsorship and partnership agreements, licensing arrangements, consulting and advisory agreements, SaaS and technology agreements, revenue share arrangements, and custom commercial contracts tailored to your business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Why are well-structured contracts important?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Well-structured contracts protect your business interests, define clear rights and obligations, minimize disputes, and provide a framework for successful business relationships. They help ensure both parties understand expectations and provide recourse if things go wrong.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Do you negotiate agreements on behalf of clients?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Yes, we actively negotiate commercial agreements on behalf of our clients. We work to achieve favorable terms while maintaining productive business relationships. Our goal is to protect your interests while helping deals move forward efficiently.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Request <span className="text-brand-red">Transaction Support</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your commercial transaction needs and how we can help structure your business agreements for success.
          </p>
          <a 
            href="https://scoreboardlegal.cliogrow.com/book"
            className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default CommercialTransactions;

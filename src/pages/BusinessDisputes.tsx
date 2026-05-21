import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { handleClioClick } from "@/lib/clioConversion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BusinessDisputes = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            'name': 'Business Dispute Legal Services',
            'description': 'Strategic Support for Complex Business Disputes - Scoreboard Legal assists businesses, founders, executives, and organizations with business disputes involving contracts, partnerships, operations, and commercial relationships.',
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
                  'itemOffered': 'Contract disputes',
                  'name': 'Contract Dispute Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Partnership and ownership disputes',
                  'name': 'Partnership Dispute Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Commercial disagreements',
                  'name': 'Commercial Dispute Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Vendor and service disputes',
                  'name': 'Vendor Dispute Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Employment-related business conflicts',
                  'name': 'Employment Dispute Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Demand letter strategy and response',
                  'name': 'Demand Letter Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Risk analysis and resolution planning',
                  'name': 'Risk Management Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Pre-litigation strategy',
                  'name': 'Litigation Strategy Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Negotiation support',
                  'name': 'Negotiation Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Outside litigation counsel coordination',
                  'name': 'Litigation Coordination Services'
                },
                {
                  '@type': 'Offer',
                  'itemOffered': 'Strategic Business Focus',
                  'name': 'Business Strategy Services'
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
            Business <span className="text-brand-red">Disputes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Strategic Support for Complex Business Disputes
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
              Business disputes can create operational disruption, financial exposure, and long-term business challenges if not handled strategically.
              Scoreboard Legal assists businesses, founders, executives, and organizations with business disputes involving contracts, partnerships, operations, and commercial relationships. Many disputes can be prevented through proper <Link to="/commercial-transactions" className="text-brand-red hover:underline">commercial transaction</Link> drafting and <Link to="/employment" className="text-brand-red hover:underline">employment</Link> practices.
              <br /><br />
              Our approach prioritizes practical problem-solving, business protection, and strategic resolution while remaining focused on broader operational and business objectives. Our <Link to="/fractional-general-counsel" className="text-brand-red hover:underline">fractional general counsel</Link> services can help identify and mitigate risks before they become disputes.
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
                  Contract Disputes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Disagreements over contract terms, performance, and interpretation.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Partnership and Ownership Disputes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Disagreements over business partnerships, ownership structures, and profit sharing.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Commercial Disagreements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Disputes over business operations, service delivery, and commercial relationships.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Vendor and Service Disputes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Disagreements with vendors, suppliers, and service providers.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Employment-Related Business Conflicts
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Employment disputes, contractor relationships, and workforce-related business conflicts.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Demand Letter Strategy and Response
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic demand letter development and response management.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Risk Analysis and Resolution Planning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Proactive risk assessment and strategic dispute resolution planning.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Pre-Litigation Strategy
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic positioning before potential litigation.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Negotiation Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Strategic negotiation and dispute resolution services.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Outside Litigation Counsel Coordination
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Coordination with external litigation resources and legal teams.
                </p>
              </div>

              <div className="border-l-4 border-brand-red pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Strategic Business Focus
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Maintaining focus on broader business objectives and operational continuity.
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
              to="/employment" 
              className="block p-6 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md hover:border-brand-red/20 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Employment & Workforce
              </h3>
              <p className="text-gray-600 text-sm">
                Guidance on hiring and workforce matters
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

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="bg-gray-50 rounded-xl border border-gray-200 px-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                How do you approach business disputes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                We take a pragmatic, business-focused approach that prioritizes protecting your interests while maintaining operational continuity. We explore resolution options including negotiation, mediation, and arbitration before resorting to litigation when necessary. Our goal is to achieve the best outcome while minimizing disruption to your business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                What dispute resolution methods do you use?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                We handle disputes through various methods depending on the situation: direct negotiation, mediation, arbitration, and litigation in state and federal courts. We help you understand the pros and cons of each approach and recommend the strategy most likely to achieve your business objectives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                Can disputes be resolved without going to court?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                Yes, many business disputes can be resolved through alternative dispute resolution methods like mediation or arbitration, which are often faster and less expensive than litigation. These methods also offer more confidentiality and flexibility. We work to resolve disputes efficiently while protecting your interests.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Discuss a <span className="text-brand-red">Business Matter</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to explore strategic dispute resolution options and how we can help protect your business interests while maintaining operational focus.
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

export default BusinessDisputes;

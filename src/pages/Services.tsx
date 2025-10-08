import { FileText, Shield, Briefcase, Scale, Users, Eye, Gavel, Building, DollarSign, Target, Navigation, UserCheck, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      title: "Contract Services",
      icon: FileText,
      color: "bg-blue-500",
      services: [
        {
          name: "NDA Drafting",
          price: "Starting at $750",
          description: "Basic unilateral or mutual NDA"
        },
        {
          name: "Contract Drafting, Review & Revisions",
          price: "Starting at $1,250",
          description: "Service, vendor, sales contracts"
        },
        {
          name: "Employment Agreement Drafting",
          price: "Starting at $1,500",
          description: "Per employee agreement"
        },
        {
          name: "Independent Contractor Agreements",
          price: "Starting at $1,000",
          description: "Contractor or freelancer agreements"
        },
        {
          name: "Purchase Agreement Drafting",
          price: "Starting at $2,000",
          description: "Business sales/acquisitions"
        }
      ]
    },
    {
      title: "Business Formation & Structuring",
      icon: Building,
      color: "bg-green-500",
      services: [
        {
          name: "Business Formations",
          price: "Starting at $2,000",
          description: "Includes operating agreement/bylaws"
        },
        {
          name: "Investor Agreements",
          price: "Starting at $3,000",
          description: "SAFE notes, convertible notes"
        }
      ]
    },
    {
      title: "Intellectual Property",
      icon: Shield,
      color: "bg-purple-500",
      services: [
        {
          name: "Trademark Filing Assistance",
          price: "Starting at $1,500",
          description: "Includes USPTO filing fees"
        },
        {
          name: "Intellectual Property Agreements",
          price: "Starting at $1,500",
          description: "Licensing or IP assignment"
        }
      ]
    },
    {
      title: "Compliance & Policies",
      icon: Scale,
      color: "bg-orange-500",
      services: [
        {
          name: "Data Privacy Policy Drafting",
          price: "Starting at $1,500",
          description: "GDPR/CCPA focus"
        },
        {
          name: "Terms of Service Drafting",
          price: "Starting at $1,500",
          description: "Website/app user agreements"
        },
        {
          name: "Company Handbook Drafting",
          price: "Starting at $1,500",
          description: "Custom employee handbook for company policies and compliance"
        }
      ]
    }
  ];

  const subscriptionCategory = {
    title: "Subscription-Based General Counsel",
    icon: DollarSign,
    color: "bg-brand-red",
    services: [
      {
        name: "General Counsel Subscription",
        price: "Contact Us",
        description:
          "For ongoing legal support, we offer subscription-based outside general counsel services. Get unlimited consultations, contract reviews, and legal guidance for a predictable monthly fee."
      }
    ]
  };

  const gamePlanCategory = {
    title: "The GAME Plan",
    icon: Target,
    color: "bg-brand-red",
    price: "Starting at $500/month"
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Legal <span className="text-brand-red">Services</span> & Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparent, flat-fee legal services for athletes, coaches, entertainers, entrepreneurs, and executives.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Accordion for service categories, with subscription at the top */}
          <Accordion type="multiple" className="space-y-6">
            {/* Subscription-Based General Counsel as first accordion item */}
            <AccordionItem value={subscriptionCategory.title} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <AccordionTrigger className="bg-gray-50 px-6 py-4 border-b border-gray-200 text-left">
                <div className="flex items-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mr-4`}>
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {subscriptionCategory.title}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 border-b text-left text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Tier</th>
                        <th className="px-6 py-3 border-b text-left text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Monthly Fee</th>
                        <th className="px-6 py-3 border-b text-center text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Discount on Additional Services</th>
                        <th className="px-6 py-3 border-b text-right text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Support & Coverage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-6 py-4 border-b text-gray-900 font-semibold">Advisor</td>
                        <td className="px-6 py-4 border-b text-gray-700">$1,500</td>
                        <td className="px-6 py-4 border-b text-gray-700 text-center">10%</td>
                        <td className="px-6 py-4 border-b text-gray-700 text-right">Basic legal support, scheduled meetings with attorney, document review</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b text-gray-900 font-semibold">Partner</td>
                        <td className="px-6 py-4 border-b text-gray-700">$3,000</td>
                        <td className="px-6 py-4 border-b text-gray-700 text-center">15%</td>
                        <td className="px-6 py-4 border-b text-gray-700 text-right">Strategic legal counsel with expanded contract support and ongoing guidance for complex legal needs</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 border-b text-gray-900 font-semibold">GC+</td>
                        <td className="px-6 py-4 border-b text-gray-700">Custom Pricing</td>
                        <td className="px-6 py-4 border-b text-gray-700 text-center">Custom</td>
                        <td className="px-6 py-4 border-b text-gray-700 text-right">Fully customized legal support, complex transaction guidance</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-6 text-center">
                    <Link to="/contact">
                      <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                        Learn About Our Subscription Model
                      </Button>
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* The GAME Plan */}
            <AccordionItem value={gamePlanCategory.title} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <AccordionTrigger className="bg-gray-50 px-6 py-4 border-b border-gray-200 text-left">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {gamePlanCategory.title}
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6">
                <div className="space-y-8">
                  {/* Description at the top */}
                  <div className="space-y-4 text-gray-700 max-w-4xl mx-auto mb-8">
                    <p className="text-center text-xl font-semibold">
                      We offer subscription-based support for athletes, coaches, administrators, entertainers, and creators — delivering expert guidance without the commissions or conflicts of traditional representation.
                    </p>
                  </div>

                  {/* GAME Components in horizontal layout */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 border border-gray-100">
                        <Navigation className="h-10 w-10 text-brand-red" />
                      </div>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">Guidance</h5>
                      <p className="text-gray-700 text-sm">Expert advice to help navigate your journey.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 border border-gray-100">
                        <Shield className="h-10 w-10 text-brand-red" />
                      </div>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">Advocacy</h5>
                      <p className="text-gray-700 text-sm">Protecting your interests and rights.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 border border-gray-100">
                        <BarChart3 className="h-10 w-10 text-brand-red" />
                      </div>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">Management</h5>
                      <p className="text-gray-700 text-sm">Professional oversight of your business matters.</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 border border-gray-100">
                        <Zap className="h-10 w-10 text-brand-red" />
                      </div>
                      <h5 className="text-xl font-bold text-gray-900 mb-2">Execution</h5>
                      <p className="text-gray-700 text-sm">Implementation of strategies for your success.</p>
                    </div>
                  </div>

                  {/* Additional description paragraphs */}
                  <div className="space-y-4 text-gray-700 max-w-4xl mx-auto">
                    <p className="text-center">
                      Our approach is built for the full scope of your career and business journey. From navigating NIL deals and contract negotiations to career progression, brand building, and professional growth — we're with you at every stage. Our model ensures you have access to legal expertise, strategic advice, and business management whenever you need it — all within a transparent, predictable subscription.
                    </p>
                    <p className="font-semibold text-gray-900 text-center text-lg">
                      We don't take a percentage of your success — we help you build it.
                    </p>
                  </div>

                  {/* Pricing Table */}
                  <div className="mt-8">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 border-b text-left text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Tier</th>
                            <th className="px-6 py-3 border-b text-left text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Description</th>
                            <th className="px-6 py-3 border-b text-right text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Starting Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-6 py-4 border-b text-gray-900 font-semibold">Entry</td>
                            <td className="px-6 py-4 border-b text-gray-700">Your first step to professional guidance and support. Provides essential advice and practical strategies to help you confidently handle deals, sponsorships, and early career opportunities.</td>
                            <td className="px-6 py-4 border-b text-gray-700 text-right">$500/month+</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 border-b text-gray-900 font-semibold">Momentum</td>
                            <td className="px-6 py-4 border-b text-gray-700">For individuals actively building their career or brand. Offers regular guidance, contract review, and strategic business support for opportunities like multi-brand partnerships, playing opportunities, and content collaborations.</td>
                            <td className="px-6 py-4 border-b text-gray-700 text-right">~$1,000/month+</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 border-b text-gray-900 font-semibold">Custom</td>
                            <td className="px-6 py-4 border-b text-gray-700">Fully tailored support for high-profile or complex opportunities. Integrates business and operational guidance for managing NIL deals, sponsorship portfolios, multi-team agreements, and comprehensive career strategy.</td>
                            <td className="px-6 py-4 border-b text-gray-700 text-right">Custom / Quote</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Other service categories */}
            {serviceCategories.map((category, categoryIndex) => (
              <AccordionItem key={category.title} value={category.title} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <AccordionTrigger className="bg-gray-50 px-6 py-4 border-b border-gray-200 text-left">
                  <div className="flex items-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b text-left text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Service</th>
                          <th className="px-6 py-3 border-b text-right text-lg font-bold text-gray-900 align-middle whitespace-nowrap">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.services.map((service) => (
                          <tr key={service.name}>
                            <td className="px-6 py-4 border-b text-gray-900 font-semibold">{service.name}</td>
                            <td className="px-6 py-4 border-b text-gray-700 text-right">{service.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}

            {/* Looking for Something Else? menu */}
            <AccordionItem value="something-else" className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <AccordionTrigger className="bg-gray-50 px-6 py-4 border-b border-gray-200 text-left">
                <div className="flex items-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mr-4">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    Looking for Something Else?
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 text-center">
                <p className="mb-6 text-lg text-gray-700">If you don't see the service you need, reach out and we'll discuss a custom solution for you.</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                    Contact Us
                  </Button>
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to <span className="text-brand-red">Win</span><br />
            Where It <span className="text-brand-red">Matters Most</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No billable hours. No surprises. Just transparent, flat-fee legal services when you need them.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;

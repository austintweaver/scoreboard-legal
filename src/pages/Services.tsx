import { FileText, Shield, Briefcase, Scale, Users, Eye, Gavel, Building, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
          price: "$850",
          description: "Basic unilateral or mutual NDA"
        },
        {
          name: "Contract Drafting (Simple)",
          price: "$1,250",
          description: "Service, vendor, sales contracts"
        },
        {
          name: "Contract Review & Revision",
          price: "$1,250",
          description: "Per contract"
        },
        {
          name: "Employment Agreement Drafting",
          price: "$1,700",
          description: "Per employee agreement"
        },
        {
          name: "Independent Contractor Agreements",
          price: "$1,200",
          description: "Contractor or freelancer agreements"
        }
      ]
    },
    {
      title: "Business Formation & Structuring",
      icon: Building,
      color: "bg-green-500",
      services: [
        {
          name: "Business Formation (LLC, Corp)",
          price: "$1,900",
          description: "Includes operating agreement/bylaws"
        },
        {
          name: "Investor Agreements",
          price: "$3,200",
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
          price: "$2,200",
          description: "Includes USPTO filing fees"
        },
        {
          name: "Intellectual Property Agreements",
          price: "$2,000",
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
          name: "Legal Compliance Audit",
          price: "$3,200",
          description: "Thorough legal compliance review"
        },
        {
          name: "Data Privacy Policy Drafting",
          price: "$2,500",
          description: "GDPR/CCPA focus"
        },
        {
          name: "Terms of Service Drafting",
          price: "$1,600",
          description: "Website/app user agreements"
        }
      ]
    },
    {
      title: "Transactional & Dispute",
      icon: Gavel,
      color: "bg-red-500",
      services: [
        {
          name: "Purchase Agreement Drafting",
          price: "$2,400",
          description: "Business sales/acquisitions"
        },
        {
          name: "Dispute Resolution Consultation",
          price: "$1,000",
          description: "Fixed consultation fee"
        }
      ]
    }
  ];

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
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-brand-red">Service Categories</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive transactional legal services with transparent, flat-fee pricing
            </p>
          </div>

          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 ${category.color} rounded-full mr-4`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <Card key={service.name} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-gray-200 hover:border-brand-red/20">
                        <CardHeader className="pb-4">
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-lg font-heading font-bold text-gray-900 mb-2 leading-tight">
                              {service.name}
                            </CardTitle>
                            <div className="flex items-center text-brand-red font-bold text-xl ml-2">
                              <DollarSign className="h-5 w-5 mr-1" />
                              {service.price.replace('$', '')}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-gray-600 text-sm leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Subscription Services Note */}
          <div className="mt-16 bg-brand-red/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Subscription-Based <span className="text-brand-red">General Counsel</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              For ongoing legal support, we offer subscription-based outside general counsel services. 
              Get unlimited consultations, contract reviews, and legal guidance for a predictable monthly fee.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brand-red hover:bg-red-700 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                Learn About Our Subscription Model
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to Get <span className="text-brand-red">Legal Support</span><br />
            That <span className="text-brand-red">Makes Sense</span>?
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
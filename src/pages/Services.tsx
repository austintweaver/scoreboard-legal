import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Shield, Scale, Building, Users, TrendingUp, Handshake, Briefcase, Gavel, Home } from "lucide-react";

const Services = () => {
  const firstRowServices = [
    {
      name: "Fractional General Counsel",
      icon: Users,
      url: "/fractional-general-counsel"
    },
    {
      name: "Intellectual Property", 
      icon: Shield,
      url: "/intellectual-property"
    },
    {
      name: "Commercial Transactions",
      icon: FileText,
      url: "/commercial-transactions"
    }
  ];

  const secondRowServices = [
    {
      name: "Corporate Formation & Governance",
      icon: Building,
      url: "/corporate-formation-governance"
    },
    {
      name: "Business Disputes",
      icon: Gavel,
      url: "/business-disputes"
    },
    {
      name: "Real Estate",
      icon: Home,
      url: "/real-estate"
    }
  ];

  const thirdRowServices = [
    {
      name: "Emerging Companies & Venture Financings",
      icon: TrendingUp,
      url: "/emerging-companies-venture-financings"
    },
    {
      name: "Mergers & Acquisitions",
      icon: Handshake,
      url: "/mergers-acquisitions"
    },
    {
      name: "Employment",
      icon: Briefcase,
      url: "/employment"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Practice <span className="text-brand-red">Areas</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                      </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mb-16">
            <p className="text-center text-gray-500 text-sm mb-6">
              Click a card to learn more about each practice area.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {firstRowServices.map((service, index) => (
                <Link 
                  to={service.url}
                  key={service.name} 
                  className="group relative bg-gray-50 border border-gray-200 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-brand-red hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mx-auto mb-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {service.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-center text-gray-600 mb-8">
                          </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondRowServices.map((service, index) => (
                <Link 
                  to={service.url}
                  key={service.name} 
                  className="group relative bg-gray-50 border border-gray-200 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-brand-red hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mx-auto mb-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {service.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-center text-gray-600 mb-8">
                          </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {thirdRowServices.map((service, index) => (
                <Link 
                  to={service.url}
                  key={service.name} 
                  className="group relative bg-gray-50 border border-gray-200 rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-brand-red hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-brand-red rounded-full mx-auto mb-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {service.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                The GAME Plan
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                A subscription built for the competitor in every room.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                For athletes, coaches, administrators, entertainers, and creators who deserve expert legal and business guidance without the traditional barriers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-700 mb-10">
                <div className="group">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">G</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-xl mb-2">Guidance</div>
                  <div className="text-gray-600">Expert advice to help navigate your journey.</div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-xl mb-2">Advocacy</div>
                  <div className="text-gray-600">Protecting your interests and rights.</div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">M</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-xl mb-2">Management</div>
                  <div className="text-gray-600">Professional oversight of your business matters.</div>
                </div>
                <div className="group">
                  <div className="flex items-center justify-center w-16 h-16 bg-brand-red rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl font-bold">E</span>
                  </div>
                  <div className="font-semibold text-gray-900 text-xl mb-2">Execution</div>
                  <div className="text-gray-600">Implementation of strategies for your success.</div>
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
            Ready to <span className="text-brand-red">Win</span><br />
            Where It <span className="text-brand-red">Matters Most</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            No billable hours. No surprises. Just transparent, flat-fee legal services when you need them.
          </p>
          <a
            href="https://scoreboardlegal.cliogrow.com/book"
            className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;

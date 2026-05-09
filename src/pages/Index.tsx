import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Briefcase,
  Trophy,
  Clapperboard,
  Building2,
  TrendingUp,
  ShoppingBag,
  UserCog,
  Scale,
  FileText,
  Shield,
  Gavel,
  Home,
  Landmark,
  Rocket,
  Handshake,
  Cpu,
  Radio,
  PenTool,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const clientTypes = [
    { icon: UserCog, label: "Founders & Entrepreneurs" },
    { icon: Rocket, label: "Startups & Emerging Companies" },
    { icon: Trophy, label: "Athletes & Sports Businesses" },
    { icon: Clapperboard, label: "Creators & Media Companies" },
    { icon: Users, label: "Operators & Executives" },
    { icon: TrendingUp, label: "Growth-Stage Businesses" },
    { icon: ShoppingBag, label: "Consumer Brands" },
    { icon: Scale, label: "Private Clients" },
  ];

  const services = [
    {
      title: "Fractional General Counsel",
      desc: "Ongoing legal and strategic support integrated into your business operations.",
      url: "/fractional-general-counsel",
      icon: Scale,
    },
    {
      title: "Commercial Transactions",
      desc: "Contracts, negotiations, and deal structures designed for operational success.",
      url: "/commercial-transactions",
      icon: FileText,
    },
    {
      title: "Corporate Formation & Governance",
      desc: "Entity structuring, governance frameworks, and compliance from day one.",
      url: "/corporate-formation-governance",
      icon: Landmark,
    },
    {
      title: "Emerging Companies & Venture Financings",
      desc: "Formation, financing, and growth-stage legal support for startups.",
      url: "/emerging-companies-venture-financings",
      icon: Rocket,
    },
    {
      title: "Mergers & Acquisitions",
      desc: "Strategic guidance through acquisitions, sales, and complex transactions.",
      url: "/mergers-acquisitions",
      icon: Handshake,
    },
    {
      title: "Employment",
      desc: "Workforce agreements, policies, and compliance for growing teams.",
      url: "/employment",
      icon: Users,
    },
    {
      title: "Intellectual Property",
      desc: "Brand protection, licensing, and IP strategy for creators and companies.",
      url: "/intellectual-property",
      icon: Shield,
    },
    {
      title: "Business Disputes",
      desc: "Practical resolution strategies focused on protecting business interests.",
      url: "/business-disputes",
      icon: Gavel,
    },
    {
      title: "Real Estate",
      desc: "Commercial leases, transactions, and property-related legal support.",
      url: "/real-estate",
      icon: Home,
    },
  ];

  const industries = [
    { icon: Trophy, label: "Sports & Entertainment" },
    { icon: Radio, label: "Media & Content" },
    { icon: Rocket, label: "Startups & Emerging Companies" },
    { icon: Cpu, label: "Technology" },
    { icon: ShoppingBag, label: "Consumer Brands" },
    { icon: PenTool, label: "Marketing & Creative Agencies" },
    { icon: Briefcase, label: "Professional Services" },
    { icon: TrendingUp, label: "Growth-Stage Businesses" },
  ];

  const faqs = [
    {
      q: "What types of clients does Scoreboard Legal work with?",
      a: "Scoreboard Legal works with founders, startups, businesses, athletes, creators, agencies, executives, and growth-stage companies across a wide range of legal and operational matters.",
    },
    {
      q: "What is fractional general counsel?",
      a: "Fractional general counsel services provide ongoing legal and strategic support to businesses without the need for a full-time in-house legal department.",
    },
    {
      q: "Does Scoreboard Legal work with startups and emerging companies?",
      a: "Yes. Scoreboard Legal supports startups and emerging companies on formation, governance, financing, commercial agreements, and operational legal matters.",
    },
    {
      q: "Does Scoreboard Legal bill hourly?",
      a: "No. Scoreboard Legal does not bill by the hour. We utilize flat-fee and subscription-based pricing models designed to provide clients with predictable, practical, and business-minded legal support without the uncertainty of traditional hourly billing.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center bg-black bg-cover bg-center bg-scroll overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/assets/scoreboardhome.jpg')`
        }}
      >
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center py-20">
          <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight">
            Strategic Counsel for Modern Businesses and Individuals
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
            Scoreboard Legal provides practical legal support across commercial
            transactions, business operations, venture financings, contracts,
            employment matters, personal matters, and strategic initiatives, with extensive
            experience supporting clients in sports, entertainment, media, and
            emerging industries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://scoreboardlegal.cliogrow.com/book"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-black hover:bg-neutral-800 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg border border-white/20"
              >
                Schedule a Consultation
              </Button>
            </a>
            <Link to="/services">
              <Button
                size="lg"
                className="bg-black hover:bg-neutral-800 text-white px-10 py-6 text-lg rounded-lg transition-all duration-300 border border-white/20"
              >
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We support businesses, founders, operators, private clients, and organizations
              across a wide range of industries and growth stages.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client) => (
              <div
                key={client.label}
                className="group bg-gray-50 border border-gray-100 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-md hover:border-brand-red/20 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-red/10 rounded-full mb-4 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <client.icon className="h-6 w-6 text-brand-red" />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                  {client.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              How We Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical legal guidance designed to support growth, operations,
              transactions, and long-term strategy for both business and personal matters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.url}
                className="group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-red/30 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-red/10 rounded-lg group-hover:bg-brand-red/20 transition-colors duration-300">
                    <service.icon className="h-5 w-5 text-brand-red" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-brand-red transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Business-Minded Legal Counsel */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Business-Minded Legal Counsel
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mb-10" />
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our experience spans commercial transactions, operational strategy,
            venture financings, sponsorships, media rights, corporate governance,
            and day-to-day business matters across a wide range of industries.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
            While we have significant experience within sports, entertainment,
            and media, our approach is grounded in practical business counsel
            designed to support growing companies, founders, operators, and
            organizations at every stage of growth and across every industry.
          </p>
        </div>
      </section>

      {/* Industry Experience */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Industry Experience
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.label}
                className="flex items-center gap-3 bg-gray-50 rounded-lg px-5 py-4 transition-all duration-300 hover:bg-brand-red/5 hover:border-brand-red/20 border border-transparent"
              >
                <ind.icon className="h-5 w-5 text-brand-red flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900">
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="bg-white rounded-xl border border-gray-200 px-6">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-red">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Let's Get To Work
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Let Scoreboard Legal help you Win. Where It Matters Most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://scoreboardlegal.cliogrow.com/book"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-black hover:bg-neutral-800 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg border border-white/20"
              >
                Schedule a Consultation
              </Button>
            </a>
            <Link to="/services">
              <Button
                size="lg"
                className="bg-black hover:bg-neutral-800 text-white px-10 py-6 text-lg rounded-lg transition-all duration-300 border border-white/20"
              >
                Explore Legal Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
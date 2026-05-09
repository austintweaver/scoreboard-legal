import { Button } from "@/components/ui/button";
import { Target, Rocket, Shield, Briefcase, Trophy, FileText, Users, Building2, Scale, TrendingUp, Clapperboard } from "lucide-react";
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    document.title = "Austin Weaver | Founder & Principal Attorney | Scoreboard Legal";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Austin Weaver is a transactional attorney and business operator advising businesses, founders, executives, athletes, creators, and growth-stage organizations on commercial transactions, venture financings, sponsorships, media rights, corporate governance, and strategic legal matters."
      );
    }

    return () => {
      // Cleanup: restore original meta description on unmount
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Scoreboard Legal provides practical business and transactional legal counsel for founders, businesses, operators, athletes, creators, and growth-stage companies across commercial transactions, venture financings, contracts, employment matters, and strategic business operations."
        );
      }
    };
  }, []);
  const representativeExperience = [
    { icon: FileText, text: "Commercial transactions and strategic partnerships" },
    { icon: TrendingUp, text: "Venture financing and growth-stage business matters" },
    { icon: Trophy, text: "Sponsorship and brand partnership agreements" },
    { icon: Clapperboard, text: "Media and production-related agreements" },
    { icon: Building2, text: "Corporate governance and operational strategy" },
    { icon: Scale, text: "Fractional general counsel support" },
    { icon: Users, text: "Employment and contractor matters" },
    { icon: Briefcase, text: "Business structuring and operational planning" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero / Intro Section */}
      <section className="bg-neutral-900 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img 
                src="/assets/weaver-headshot.jpeg" 
                alt="Austin Weaver" 
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
                Austin Weaver
              </h1>
              <p className="text-xl text-brand-red font-semibold mb-8">
                Founder & Principal Attorney
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Austin Weaver is a transactional attorney and business operator who advises businesses, founders, executives, athletes, creators, and growth-stage organizations on legal, operational, and strategic matters.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                His experience spans commercial transactions, venture financings, sponsorships, media rights, corporate governance, contracts, employment matters, and day-to-day business operations across a range of industries, including sports, entertainment, media, and emerging companies.
              </p>
              <p className="text-base text-gray-400 mb-10">
                Licensed in Florida and Illinois.
              </p>
              <a
                href="https://scoreboardlegal.cliogrow.com/book"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-brand-red hover:bg-green-800 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg"
                >
                  Let's Get To Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* An Operator's Perspective */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            An Operator's Perspective
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            In addition to his legal practice, Austin has served in executive leadership and operational roles supporting high-growth businesses through complex transactions, strategic initiatives, and day-to-day operations.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            His experience includes overseeing legal, finance, and operational functions across commercial transactions, governance, partnerships, media relationships, and organizational growth initiatives.
          </p>
        </div>
      </section>

      {/* Practical, Business-Minded Counsel */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Practical, Business-Minded Counsel
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Austin approaches legal representation with a practical and business-oriented mindset focused on helping clients move strategically and efficiently.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Rather than creating unnecessary complexity, his approach emphasizes clear communication, operational alignment, proactive guidance, and practical solutions designed to support long-term growth and business objectives.
          </p>
        </div>
      </section>

      {/* Sports & Entertainment Experience */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Sports & Entertainment Experience
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Austin has significant experience advising businesses and stakeholders operating within sports, entertainment, and media environments, including matters involving sponsorships, partnerships, media rights, commercial agreements, production matters, operational strategy, and growth initiatives.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            This experience provides a practical understanding of the operational and business realities unique to fast-moving and highly visible industries.
          </p>
        </div>
      </section>

      {/* Representative Experience */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-12">
            Representative Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {representativeExperience.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-lg px-5 py-4 border border-gray-200 transition-all duration-300 hover:border-brand-red/20 hover:shadow-md"
              >
                <item.icon className="h-5 w-5 text-brand-red flex-shrink-0" />
                <span className="text-sm font-medium text-gray-900 leading-snug">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-brand-red">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Alignment
              </h3>
              <p className="text-gray-600">
                We succeed when you do. Our model is designed to eliminate conflicts of interest, ensuring that every strategy, negotiation, and action is in full alignment with your goals, not ours.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Execution
              </h3>
              <p className="text-gray-600">
                Great strategies only matter when they're executed well. We bring precision, expertise, and business rigor to every engagement, ensuring plans translate into measurable outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-2">
                Integrity
              </h3>
              <p className="text-gray-600">
                We operate with transparency, honesty, and accountability — protecting our clients' interests with an uncompromising commitment to integrity and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Scoreboard Legal */}
      <section className="bg-neutral-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Why Scoreboard Legal
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Austin founded Scoreboard Legal to create a modern legal practice centered around practical guidance, strategic alignment, and long-term client relationships.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            The firm's approach is designed to provide sophisticated legal support in a structure that feels collaborative, efficient, and aligned with how modern businesses and individuals operate today.
          </p>
          <a
            href="https://scoreboardlegal.cliogrow.com/book"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-brand-red hover:bg-green-800 text-white font-semibold px-10 py-6 text-lg rounded-lg transition-all duration-300 shadow-lg"
            >
              Let's Get To Work
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;

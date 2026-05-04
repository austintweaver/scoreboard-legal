import { Scale, Users, TrendingUp, Target, Rocket, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-black bg-cover bg-center bg-scroll overflow-x-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/scoreboardhome.jpg')`
        }}
      >
        <div className="z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
          {/* Headline */}
          <h1 className="font-extrabold text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 tracking-tight break-words">
            <span className="inline-block pb-2 border-b-4 border-white">
              Built to Win.<br />
              Designed to Deliver.
            </span>
          </h1>
          {/* Subheadline */}
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-black mb-6 mt-2 tracking-wide uppercase break-words">
            We partner with competitors, creators and builders.
          </h2>
          {/* Supporting Body Text */}
          <div className="text-base sm:text-lg md:text-xl text-white font-medium space-y-2 mb-10 max-w-full break-words">
            <p className="leading-snug">
              We advise. We advocate. We protect.<br /><br />
              From the locker room to the boardroom, we help <span className="font-black">athletes</span>, <span className="font-black">coaches</span>, <span className="font-black">entertainers</span>, <span className="font-black">entrepreneurs</span>, and <span className="font-black">executives</span> navigate legal challenges and safeguard what they've built.<br /><br />
              No billable hours. No surprises. Just solutions.
            </p>
          </div>
          {/* CTA Button */}
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-green-800 text-white font-extrabold px-12 py-5 text-2xl shadow-xl rounded-full transition-all duration-300 tracking-wide uppercase"
              style={{ letterSpacing: '0.05em' }}
            >
              Let's Get to Work
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
              About <span className="text-brand-red">Scoreboard Legal</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Success isn’t just earned — it’s protected. Scoreboard Legal partners with athletes, coaches, entertainers, and business leaders to provide the legal strategies that guard their interests and position them to win in every arena.
            </p>
            {/* Values content moved here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
        </div>
      </section>

      {/* Three Pillars Section (restored as its own section) */}
      <section className="bg-gray-50 mx-0 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our <span className="text-brand-red">Core Strengths</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on expertise. Led by integrity. Measured by results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Legal Expertise (now Sports & Entertainment Law) */}
            <div className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Scale className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Sports & Entertainment Law
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We represent athletes, coaches, entertainers, and creators — providing tailored legal counsel on contracts, endorsements, media rights, and brand protection to safeguard careers on and off the field.
                </p>
              </div>
            </div>

            {/* Start-Up & Venture Advisory */}
            <div className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <Users className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Start-Up & Venture Advisory
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  From formation to funding, we advise emerging companies and entrepreneurs on corporate structuring, governance, capital raises, and strategic partnerships — ensuring legal readiness at every growth stage.
                </p>
              </div>
            </div>

            {/* Business Transactions & Growth */}
            <div className="group bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-red/10 rounded-full mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <TrendingUp className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Business Transactions & Growth
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're scaling operations, acquiring assets, or restructuring, we provide transactional expertise to help businesses navigate deals, manage risk, and drive sustainable growth.
                </p>
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
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              Let's Get to Work
            </Button>
          </Link>
        </div>
      </section>
    </div>;
};
export default Index;
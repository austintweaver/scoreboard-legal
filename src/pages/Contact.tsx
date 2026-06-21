import { useEffect } from "react";
import SEO from "@/components/SEO";

const Contact = () => {
  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <SEO
        title="Contact Scoreboard Legal | Illinois Business Attorney"
        description="Get in touch with Scoreboard Legal to discuss your business or transactional legal needs. Serving clients throughout Illinois."
        path="/contact"
      />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Contact <span className="text-brand-red">Us</span>
          </h1>
        </div>
      </section>

      {/* Typeform Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div data-tf-live="01KTQMKBMFJ2AE6P1NN75HWYVA"></div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                For direct inquiries: 
                <a 
                  href="mailto:contact@scoreboardlegal.com" 
                  className="text-brand-red hover:text-green-800 underline ml-1"
                >
                  contact@scoreboardlegal.com
                </a>
              </p>
              <a 
                href="tel:+16303878326"
                className="inline-block bg-black hover:bg-neutral-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg leading-none"
              >
                (630) 387-TEAM
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

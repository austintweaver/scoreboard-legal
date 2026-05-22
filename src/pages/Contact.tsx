import { handleClioClick } from "@/lib/clioConversion";

const Contact = () => {

  return (
    <div className="min-h-screen pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Contact <span className="text-brand-red">Us</span>
          </h1>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Book a Consultation
            </h2>
            <p className="text-gray-600 mb-8">
              Click below to access our secure booking system and schedule your consultation.
            </p>
            <a 
              href="https://scoreboardlegal.cliogrow.com/intake/b73c29a4a400707057c4c05ee6fd4ecc"
              onClick={handleClioClick}
              className="inline-block bg-brand-red hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
            >
              Open Booking System
            </a>
            <p className="text-sm text-gray-500 mt-4">
              This will open the booking page in a new tab
            </p>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                For direct inquiries: 
                <a 
                  href="mailto:contact@scoreboardlegal.com" 
                  className="text-brand-red hover:text-green-800 underline ml-1"
                >
                  contact@scoreboardlegal.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

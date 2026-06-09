
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="relative flex flex-col md:block md:h-20">
          {/* Social Icons Only, centered and larger */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 flex justify-center items-center w-full md:w-auto md:absolute-none md:top-auto md:left-auto md:transform-none h-20">
            <div className="flex space-x-8 justify-center w-full">
              <a href="https://www.facebook.com/scoreboardcollective" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-red transition-colors duration-200"><Facebook className="h-8 w-8" /></a>
              <a href="https://www.linkedin.com/company/scoreboardcollective/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-red transition-colors duration-200"><Linkedin className="h-8 w-8" /></a>
              <a href="https://www.instagram.com/scoreboardcollective/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-red transition-colors duration-200"><Instagram className="h-8 w-8" /></a>
            </div>
          </div>

          {/* Legal - right aligned, smaller, compact */}
          <div className="flex flex-col items-end text-right text-xs space-y-1 pr-2 md:absolute md:right-0 md:top-0 md:h-full md:justify-center md:w-auto w-full mt-20 md:mt-0">
            <h3 className="font-heading font-semibold mb-2 text-xs text-gray-600">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-gray-900 transition-colors duration-200 text-xs">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-gray-900 transition-colors duration-200 text-xs">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-4 pt-1 text-center">
        <p className="text-xs text-gray-900 mt-4 max-w-3xl mx-auto">
            <span className="font-bold">Disclaimer:</span> Scoreboard Legal, PLLC is a Florida professional limited liability company. Attorneys of the firm are licensed to practice law in Florida and Illinois. The information contained on this website is provided for general informational purposes only and should not be construed as legal advice or a substitute for obtaining legal advice regarding your specific matter. Viewing this website, communicating with Scoreboard Legal, PLLC through this website, or submitting information through any contact form, intake form, or scheduling platform does not create an attorney-client relationship. Please do not send confidential or time-sensitive information until an attorney-client relationship has been formally established through a signed engagement agreement.
          </p>
          <p className="text-xs text-gray-400 mt-4 max-w-3xl mx-auto">
            © 2025 Scoreboard Legal. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

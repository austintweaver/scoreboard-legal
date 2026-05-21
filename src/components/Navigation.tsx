import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Austin Weaver", path: "/team" },
    { name: "Contact", path: "/contact" }
  ];

  // Determine which logo to use and its size
  const isHome = location.pathname === "/";
  const logoSrc = "/assets/blacklogolegal.png";
  const logoAlt = "Scoreboard Strategy Logo";
  const logoClass = "h-14";
  const logoHidden = isHome && !isScrolled;

  // Determine header background
  const navBg = isHome && !isScrolled ? "bg-transparent" : "bg-white/95 backdrop-blur-md shadow-lg";

  // Determine link color - white on home page when not scrolled, dark otherwise
  const linkColor = isHome && !isScrolled ? "text-white" : "text-gray-900";

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt={logoAlt} className={`${logoClass} w-auto transition-all duration-300 nav-logo ${logoHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`} />
          </Link>

          {/* Dropdown menu button */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${isHome && !isScrolled ? "text-white" : "text-gray-900"} hover:text-brand-red p-2 transition-all duration-300 transform hover:scale-110`}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
                <span className={`h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
              </div>
            </Button>
          </div>
        </div>

        {/* Dropdown Navigation */}
        {isOpen && <div className="absolute top-16 right-4">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg min-w-[150px]">
              {navLinks.map(link => <Link key={link.path} to={link.path} className={`block px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-brand-red ${location.pathname === link.path ? "text-brand-red" : "text-gray-900"}`}>
                  {link.name}
                </Link>)}
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;

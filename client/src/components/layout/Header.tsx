import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import useScrollTo from '@/lib/hooks/useScrollTo';
import merakiLogo from '@assets/Meraki_Final_logo-01-removebg-preview_1749981370801.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const scrollTo = useScrollTo();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    if (location !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    scrollTo(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src={merakiLogo} 
              alt="Meraki - soulful life" 
              className="h-28 w-auto"
            />
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="md:hidden text-gray-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => handleNavClick('home')} 
            className={`${location === '/' ? 'text-purple-700' : 'text-gray-600'} font-medium hover:text-purple-500 transition-all`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('products')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            Products
          </button>
          <button 
            onClick={() => handleNavClick('about')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('testimonials')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            Testimonials
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-gray-600 font-medium hover:text-purple-500 transition-all"
          >
            Contact
          </button>
        </nav>
        
        <Button 
          onClick={() => handleNavClick('booking')} 
          className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white rounded-full"
        >
          Book Now
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="px-4 py-3 bg-white md:hidden">
          <div className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`${location === '/' ? 'text-purple-700' : 'text-gray-600'} font-medium text-left`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="text-gray-600 font-medium text-left"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('products')} 
              className="text-gray-600 font-medium text-left"
            >
              Products
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-gray-600 font-medium text-left"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')} 
              className="text-gray-600 font-medium text-left"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-gray-600 font-medium text-left"
            >
              Contact
            </button>
            <Button 
              onClick={() => handleNavClick('booking')} 
              className="bg-purple-600 text-white rounded-full w-full"
            >
              Book Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

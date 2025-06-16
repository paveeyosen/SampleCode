import { Link } from 'wouter';
import useScrollTo from '@/lib/hooks/useScrollTo';

const Footer = () => {
  const scrollTo = useScrollTo();

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
  };

  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Serene Healing</h3>
            <p className="text-purple-200 mb-6">
              Empowering holistic wellness through the healing arts. Your journey to balance and harmony begins here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition-all" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-all" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-all" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition-all" aria-label="Youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('testimonials')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-purple-200 hover:text-white transition-all"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-purple-200 hover:text-white transition-all">
                  Sound Healing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-200 hover:text-white transition-all">
                  Crystal Healing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-200 hover:text-white transition-all">
                  Aromatherapy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-200 hover:text-white transition-all">
                  Mindfulness Meditation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-purple-200 hover:text-white transition-all">
                  Combination Packages
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Newsletter</h3>
            <p className="text-purple-200 mb-4">
              Subscribe to receive updates on new services, products, and wellness tips.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-r-lg transition-all"
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-purple-800 text-center text-purple-300">
          <p>&copy; {new Date().getFullYear()} Serene Healing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

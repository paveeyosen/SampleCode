import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import monikkaaPhoto from '@assets/Meraki 3-2_1749982719833.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <img 
              src={monikkaaPhoto} 
              alt="Monikaa, Holistic Healing Practitioner" 
              className="w-full h-auto rounded-xl shadow-md max-w-md mx-auto"
            />
          </div>
          
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-purple-800">Our Story</h2>
            <h3 className="text-2xl font-medium mb-6 text-purple-600">Meraki Soulful Life</h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Monikaa's tryst with Healing started when she was on her own journey of self-development. With immense transformation in herself, her urge to help others intensified which made her take up Marriage and Family counselling professionally. It's been 12 years and since then there has been no looking back. Through her practice, she encourages her clients to make Holistic Healing - a way of life rather than just a small part of their life.
            </p>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              On this journey, she realized every individual is unique which made her gain expertise in Fingerprint Analysis and Numerology to help her clients journey within themselves to seek clarity on various facets of their life. With a cumulative experience in Counselling, Fingerprint Analysis, Numerology and Crystal Healing spanning over a decade, she has now become a confidante for people around her enabling them to discover their own potential to a much more blissful life.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-purple-600 hover:text-purple-800 transition-all"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-purple-600 hover:text-purple-800 transition-all"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-purple-600 hover:text-purple-800 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

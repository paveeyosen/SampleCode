import { Button } from '@/components/ui/button';
import useScrollTo from '@/lib/hooks/useScrollTo';

const HeroSection = () => {
  const scrollTo = useScrollTo();

  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-purple-600/70 z-10"></div>
      <div 
        className="relative h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
      >
        <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Discover Inner Peace and Healing
            </h1>
            <p className="text-xl mb-8">
              Embark on a journey to wellness with our holistic healing services designed to restore balance to your mind, body, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollTo('services')}
                className="bg-white text-purple-700 hover:bg-gray-100 font-medium px-8 py-6 rounded-full text-center"
              >
                Explore Services
              </Button>
              <Button 
                onClick={() => scrollTo('booking')}
                className="bg-purple-600 text-white hover:bg-purple-700 font-medium px-8 py-6 rounded-full text-center"
              >
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

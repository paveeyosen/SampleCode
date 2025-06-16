import { useQuery } from '@tanstack/react-query';
import { Service } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  return (
    <div className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-purple-800">
            Our Healing Services
          </h1>
          <p className="text-lg text-gray-600">
            Discover our comprehensive range of holistic healing services designed to restore balance and promote wellbeing in your life.
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <p>Loading services...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p>Error loading services. Please try again later.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {services?.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 bg-white rounded-xl overflow-hidden shadow-md p-8`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-purple-800">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <div className="mb-4">
                      <span className="font-medium text-purple-600">Duration:</span> {service.duration}
                    </div>
                    <Link href="/#booking">
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
                        Book This Service <FaArrowRight className="ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-6 text-gray-700">
            Not sure which service is right for you? Contact us for a free consultation.
          </p>
          <Link href="/#contact">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

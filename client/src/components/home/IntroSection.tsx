import { FaHeartPulse, FaCertificate, FaSeedling } from 'react-icons/fa6';

const IntroSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-purple-800">
            Welcome to Serene Healing
          </h2>
          <p className="text-lg text-gray-600">
            We believe in the power of holistic healing to transform lives. Our carefully curated services combine ancient wisdom with modern techniques to provide a comprehensive approach to wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-50 p-8 rounded-xl text-center">
            <div className="text-purple-600 text-4xl mb-4 flex justify-center">
              <FaHeartPulse />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-purple-800">Holistic Approach</h3>
            <p className="text-gray-600">
              We treat the whole person, addressing the interconnected nature of physical, emotional, and spiritual health.
            </p>
          </div>
          
          <div className="bg-purple-50 p-8 rounded-xl text-center">
            <div className="text-purple-600 text-4xl mb-4 flex justify-center">
              <FaCertificate />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-purple-800">Certified Practitioners</h3>
            <p className="text-gray-600">
              Our team consists of experienced, certified professionals dedicated to your healing journey.
            </p>
          </div>
          
          <div className="bg-purple-50 p-8 rounded-xl text-center">
            <div className="text-purple-600 text-4xl mb-4 flex justify-center">
              <FaSeedling />
            </div>
            <h3 className="text-xl font-heading font-bold mb-3 text-purple-800">Natural Products</h3>
            <p className="text-gray-600">
              We use only the highest quality, natural products to complement our healing services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

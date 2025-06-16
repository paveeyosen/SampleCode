import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-purple-800">
            About Serene Healing
          </h1>
          <p className="text-lg text-gray-600">
            Discover our journey, mission, and the healing philosophy that guides our practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://pixabay.com/get/g326f4917b53d66abc47e582c8e5c1df5a6f6655780e79c6be4f577a8540af72fa70058eb45f179d83a1739ba17cef568923884f99ab796fc9403c507d8937809_1280.jpg" 
              alt="Sarah Johnson, Lead Healing Practitioner" 
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-purple-800">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Serene Healing was founded in 2010 by Sarah Johnson after her own transformative journey with holistic healing practices. Following a personal health crisis that conventional medicine couldn't fully address, Sarah discovered the profound impact of integrative healing modalities.
            </p>
            <p className="text-gray-600 mb-6">
              After experiencing firsthand the transformative power of sound healing, crystal therapy, aromatherapy, and mindfulness meditation, Sarah committed herself to extensive training in these practices. Her vision was to create a sanctuary where others could find the same healing and balance she discovered.
            </p>
            <p className="text-gray-600">
              Today, Serene Healing has grown into a respected wellness center, helping hundreds of clients reconnect with their innate capacity for healing and wellbeing.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-12 rounded-xl shadow-sm mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-purple-800 text-center">Our Philosophy</h2>
            <div className="space-y-6">
              <p className="text-gray-600">
                At Serene Healing, we believe that true wellness comes from harmonizing the mind, body, and spirit. Our approach is founded on several core principles:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-3 text-purple-700">Holistic Integration</h3>
                  <p className="text-gray-600">
                    We view each person as a whole being, recognizing that physical symptoms often have emotional, mental, or spiritual components. Our treatments address all aspects of your wellbeing.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-3 text-purple-700">Personalized Care</h3>
                  <p className="text-gray-600">
                    We understand that each individual's healing journey is unique. Our services are tailored to your specific needs, challenges, and wellness goals.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-3 text-purple-700">Empowerment</h3>
                  <p className="text-gray-600">
                    We aim to empower you with knowledge and practices that support your continued healing beyond our sessions, fostering independence and self-care.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-heading font-bold mb-3 text-purple-700">Integration of Wisdom</h3>
                  <p className="text-gray-600">
                    Our practices honor ancient healing traditions while incorporating contemporary research and techniques for a comprehensive approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-600 text-white p-12 rounded-xl mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Meet Our Practitioner</h2>
            <h3 className="text-xl mb-6">Sarah Johnson, Certified Holistic Healer</h3>
            <p className="mb-8">
              Sarah holds multiple certifications in holistic healing modalities, including Sound Healing Therapy, Crystal Healing, Advanced Aromatherapy, and Mindfulness Meditation Teaching. With over 15 years of experience, she has helped hundreds of clients find relief from stress, anxiety, chronic pain, and emotional trauma.
            </p>
            <p className="mb-8">
              Her approach combines intuitive insight with technical expertise, creating a safe and nurturing environment for deep healing. Sarah regularly furthers her education through advanced training and stays current with research in the field of complementary and integrative health.
            </p>
            <p className="italic">
              "My greatest joy is witnessing the moment when clients reconnect with their own innate wisdom and healing capacity. True healing isn't something I do to you—it's a process we engage in together, awakening your body's natural ability to restore balance."
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-purple-800">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're seeking relief from specific symptoms or simply want to enhance your overall wellbeing, we're here to support you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#services">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full">
                Explore Our Services
              </Button>
            </Link>
            <Link href="/#booking">
              <Button className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

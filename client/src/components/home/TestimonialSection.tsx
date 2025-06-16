import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Testimonial } from '@shared/schema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  
  const { data: testimonials, isLoading, error } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => 
        (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    }
  };

  const handleNext = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>Loading testimonials...</p>
        </div>
      </section>
    );
  }

  if (error || !testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p>Error loading testimonials. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-purple-800">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600">
            Hear from those who have experienced the transformative power of our healing services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(itemsToShow)].map((_, i) => {
            const index = (currentIndex + i) % testimonials.length;
            const testimonial = testimonials[index];
            
            return (
              <Card key={index} className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    <div className="text-yellow-400 flex">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-medium text-xl">
                      {testimonial.initials}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium text-purple-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button
            onClick={handlePrev}
            className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 mr-4 flex items-center justify-center p-0"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </Button>
          <Button
            onClick={handleNext}
            className="h-12 w-12 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 flex items-center justify-center p-0"
            aria-label="Next testimonial"
          >
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { InsertInquiry, insertInquirySchema } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

// Extend the inquiry schema with additional validation
const inquiryFormSchema = insertInquirySchema.extend({
  email: z.string().email('Please enter a valid email address'),
});

type InquiryFormValues = z.infer<typeof inquiryFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const createInquiry = useMutation({
    mutationFn: async (data: InsertInquiry) => {
      const response = await apiRequest('POST', '/api/inquiries', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Message Sent',
        description: 'Your message has been sent successfully! We will get back to you as soon as possible.',
        duration: 5000,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: 'Message Failed',
        description: error.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
        duration: 5000,
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: InquiryFormValues) => {
    setIsSubmitting(true);
    createInquiry.mutate(data);
  };

  return (
    <div className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-purple-800">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We're here to answer your questions and help you begin your healing journey. Reach out to us using any of the methods below.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
            <div className="lg:col-span-3 bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-heading font-bold mb-6 text-purple-800">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Your email address" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Subject</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Message subject" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Your Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={6} 
                            placeholder="Your message" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="text-purple-600 mt-1 mr-4">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Serenity Lane<br />Harmony Hills, CA 94123</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="text-purple-600 mt-1 mr-4">
                    <FaPhoneAlt className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-500 text-sm">Monday-Friday, 9am-5pm PST</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="text-purple-600 mt-1 mr-4">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@serenehealing.com</p>
                    <p className="text-gray-600">bookings@serenehealing.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="text-purple-600 mt-1 mr-4">
                    <FaClock className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9am - 7pm<br />
                      Saturday: 10am - 5pm<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-medium text-gray-800 mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 flex items-center justify-center transition-all"
                    aria-label="Facebook"
                  >
                    <FaFacebookF />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 flex items-center justify-center transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 flex items-center justify-center transition-all"
                    aria-label="Pinterest"
                  >
                    <FaPinterest />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 flex items-center justify-center transition-all"
                    aria-label="Youtube"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-heading font-bold mb-6 text-purple-800 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-700">Do I need to prepare for my healing session?</h3>
                <p className="text-gray-600">
                  We recommend wearing comfortable clothing and avoiding heavy meals or stimulants before your session. Arriving a few minutes early helps you transition into a more relaxed state.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-700">How many sessions will I need?</h3>
                <p className="text-gray-600">
                  This varies depending on your specific needs and goals. Some clients experience significant benefits after just one session, while others benefit from regular ongoing sessions. We'll discuss recommendations during your initial consultation.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-700">Are your services covered by insurance?</h3>
                <p className="text-gray-600">
                  Most insurance plans do not cover holistic healing services. However, some clients use HSA or FSA accounts. We can provide detailed receipts for your records.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2 text-purple-700">What if I need to cancel my appointment?</h3>
                <p className="text-gray-600">
                  We require 24 hours notice for cancellations to avoid a cancellation fee. Emergencies are handled on a case-by-case basis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

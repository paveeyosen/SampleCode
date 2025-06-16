import { 
  users, 
  type User, 
  type InsertUser, 
  services, 
  type Service, 
  type InsertService,
  products,
  type Product,
  type InsertProduct,
  testimonials,
  type Testimonial,
  type InsertTestimonial,
  bookings,
  type Booking,
  type InsertBooking,
  inquiries,
  type Inquiry,
  type InsertInquiry
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Services
  getAllServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Products
  getAllProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  
  // Inquiries
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private servicesMap: Map<number, Service>;
  private productsMap: Map<number, Product>;
  private testimonialsMap: Map<number, Testimonial>;
  private bookingsMap: Map<number, Booking>;
  private inquiriesMap: Map<number, Inquiry>;
  
  private currentUserId: number;
  private currentServiceId: number;
  private currentProductId: number;
  private currentTestimonialId: number;
  private currentBookingId: number;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.servicesMap = new Map();
    this.productsMap = new Map();
    this.testimonialsMap = new Map();
    this.bookingsMap = new Map();
    this.inquiriesMap = new Map();
    
    this.currentUserId = 1;
    this.currentServiceId = 1;
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentBookingId = 1;
    this.currentInquiryId = 1;
    
    // Initialize with sample data
    this.initializeServices();
    this.initializeProducts();
    this.initializeTestimonials();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Service methods
  async getAllServices(): Promise<Service[]> {
    return Array.from(this.servicesMap.values());
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.servicesMap.get(id);
  }
  
  async createService(service: InsertService): Promise<Service> {
    const id = this.currentServiceId++;
    const newService: Service = { ...service, id };
    this.servicesMap.set(id, newService);
    return newService;
  }
  
  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.productsMap.values());
  }
  
  async getProduct(id: number): Promise<Product | undefined> {
    return this.productsMap.get(id);
  }
  
  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const newProduct: Product = { ...product, id };
    this.productsMap.set(id, newProduct);
    return newProduct;
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonialsMap.values());
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonialsMap.get(id);
  }
  
  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const newTestimonial: Testimonial = { ...testimonial, id };
    this.testimonialsMap.set(id, newTestimonial);
    return newTestimonial;
  }
  
  // Booking methods
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const createdAt = new Date();
    const newBooking: Booking = { ...booking, id, created_at: createdAt };
    this.bookingsMap.set(id, newBooking);
    return newBooking;
  }
  
  // Inquiry methods
  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const createdAt = new Date();
    const newInquiry: Inquiry = { ...inquiry, id, created_at: createdAt };
    this.inquiriesMap.set(id, newInquiry);
    return newInquiry;
  }
  
  // Initialize with sample data
  private initializeServices() {
    const services: InsertService[] = [
      {
        name: "Sound Healing",
        description: "Experience the therapeutic power of sound vibrations to reduce stress, alleviate pain, and promote deep relaxation. Our sound healing sessions use Tibetan singing bowls, tuning forks, and voice to create harmonic resonance that balances your energy centers.",
        image: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "60-90 minutes"
      },
      {
        name: "Crystal Healing",
        description: "Harness the natural energy of crystals to restore balance and harmony to your body's energy field. Each crystal possesses unique properties that can help remove energy blockages, promote healing, and enhance overall wellbeing.",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "45-60 minutes"
      },
      {
        name: "Aromatherapy",
        description: "Engage your sense of smell with our therapeutic-grade essential oils to influence physical, emotional, and mental health. Our aromatherapy sessions combine massage techniques with carefully selected essential oil blends to address your specific needs.",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/2/384212067/WF/OP/EE/17288167/aromatherapy-essential-oils-1000x1000.jpg",
        duration: "60 minutes"
      },
      {
        name: "Mindfulness Meditation",
        description: "Learn the art of being present through our guided mindfulness meditation sessions. Develop a greater awareness of your thoughts, feelings, and bodily sensations to reduce stress, improve focus, and cultivate inner peace.",
        image: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        duration: "45-75 minutes"
      }
    ];
    
    services.forEach(service => {
      this.createService(service);
    });
  }
  
  private initializeProducts() {
    const products: InsertProduct[] = [
      {
        name: "Lavender Essential Oil",
        description: "Known for its calming properties, lavender oil helps reduce anxiety and promotes restful sleep.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "₹2,299"
      },
      {
        name: "Peppermint Essential Oil",
        description: "Invigorating peppermint oil boosts energy, improves focus, and aids in digestion.",
        image: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/stock_your_natural_medicine_cabinet_slideshow/1800ss_getty_rf_peppermint_oil.jpg?resize=750px:*&output-quality=75",
        price: "₹1,999"
      },
      {
        name: "Serenity Blend",
        description: "A proprietary blend designed to promote relaxation and create a peaceful environment.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "₹2,699"
      },
      {
        name: "Tea Tree Essential Oil",
        description: "A powerful oil with cleansing properties for skin, home, and emotional wellbeing.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "₹2,199"
      },
      {
        name: "Lemon Essential Oil",
        description: "Uplifting citrus oil that purifies the air, elevates mood, and supports healthy digestion.",
        image: "https://images.unsplash.com/photo-1530991808291-7e157454758c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "₹1,599"
      },
      {
        name: "Beginner's Wellness Kit",
        description: "A curated collection of essential oils to start your journey to wellness and healing.",
        image: "https://ucarecdn.com/20feedab-8481-44d4-a8bb-5e3e11154f45/-/format/auto/-/preview/3000x3000/-/quality/lighter/wellness_banner_3.png",
        price: "₹7,299"
      }
    ];
    
    products.forEach(product => {
      this.createProduct(product);
    });
  }
  
  private initializeTestimonials() {
    const testimonials: InsertTestimonial[] = [
      {
        text: "The sound healing session was unlike anything I've experienced before. The vibrations seemed to wash away my stress, leaving me feeling deeply relaxed and renewed. Sarah has an incredible gift.",
        name: "Jennifer M.",
        title: "Sound Healing Client",
        initials: "JM"
      },
      {
        text: "I've been using the essential oils from Serene Healing for months now, and they've become an integral part of my daily wellness routine. The quality is exceptional, and the Serenity Blend helps me sleep better than ever.",
        name: "Robert T.",
        title: "Product Customer",
        initials: "RT"
      },
      {
        text: "The crystal healing and mindfulness meditation combo package was exactly what I needed during a particularly stressful time. I've noticed a significant improvement in my anxiety levels and overall sense of wellbeing.",
        name: "Amanda L.",
        title: "Regular Client",
        initials: "AL"
      },
      {
        text: "As someone who was skeptical about holistic healing, I'm now a complete convert. The aromatherapy sessions have helped with my chronic headaches more than any medication ever did.",
        name: "Michael D.",
        title: "Aromatherapy Client",
        initials: "MD"
      },
      {
        text: "Sarah creates such a calming and safe environment. Her mindfulness meditation classes have given me tools I use daily to manage stress and stay present.",
        name: "Olivia W.",
        title: "Meditation Student",
        initials: "OW"
      }
    ];
    
    testimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }
}

export const storage = new MemStorage();

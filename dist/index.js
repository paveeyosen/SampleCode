// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  users;
  servicesMap;
  productsMap;
  testimonialsMap;
  bookingsMap;
  inquiriesMap;
  currentUserId;
  currentServiceId;
  currentProductId;
  currentTestimonialId;
  currentBookingId;
  currentInquiryId;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.servicesMap = /* @__PURE__ */ new Map();
    this.productsMap = /* @__PURE__ */ new Map();
    this.testimonialsMap = /* @__PURE__ */ new Map();
    this.bookingsMap = /* @__PURE__ */ new Map();
    this.inquiriesMap = /* @__PURE__ */ new Map();
    this.currentUserId = 1;
    this.currentServiceId = 1;
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.currentBookingId = 1;
    this.currentInquiryId = 1;
    this.initializeServices();
    this.initializeProducts();
    this.initializeTestimonials();
  }
  // User methods
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  // Service methods
  async getAllServices() {
    return Array.from(this.servicesMap.values());
  }
  async getService(id) {
    return this.servicesMap.get(id);
  }
  async createService(service) {
    const id = this.currentServiceId++;
    const newService = { ...service, id };
    this.servicesMap.set(id, newService);
    return newService;
  }
  // Product methods
  async getAllProducts() {
    return Array.from(this.productsMap.values());
  }
  async getProduct(id) {
    return this.productsMap.get(id);
  }
  async createProduct(product) {
    const id = this.currentProductId++;
    const newProduct = { ...product, id };
    this.productsMap.set(id, newProduct);
    return newProduct;
  }
  // Testimonial methods
  async getAllTestimonials() {
    return Array.from(this.testimonialsMap.values());
  }
  async getTestimonial(id) {
    return this.testimonialsMap.get(id);
  }
  async createTestimonial(testimonial) {
    const id = this.currentTestimonialId++;
    const newTestimonial = { ...testimonial, id };
    this.testimonialsMap.set(id, newTestimonial);
    return newTestimonial;
  }
  // Booking methods
  async createBooking(booking) {
    const id = this.currentBookingId++;
    const createdAt = /* @__PURE__ */ new Date();
    const newBooking = { ...booking, id, created_at: createdAt };
    this.bookingsMap.set(id, newBooking);
    return newBooking;
  }
  // Inquiry methods
  async createInquiry(inquiry) {
    const id = this.currentInquiryId++;
    const createdAt = /* @__PURE__ */ new Date();
    const newInquiry = { ...inquiry, id, created_at: createdAt };
    this.inquiriesMap.set(id, newInquiry);
    return newInquiry;
  }
  // Initialize with sample data
  initializeServices() {
    const services2 = [
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
    services2.forEach((service) => {
      this.createService(service);
    });
  }
  initializeProducts() {
    const products2 = [
      {
        name: "Lavender Essential Oil",
        description: "Known for its calming properties, lavender oil helps reduce anxiety and promotes restful sleep.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "\u20B92,299"
      },
      {
        name: "Peppermint Essential Oil",
        description: "Invigorating peppermint oil boosts energy, improves focus, and aids in digestion.",
        image: "https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/articles/health_tools/stock_your_natural_medicine_cabinet_slideshow/1800ss_getty_rf_peppermint_oil.jpg?resize=750px:*&output-quality=75",
        price: "\u20B91,999"
      },
      {
        name: "Serenity Blend",
        description: "A proprietary blend designed to promote relaxation and create a peaceful environment.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "\u20B92,699"
      },
      {
        name: "Tea Tree Essential Oil",
        description: "A powerful oil with cleansing properties for skin, home, and emotional wellbeing.",
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "\u20B92,199"
      },
      {
        name: "Lemon Essential Oil",
        description: "Uplifting citrus oil that purifies the air, elevates mood, and supports healthy digestion.",
        image: "https://images.unsplash.com/photo-1530991808291-7e157454758c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        price: "\u20B91,599"
      },
      {
        name: "Beginner's Wellness Kit",
        description: "A curated collection of essential oils to start your journey to wellness and healing.",
        image: "https://ucarecdn.com/20feedab-8481-44d4-a8bb-5e3e11154f45/-/format/auto/-/preview/3000x3000/-/quality/lighter/wellness_banner_3.png",
        price: "\u20B97,299"
      }
    ];
    products2.forEach((product) => {
      this.createProduct(product);
    });
  }
  initializeTestimonials() {
    const testimonials2 = [
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
    testimonials2.forEach((testimonial) => {
      this.createTestimonial(testimonial);
    });
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  duration: text("duration").notNull()
});
var insertServiceSchema = createInsertSchema(services).omit({
  id: true
});
var products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  price: text("price").notNull()
});
var insertProductSchema = createInsertSchema(products).omit({
  id: true
});
var testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  initials: text("initials").notNull()
});
var insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true
});
var bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  service: text("service").notNull(),
  date: text("date").notNull(),
  time: text("time").notNull(),
  message: text("message"),
  created_at: timestamp("created_at").defaultNow()
});
var insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  created_at: true
});
var inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  created_at: timestamp("created_at").defaultNow()
});
var insertInquirySchema = createInsertSchema(inquiries).omit({
  id: true,
  created_at: true
});

// server/routes.ts
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
async function registerRoutes(app2) {
  app2.get("/api/services", async (req, res) => {
    try {
      const services2 = await storage.getAllServices();
      res.json(services2);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });
  app2.get("/api/products", async (req, res) => {
    try {
      const products2 = await storage.getAllProducts();
      res.json(products2);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getAllTestimonials();
      res.json(testimonials2);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });
  app2.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating booking:", error);
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });
  app2.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error creating inquiry:", error);
        res.status(500).json({ message: "Failed to create inquiry" });
      }
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  console.log("distPath", distPath);
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    let tt = path2.resolve(distPath, "index.html");
    console.log(tt);
    alert(tt);
    const jsonTest = {
      dispath: distPath,
      fullpath: tt,
      dir: import.meta.dirname
    };
    res.send(jsonTest);
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen(port, "127.0.0.1", () => {
    console.log(`Serving on port ${port}`);
  });
})();

# Serene Healing - Holistic Wellness Website

A beautiful, responsive healing service website featuring a purple theme and comprehensive wellness services.

## Features

- **Services Offered:**
  - Sound Healing
  - Crystal Healing
  - Aromatherapy
  - Mindfulness Meditation

- **Products:**
  - Doterra Essential Oils collection with WhatsApp ordering

- **Website Features:**
  - Responsive design for all devices
  - Purple color theme throughout
  - Service booking system
  - Contact inquiry forms
  - Client testimonials
  - About page with practitioner information
  - WhatsApp integration for product orders

## How to Run (Simple HTML Version)

### Option 1: Double-click to open
1. Simply double-click the `index.html` file
2. It will open in your default web browser
3. The website is fully functional!

### Option 2: Right-click and open with browser
1. Right-click on `index.html`
2. Select "Open with" > Choose your preferred browser
3. The website will load automatically

### Option 3: Drag and drop
1. Open your web browser
2. Drag the `index.html` file into the browser window
3. The website will load immediately

## Customization

### Update WhatsApp Number
In the `index.html` file, find this line (around line 450):
```javascript
const whatsappUrl = `https://wa.me/5551234567?text=${encodeURIComponent(message)}`;
```
Replace `5551234567` with your actual WhatsApp business number.

### Change Contact Information
Update the contact details in the Contact section:
- Address: Line ~380
- Phone: Line ~390
- Email: Line ~400
- Hours: Line ~410

### Modify Services or Products
- Services: Lines ~150-250
- Products: Lines ~270-370
- Add/remove items by copying the existing structure

### Color Theme
The purple color scheme is defined in the Tailwind configuration. To change colors, modify the `tailwind.config` object in the HTML head section.

## Features Overview

### Services Section
- **Sound Healing:** Therapeutic sound vibrations using Tibetan singing bowls
- **Crystal Healing:** Natural crystal energy for balance and harmony
- **Aromatherapy:** Therapeutic-grade essential oils with massage techniques
- **Mindfulness Meditation:** Guided sessions for present-moment awareness

### Products Section
- Premium Doterra essential oils
- Individual oils and curated wellness kits
- WhatsApp ordering integration
- Detailed product descriptions and pricing

### Interactive Elements
- Smooth scrolling navigation
- Mobile-responsive hamburger menu
- Interactive booking form
- Contact form with validation
- WhatsApp product ordering

### Forms
- **Booking Form:** Service selection, date/time preferences, contact info
- **Contact Form:** Name, email, subject, message
- Both forms show confirmation messages when submitted

## Browser Compatibility

This website works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers

## No Installation Required

Unlike complex web applications, this website:
- Requires no Node.js or build tools
- Works offline after initial load
- Uses CDN resources for fonts and icons
- Is completely self-contained in one HTML file

## Professional Features

- SEO-optimized with proper meta tags
- Accessible design with ARIA labels
- Fast loading with optimized images
- Mobile-first responsive design
- Professional typography and spacing

## Support

This website is designed to work immediately without any technical setup. If you need to make changes:

1. Open `index.html` in any text editor
2. Make your modifications
3. Save the file
4. Refresh your browser to see changes

For WhatsApp integration, ensure you have a WhatsApp Business account and update the phone number in the JavaScript section.

## License

This project is open source and available under the MIT License.
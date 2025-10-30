# DracoSec Website

> The Unified Cybersecurity Platform - 100% On-Premise, 100% Privacy-First

A modern, professional landing page for DracoSec, showcasing our unified offensive and defensive security platform.

## 🚀 Features

- **Modern Design**: Sleek, dark-themed UI with gradient accents inspired by leading cybersecurity platforms
- **Fully Responsive**: Perfect on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and smooth transitions throughout
- **Interactive Elements**: 
  - Animated statistics counters
  - Typing effect in code windows
  - Hover effects on cards and buttons
  - Cursor glow effect
- **3-Tier Pricing**: Clear pricing structure for Basic, Pro, and Enterprise plans
- **Contact Form**: Built-in contact form (ready for backend integration)
- **SEO Optimized**: Semantic HTML structure with proper meta tags

## 📁 Project Structure

```
Graduation/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## 🎯 Getting Started

### Option 1: Open Directly in Browser

1. Navigate to the project folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Use Live Server (Recommended for Development)

If you have VS Code with Live Server extension:

1. Right-click on `index.html`
2. Select "Open with Live Server"
3. The website will open at `http://127.0.0.1:5500`

### Option 3: Python HTTP Server

```powershell
# Navigate to the project directory
cd "c:\Users\60nin\OneDrive\Desktop\Graduation"

# Start a simple HTTP server
python -m http.server 8000
```

Then open your browser to `http://localhost:8000`

## 🎨 Customization Guide

### Change Colors

Edit the CSS variables in `styles.css` (lines 10-22):

```css
:root {
    --primary: #6366F1;        /* Main brand color */
    --secondary: #8B5CF6;      /* Secondary accent */
    --dark: #0A0E27;          /* Background color */
    /* ... more variables */
}
```

### Update Content

All content is in `index.html`. Key sections:

- **Hero Section** (line 45): Update the main headline and tagline
- **Features** (line 200): Modify feature descriptions
- **Platform Modules** (line 300): Update Offensive/Defensive Engine details
- **Pricing** (line 500): Change pricing tiers and features
- **Contact Info** (line 700): Update email, phone, location

### Add Your Logo

Replace the SVG logo with your own:

1. Find the logo SVG (lines 20-30 in `index.html`)
2. Replace with your logo image or SVG
3. Update the footer logo as well (line 750)

### Integrate Contact Form

The form is ready for backend integration. In `script.js` (line 85):

```javascript
// Uncomment and modify this section
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern features (Grid, Flexbox, CSS Variables, Animations)
- **Vanilla JavaScript**: No frameworks, pure JS for performance
- **Google Fonts**: Inter font family

## 🎭 Key Sections

1. **Navigation**: Fixed navbar with smooth scrolling
2. **Hero**: Eye-catching headline with animated stats
3. **Differentiators**: Three key value propositions
4. **Platform Modules**: Detailed breakdown of Offensive Engine & Defensive Shield
5. **Features Grid**: Six enterprise-grade features
6. **Pricing**: Three-tier pricing structure (Basic, Pro, Enterprise)
7. **CTA**: Call-to-action section for demos
8. **Contact**: Form and contact information
9. **Footer**: Links and copyright information

## 🚀 Performance Tips

- All CSS is in a single file for faster loading
- JavaScript is deferred for better initial page load
- Animations are GPU-accelerated
- Images can be lazy-loaded (add `data-src` attribute)

## 📝 SEO Checklist

- [x] Title tag optimized
- [x] Meta description added
- [x] Semantic HTML structure
- [x] Proper heading hierarchy (H1-H4)
- [x] Alt text ready for images
- [ ] Add Open Graph tags for social sharing
- [ ] Add favicon
- [ ] Submit sitemap to search engines

## 🔧 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Deployment Options

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Enable GitHub Pages in repository settings.

### Netlify
1. Drag and drop the folder to [netlify.com](https://netlify.com)
2. Your site is live!

### Traditional Hosting
Upload all files to your web host via FTP/SFTP.

## 🎯 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add live chat integration
- [ ] Create demo video embed
- [ ] Add testimonials slider
- [ ] Implement newsletter signup
- [ ] Add multi-language support

## 📧 Support

For questions or support:
- **Email**: contact@dracosec.com
- **Website**: [Coming Soon]

## 📄 License

© 2025 DracoSec. All rights reserved.

---

**Built with ❤️ for DracoSec Graduation Project**

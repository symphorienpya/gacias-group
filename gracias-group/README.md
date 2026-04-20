# Gracias Group - Professional Website

A modern, professional website for Gracias Group built with Express.js, Node.js, and EJS. Features a clean design, responsive layout, smooth animations, and comprehensive functionality.

## 🎨 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI**: Clean, professional interface with gradient backgrounds and smooth animations
- **Advanced Navigation**: Sticky navbar with mobile hamburger menu
- **Multiple Sections**: Home, About, Services, Team, Portfolio, and Contact pages
- **Smooth Animations**: CSS animations and Intersection Observer for scroll effects
- **Icon Integration**: Font Awesome icons throughout the site
- **Contact Form**: Functional contact form with validation and notifications
- **Footer**: Comprehensive footer with links and social media integration
- **Performance**: Optimized CSS and JavaScript for fast loading

## 📋 Sections Included

1. **Home**: Hero section with CTA, features preview, team highlights, and portfolio showcase
2. **About**: Company story, mission, vision, core values, and achievements
3. **Services**: Detailed service offerings with pricing packages
4. **Team**: Leadership team, departments, and company culture
5. **Portfolio**: Project showcase with case studies and statistics
6. **Contact**: Contact form, business information, FAQ, and map placeholder

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Clone/Extract the project**
```bash
cd gracias-group
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```
Or with nodemon (if installed):
```bash
nodemon server.js
```

4. **Open in browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
gracias-group/
├── public/
│   ├── css/
│   │   ├── style.css           # Main stylesheet
│   │   └── notification.css    # Notification styles
│   ├── js/
│   │   └── script.js           # Client-side JavaScript
│   └── images/                 # Image assets
├── views/
│   ├── index.ejs              # Home page
│   ├── about.ejs              # About page
│   ├── services.ejs           # Services page
│   ├── team.ejs               # Team page
│   ├── portfolio.ejs          # Portfolio page
│   ├── contact.ejs            # Contact page
│   ├── 404.ejs                # 404 error page
│   ├── error.ejs              # Error page
│   └── partials/
│       ├── navbar.ejs         # Navigation bar component
│       └── footer.ejs         # Footer component
├── routes/
│   └── main.js                # Main routes
├── server.js                  # Express server setup
└── package.json               # Project configuration

```

## 🛠 Technologies Used

- **Backend**: Express.js, Node.js
- **Frontend**: EJS, HTML5, CSS3, JavaScript
- **Icons**: Font Awesome 6
- **Styling**: CSS Grid, Flexbox, CSS Variables, Gradient backgrounds
- **Animations**: CSS animations, Intersection Observer API

## 🎨 Design Features

### Color Scheme
- Primary: #1e40af (Blue)
- Secondary: #7c3aed (Purple)
- Accent: #f59e0b (Amber)
- Dark Background: #0f172a
- Light Background: #f8fafc

### Typography
- Font Family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Font Sizes: Responsive and scalable
- Font Weights: 400, 500, 600, 700, 800

### Animations
- Slide In (Left, Right, Up)
- Float Effect
- Fade In
- Scale In
- Pulse Effect
- Smooth hover transitions

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1024px
- **Mobile**: Below 768px

## 🔧 Customization Guide

### Change Colors
Edit the CSS variables in `public/css/style.css`:
```css
:root {
  --primary-color: #1e40af;
  --secondary-color: #7c3aed;
  --accent-color: #f59e0b;
  /* ... more variables */
}
```

### Update Company Info
Edit footer and contact info in:
- `views/partials/footer.ejs`
- `views/contact.ejs`

### Add Your Logo
Replace the logo icon in `views/partials/navbar.ejs`:
```html
<i class="fas fa-crown"></i> <!-- Replace with your icon -->
```

### Modify Content
Edit individual page files in the `views/` directory to customize text, images, and sections.

## 📧 Contact Form Handling

Currently, the contact form logs submissions to the server console. To enable email functionality:

1. Install email package:
```bash
npm install nodemailer
```

2. Update the contact route in `routes/main.js`:
```javascript
// Add email sending logic here
```

## 🚀 Deployment

### Deploy to Heroku
```bash
heroku create gracias-group
git push heroku main
heroku open
```

### Environment Variables
Create a `.env` file (example):
```
PORT=3000
NODE_ENV=production
```

## 📝 License

This project is proprietary and designed for Gracias Group.

## 💬 Support

For issues or questions, contact: symphorienpyana065@gmail.com

---

**Built with ❤️ by the Gracias Group Team**

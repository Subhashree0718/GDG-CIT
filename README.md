# GDG CIT Chapter Website

A modern, responsive website for the Google Developer Groups (GDG) chapter at Chennai Institute of Technology, built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:3000`

## 📁 Project Structure

```
gdg-platform/
├── public/
│   └── images/          # Event, team, and activity images
├── content/             # Editable JSON content files
│   ├── site.json        # Hero text, global labels
│   ├── events.json      # Event listings
│   ├── team.json        # Team member profiles
│   ├── activities.json  # Blog/activity items
│   ├── social.json      # Social media links
│   └── settings.json    # Global settings
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Button, Card, Badge, SectionTitle
│   │   ├── layout/      # Navbar, Footer, Container
│   │   ├── homepage/    # Hero, PulseCounters, EventTimeline, etc.
│   │   ├── events/      # EventCard, EventFilter, EventList
│   │   ├── team/        # TeamCard, TeamGrid
│   │   └── contact/     # ContactForm
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Events.jsx
│   │   ├── Activities.jsx
│   │   ├── Team.jsx
│   │   └── Contact.jsx
│   ├── core/            # Core infrastructure
│   │   ├── context/     # Global state (SiteContext)
│   │   ├── hooks/       # Custom hooks (useContent, useScroll)
│   │   ├── router/      # React Router configuration
│   │   └── utils/       # Utilities and constants
│   ├── styles/          # Global CSS
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── tailwind.config.js   # TailwindCSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Features

### Pages
- **Home**: Hero section, community metrics, interactive event timeline, activity highlights
- **Events**: Filterable event listings (upcoming & past) with category filters
- **Activities**: Blog-style community updates and articles
- **Team**: Team member profiles with highlighted GDG Lead
- **Contact**: Contact form with validation and social media links

### Key Components
- **Interactive Event Timeline**: Vertical timeline with expandable event cards
- **Pulse Counters**: Animated statistics with count-up effect
- **Responsive Navbar**: Sticky navigation with mobile hamburger menu
- **Contact Form**: Client-side validation with success notifications
- **Activities Slider**: Auto-playing carousel for past events

### Technologies
- **React 18**: Component-based UI
- **Vite**: Fast build tool and dev server
- **TailwindCSS**: Utility-first CSS framework with Google color theme
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing with code splitting

## ✏️ Editing Content

All content is stored in JSON files in the `content/` directory for easy editing by non-technical users.

### Adding/Editing Events (`content/events.json`)

```json
{
  "id": "unique-event-id",
  "title": "Event Title",
  "date": "2025-01-15",
  "time": "10:00",
  "venue": "Seminar Hall, CIT",
  "category": "android",
  "summary": "Brief description",
  "details": "Detailed description",
  "image": "/images/events/event-image.jpg",
  "registerUrl": "https://registration-link.com",
  "resourcesUrl": "https://resources-link.com",
  "featured": true
}
```

**Categories**: `web`, `android`, `cloud`, `ml`, `hackathon`

### Adding/Editing Team Members (`content/team.json`)

```json
{
  "id": "member-id",
  "name": "Member Name",
  "role": "Role Title",
  "bio": "Short bio",
  "photo": "/images/team/photo.jpg",
  "socials": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "instagram": "https://instagram.com/username"
  }
}
```

### Updating Social Links (`content/social.json`)

Update WhatsApp, Discord, Instagram, GitHub, and other community links.

### Modifying Site Text (`content/site.json`)

Edit hero text, taglines, footer content, and global labels.

### Adjusting Metrics (`content/settings.json`)

Update community metrics displayed in the Pulse Counters.

## 🖼️ Adding Images

1. Place images in the appropriate folder under `public/images/`:
   - `public/images/events/` for event images
   - `public/images/team/` for team photos  
   - `public/images/activities/` for blog cover images

2. Reference images in JSON files using the path: `/images/folder/filename.jpg`

3. For best results:
   - Event images: 16:9 aspect ratio (e.g., 1200×675px)
   - Team photos: Square aspect ratio (e.g., 400×400px)
   - Activity covers: 16:9 aspect ratio

## 🎨 Customizing Theme

Edit `tailwind.config.js` to customize colors, fonts, and design tokens:

```js
theme: {
  extend: {
    colors: {
      gdgBlue: '#4285F4',
      gdgRed: '#EA4335',
      gdgYellow: '#FBBC04',
      gdgGreen: '#34A853'
    },
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Vite and deploy

### Netlify

1. Push code to GitHub
2. New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`

### Manual Deploy

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive components
- Keyboard navigation support
- Focus visible states
- Respect for `prefers-reduced-motion`
- Color contrast compliance

## 🧪 Testing

### Manual Testing Checklist
- [ ] Test all navigation links
- [ ] Test event filtering
- [ ] Test contact form validation
- [ ] Test mobile hamburger menu
- [ ] Test on mobile (360px), tablet (768px), desktop (1440px)
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit (aim for 90+ accessibility score)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available for use by GDG chapters.

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For questions or support:
- Email: gdg@cit.edu.in
- GitHub: [gdgcit](https://github.com/gdgcit)

---

Built with ❤️ by GDG CIT Chapter

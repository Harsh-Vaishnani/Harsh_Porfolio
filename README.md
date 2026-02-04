# Premium Developer Portfolio - Harsh Vaishnani

A modern, high-performance portfolio website built with cutting-edge technologies for a senior MERN Stack and Shopify developer.

## Features

### 🎨 Design & UX
- **Dark Professional Theme**: Black background with elegant white and blue accents
- **Glassmorphism Cards**: Modern UI components with frosted glass effect
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Smooth Animations**: Scroll-triggered reveals and hover micro-interactions
- **Custom Cursor Light**: Interactive cursor-following glow effect

### 📄 Pages
1. **Home Page** - Hero section with animated name and professional intro
2. **About Page** - Professional summary and developer approach
3. **Skills Page** - Categorized technical skills with proficiency levels
4. **Experience Page** - Timeline-style work experience and education
5. **Projects Page** - Featured projects with tech stack and links
6. **Resume Page** - Professional resume with download functionality
7. **Contact Page** - Contact form with multiple communication methods

### 🚀 Performance & SEO
- Next.js 16 with App Router for optimal performance
- Lazy loading and image optimization
- SEO-optimized meta tags and Open Graph support
- Fast page transitions and smooth scrolling

### 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript (ES6+ only, no TypeScript)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion, GSAP
- **API Routes**: Node.js-based contact form handling
- **Database**: MongoDB-ready schema for contact submissions

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd harsh-vaishnani-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional for email integration):
```bash
# Create .env.local file
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── skills/page.tsx         # Skills page
│   ├── experience/page.tsx     # Experience page
│   ├── projects/page.tsx       # Projects page
│   ├── resume/page.tsx         # Resume page
│   ├── contact/page.tsx        # Contact page
│   ├── api/contact/route.js    # Contact form API
│   └── globals.css             # Global styles and theme
├── components/
│   ├── navbar.jsx              # Navigation component
│   ├── footer.jsx              # Footer component
│   ├── cursor-light.jsx        # Cursor effect component
│   ├── animated-section.jsx    # Reusable animation component
│   └── page-transition.jsx     # Page transition animations
├── hooks/
│   └── use-scroll-animate.js   # Custom scroll animation hooks
├── public/                      # Static assets
└── package.json                # Dependencies

```

## Customization

### Update Your Information
Edit the following files to customize with your information:

- `/app/layout.tsx` - Update metadata (title, description)
- `/app/page.tsx` - Modify hero section text
- `/app/about/page.tsx` - Update your summary and approach
- `/app/experience/page.tsx` - Add your work experience
- `/app/projects/page.tsx` - Showcase your projects
- `/app/contact/page.tsx` - Update contact information
- `/app/resume/page.tsx` - Modify your resume content

### Theme Colors
Customize the color scheme in `/app/globals.css`:
- Primary: Blue (#60a5fa)
- Secondary: Purple (#a855f7)
- Accents: Gray shades

### Animations
Adjust animation timings in individual component files using Framer Motion props:
- `duration`: Animation length
- `delay`: Stagger delay
- `transition`: Easing functions

## Contact Form Integration

The contact form in `/app/contact/page.tsx` sends data to `/api/contact`.

To enable email notifications, integrate with:
- **SendGrid**: `npm install @sendgrid/mail`
- **Mailgun**: `npm install mailgun.js`
- **Resend**: `npm install resend`
- **NodeMailer**: `npm install nodemailer`

Example with Resend:
```javascript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const body = await request.json()
  
  await resend.emails.send({
    from: 'noreply@yourdomain.com',
    to: 'your-email@example.com',
    subject: body.subject,
    html: `<p>${body.message}</p>`,
  })
  
  return Response.json({ success: true })
}
```

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Connect to Vercel: https://vercel.com
3. Select your repository
4. Add environment variables if needed
5. Deploy!

```bash
# Or deploy directly from CLI
npm install -g vercel
vercel
```

### Deploy Elsewhere
The portfolio can be deployed on any Node.js hosting:
- **Netlify**: Requires serverless functions for API routes
- **AWS**: EC2, Lambda with serverless framework
- **DigitalOcean**: App Platform
- **Railway**: Git-connected deployment

## Performance Optimization

- **Image Optimization**: Next.js Image component for automatic optimization
- **Code Splitting**: Automatic with App Router
- **Font Optimization**: Geist font from next/font
- **CSS Optimization**: Tailwind CSS purges unused styles
- **Animation Performance**: GPU-accelerated with `will-change` and `transform`

## SEO Best Practices

- Meta tags optimized for search engines
- Open Graph tags for social sharing
- Semantic HTML structure
- Mobile-friendly responsive design
- Fast Core Web Vitals
- Sitemap-ready structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Known Limitations

- Contact form currently logs to console (requires email service integration)
- MongoDB integration is schema-ready but not connected by default
- GSAP used for advanced animations (consider for future enhancements)

## Future Enhancements

- [ ] Dark mode toggle (currently dark-only)
- [ ] Blog section with markdown support
- [ ] GitHub activity feed integration
- [ ] Real-time notification for form submissions
- [ ] Advanced search functionality
- [ ] Project filtering by technology
- [ ] Multi-language support

## License

This portfolio template is free to use and customize for personal and professional purposes.

## Credits

Built with:
- [Next.js](https://nextjs.org)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [GSAP](https://greensock.com/gsap)

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed information
3. Include screenshots or error messages

---

**Designed & Built** for creating a premium developer portfolio that stands out in the job market.

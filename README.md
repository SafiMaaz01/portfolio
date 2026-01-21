# 🚀 Modern Portfolio Website

A stunning, feature-rich portfolio website built with Next.js 16, Sanity CMS, and modern UI components. This portfolio showcases your professional experience, projects, skills, and achievements with beautiful animations and a seamless user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Sanity](https://img.shields.io/badge/Sanity-4.22.0-red?style=flat-square&logo=sanity)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

### 🎨 Modern UI/UX

- **Responsive Design** - Fully responsive across all devices
- **Dark Mode Support** - Built-in theme toggle with next-themes
- **Smooth Animations** - Powered by Motion (Framer Motion)
- **Interactive Components** - Floating dock navigation, animated sections
- **Beautiful Typography** - Optimized fonts with next/font

### 📦 Content Management

- **Sanity CMS Integration** - Headless CMS for easy content management
- **Real-time Preview** - Live preview of content changes
- **GROQ Queries** - Powerful data fetching with GROQ
- **Portable Text** - Rich text content with custom components
- **Image Optimization** - Automatic image optimization with Sanity CDN

### 🔐 Authentication

- **Clerk Integration** - Secure authentication and user management
- **Protected Routes** - Role-based access control
- **User Profiles** - Customizable user profiles

### 📱 Portfolio Sections

- **Hero Section** - Eye-catching introduction with animated headlines
- **About** - Professional bio and background
- **Skills** - Interactive skills chart with proficiency levels
- **Experience** - Work history timeline
- **Education** - Academic background
- **Projects** - Portfolio showcase with detailed project pages
- **Blog** - Technical blog with rich content
- **Services** - Service offerings with pricing
- **Achievements** - Awards and recognitions
- **Certifications** - Professional certifications
- **Testimonials** - Client testimonials and reviews
- **Contact** - Contact form with validation

### 🛠️ Developer Experience

- **TypeScript** - Full type safety
- **Biome** - Fast linting and formatting
- **Component Library** - Reusable UI components with Radix UI
- **Utility-First CSS** - TailwindCSS for rapid styling
- **Code Quality** - Strict linting and formatting rules

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SafiMaaz01/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

   # Clerk Authentication (Optional)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-key
   CLERK_SECRET_KEY=your-clerk-secret
   ```

4. **Import sample data** (Optional)

   Navigate to the `Data` folder and import the sample data:

   ```bash
   cd Data

   # Import all data files
   sanity dataset import skills.ndjson production --replace
   sanity dataset import profile.ndjson production --replace
   sanity dataset import education.ndjson production --replace
   sanity dataset import experience.ndjson production --replace
   sanity dataset import projects.ndjson production --replace
   sanity dataset import blog.ndjson production --replace
   sanity dataset import services.ndjson production --replace
   sanity dataset import achievements.ndjson production --replace
   sanity dataset import certifications.ndjson production --replace
   sanity dataset import testimonials.ndjson production --replace
   sanity dataset import siteSettings.ndjson production --replace
   sanity dataset import contact.ndjson production --replace
   ```

   See the [Data README](./Data/README.md) for detailed import instructions.

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Portfolio: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── (portfolio)/         # Portfolio routes
│   │   ├── layout.tsx       # Portfolio layout
│   │   └── page.tsx         # Home page
│   ├── (sanity)/            # Sanity Studio routes
│   ├── actions/             # Server actions
│   ├── api/                 # API routes
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── sections/            # Portfolio sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ...
│   ├── ui/                  # UI components (Radix UI)
│   ├── FloatingDock.tsx     # Navigation dock
│   ├── DarkModeToggle.tsx   # Theme toggle
│   └── ...
├── Data/                    # Sample data for Sanity
│   ├── README.md            # Data import guide
│   ├── skills.ndjson
│   ├── profile.ndjson
│   └── ...
├── sanity/                  # Sanity configuration
│   ├── schemaTypes/         # Content schemas
│   ├── env.ts               # Environment config
│   └── structure.ts         # Studio structure
├── lib/                     # Utility functions
├── hooks/                   # Custom React hooks
├── public/                  # Static assets
├── .env.local               # Environment variables (create this)
├── sanity.config.ts         # Sanity Studio config
├── next.config.ts           # Next.js config
├── tailwind.config.ts       # TailwindCSS config
├── biome.json               # Biome config
└── package.json             # Dependencies
```

## 🎨 Customization

### Update Your Profile

1. **Via Sanity Studio** (Recommended)
   - Navigate to [http://localhost:3000/studio](http://localhost:3000/studio)
   - Edit the Profile document
   - Update your information, upload images, and save

2. **Via Data Files**
   - Edit `Data/profile.ndjson`
   - Re-import: `sanity dataset import Data/profile.ndjson production --replace`

### Customize Theme Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... */
}
```

### Add New Sections

1. Create a new component in `components/sections/`
2. Add the section to `app/(portfolio)/page.tsx`
3. Create corresponding Sanity schema if needed

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server (without Turbopack)
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run Biome linter
npm run format           # Format code with Biome

# Sanity
npm run typegen          # Generate TypeScript types from Sanity schemas
```

## 🔧 Tech Stack

### Frontend

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[TailwindCSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[Motion](https://motion.dev/)** - Animation library (Framer Motion)
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Backend & CMS

- **[Sanity](https://www.sanity.io/)** - Headless CMS
- **[GROQ](https://www.sanity.io/docs/groq)** - Query language
- **[Clerk](https://clerk.com/)** - Authentication (optional)

### UI Components

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Tabler Icons](https://tabler.io/icons)** - Additional icons
- **[Recharts](https://recharts.org/)** - Chart library

### Developer Tools

- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[Babel React Compiler](https://react.dev/learn/react-compiler)** - React optimization

## 📊 Content Management

### Sanity Studio

Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio) to manage:

- **Profile** - Your personal information
- **Skills** - Technical skills with proficiency levels
- **Experience** - Work history
- **Education** - Academic background
- **Projects** - Portfolio projects
- **Blog Posts** - Technical articles
- **Services** - Service offerings
- **Achievements** - Awards and recognitions
- **Certifications** - Professional certifications
- **Testimonials** - Client reviews
- **Site Settings** - Global site configuration
- **Contact Submissions** - Form submissions

### GROQ Queries

Example queries for fetching data:

```groq
// Get all published projects
*[_type == "project" && !(_id in path("drafts.**"))] | order(order asc)

// Get featured blog posts
*[_type == "blog" && featured == true] | order(publishedAt desc)

// Get skills by category
*[_type == "skill"] | order(category asc, proficiency desc)
```

See [Data/GROQ-EXAMPLES.md](./Data/GROQ-EXAMPLES.md) for more examples.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

3. **Set up environment variables in Vercel**
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (if using Clerk)
   - `CLERK_SECRET_KEY` (if using Clerk)

### Other Deployment Options

- **Netlify** - [Guide](https://docs.netlify.com/frameworks/next-js/)
- **AWS Amplify** - [Guide](https://docs.amplify.aws/nextjs/)
- **Self-hosted** - Use `npm run build && npm run start`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**MD SAFI MAAZ**

- GitHub: [@SafiMaaz01](https://github.com/SafiMaaz01)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SafiMaaz01/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [Motion Documentation](https://motion.dev/docs)

## 🐛 Known Issues

- Turbopack is disabled in development mode for compatibility
- Some animations may require browser-specific optimizations

## 🗺️ Roadmap

- [ ] Add blog post search and filtering
- [ ] Implement project categories
- [ ] Add analytics integration
- [ ] Create admin dashboard
- [ ] Add multi-language support
- [ ] Implement newsletter subscription
- [ ] Add RSS feed for blog

---

**Built with ❤️ using Next.js and Sanity**

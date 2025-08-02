# Cloud Native CISO Website
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The **Cloud Native CISO** project is the official website for the Cloud Native CISO initiative. It is built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com), providing fast and accessible pages for the community.

## ✨ Features

- 📱 **Fully Responsive** - Looks great on all devices
- 🚀 **Performance Focused** - Optimized for speed and SEO
- 📝 **Blog Ready** - Complete blog functionality with categories and pagination
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and sitemap
- 🧩 **Component-Based** - Modular architecture for easy customization
- 🎭 **Animation Ready** - Integrated AOS (Animate On Scroll) for smooth animations
- 📊 **Stats Section** - Display your metrics with beautiful stat components
- 🤝 **Team Grid** - Showcase your team members
- 🔄 **Flexible Layouts** - Hero sections, feature grids, split panels, and more
- 📋 **FAQ Component** - Easy-to-use FAQ accordion
- 📞 **Contact Components** - Ready-to-use contact information display
- 🏢 **Logo Showcase** - Display partner or client logos
- 🔘 **Modern UI Components** - Buttons, forms, cards, and more

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/rspisarski/cloud-native-ciso.git
cd cloud-native-ciso
npm install
```

## Running the Project

Use the following npm scripts:

```bash
npm run dev     # Start local dev server at localhost:4321
npm run build   # Build the production site to ./dist/
npm run preview # Preview the production build locally
npm run check   # Run Astro's type and config checks
```

## Deployment

This site uses Astro's static build output and is deployed on Cloudflare Pages. Pushing to the main branch triggers a Pages build. To preview locally before deployment, run `npm run build` followed by `npm run preview`.

## 📁 Project Structure

```
/
├── public/             # Static assets
│   └── favicon.ico
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # UI components
│   │   ├── blog/       # Blog-specific components
│   │   ├── forms/      # Form components
│   │   ├── icons/      # Icon components
│   │   ├── sections/   # Page section components
│   │   ├── team/       # Team components
│   │   └── ui/         # Basic UI components
│   ├── content/        # Content collections
│   ├── data/           # Configuration and data files
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page routes
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
└── package.json
```

## ⚙️ Configuration

Customize your site by editing the configuration files in the `src/data/` directory:

- `config.ts` - Site-wide configuration including company info and SEO settings
- `menu.ts` - Navigation menu structure
- `features.ts` - Feature section content
- `faqs.ts` - FAQ content
- `logos.ts` - Partner/client logos
- `stats.ts` - Statistics display data
- `categories.ts` - Blog categories

## 📝 Content Management

This project uses Astro's content collections for blog posts and other content. Add your content to the `src/content/` directory.

## 🧩 Components

The site includes a wide range of components:

- **Layout Components**: Hero, Features, Split Panel, CTA Banner, etc.
- **UI Components**: Buttons, Forms, Cards, etc.
- **Blog Components**: Post cards, category pills, etc.
- **Team Components**: Team grid, member cards, etc.

## 🛠️ Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                            |
| `npm run dev`          | Start local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`         |
| `npm run preview`      | Preview your build locally before deploying     |
| `npm run check`        | Run Astro's type and config checks              |
| `npm run astro ...`    | Run other Astro CLI commands                    |

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Credits

- Built with [Astro](https://astro.build)
- Animations by [AOS](https://michalsnik.github.io/aos/)
- Icons from [Lucide](https://lucide.dev)

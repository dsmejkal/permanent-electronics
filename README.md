# Permanent Electronics Website

A modern, lightweight website for Permanent Electronics built with Astro, featuring:

## Features

- **Modern Framework**: Built with Astro for optimal performance and SEO
- **Shopping Cart**: Integrated Snipcart for seamless e-commerce functionality
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Contact Forms**: Built-in contact and newsletter signup forms
- **Document Management**: Organized repository for build guides, schematics, and support documents
- **Fast Loading**: Optimized for speed with static site generation

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **E-commerce**: Snipcart (free up to $500/month)
- **Deployment**: Static site generation for fast hosting anywhere

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Snipcart Setup

To enable the shopping cart functionality:

1. Sign up for a free Snipcart account at https://snipcart.com
2. Get your public API key from the Snipcart dashboard
3. Replace `YOUR_SNIPCART_PUBLIC_API_KEY` in the following files:
   - `src/layouts/Layout.astro` (2 locations)

## Customization

### Adding Products

Edit the product data in:
- `src/pages/shop.astro` - Main shop page
- `src/pages/index.astro` - Featured products on homepage

### Contact Form

The contact form in `src/pages/contact.astro` currently shows an alert. To connect it to a backend:

1. Replace the form action with your endpoint
2. Update the JavaScript handling in the script section

### Newsletter Signup

Newsletter forms throughout the site need to be connected to your email service provider (MailChimp, ConvertKit, etc.)

## File Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.astro
│   └── Footer.astro
├── layouts/            # Page layouts
│   └── Layout.astro
├── pages/              # Website pages
│   ├── index.astro     # Homepage
│   ├── shop.astro      # Shop page
│   ├── projects.astro  # Projects overview
│   ├── docs.astro      # Documentation
│   └── contact.astro   # Contact page
public/
├── images/             # Static images
└── docs/               # Documentation files (PDFs, etc.)
```

## Deployment

This site can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import project from GitHub
- **GitHub Pages**: Enable in repository settings
- **Traditional hosting**: Upload the `dist/` folder after building

## Performance

The site is optimized for performance with:
- Static site generation
- Minimal JavaScript (only for cart functionality)
- Optimized images and assets
- Fast CDN delivery through Snipcart

## Support

For questions about the website or DIY electronics projects:
- Email: support@permanentelectronics.com
- Visit: /contact page on the website
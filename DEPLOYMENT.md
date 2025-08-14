# Netlify Deployment Guide

This guide will help you deploy your Permanent Electronics website to Netlify.

## Prerequisites

1. A GitHub account
2. A Netlify account (free at https://netlify.com)
3. Your code pushed to a GitHub repository

## Step 1: Push Your Code to GitHub

First, make sure all your code is committed and pushed to GitHub:

```bash
git add .
git commit -m "Initial website setup with Astro and Snipcart"
git push origin main
```

## Step 2: Connect to Netlify

1. Log in to your Netlify account at https://netlify.com
2. Click "New site from Git"
3. Choose "GitHub" as your provider
4. Select your `permanent-electronics` repository
5. Configure the build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

## Step 3: Environment Variables (Optional)

If you need to set environment variables:

1. Go to Site settings > Environment variables
2. Add any required variables

## Step 4: Custom Domain (Optional)

To use your own domain:

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the instructions to configure your DNS

## Step 5: Configure Snipcart

After deployment:

1. Get your Snipcart public API key from https://snipcart.com
2. Update the API key in your deployed site or use environment variables
3. Test the shopping cart functionality

## Automatic Deployments

Netlify will automatically rebuild and redeploy your site whenever you push changes to the main branch of your GitHub repository.

## Build Status

You can monitor your builds in the Netlify dashboard under "Deploys".

## Custom Headers and Redirects

The `netlify.toml` file in your project root configures:
- Build settings
- Cache headers for performance
- Redirect rules for single-page app behavior

## Troubleshooting

### Build Fails
- Check the build log in Netlify dashboard
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Site Not Loading
- Check if the build completed successfully
- Verify the publish directory is set to `dist`
- Check for any console errors in browser dev tools

### Shopping Cart Issues
- Verify Snipcart API key is correct
- Check that product data attributes are properly set
- Ensure Snipcart scripts are loading correctly

## Performance Optimization

Your site is already optimized with:
- Static site generation via Astro
- Optimized assets and images
- Proper caching headers
- CDN delivery through Netlify's global network

## Support

For deployment issues:
- Netlify Support: https://netlify.com/support
- Astro Documentation: https://docs.astro.build
- This project's documentation in README.md

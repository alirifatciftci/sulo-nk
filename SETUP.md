# Setup Instructions

## Favicon Setup

To complete the favicon setup, you need to create the following files in the `public` folder:

1. **favicon-16x16.png** (16x16 pixels)
2. **favicon-32x32.png** (32x32 pixels)
3. **apple-touch-icon.png** (180x180 pixels)
4. **android-chrome-192x192.png** (192x192 pixels)
5. **android-chrome-512x512.png** (512x512 pixels)
6. **og-image.jpg** (1200x630 pixels) - For social media sharing

### Quick Favicon Generation

You can use these free tools to generate all favicon sizes:

- https://realfavicongenerator.net/
- https://favicon.io/

Just upload your logo and download all the generated files to the `public` folder.

## Google Analytics Setup

1. Go to https://analytics.google.com/
2. Create a new property for your website
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. Open `src/components/GoogleAnalytics.tsx`
5. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID

## Domain Configuration

Before deploying, update the domain in these files:

1. **src/components/SEO.tsx** - Line 10: `url = "https://suleymandegirmenci.com"`
2. **public/sitemap.xml** - All `<loc>` tags
3. **index.html** - Meta tags with URLs

## Image Optimization

For better performance, consider:

1. Converting images to WebP format
2. Compressing images using tools like TinyPNG
3. Using responsive images with srcset

## Deployment Checklist

- [ ] Add favicon files to public folder
- [ ] Configure Google Analytics ID
- [ ] Update domain URLs in all files
- [ ] Add og-image.jpg for social sharing
- [ ] Test all pages and links
- [ ] Test on mobile devices
- [ ] Check page load speed
- [ ] Verify SEO meta tags
- [ ] Test social media sharing
- [ ] Submit sitemap to Google Search Console

## Performance Tips

1. Enable Cloudflare or similar CDN
2. Use image lazy loading (already implemented)
3. Minify CSS and JS (Vite does this automatically)
4. Enable Gzip compression on server
5. Use HTTP/2 on your hosting

## SEO Checklist

- [x] Meta tags (title, description, keywords)
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured Data (Schema.org)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] 404 page
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Create Google My Business listing

## Security

- [x] HTTPS redirect (.htaccess)
- [x] Security headers
- [x] Cookie consent (GDPR)
- [ ] SSL certificate on hosting
- [ ] Regular backups

## Contact Information

Make sure to update contact information in:

- `src/data/portfolioData.ts` - artistInfo object
- All pages using contact details

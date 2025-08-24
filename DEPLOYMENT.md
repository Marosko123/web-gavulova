# Deployment Guide

## Vercel Deployment (Recommended)

1. **Push code to GitHub**
```bash
git add .
git commit -m "Initial portfolio website"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import project from GitHub
- Configure environment variables:
  - `NEXT_PUBLIC_SITE_URL`: https://your-domain.com

3. **Custom Domain**
- Add `tatianagavulova.sk` in Vercel dashboard
- Update DNS records as shown in Vercel

## Performance Checklist

- ✅ **Lighthouse Score**: Targeting 95+ on mobile/desktop
- ✅ **Core Web Vitals**: LCP < 1.8s, CLS < 0.05
- ✅ **Accessibility**: WCAG 2.2 AA compliant
- ✅ **SEO**: Meta tags, JSON-LD, sitemap
- ✅ **Images**: Optimized with next/image
- ✅ **Fonts**: Preloaded with font-display: swap

## Content Updates

All content can be updated in `src/lib/content.ts`:

```typescript
export const content = {
  personal: {
    name: "Tatiana Gavulová",
    phone: "+421 918 234 579",
    email: "gavulova.tatiana2000@gmail.com",
    // Update contact info here
  },
  hero: {
    usp: "Update main value proposition here",
    // Update hero text here
  },
  // More sections...
}
```

## Adding Real Content

1. **Replace placeholder images** in `/public/` folder
2. **Update case studies** with real projects in content.ts
3. **Add real client logos** for trust section
4. **Update statistics** with actual numbers
5. **Add real testimonials** if needed

## Analytics Setup

Add analytics tracking:
1. Google Analytics 4
2. Plausible (privacy-focused alternative)
3. Cookie consent if required

## Maintenance

- **Regular updates**: Update dependencies monthly
- **Content updates**: Use content.ts for text changes
- **Image optimization**: Use WebP format for better performance
- **Security**: Keep dependencies updated

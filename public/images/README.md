# Images Organization & Optimization

This directory contains all optimized images for the Tatiana Gavulová portfolio website, organized for performance and maintainability.

## Folder Structure

### `/profile/`
- **profile.png** - Original high-res profile picture (1080x1080, 1.3MB) - for future use
- **profile-400.png** - Medium-res version (400x400, 223KB) - hero sections, main displays
- **profile-200.png** - Small-res version (200x200, 63KB) - about page, secondary uses
- **profile-64.png** - Tiny version (64x64, 9KB) - favicons, thumbnails
- **og-image.png** - Social media OG image (1200x630) - optimized for sharing

### `/icons/` 
- **file.svg** - File/document icon for UI elements (391B)
- **window.svg** - Window icon for UI elements (385B)

### `/backgrounds/`
- **grain.png** - Texture overlay for background effects (102B)

### `/portfolio/`
- **case-studies/** - Portfolio case study images and screenshots
- **projects/** - Individual project images and mockups

### `/logos/`
- Client logos and brand assets (for trust section)

## Performance Optimization

### Image Sizes & Usage:
- **profile-64.png** - Favicons, small avatars
- **profile-200.png** - About page, secondary displays  
- **profile-400.png** - Hero section, main profile displays
- **profile.png** - Archive/source (avoid using directly)

### Optimization Guidelines:
- ✅ Use appropriately sized images for context
- ✅ All images optimized for web delivery
- ✅ SVG icons preferred for scalable graphics
- ✅ Progressive JPEG for photographs
- ✅ PNG for images with transparency
- ✅ Consider WebP format for modern browsers

### File Size Targets:
- Icons: < 1KB (SVG preferred)
- Thumbnails: < 20KB
- Profile images: < 250KB  
- Hero images: < 500KB
- Background textures: < 10KB

## Adding New Images

1. **Optimize before adding** - use tools like ImageOptim, TinyPNG, or sips
2. **Create multiple sizes** if image will be used in different contexts
3. **Use descriptive filenames** with size indicators (-400, -200, etc.)
4. **Test loading performance** on slow connections
5. **Add appropriate alt text** in components

## Usage with OptimizedImage Component

```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";

// Automatically uses optimized version based on size
<OptimizedImage 
  src="/images/profile/profile.png" 
  alt="Tatiana Gavulová"
  size="medium" // small, medium, large, og
  priority={true} // for above-fold images
/>
```

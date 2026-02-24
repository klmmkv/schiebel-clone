# Build Instructions for Schiebel Actuators Clone

## Project Overview
Create a modern, bilingual (English/Russian) website for an actuator company, inspired by schiebel-actuators.com.

## Tech Stack (Required)
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- next-intl for i18n (English + Russian)
- Vercel deployment

## Content Source
All content is in `/content/scraped-content.json` - fully translated to EN/RU.

## Pages to Create

### 1. Homepage (`/[locale]`)
- Hero section with tagline
- Product series cards (Failsafe, AB, CM, Smartcon)
- Application areas preview
- Contact CTA

### 2. About (`/[locale]/about`)
- Company history sections
- "Who We Are", "New Era", "Innovations", "Customer Orientation", "SCHIEBEL 4.0"

### 3. Quality & Safety (`/[locale]/quality`)
- Safety certifications
- Quality management
- ISO certifications display

### 4. Products (4 pages)
- `/[locale]/products/failsafe-series`
- `/[locale]/products/ab-series`
- `/[locale]/products/cm-series`
- `/[locale]/products/smartcon`

Each product page should have:
- Hero with product name and tagline
- Feature sections with descriptions
- Torque/size specifications (where applicable)
- Protocol support (for Smartcon)

### 5. Firmware (`/[locale]/products/firmware`)
- Feature highlights for FW 1.600

### 6. Applications (`/[locale]/applications`)
- Grid of 9 application areas with icons
- Brief descriptions

### 7. References (`/[locale]/references`)
- Table/cards showing reference projects
- Company, country, industry, products used

## Design Guidelines
- Clean, modern industrial aesthetic
- Primary color: Deep blue (#1a365d)
- Accent: Orange (#f97316)
- Use shadcn/ui Card, Button, Badge components
- Hero sections with gradient overlays
- Responsive mobile-first design

## i18n Setup
Use next-intl with:
- Default locale: `en`
- Supported: `['en', 'ru']`
- Language switcher in header

## Header Navigation
```
- About (dropdown)
  - About Us
  - Quality & Safety
- Products (dropdown)
  - Failsafe Series
  - AB Series
  - CM Series
  - Smartcon
  - Firmware 1.600
- Applications
- References
- [Language Switcher]
```

## Footer
- Company address: Josef Benc Gasse 4, 1230 Vienna, Austria
- Phone: +43 1 66 108
- Email: info@schiebel-actuators.com
- LinkedIn/YouTube links

## Contact
Display email prominently: info@schiebel-actuators.com
No functional forms - just email display.

## GitHub/Vercel Deployment
- Create repo: `klmmkv/schiebel-clone`
- Connect to Vercel
- Deploy automatically

## Build Steps
1. Initialize Next.js project with TypeScript
2. Install dependencies: tailwindcss, shadcn/ui, next-intl, lucide-react
3. Set up i18n with next-intl
4. Create layout with Header/Footer
5. Build each page component
6. Create reusable components (ProductCard, FeatureSection, etc.)
7. Import content from JSON
8. Test locally
9. Push to GitHub
10. Deploy to Vercel

## Quality Checklist
- [ ] All pages render without errors
- [ ] Language switching works
- [ ] Mobile responsive
- [ ] All content displays in both EN/RU
- [ ] Contact email visible
- [ ] Clean navigation

## Timeline
Must be completed TODAY. Focus on functionality over perfection.

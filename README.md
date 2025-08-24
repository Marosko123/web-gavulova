# Tatiana Gavulová - Portfolio Website

Moderný portfolio web pre growth marketérku a grafickú dizajnérku Tatianu Gavulovú.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **React** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Radix UI** komponenty
- **Lucide React** ikony

## 🎨 Design Features

- **Glassmorphism** efekty
- **Pink/Purple** farebná schéma (#EC4899)
- **Animácie** s Framer Motion
- **Responsívny** dizajn
- **Dark theme** s gradientmi
- **Accessibility** (WCAG 2.2 AA)

## 📁 Štruktúra projektu

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Hlavný layout
│   ├── page.tsx           # Domovská stránka
│   ├── globals.css        # Globálne štýly
│   ├── portfolio/         # Portfólio stránka
│   ├── sluzby/           # Služby stránka
│   ├── pripady-studie/   # Case studies
│   ├── o-mne/            # O mne stránka
│   ├── kontakt/          # Kontakt stránka
│   ├── sitemap.ts        # SEO sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── ui/               # Základné UI komponenty
│   ├── layout/           # Layout komponenty
│   └── sections/         # Sekcie stránky
├── lib/
│   ├── content.ts        # Všetok text (slovensky)
│   ├── utils.ts          # Utility funkcie
│   ├── seo.ts           # SEO konfigurácia
│   └── schema.ts        # JSON-LD schema
└── public/              # Statické súbory
```

## 🛠️ Inštalácia a spustenie

1. **Klonuj projekt**
```bash
git clone <repository-url>
cd web-gavulova
```

2. **Nainštaluj dependencies**
```bash
npm install
```

3. **Spusti development server**
```bash
npm run dev
```

4. **Otvor v prehliadači**
```
http://localhost:3000
```

## 📝 Úprava obsahu

Všetok text je centralizovaný v súbore `src/lib/content.ts`. Tu môžete upraviť:

- **Osobné informácie** (meno, kontakt, sociálne siete)
- **Texty sekcií** (hero, služby, o mne, atď.)
- **Navigáciu** a **footer**
- **SEO** metadata

### Príklad úpravy:

```typescript
// src/lib/content.ts
export const content = {
  personal: {
    name: "Tatiana Gavulová",
    phone: "+421 918 234 579",
    email: "gavulova.tatiana2000@gmail.com",
    // ...
  },
  // ...
}
```

## 🎯 Hlavné funkcie

### Hero sekcia
- **Animovaný gradient** pozadie
- **Motto badge** s glassmorphism
- **CTA tlačidlá** s hover efektmi
- **Kontaktné informácie** v glass karte

### Služby
- **6 hlavných služieb** s ikonami
- **Hover tilt** efekty na kartách
- **Gradienty** pri hover

### Prípadové štúdie
- **Filtrovanie** podľa kategórií
- **Animované** prechody
- **Placeholder** obrázky

### Kontakt
- **Kontaktný formulár**
- **Rýchle kontakty**
- **FAQ** accordion
- **Sociálne siete**

## 🌐 SEO optimalizácia

- **JSON-LD** structured data
- **Open Graph** a Twitter meta tagy
- **Sitemap.xml** a robots.txt
- **Slovenské** meta descriptions
- **Canonical** URLs

## 📱 Responzívnosť

- **Mobile-first** prístup
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** navigácia na mobile

## 🚀 Deployment

### Vercel (odporúčané)
```bash
npm run build
npx vercel --prod
```

### Iné platformy
```bash
npm run build
npm start
```

## 🔧 Konfigurácia

### Environment variables
Vytvor `.env.local` súbor:
```
NEXT_PUBLIC_SITE_URL=https://tatianagavulova.sk
```

### Tailwind config
Farby a animácie sú definované v `tailwind.config.ts`.

## 📞 Kontakt pre vývoj

Pre technické otázky alebo úpravy kontaktujte vývojára.

## 📄 Licencia

Všetky práva vyhradené © 2024 Tatiana Gavulová

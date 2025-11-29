# Quick Start Guide

## Run in WSL

### Option 1: Using the setup script (Recommended)

1. Make the script executable:
```bash
chmod +x setup.sh
chmod +x run-dev.sh
```

2. Run the setup script:
```bash
./setup.sh
```

3. Start the development server:
```bash
./run-dev.sh
```

### Option 2: Manual Setup

1. Install dependencies:
```bash
npm install
```

2. Create necessary directories:
```bash
mkdir -p public/fonts
mkdir -p public/assets/logo
mkdir -p public/images
```

3. Copy fonts (optional - for now the site will work without them):
```bash
# Copy Arabic fonts
cp Branding/Fonts/*.ttf public/fonts/ 2>/dev/null || true

# Copy English fonts
cp "Branding/Diligion Visual Identity_Folder/Fonts"/*.ttf public/fonts/ 2>/dev/null || true
```

4. Copy logo assets (optional):
```bash
cp "Branding/Brand Assets/SVG/Short 1.svg" public/assets/logo/ 2>/dev/null || true
cp "Branding/Brand Assets/SVG/Mark (W BG).svg" public/assets/logo/ 2>/dev/null || true
```

5. Start the development server:
```bash
npm run dev
```

6. Open your browser:
   - English: http://localhost:3000/en
   - Arabic: http://localhost:3000/ar

## Troubleshooting

### If you get "Module not found" errors:
- Make sure you've run `npm install`
- Delete `node_modules` and `.next` folders, then run `npm install` again

### If you get errors about fonts:
- The site will work without custom fonts (will use system fonts)
- Copy fonts to `public/fonts/` as described above

### If you get errors about images:
- The site uses text-based logo for now
- Copy logo SVG files to `public/assets/logo/` as described above

### If the development server won't start:
- Check Node.js version: `node -v` (should be 18+)
- Check if port 3000 is available
- Try: `npm run dev -- -p 3001` to use a different port

## What's Working

✅ Next.js 14 with TypeScript
✅ Bilingual support (English/Arabic)
✅ RTL support for Arabic
✅ All 6 pages (Home, About, Services, FAQ, Contact, Schedule)
✅ Responsive design
✅ Contact form (validation ready)
✅ Mobile navigation
✅ Language switcher

## Next Steps

1. Add actual content to translation files
2. Integrate email service for contact form
3. Add Calendly/Cal.com widget to schedule page
4. Copy brand assets (fonts, logos)
5. Add team member information
6. Add detailed service descriptions

## Development URLs

- English Home: http://localhost:3000/en
- Arabic Home: http://localhost:3000/ar
- About: http://localhost:3000/en/about
- Services: http://localhost:3000/en/services
- FAQ: http://localhost:3000/en/faq
- Contact: http://localhost:3000/en/contact
- Schedule: http://localhost:3000/en/schedule


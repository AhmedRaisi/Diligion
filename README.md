# Diligion Website

Bilingual (English & Arabic) website for Diligent Visionary Consultancy built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Internationalization (i18n) for bilingual support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out/` folder, ready for deployment to Oman Data Park.

## Project Structure

```
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── (routes)/       # Page routes
│   │   └── layout.tsx      # Locale-specific layout
│   └── layout.tsx          # Root layout
├── components/             # React components
├── lib/                    # Utilities and configurations
├── messages/               # Translation files (en.json, ar.json)
├── public/                 # Static assets
│   ├── images/            # Images
│   ├── fonts/             # Font files
│   └── assets/            # Brand assets (logos, etc.)
└── styles/                # Global styles
```

## Branding

Brand colors, fonts, and assets are integrated into the project. See `BRANDING_SUMMARY.md` for details.

## Deployment

The project is configured for static export and can be deployed to Oman Data Park via FTP/SFTP.

## License

Private project for Diligent Visionary Consultancy.


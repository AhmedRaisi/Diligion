# Setup Instructions

## Font Files

Copy the following font files to `public/fonts/`:

### Arabic Fonts (from Branding/Fonts/)
- IBMPlexSansArabic-Regular.ttf
- IBMPlexSansArabic-Medium.ttf
- IBMPlexSansArabic-SemiBold.ttf
- IBMPlexSansArabic-Bold.ttf
- IBMPlexSansArabic-Light.ttf
- IBMPlexSansArabic-ExtraLight.ttf
- IBMPlexSansArabic-Thin.ttf

### English Fonts (from Branding/Diligion Visual Identity_Folder/Fonts/)
- Montserrat-VariableFont_wght.ttf
- ReadexPro-Regular.ttf (optional)

## Logo Assets

Copy the following logo files to `public/assets/logo/`:

### From Branding/Brand Assets/SVG/
- Short 1.svg (or Short (W BG).svg for light backgrounds)
- Mark (W BG).svg (for footer on dark background)
- Mark (B BG).svg (for light backgrounds)
- Full 1.svg (optional, for larger headers)

You can also copy PNG versions if needed.

## Directory Structure to Create

```
public/
├── fonts/
│   ├── IBMPlexSansArabic-*.ttf
│   └── Montserrat-VariableFont_wght.ttf
├── assets/
│   └── logo/
│       ├── Short 1.svg
│       ├── Mark (W BG).svg
│       └── Mark (B BG).svg
└── images/
    └── (placeholder for future images)
```

## Installation

After copying assets, run:

```bash
npm install
npm run dev
```

The site should now be accessible at http://localhost:3000


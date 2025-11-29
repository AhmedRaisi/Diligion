# Deployment Guide - Oman Data Park

## Pre-Deployment Checklist

### 1. Install Dependencies
```bash
npm install
```

### 2. Copy Brand Assets

#### Fonts
Copy fonts from `Branding/Fonts/` and `Branding/Diligion Visual Identity_Folder/Fonts/` to `public/fonts/`:
- IBMPlexSansArabic-*.ttf (all variants)
- Montserrat-VariableFont_wght.ttf

#### Logos
Copy logo SVG files from `Branding/Brand Assets/SVG/` to `public/assets/logo/`:
- Short 1.svg (or Short (W BG).svg)
- Mark (W BG).svg
- Mark (B BG).svg

### 3. Configure Contact Form

Update `app/[locale]/contact/page.tsx` to integrate with your email service:
- **EmailJS**: Add your service ID and template
- **Formspree**: Add your form endpoint
- **Resend API**: Add your API key and endpoint

### 4. Configure Scheduling

Update `app/[locale]/schedule/page.tsx` with:
- Calendly embed code, OR
- Cal.com widget, OR
- Custom scheduling solution

### 5. Update Content

Add actual content to:
- `messages/en.json` and `messages/ar.json` (translations)
- About page (team members, company info)
- Services page (detailed service descriptions)
- FAQ page (actual questions and answers)
- Contact page (real contact information)

### 6. Build Static Export

```bash
npm run build
```

This will generate the `out/` folder with all static files.

### 7. Deploy to Oman Data Park

#### Via FTP/SFTP
1. Connect to Oman Data Park FTP/SFTP server
2. Navigate to web root directory
3. Upload all contents of the `out/` folder
4. Ensure proper file permissions (644 for files, 755 for directories)

#### File Structure on Server
```
/public_html/
├── index.html
├── en/
│   ├── index.html
│   ├── about/
│   ├── services/
│   ├── faq/
│   ├── contact/
│   └── schedule/
├── ar/
│   ├── index.html
│   ├── about/
│   ├── services/
│   ├── faq/
│   ├── contact/
│   └── schedule/
├── _next/
├── assets/
└── fonts/
```

### 8. Configure Domain & SSL

1. Point your domain DNS to Oman Data Park servers
2. Configure SSL certificate (Let's Encrypt or provided certificate)
3. Test all pages in both languages
4. Verify forms and scheduling widget work correctly

### 9. Post-Deployment

- Test all pages in both languages (English & Arabic)
- Test contact form submission
- Test scheduling widget
- Test mobile responsiveness
- Verify SEO metadata
- Check page load speed
- Test RTL layout for Arabic pages

## Environment Variables (if needed)

Create `.env.local` for development:
```
NEXT_PUBLIC_EMAIL_SERVICE_ID=your-emailjs-service-id
NEXT_PUBLIC_EMAIL_TEMPLATE_ID=your-emailjs-template-id
NEXT_PUBLIC_CALENDLY_URL=your-calendly-url
```

## Troubleshooting

### Static Export Issues
- Ensure `next.config.js` has `output: 'export'`
- Remove any server-side features (API routes, etc.)
- Check for dynamic routes that need `generateStaticParams`

### RTL Issues
- Verify `dir="rtl"` is set on HTML element for Arabic
- Check Arabic font loading
- Test text alignment and layout

### Image Issues
- Use `next/image` with `unoptimized: true` for static export
- Or use regular `<img>` tags for static export
- Ensure images are in `public/` folder

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- next-intl Documentation: https://next-intl-docs.vercel.app
- Tailwind CSS Documentation: https://tailwindcss.com/docs


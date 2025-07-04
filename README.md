# Next.js TopsDraw

Frontend for TopsDraw project using Next

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+ or yarn

### Installation

1. Clone this repository or download the files
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── Footer.tsx
│   └── styles/             # CSS modules
│       ├── globals.css     # Global styles
│       ├── components/     # Component styles
│       └── pages/          # Page-specific styles
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run analyze` - Analyze bundle size

## 🎨 Styling

This boilerplate uses **CSS Modules** for component-scoped styling with the following approach:

### CSS Variables

Global CSS variables are defined in `globals.css` for consistent theming:

- Colors (primary, secondary, text, background)
- Spacing and typography
- Shadows and borders
- Transitions and animations

### Dark Mode

Automatic dark mode support using CSS media queries:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
}
```

### Responsive Design

Mobile-first responsive design with breakpoints:

- Mobile: up to 480px
- Tablet: 481px to 768px
- Desktop: 769px and up

## 🔧 Configuration

### TypeScript

Configured with strict mode and path aliases:

```json
{
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"],
    "@/components/*": ["./src/components/*"],
    "@/styles/*": ["./src/styles/*"]
  }
}
```

### Next.js

Production-ready configuration with:

- Image optimization
- Security headers
- Compression
- Bundle analysis
- Performance optimizations

### ESLint

Configured with TypeScript rules and Next.js best practices.

## 🚀 Production Deployment

### Build Optimization

```bash
npm run build
```

### Environment Variables

Create `.env.local` for environment-specific variables:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

### Adding New Pages

1. Create page in `src/app/[route]/page.tsx`
2. Add corresponding CSS module in `src/styles/pages/`
3. Update navigation in `Header.tsx`

### Adding New Components

1. Create component in `src/components/`
2. Add CSS module in `src/styles/components/`
3. Export from component file

### Styling Guidelines

- Use CSS modules for component styles
- Follow BEM naming convention
- Use CSS variables for consistent theming
- Mobile-first responsive design

## 🔒 Security

Security headers are configured in `next.config.js`:

- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## 📊 Performance

Built-in optimizations:

- Next.js Image optimization
- CSS optimization
- Bundle splitting
- Tree shaking
- Minification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request


# Theme System Documentation

## Overview

This boilerplate uses a comprehensive design token system based on CSS custom properties (CSS variables) to ensure consistent styling across the application. The theme is defined in `src/styles/theme.css` and imported into `src/styles/globals.css`.

## File Structure

```
src/styles/
├── theme.css              # Design tokens and theme definitions
├── globals.css            # Global styles and theme imports
├── components/            # Component-specific styles
│   ├── Header.module.css
│   ├── Hero.module.css
│   ├── Features.module.css
│   └── Footer.module.css
└── pages/                 # Page-specific styles
    ├── About.module.css
    └── Contact.module.css
```

## Design Token Categories

### 1. Colors

- **Primary Colors**: `--color-primary-50` to `--color-primary-900`
- **Neutral Colors**: `--color-neutral-50` to `--color-neutral-900`
- **Semantic Colors**: Success, Warning, Error variants

### 2. Typography

- **Font Families**: `--font-family-sans`, `--font-family-mono`
- **Font Sizes**: `--font-size-xs` to `--font-size-7xl`
- **Font Weights**: `--font-weight-light` to `--font-weight-extrabold`
- **Line Heights**: `--line-height-tight` to `--line-height-loose`

### 3. Spacing

- **Spacing Scale**: `--spacing-0` to `--spacing-96` (4px to 384px)
- **Container Sizes**: `--container-xs` to `--container-7xl`

### 4. Border Radius

- **Radius Scale**: `--border-radius-none` to `--border-radius-3xl`

### 5. Shadows

- **Shadow Scale**: `--shadow-sm` to `--shadow-2xl`
- **Special**: `--shadow-inner`

### 6. Transitions

- **Transition Types**: `--transition-all`, `--transition-colors`, etc.

## Semantic Tokens

Instead of using raw color values, use semantic tokens:

```css
/* ✅ Good - Using semantic tokens */
.button {
  background-color: var(--primary-color);
  color: var(--text-primary);
  border-radius: var(--button-border-radius);
}

/* ❌ Avoid - Using raw values */
.button {
  background-color: #3b82f6;
  color: #111827;
  border-radius: 8px;
}
```

## Common Semantic Tokens

### Colors

- `--primary-color`, `--primary-hover`, `--primary-active`
- `--text-primary`, `--text-secondary`, `--text-muted`
- `--background`, `--background-card`, `--background-muted`
- `--border-color`, `--border-hover`, `--border-focus`

### Components

- `--button-border-radius`
- `--card-border-radius`
- `--input-border-radius`

### Layout

- `--header-height`
- `--content-max-width`
- `--sidebar-width`

## Dark Mode Support

The theme automatically supports dark mode using CSS media queries:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: var(--color-neutral-50);
    --background: var(--color-neutral-900);
    /* ... other dark mode overrides */
  }
}
```

## Usage Examples

### Using Design Tokens in CSS Modules

```css
/* Header.module.css */
.header {
  background-color: var(--background-card);
  border-bottom: 1px solid var(--border-color);
  padding: var(--spacing-4) var(--spacing-6);
  box-shadow: var(--shadow-sm);
}

.title {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
}
```

### Responsive Design with Breakpoints

```css
.container {
  max-width: var(--container-6xl);
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-6);
  }
}
```

## Customization

### Updating Colors

To change the primary color, update the color tokens in `theme.css`:

```css
:root {
  --color-primary-500: #your-new-color;
  --color-primary-600: #your-new-color-darker;
  /* Update all primary variants */
}
```

### Adding New Tokens

Add new design tokens to `theme.css`:

```css
:root {
  /* Custom spacing */
  --spacing-custom: 2.5rem;

  /* Custom shadows */
  --shadow-custom: 0 8px 16px rgba(0, 0, 0, 0.1);

  /* Custom colors */
  --color-brand-500: #your-brand-color;
}
```

## Best Practices

1. **Always use semantic tokens** instead of raw values
2. **Use spacing scale** for consistent spacing
3. **Leverage shadow scale** for depth hierarchy
4. **Use font size scale** for typography consistency
5. **Test both light and dark modes** when customizing
6. **Keep component tokens** for component-specific styling

## Migration Guide

If you have existing hardcoded values, replace them with theme tokens:

```css
/* Before */
.card {
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
}

/* After */
.card {
  background: var(--background-card);
  border: 1px solid var(--border-color);
  border-radius: var(--card-border-radius);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
}
```

This approach ensures consistency, maintainability, and easy theme customization across your entire application.

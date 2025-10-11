# Landing Page Component

A comprehensive jewelry store landing page component built with React and TypeScript, featuring a modern, responsive design with product catalog functionality.

## Features

### Category Navigation
- Interactive jewelry category selector with 9 different categories
- Visual indicators for selected categories
- Categories include: Solitaire, Oval, Trilogy, Platinum, Diamond Band, Halo, Round, Toi et Moi, Emerald Cut

### Advanced Filtering System
- Multi-level filter options (Metal, Style, Shape, Carat Weight)
- Advanced property panel
- Quickship integration with branded icon
- Sort functionality with Popular sorting
- View toggle between grid and list layouts

### Product Catalog
- Responsive grid layout (3-column on desktop, 2-column on tablet, 1-column on mobile)
- High-quality product images with consistent aspect ratios
- Product information including name and pricing
- Interactive metal color swatches
- Shape selection with SVG icons
- "Best Seller" badge for featured products

### Promotional Content
- Lifetime Warranty promotional card with overlay content
- Call-to-action button integration
- Hero-style imagery with text overlay

## Design System

### Typography
- **Primary Font**: Poppins (300, 400, 500 weights)
- **Secondary Font**: EB Garamond (400, 500 weights)
- Consistent font sizing and spacing

### Color Palette
- **Primary**: #163950 (Navigation active states)
- **Secondary**: #2C003E (Pricing, badges)
- **Accent**: #C79F4B (Quickship branding)
- **Text**: #000000 (Primary text)
- **Text Muted**: #3C3C3C (Secondary text)
- **Background**: #FFFFFF (Main)
- **Background Light**: #FAFAFA (Product cards)
- **Borders**: #D9D9D9 and rgba(217, 217, 217, 0.35)

### Metal Colors
- **Rose Gold**: #E8C5AF
- **White Gold**: #DBD9DA
- **Yellow Gold**: #E7D5BF
- **Platinum**: #D8D5DC

## Component Structure

```
LandingPage/
├── LandingPage.tsx      # Main component with all functionality
├── LandingPage.css      # Comprehensive styling
└── README.md           # This documentation
```

## Usage

```tsx
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}
```

## Responsive Design

The component is fully responsive with breakpoints at:
- **Desktop**: 1920px+ (3-column grid)
- **Large Tablet**: 1600px (2-column grid)
- **Tablet**: 1200px (1-column grid, vertical filters)
- **Mobile**: 768px (Simplified layout)
- **Small Mobile**: 480px (Compact design)

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- ARIA labels where appropriate
- High contrast ratios

## Icons and Graphics

The component includes custom SVG icons for:
- Chevron down arrows for dropdowns
- Chevron right arrow for advanced properties
- Quickship branded logo with clock
- Grid and list view toggles
- Star icon for best seller badge
- Diamond shape selectors

## Performance Optimizations

- Optimized images with appropriate sizing
- CSS Grid and Flexbox for efficient layouts
- Minimal JavaScript for interaction
- Semantic HTML for better SEO
- Font loading optimization

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

Potential improvements could include:
- Dynamic product loading
- Filter functionality implementation
- Shopping cart integration
- Product detail modal/page
- Search functionality
- Wishlist/favorites
- User authentication
- Checkout process

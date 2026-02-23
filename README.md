# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/ecommerce-product-page-with-reactvite-i79phn239S](https://www.frontendmentor.io/solutions/ecommerce-product-page-with-reactvite-i79phn239S)
- Live Site URL: [https://e-commerce-product-page-repro.vercel.app/](https://e-commerce-product-page-repro.vercel.app/)
- Repository: [https://github.com/repro123/eCommerce-product-page.git](https://github.com/repro123/eCommerce-product-page.git)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties (Tailwind CSS theme)
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library (v18+)
- [Vite](https://vitejs.dev/) - Frontend tooling for rapid development
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

### What I learned

This project helped me strengthen several key areas:

**React State Management & Component Structure**

- Managing multiple pieces of state (`cart`, `numberOfItems`, `currentImageIndex`)
- Passing state and callbacks through a component hierarchy
- Understanding when to lift state to a parent component vs. keeping it local

**Separation of Concerns**

- Breaking the UI into small, focused components (ProductDescription, Cart, Toast, CartItem, etc.)
- Each component has a single responsibility

**Event Handling & User Flow**

- Distinguishing between temporary state (quantity selector) and actual cart state
- Only updating cart on explicit user action ("Add to Cart" click)
- Resetting quantity after adding to cart

**CSS Animation & Transitions**

- Using Tailwind's custom animation config (`shrink` keyframes)
- Inline animation styles for dynamic durations

**Toast Notifications**

```jsx
// Toast delegates its own lifecycle via useEffect
function Toast({ toast, onDone, duration = 3000 }) {
  useEffect(() => {
    const t = setTimeout(() => onDone && onDone(), duration);
    return () => clearTimeout(t);
  }, [onDone, duration, toast]);
  // ...
}

// Parent component passes onDone callback
<Toast toast={toast} onDone={() => setToast(null)} duration={2500} />;
```

**Mobile-First Responsive Design**

- Using Tailwind breakpoints (`lg:`, `md:`, `max-md:`) to build responsive layouts
- Different UI patterns for mobile vs. desktop (mobile carousel vs. desktop grid + lightbox)

**Product Image Gallery**

```jsx
// Structuring image data for easy lookup and switching
const productImages = [
  {
    id: 1,
    thumbnail: "image-product-1-thumbnail.jpg",
    fullSize: "image-product-1.jpg",
  },
  // ...
];

// Using currentImageIndex to control which image displays
const currentImage = productImages[currentImageIndex];
```

### Continued development

Areas I want to improve in future projects:

- **State Management at Scale**: As the app grows with multiple products and a full cart page, I'll explore Context API or a state management library like Redux or Zustand
- **Accessibility**: Adding focus management to the lightbox and cart, ARIA labels for dynamic content, and comprehensive keyboard navigation
- **Persistence**: Using localStorage to persist cart items across browser sessions
- **Testing**: Writing unit tests for components and integration tests for user flows
- **Performance**: Code splitting and lazy loading for larger apps; analyzing bundle size with tools like `vite-bundle-visualizer`

### Useful resources

- [React Documentation](https://react.dev) - Comprehensive guide to React hooks and component patterns
- [Vite Documentation](https://vitejs.dev) - Fast build tooling and HMR
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Utility-first CSS framework reference
- [A11y Project](https://www.a11yproject.com/) - Accessibility resources and best practices

### AI Collaboration

I used Claude (GitHub Copilot integration) throughout this project to:

- **Debugging**: Identifying why the cart quantity was updating during quantity selector interactions (fixing the issue: only update cart on explicit "Add to Cart" click)
- **Architecture Discussion**: Discussing trade-offs between different state management approaches (lifting state vs. keeping it local)
- **Component Implementation**: Building the Toast component with proper lifecycle management and animation
- **Feature Implementation**: Wiring up checkout logic to clear all state and show confirmation toasts

What worked well:

- AI helped me think through state flow and prevented bugs early
- Quick iteration on component structure and refactoring
- Explaining concepts and getting validation of my approach

What didn't work as well:

- Sometimes needed to redirect the AI back to task-specific suggestions rather than generic advice
- Had to be careful about implementing without fully understanding... always tested and verified changes

This project reinforced the importance of staying in control of the implementation while using AI as a thinking partner.

## Author

- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/repro123)
- GitHub - [repro123](https://github.com/repro123)

## Acknowledgments

- **Frontend Mentor** for the well-designed challenge and assets
- **The Frontend Mentor Community** for inspiration and feedback
- **Tailwind CSS** for the excellent utility-first framework

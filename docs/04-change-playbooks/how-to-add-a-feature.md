# How to Add a Feature Playbook

Follow this guide when adding a new section or page to the launch website.

---

## Step 1: Create Section Component
Create `src/components/Testimonials.jsx`:
```jsx
import React from "react";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Community Says</h2>
        <div className="testimonial-grid">
          {/* Testimonial cards */}
        </div>
      </div>
    </section>
  );
}
```

---

## Step 2: Add Styles to `src/App.css`
Define semantic styling using established theme custom variables:
```css
.testimonials-section {
  padding: 80px 24px;
  background-color: var(--bg-secondary);
}
```

---

## Step 3: Mount Component in `src/pages/Home.jsx`
Import and insert into the landing page flow:
```jsx
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      {/* ... */}
    </>
  );
};
```

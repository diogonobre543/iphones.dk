'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header({ active = 'home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-grid">
        <Link href="/" className="logo">iStore</Link>
        <button 
          className="menu-toggle" 
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        <nav className={`main-nav ${menuOpen ? 'nav-active' : ''}`}>
          <Link href="/" className={active === 'home' ? 'active' : ''}>
            Forside
          </Link>
          <Link href="/products" className={active === 'products' ? 'active' : ''}>
            Produkter
          </Link>
          <Link href="/about" className={active === 'about' ? 'active' : ''}>
            Om os
          </Link>
        </nav>
      </div>
    </header>
  );
}

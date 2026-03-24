'use client';

import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '@/lib/api';

export default function ProductGrid({ products, featured = false }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('Alle');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'Alle') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // For featured section on home - show 4 random
    if (featured) {
      filtered = filtered
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchQuery, products, featured]);

  return (
    <>
      {/* FILTROS */}
      {!featured && (
        <nav className="filter-bar">
          <div className="container">
            <div id="filterContainer">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  className={`apple-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/* SEARCH */}
      {!featured && (
        <div className="search-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            className="apple-search"
            placeholder="Søg efter MacBook, iPhone eller iPad..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {/* GRID */}
      <div className="apple-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} featured={featured} />
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px' }}>
            Ingen produkter fundet.
          </p>
        )}
      </div>
    </>
  );
}

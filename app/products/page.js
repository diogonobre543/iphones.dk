'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { fetchProducts } from '@/lib/api';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header active="products" />

      {loading ? (
        <p style={{ textAlign: 'center', padding: '50px' }}>Henter produkter...</p>
      ) : (
        <>
          <main className="container">
            <ProductGrid products={products} featured={false} />
          </main>
        </>
      )}

      <Footer />
    </>
  );
}
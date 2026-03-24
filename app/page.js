'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { fetchProducts } from '@/lib/api';

export default function Home() {
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
      <Header active="home" />

      <main>
        {/* HERO */}
   <section className="home-hero">
  <div className="container hero-content">
    <span className="eyebrow">Brugte Apple-produkter</span>
    <h1>Brugte iPhones, iPads og MacBooks samlet ét sted</h1>
    <p>
  iPhones.dk samler brugte og refurbished Apple-produkter. 
  Her finder du et udvalg af  <a href="https://www.datamarked.dk/billige-brugte-iphones_3130.html" title="Køb brugte iPhones">
    brugte iPhones</a>, <a href="https://www.datamarked.dk/billige-brugte-ipads_1183.html" title="Køb brugte iPads">brugte iPads</a>, <a href="https://www.datamarked.dk/apple-macbook_1865.html" title="Køb brugte MacBooks">
    MacBooks</a> og andet Apple-udstyr i høj kvalitet.
</p>
    <div className="hero-links">
      <a href="/products" className="btn-primary">Se alle produkter</a>
      <a href="/about" className="btn-link">Læs om iPhones.dk &gt;</a>
    </div>
  </div>
</section>

        {/* FEATURED */}
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Udvalgte modeller</h2>
            {loading ? (
              <p style={{ textAlign: 'center', padding: '50px' }}>Henter produkter...</p>
            ) : (
              <ProductGrid products={products} featured={true} />
            )}
            <div className="center-btn" style={{ marginTop: '40px', textAlign: 'center' }}>
              <a href="/products" className="btn-secondary">Se hele udvalget</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
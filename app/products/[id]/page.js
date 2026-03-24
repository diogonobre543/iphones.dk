'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fetchProducts } from '@/lib/api';

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      const found = data.find(p => p.id == params.id);
      setProduct(found);
      setLoading(false);
    });
  }, [params.id]);

  if (loading) {
    return (
      <>
        <Header active="products" />
        <p style={{ textAlign: 'center', padding: '100px' }}>Henter produktdetaljer...</p>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header active="products" />
        <main className="container detail-wrapper">
          <h2>Produktet blev ikke fundet.</h2>
          <Link href="/products">Tilbage til produkter</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header active="products" />

      <main className="container detail-wrapper">
        <Link
          href="/products"
          style={{
            textDecoration: 'none',
            color: '#86868b',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            marginBottom: '30px'
          }}
        >
          <span>←</span> Tilbage til produkter
        </Link>

        <div className="detail-grid">
          <div className="detail-image-box">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="detail-info">
            <span className="category-tag">{product.category}</span>
            <h1 style={{ fontSize: '1.8rem', fontWeight: '700', letterSpacing: '-0.03em', marginBottom: '15px' }}>
              {product.name}
            </h1>
            <p className="detail-price">
              {product.price.toLocaleString('da-DK', { minimumFractionDigits: 0 })} kr.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#86868b', margin: '0 0 5px 0' }}>inkl. moms.</p>
            <p style={{ fontSize: '0.9rem', color: '#86868b', margin: '0 0 20px 0' }}>
              {(product.price * 0.8).toLocaleString('da-DK', { minimumFractionDigits: 0 })} kr. ekskl. moms.
            </p>
            <p style={{ fontSize: '0.9rem', color: '#86868b', margin: '0 0 5px 0' }}>Leveringstid: 1 hverdag(e)</p>
            <p style={{ fontSize: '0.9rem', color: '#86868b', margin: '0 0 20px 0' }}>Fri fragt ved bestilling for over 2.500,- inkl. moms</p>

            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: '20px 50px', fontSize: '1.2rem', display: 'inline-block' }}
            >
              Læg i kurv
            </a>
          </div>
        </div>

        {/* PRODUCT DESCRIPTION SECTION */}
        <section style={{ marginTop: '80px', paddingTop: '60px', borderTop: '1px solid #e5e5e7' }}>
          {product.long_description && (
            <div style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                Om produktet
              </h2>
              <div 
                className="product-description-content"
                style={{ 
                  fontSize: '1.1rem', 
                  color: '#86868b', 
                  lineHeight: '1.8', 
                  maxWidth: '800px'
                }}
                dangerouslySetInnerHTML={{ __html: product.long_description }}
              />
              <style>{`
                .product-description-content h1 {
                  font-size: 1.6rem !important;
                  font-weight: 700 !important;
                  margin: 20px 0 15px 0 !important;
                  letter-spacing: -0.02em !important;
                  color: #1d1d1f !important;
                }
                .product-description-content h2 {
                  font-size: 1.4rem !important;
                  font-weight: 700 !important;
                  margin: 18px 0 12px 0 !important;
                  letter-spacing: -0.02em !important;
                  color: #1d1d1f !important;
                }
                .product-description-content h3 {
                  font-size: 1.2rem !important;
                  font-weight: 600 !important;
                  margin: 15px 0 10px 0 !important;
                  color: #1d1d1f !important;
                }
                .product-description-content p {
                  margin: 10px 0 !important;
                  color: #86868b !important;
                }
                .product-description-content strong {
                  font-weight: 700 !important;
                  color: #1d1d1f !important;
                }
                .product-description-content ul {
                  margin: 15px 0 !important;
                  padding-left: 30px !important;
                }
                .product-description-content li {
                  margin: 8px 0 !important;
                  color: #86868b !important;
                }
              `}</style>
            </div>
          )}

          {/* SPECIFICATIONS & WARRANTY */}
          <div style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em' }}>
              Garantier & Service
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
              <div style={{ background: '#f5f5f7', padding: '30px', borderRadius: '20px' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0071e3', marginBottom: '10px' }}>
                  ✓ 2 års reklamationsret
                </div>
                <p style={{ color: '#86868b', fontSize: '0.95rem', margin: 0 }}>
                  Fuld dækning i 24 måneder fra købsdatoen
                </p>
              </div>
              <div style={{ background: '#f5f5f7', padding: '30px', borderRadius: '20px' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0071e3', marginBottom: '10px' }}>
                  ✓ Batteritjekket & klargjort
                </div>
                <p style={{ color: '#86868b', fontSize: '0.95rem', margin: 0 }}>
                  Alle enheder gennemgår 40-punkts inspektion
                </p>
              </div>
              <div style={{ background: '#f5f5f7', padding: '30px', borderRadius: '20px' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0071e3', marginBottom: '10px' }}>
                  ✓ Hurtig levering
                </div>
                <p style={{ color: '#86868b', fontSize: '0.95rem', margin: 0 }}>
                  Leverance inden for 1-2 dage i hele Danmark
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div style={{ background: '#1d1d1f', color: '#fff', padding: '60px', borderRadius: '30px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px' }}>Har du spørgsmål?</h2>
            <p style={{ color: '#a1a1a6', marginBottom: '30px', fontSize: '1rem' }}>
              Vores eksperter er klar til at hjælpe dig
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="tel:+4570400010"
                style={{
                  background: '#0071e3',
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'background 0.3s'
                }}
              >
                +45 70 40 00 10
              </a>
              <a
                href="mailto:salg@datamarked.dk"
                style={{
                  background: 'transparent',
                  color: '#0071e3',
                  padding: '14px 32px',
                  border: '1px solid #0071e3',
                  borderRadius: '30px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  display: 'inline-block',
                  transition: 'all 0.3s'
                }}
              >
                salg@datamarked.dk
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cellStyle = { color: 'var(--apple-gray)', lineHeight: '1.6' };

export default function About() {
  return (
    <>
      <Header active="about" />

      <main>
        <section className="home-hero">
          <div className="container hero-content">
            <span className="eyebrow">Vores historie</span>
            <h1>Vi elsker Apple.</h1>
            <p>iStore er Danmarks destination for de nyeste Macs, iPhones og iPads. Vi forener passion for teknologi med kompromisløs kvalitet.</p>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: '100px' }}>
          <div className="apple-grid">
            <div className="product-card" style={{ textAlign: 'left', cursor: 'default' }}>
              <div className="category-tag">Vision</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Vores Mission</h2>
              <p style={cellStyle}>
                Hos iStore stræber vi efter at levere den bedste teknologi direkte til de danske forbrugere. 
                Vi fokuserer på kvalitet, hurtig levering og personlig rådgivning, så du altid får den rigtige løsning.
              </p>
            </div>

            <div className="product-card" style={{ textAlign: 'left', cursor: 'default' }}>
              <div className="category-tag">Kvalitet</div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Hvorfor vælge os?</h2>
              <p style={cellStyle}>
                Vi håndplukker de bedste enheder og sikrer, at alle produkter lever op til de højeste standarder. 
                Med 24 måneders reklamationsret og dedikeret support er din tilfredshed vores vigtigste prioritet.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{ fontSize: '1.1rem', color: 'var(--apple-black)', fontWeight: '500' }}>Har du spørgsmål?</p>
            <div className="hero-links" style={{ marginTop: '20px' }}>
              <a href="mailto:kontakt@istore.dk" className="btn-primary">Kontakt os nu</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
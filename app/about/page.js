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
      <span className="eyebrow">Om iPhones.dk</span>
      <h1>Brugte iPhones, iPads og MacBooks samlet ét sted</h1>
      <p>
        Vi samler et udvalg af brugte og refurbished Apple-produkter. 
        Her kan du finde 
        <a href="https://www.datamarked.dk/billige-brugte-iphones_3130.html"> brugte iPhones</a>, 
        <a href="https://www.datamarked.dk/billige-brugte-ipads_1183.html"> brugte iPads</a>, 
        <a href="https://www.datamarked.dk/brugt-apple-macbook-pro_3111.html"> MacBook Pro</a>, 
        <a href="https://www.datamarked.dk/brugt-apple-macbook-air_3112.html"> MacBook Air</a>, 
        <a href="https://www.datamarked.dk/brugt-apple-imac_3521.html"> iMac</a> 
        og 
        <a href="https://www.datamarked.dk/brugt-apple-mac-mini_8817.html"> Mac Mini</a> 
        i høj kvalitet til skarpe priser.
      </p>
    </div>
  </section>

  <section className="container" style={{ paddingBottom: '100px' }}>
    <div className="about-grid" style={{ marginBottom: '80px' }}>
      <div className="product-card about-card" style={{ textAlign: 'left', cursor: 'default' }}>
        <div className="category-tag">Vores koncept</div>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '600' }}>
          Genbrugte Apple-enheder med fokus på kvalitet
        </h2>
        <p style={cellStyle}>
          Hos iPhones.dk gør vi det nemmere at finde brugte Apple-produkter i god kvalitet. 
          Vi samler relevante enheder og guider dig videre til de bedste løsninger fra Datamarked, 
          hvor alle produkter er testet og kvalitetssikret. 
          Du får dermed adgang til brugt Apple-udstyr, der er både økonomisk og bæredygtigt. 
          Refurbished enheder er typisk grundigt testet og leveres ofte med garanti, hvilket gør det til et trygt valg. 
        </p>
      </div>

      <div className="product-card about-card" style={{ textAlign: 'left', cursor: 'default' }}>
        <div className="category-tag">Datamarked ApS</div>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '20px', fontWeight: '600' }}>
          En del af Datamarked ApS
        </h2>
        <p style={cellStyle}>
          iPhones.dk er ejet af Datamarked ApS og fungerer som en målrettet side med fokus på brugt Apple-udstyr. 
          Datamarked har et stort udvalg af refurbished iPhones, iPads og MacBooks, hvor alle enheder er testet og klar til brug.
          Målet er at skabe en overskuelig indgang til markedet for brugt Apple-udstyr i Danmark.
        </p>
      </div>
    </div>

    <div className="about-contact-section">
      <div className="about-contact-content">
        <h2 style={{ fontSize: '2.2rem', marginBottom: '15px', fontWeight: '700', letterSpacing: '-0.02em' }}>
          Har du spørgsmål om brugte Apple-produkter?
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#86868b', marginBottom: '30px', maxWidth: '500px' }}>
          Vores eksperter står klar til at hjælpe dig med at finde den perfekte løsning.
        </p>
        <div className="hero-links">
          <a href="tel:+4570400010" className="btn-primary" style={{ marginRight: '15px' }}>
            📞 Ring nu
          </a>
          <a href="mailto:salg@datamarked.dk" className="btn-secondary">
            ✉️ Send email
          </a>
        </div>
      </div>
    </div>
  </section>
      </main>

      <Footer />
    </>
  );
}
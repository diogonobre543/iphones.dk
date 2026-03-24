import React from "react";

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-grid">
          <a href="/" className="logo">iStore</a>
          <button className="menu-toggle" aria-label="Menu">&#9776;</button>
          <nav className="main-nav">
            <a href="/" className="active">Forside</a>
            <a href="/products">Produkter</a>
            <a href="/about">Om os</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="home-hero">
          <div className="container hero-content">
            <span className="eyebrow">Velkommen</span>
            <h1>Det bedste fra Apple.</h1>
            <p>Find din næste iPhone, iPad eller Mac hos Danmarks foretrukne forhandler.</p>
            <div className="hero-links">
              <a href="/products" className="btn-primary">Se alle produkter</a>
              <a href="/about" className="btn-link">Læs om iStore &gt;</a>
            </div>
          </div>
        </section>

        {/* FEATURED - Onde o seu script.js vai colocar os produtos */}
        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Udvalgte modeller</h2>
            <div id="homeProductGrid" className="apple-grid"></div>
            <div className="center-btn" style={{ marginTop: '40px', textAlign: 'center' }}>
              <a href="/products" className="btn-secondary">Se hele udvalget</a>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL - Onde o seu script.js vai abrir os detalhes */}
      <div id="productModal" className="modal">
        <div className="modal-content">
          <div id="modalBody"></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="apple-footer">
        <div className="container footer-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between', padding: '40px 0' }}>
          <div className="footer-item">
            <p><strong>Datamarked ApS</strong><br />
            Østre Fælledvej 16<br />
            9400 Nørresundby</p>
            <p style={{ marginTop: '10px' }}>
              📞 <a href="tel:+4570400010" style={{ color: 'inherit', textDecoration: 'none' }}>+45 70 40 00 10</a><br />
              ✉️ <a href="mailto:salg@datamarked.dk" style={{ color: 'inherit', textDecoration: 'none' }}>salg@datamarked.dk</a>
            </p>
          </div>

          <div className="footer-item">
            <h3 style={{ marginBottom: '15px' }}>Butikkens åbningstider</h3>
            <table style={{ borderCollapse: 'collapse' }}>
              <tbody>
                <tr><td style={{ paddingRight: '15px' }}>Mandag</td><td>12:00 - 16:00</td></tr>
                <tr><td>Tirsdag</td><td>12:00 - 16:00</td></tr>
                <tr><td>Onsdag</td><td>12:00 - 16:00</td></tr>
                <tr><td>Torsdag</td><td>12:00 - 16:00</td></tr>
                <tr><td>Fredag</td><td>12:00 - 15:00</td></tr>
              </tbody>
            </table>
          </div>

          <div className="footer-item">
            <h3 style={{ marginBottom: '15px' }}>Kundeservice</h3>
            <table style={{ borderCollapse: 'collapse' }}>
              <tbody>
                <tr><td style={{ paddingRight: '15px' }}>Mandag</td><td>9:00 - 16:00</td></tr>
                <tr><td>Tirsdag</td><td>9:00 - 16:00</td></tr>
                <tr><td>Onsdag</td><td>9:00 - 16:00</td></tr>
                <tr><td>Torsdag</td><td>9:00 - 16:00</td></tr>
                <tr><td>Fredag</td><td>9:00 - 15:00</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </>
  );
}
import React from "react";
import "../Assets/style.css"; // ajuste conforme sua estrutura

export default function HomePage() {
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

      {/* MAIN */}
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

        <section className="featured-section">
          <div className="container">
            <h2 className="section-title">Udvalgte modeller</h2>
            <div id="homeProductGrid" className="apple-grid"></div>
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <a href="/products" className="btn-secondary">Se hele udvalget</a>
            </div>
          </div>
        </section>
      </main>

      {/* MODAL */}
      <div id="productModal" className="modal">
        <div className="modal-content">
          <div id="modalBody"></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="apple-footer">
        <div className="container">
          <p>&copy; 2026 iStore Danmark. Alle rettigheder forbeholdes.</p>
        </div>
      </footer>

      {/* FOOTER INFO EXTRA */}
      <div style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#222", color: "#fff", fontFamily: "Arial, sans-serif", padding: "20px", gap: "40px", lineHeight: 1.6 }}>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <p style={{ margin: 0 }}><strong>Datamarked ApS</strong><br />Østre Fælledvej 16<br />9400 Nørresundby</p>
          <p style={{ marginTop: "15px" }}>
            <span style={{ color: "#fff" }}>📞</span> <a href="tel:+4570400010" style={{ color: "#a4c639", textDecoration: "none" }}>+45 70 40 00 10</a><br />
            <span style={{ color: "#fff" }}>✉️</span> <a href="mailto:salg@datamarked.dk" style={{ color: "#a4c639", textDecoration: "none" }}>salg@datamarked.dk</a>
          </p>
        </div>

        <div style={{ flex: 1, minWidth: "200px" }}>
          <h3 style={{ marginTop: 0, fontSize: "1.1em" }}>Butikkens åbningstider</h3>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              <tr><td style={{ paddingRight: "15px" }}>Mandag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Tirsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Onsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Torsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Fredag</td><td>12:00 - 15:00</td></tr>
            </tbody>
          </table>
        </div>

        <div style={{ flex: 1, minWidth: "200px" }}>
          <h3 style={{ marginTop: 0, fontSize: "1.1em" }}>Kundeservice</h3>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              <tr><td style={{ paddingRight: "15px" }}>Mandag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Tirsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Onsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Torsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Fredag</td><td>9:00 - 15:00</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
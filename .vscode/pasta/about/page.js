import React from "react";
import "../../Assets/style.css";

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-grid">
          <a href="/" className="logo">iStore</a>
          <nav className="main-nav">
            <a href="/">Forside</a>
            <a href="/products">Produkter</a>
            <a href="/about" className="active">Om os</a>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main>
        <section className="home-hero">
          <div className="container hero-content">
            <span className="eyebrow">Vores historie</span>
            <h1>Vi elsker Apple.</h1>
            <p>iStore er Danmarks destination for de nyeste Macs, iPhones og iPads. Vi forener passion for teknologi med kompromisløs kvalitet.</p>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: "100px" }}>
          <div className="apple-grid">
            <div className="product-card" style={{ textAlign: "left", cursor: "default" }}>
              <div className="category-tag">Vision</div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Vores Mission</h2>
              <p style={{ color: "var(--apple-gray)", lineHeight: 1.6 }}>
                Hos iStore stræber vi efter at levere den bedste teknologi direkte til de danske forbrugere. 
                Vi fokuserer på kvalitet, hurtig levering og personlig rådgivning, så du altid får den rigtige løsning.
              </p>
            </div>

            <div className="product-card" style={{ textAlign: "left", cursor: "default" }}>
              <div className="category-tag">Kvalitet</div>
              <h2 style={{ fontSize: "1.8rem", marginBottom: "15px" }}>Hvorfor vælge os?</h2>
              <p style={{ color: "var(--apple-gray)", lineHeight: 1.6 }}>
                Vi håndplukker de bedste enheder og sikrer, at alle produkter lever op til de højeste standarder. 
                Med 24 måneders reklamationsret og dedikeret support er din tilfredshed vores vigtigste prioritet.
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <p style={{ fontSize: "1.1rem", color: "var(--apple-black)", fontWeight: 500 }}>Har du spørgsmål?</p>
            <div className="hero-links" style={{ marginTop: "20px" }}>
              <a href="mailto:kontakt@istore.dk" className="btn-primary">Kontakt os nu</a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="apple-footer">
        <div className="container footer-content">
          <p>&copy; 2026 iStore. Din Apple ekspert i Danmark.</p>
          <div className="footer-info">
            Alle produkter er gennemtestet og klar til brug. <br />Hurtig dag-til-dag levering i hele landet.
          </div>
        </div>

        {/* EXTRA DATAMARKED FOOTER */}
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
              <tr><td style={{ paddingRight: "15px" }}>Mandag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Tirsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Onsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Torsdag</td><td>12:00 - 16:00</td></tr>
              <tr><td>Fredag</td><td>12:00 - 15:00</td></tr>
            </table>
          </div>

          <div style={{ flex: 1, minWidth: "200px" }}>
            <h3 style={{ marginTop: 0, fontSize: "1.1em" }}>Kundeservice</h3>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
              <tr><td style={{ paddingRight: "15px" }}>Mandag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Tirsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Onsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Torsdag</td><td>9:00 - 16:00</td></tr>
              <tr><td>Fredag</td><td>9:00 - 15:00</td></tr>
            </table>
          </div>
        </div>
      </footer>
    </>
  );
}
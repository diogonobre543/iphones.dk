import React from "react";
import "../../style.css"; // ajuste o caminho do CSS conforme necessário

export default function ProductDetailPage() {
  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-grid">
          <a href="/" className="logo">iStore</a>
          <button className="menu-toggle" aria-label="Menu">&#9776;</button>
          <nav className="main-nav">
            <a href="/">Forside</a>
            <a href="/products" className="active">Produkter</a>
            <a href="/about">Om os</a>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container detail-wrapper">
        {/* BOTÃO VOLTAR */}
        <a
          href="/products"
          className="back-btn"
          style={{
            textDecoration: "none",
            color: "#86868b",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "30px"
          }}
        >
          <span>←</span> Tilbage til produkter
        </a>

        {/* DETALHE DO PRODUTO */}
        <div id="product-detail-render">
          <div style={{ textAlign: "center", padding: "100px" }}>
            Henter oplysninger...
          </div>
        </div>
      </main>

      {/* MODAL */}
      <div id="productModal" className="modal">
        <div className="modal-content">
          <button
            className="close-modal"
            onClick={() => window.closeModal?.()}
          >
            ×
          </button>
          <div id="modalBody"></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="apple-footer">
        <div className="container">
          <p>&copy; 2026 iStore Danmark. Professionel Apple support.</p>

          {/* INFORMAÇÕES ADICIONAIS */}
          <div style={{ display: "flex", flexWrap: "wrap", backgroundColor: "#222", color: "#fff", fontFamily: "Arial, sans-serif", padding: "20px", gap: "40px", lineHeight: "1.6" }}>
            
            <div style={{ flex: 1, minWidth: "200px" }}>
              <p style={{ margin: 0 }}>
                <strong>Datamarked ApS</strong><br />
                Østre Fælledvej 16<br />
                9400 Nørresundby
              </p>
              <p style={{ marginTop: "15px" }}>
                <span>📞</span> <a href="tel:+4570400010" style={{ color: "#a4c639", textDecoration: "none" }}>+45 70 40 00 10</a><br />
                <span>✉️</span> <a href="mailto:salg@datamarked.dk" style={{ color: "#a4c639", textDecoration: "none" }}>salg@datamarked.dk</a>
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
        </div>
      </footer>
    </>
  );
}
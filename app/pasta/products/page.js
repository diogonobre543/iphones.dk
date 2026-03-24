import React from "react";
import "../../Assets/style.css"; // ajuste o caminho conforme sua estrutura

export default function ProductsPage() {
  const closeModal = () => {
    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "none";
  };

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-grid">
          <a href="/" className="logo">iStore</a>
          <nav className="main-nav">
            <a href="/">Forside</a>
            <a href="/products" className="active">Produkter</a>
            <a href="/about">Om os</a>
          </nav>
        </div>
      </header>

      {/* FILTROS */}
      <nav className="filter-bar">
        <div className="container">
          <div className="filter-wrapper" id="filterContainer"></div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="container">
        <div className="search-container">
          <input
            type="text"
            id="searchField"
            className="apple-search"
            placeholder="Søg efter MacBook, iPhone eller iPad..."
          />
        </div>

        <div id="productGrid" className="apple-grid"></div>
      </main>

      {/* MODAL */}
      <div id="productModal" className="modal">
        <div className="modal-content">
          <span className="close-modal" onClick={closeModal}>
            &times;
          </span>
          <div id="modalBody" className="modal-grid"></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="apple-footer">
        <div className="container">
          <p>&copy; 2026 iStore Danmark. Alle rettigheder forbeholdes.</p>
          <p style={{ marginTop: "10px", opacity: 0.5 }}>Autoriseret forhandler af Apple produkter.</p>
        </div>
      </footer>
    </>
  );
}
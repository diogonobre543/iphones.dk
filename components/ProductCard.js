'use client';

import Link from 'next/link';

export default function ProductCard({ product, featured = false }) {
  return (
    <article className="product-card">
      <div className="img-wrapper">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div>
          <span className="category-tag">{product.category}</span>
          <h3>{product.name}</h3>
        </div>

        <div>
          <p className="price">
            Fra {product.price.toLocaleString('da-DK', { minimumFractionDigits: 0 })} kr.
          </p>

          <div className="card-buttons">
            <Link href={`/products/${product.id}`} className="btn-secondary">
              Detaljer
            </Link>
            <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Køb
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

/**
 * iSTORE 2026 - ENGINE COMPLETA (FINAL FIXED)
 */

const API_URL = 'https://www.datamarked.dk/?id=8016&apikey=7F39CE5E19D3F9413701DCF97D9F3E91897D9969222552C642229085587BAFF4';

let alleProdukter = [];
let nuvaerendeKategori = 'Alle';

const appleKategorier = ['Alle', 'MacBook Pro', 'MacBook Air', 'iMac', 'Mac Mini', 'iPhone', 'iPad'];


/* =========================================================
   1. FETCH PRODUTOS
========================================================= */
async function hentProdukter() {
    const grid = document.getElementById('productGrid') || document.getElementById('homeProductGrid');

    if (grid) {
        grid.innerHTML = `
            <p style="grid-column: 1/-1; text-align: center; padding: 50px;">
                Henter iStore katalog...
            </p>
        `;
    }

    try {
        const svar = await fetch(API_URL);
        const data = await svar.json();

        alleProdukter = data.map(item => {
            const navn = item.title.toUpperCase();
            let cat = 'Andet';

            if (navn.includes('IPHONE')) cat = 'iPhone';
            else if (navn.includes('IPAD')) cat = 'iPad';
            else if (navn.includes('MACBOOK PRO')) cat = 'MacBook Pro';
            else if (navn.includes('MACBOOK AIR')) cat = 'MacBook Air';
            else if (navn.includes('IMAC')) cat = 'iMac';
            else if (navn.includes('MAC MINI')) cat = 'Mac Mini';
            else if (navn.includes('MAC')) cat = 'Mac';

            return {
                id: item.id || Math.random().toString(36).substr(2, 9),
                navn: item.title,
                pris: typeof item.price === 'string'
                    ? parseFloat(item.price.replace(',', '.'))
                    : item.price,
                billede: item.image,
                link: item.link,
                kategori: cat
            };
        });

        renderFiltre();
        renderGrid();

        // 🔥 se for página de detalhe
        if (document.getElementById('product-detail-render')) {
            initProductDetail();
        }

    } catch (err) {
        console.error("Erro:", err);

        if (grid) {
            grid.innerHTML = `
                <p style="grid-column: 1/-1; text-align: center;">
                    Fejl ved indlæsning af produkter.
                </p>
            `;
        }
    }
}


/* =========================================================
   2. RENDER GRID
========================================================= */
function renderGrid() {
    const grid = document.getElementById('productGrid') || document.getElementById('homeProductGrid');
    if (!grid) return;

    const search = document.getElementById('searchField')?.value.toLowerCase() || '';

    let filtrerede = alleProdukter.filter(p =>
        (nuvaerendeKategori === 'Alle' || p.kategori === nuvaerendeKategori) &&
        p.navn.toLowerCase().includes(search)
    );

    // Home: 4 random
    if (grid.id === 'homeProductGrid') {
        filtrerede = filtrerede.sort(() => 0.5 - Math.random()).slice(0, 4);
    }

    grid.innerHTML = filtrerede.map(p => `
        <article class="product-card">
            <div class="img-wrapper">
                <img src="${p.billede}" alt="${p.navn}">
            </div>

            <div class="product-info">
                <span class="category-tag">${p.kategori}</span>
                <h3>${p.navn}</h3>

                <p class="price">
                    Fra ${p.pris.toLocaleString('da-DK', { minimumFractionDigits: 0 })} kr.
                </p>

                <div class="card-buttons">

                    <!-- 🔹 IR PARA DETAIL PAGE -->
                    <a href="product-detail.html?id=${p.id}" class="btn-secondary">
                        Detaljer
                    </a>

                    <!-- COMPRA -->
                    <a href="${p.link}" target="_blank" class="btn-primary">
                        Køb
                    </a>

                </div>
            </div>
        </article>
    `).join('');
}


/* =========================================================
   3. MODAL (opcional)
========================================================= */
window.openModal = (productData) => {
    const p = JSON.parse(decodeURIComponent(productData));
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    if (!modal || !body) return;

    body.innerHTML = `
        <div class="modal-grid">

            <div class="modal-img-container">
                <img src="${p.billede}" alt="${p.navn}">
            </div>

            <div class="modal-details">
                <span class="modal-eyebrow">${p.kategori}</span>
                <h2>${p.navn}</h2>

                <p class="modal-price">
                    ${p.pris.toLocaleString('da-DK', { minimumFractionDigits: 0 })} kr.
                </p>

                <div class="modal-divider"></div>

                <div class="modal-description">
                    <p>Denne Apple enhed er nøje udvalgt.</p>
                    <ul>
                        <li><span>✓</span> 2 års reklamationsret</li>
                        <li><span>✓</span> Batteritjekket</li>
                    </ul>
                </div>

                <a href="${p.link}" target="_blank" class="btn-primary">
                    Køb nu
                </a>
            </div>

        </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
};

window.closeModal = () => {
    const modal = document.getElementById('productModal');
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "auto";
};


/* =========================================================
   4. DETAIL PAGE (product-detail.html)
========================================================= */
async function initProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const renderArea = document.getElementById('product-detail-render');

    if (!productId || !renderArea) return;

    const p = alleProdukter.find(item => item.id == productId);

    if (p) {
        renderArea.innerHTML = `
            <div class="detail-grid">
                <div class="detail-image-box">
                    <img src="${p.billede}" alt="${p.navn}">
                </div>
                <div class="detail-info">
                    <span class="category-tag">${p.kategori}</span>
                    <h1>${p.navn}</h1>
                    <p class="detail-price">${p.pris.toLocaleString('da-DK', {minimumFractionDigits: 0})} kr.</p>
                    <!-- DESCRIÇÃO APENAS NESTA PÁGINA -->
                    <div class="detail-description">
                        <p>
                        Oplev den ultimative kraft og elegance med denne ${p.kategori}. 
                        Hver enhed gennemgår en omfattende 40-punkts inspektion for at sikre, 
                        at den lever op til de højeste standarder.
                        </p>
                        <ul>
                            <li>✓ 2 års reklamationsret</li>
                            <li>✓ Batteritjekket & klargjort</li>
                        </ul>
                    </div>
                    <a href="${p.link}" target="_blank" class="btn-primary" style="padding: 20px 50px; font-size: 1.2rem;">Læg i kurv</a>
                </div>
            </div>
        `;
    } else {
        renderArea.innerHTML = "<h2>Produktet blev ikke fundet.</h2>";
    }
}


/* =========================================================
   5. FILTROS
========================================================= */
function renderFiltre() {
    const container = document.getElementById('filterContainer');
    if (!container) return;

    container.innerHTML = appleKategorier.map(k => `
        <button class="apple-filter-btn ${nuvaerendeKategori === k ? 'active' : ''}"
            onclick="skiftKategori('${k}')">
            ${k}
        </button>
    `).join('');
}

window.skiftKategori = (k) => {
    nuvaerendeKategori = k;
    renderFiltre();
    renderGrid();
};


/* =========================================================
   6. MENU MOBILE
========================================================= */
function initMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.header-grid');

    if (toggle) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
        });
    }
}


/* =========================================================
   7. INIT
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
    hentProdukter();
    initMenu();

    document.getElementById('searchField')
        ?.addEventListener('input', renderGrid);
});


/* =========================================================
   8. FECHAR MODAL AO CLICAR FORA
========================================================= */
window.onclick = (event) => {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
};
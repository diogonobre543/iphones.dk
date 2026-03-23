/**
 * iSTORE 2026 - ENGINE TOTAL (Med Modal Detaljer)
 * Sprog: Dansk | Kategorier: MacBook Pro, Air, iMac, Mini, iPhone, iPad
 */

const API_URL = 'https://www.datamarked.dk/?id=8016&apikey=7F39CE5E19D3F9413701DCF97D9F3E91897D9969222552C642229085587BAFF4';
let alleProdukter = [];
let nuvaerendeKategori = 'Alle';

// Kategorier uden Mac Studio
const appleKategorier = ['Alle', 'MacBook Pro', 'MacBook Air', 'iMac', 'Mac Mini', 'iPhone', 'iPad'];

// 1. HENT DATA FRA API
async function hentProdukter() {
    const grid = document.getElementById('productGrid');
    if (grid) grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 50px;">Henter iStore katalog...</p>';

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
                navn: item.title,
                pris: typeof item.price === 'string' ? parseFloat(item.price.replace(',', '.')) : item.price,
                billede: item.image,
                link: item.link,
                kategori: cat
            };
        });

        renderFiltre();
        renderGrid();
    } catch (fejl) {
        if (grid) grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Fejl ved indlæsning af produkter.</p>';
    }
}

// 2. RENDER FILTRE
function renderFiltre() {
    const container = document.getElementById('filterContainer');
    if (!container) return;

    container.innerHTML = appleKategorier.map(k => `
        <button class="apple-filter-btn ${nuvaerendeKategori === k ? 'active' : ''}" 
                onclick="skiftKategori('${k}')">${k}</button>
    `).join('');
}

window.skiftKategori = (k) => {
    nuvaerendeKategori = k;
    renderFiltre();
    renderGrid();
};

// 3. RENDER PRODUKT GRID
function renderGrid() {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    const søgeord = document.getElementById('searchField')?.value.toLowerCase() || '';
    
    const filtrerede = alleProdukter.filter(p => 
        (nuvaerendeKategori === 'Alle' || p.kategori === nuvaerendeKategori) && 
        p.navn.toLowerCase().includes(søgeord)
    );

    const erProduktside = document.getElementById('filterContainer');
    const visning = erProduktside ? filtrerede : filtrerede.slice(0, 4);

    grid.innerHTML = visning.map(p => `
        <article class="product-card">
            <div class="img-wrapper">
                <img src="${p.billede}" alt="${p.navn}">
            </div>
            <div class="product-info">
                <span class="category-tag">${p.kategori}</span>
                <h3>${p.navn}</h3>
                <p class="price">Fra ${p.pris.toLocaleString('da-DK', {minimumFractionDigits: 2})} kr.</p>
                <div class="card-buttons">
                    <button class="btn-secondary" onclick="openModal('${encodeURIComponent(JSON.stringify(p))}')">Se detaljer</button>
                    <a href="${p.link}" target="_blank" class="btn-primary">Køb nu</a>
                </div>
            </div>
        </article>
    `).join('');
}

// 4. MODAL LOGIK
window.openModal = (productData) => {
    const p = JSON.parse(decodeURIComponent(productData));
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    if (!modal || !body) return;

    body.innerHTML = `
        <div class="modal-img">
            <img src="${p.billede}" alt="${p.navn}">
        </div>
        <div class="modal-info">
            <span class="category-tag">${p.kategori}</span>
            <h2>${p.navn}</h2>
            <p class="modal-price">${p.pris.toLocaleString('da-DK', {minimumFractionDigits: 2})} kr.</p>
            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
            <p class="modal-desc">
                Denne ${p.navn} er en del af vores premium sortiment. 
                Alle enheder gennemgår en omfattende kvalitetstest for at sikre, 
                at du får den bedste Apple-oplevelse.
            </p>
            <ul style="margin: 20px 0; padding-left: 20px; color: #86868b; font-size: 0.9rem;">
                <li>✓ 24 måneders reklamationsret</li>
                <li>✓ Hurtig levering i hele Danmark</li>
                <li>✓ Professionel support</li>
            </ul>
            <a href="${p.link}" target="_blank" class="btn-primary" style="display: block; text-align: center; width: 100%;">Gå til bestilling</a>
        </div>
    `;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Stopper scroll bagved
}

window.closeModal = () => {
    const modal = document.getElementById('productModal');
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Luk modal ved klik udenfor
window.onclick = (event) => {
    const modal = document.getElementById('productModal');
    if (event.target == modal) closeModal();
}

// 5. INITIALISERING
document.addEventListener('DOMContentLoaded', () => {
    hentProdukter();
    document.getElementById('searchField')?.addEventListener('input', renderGrid);
});
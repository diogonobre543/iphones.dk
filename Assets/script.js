/**
 * iSTORE 2026 - ENGINE TOTAL
 * Rettelse: Tilfældige produkter på forsiden & Forbedret Modal Design
 */

const API_URL = 'https://www.datamarked.dk/?id=8016&apikey=7F39CE5E19D3F9413701DCF97D9F3E91897D9969222552C642229085587BAFF4';
let alleProdukter = [];
let nuvaerendeKategori = 'Alle';

const appleKategorier = ['Alle', 'MacBook Pro', 'MacBook Air', 'iMac', 'Mac Mini', 'iPhone', 'iPad'];

// Funktion til at blande produkterne
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 1. HENT DATA FRA API
async function hentProdukter() {
    const grid = document.getElementById('productGrid') || document.getElementById('homeProductGrid');
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
    const grid = document.getElementById('productGrid') || document.getElementById('homeProductGrid');
    if (!grid) return;

    const søgeord = document.getElementById('searchField')?.value.toLowerCase() || '';
    
    let filtrerede = alleProdukter.filter(p => 
        (nuvaerendeKategori === 'Alle' || p.kategori === nuvaerendeKategori) && 
        p.navn.toLowerCase().includes(søgeord)
    );

    // LOGIK: Tilfældige 4 på forsiden
    if (grid.id === 'homeProductGrid') {
        const blandet = shuffleArray([...filtrerede]); // Blander en kopi af listen
        filtrerede = blandet.slice(0, 4);
    }

    grid.innerHTML = filtrerede.map(p => `
        <article class="product-card">
            <div class="img-wrapper">
                <img src="${p.billede}" alt="${p.navn}">
            </div>
            <div class="product-info">
                <span class="category-tag">${p.kategori}</span>
                <h3>${p.navn}</h3>
                <p class="price">Fra ${p.pris.toLocaleString('da-DK', {minimumFractionDigits: 0})} kr.</p>
                <div class="card-buttons">
                    <button class="btn-secondary" onclick="openModal('${encodeURIComponent(JSON.stringify(p))}')">Detaljer</button>
                    <a href="${p.link}" target="_blank" class="btn-primary">Køb</a>
                </div>
            </div>
        </article>
    `).join('');
}

// 4. MODAL LOGIK (Med forbedret design-struktur)
window.openModal = (productData) => {
    const p = JSON.parse(decodeURIComponent(productData));
    const modal = document.getElementById('productModal');
    const body = document.getElementById('modalBody');

    if (!modal || !body) return;

    // Her bygger vi det "flotte" modal layout
    body.innerHTML = `
        <div class="modal-header-mobile">
             <span class="close-modal" onclick="closeModal()">&times;</span>
        </div>
        <div class="modal-grid">
            <div class="modal-img-container">
                <img src="${p.billede}" alt="${p.navn}">
            </div>
            <div class="modal-details">
                <span class="modal-eyebrow">${p.kategori}</span>
                <h2>${p.navn}</h2>
                <p class="modal-price">${p.pris.toLocaleString('da-DK', {minimumFractionDigits: 0})} kr.</p>
                
                <div class="modal-divider"></div>
                
                <div class="modal-description">
                    <p>Denne Apple enhed er nøje udvalgt og gennemtestet. Vi garanterer 100% funktionalitet og den velkendte Apple-oplevelse.</p>
                    <ul>
                        <li><span>✓</span> 2 års reklamationsret</li>
                        <li><span>✓</span> Dag-til-dag levering</li>
                        <li><span>✓</span> Batteritjekket & klargjort</li>
                    </ul>
                </div>
                
                <a href="${p.link}" target="_blank" class="btn-primary buy-btn">Læg i kurv</a>
            </div>
        </div>
    `;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}

window.closeModal = () => {
    const modal = document.getElementById('productModal');
    if (modal) modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// 5. MENU HAMBURGUER
function initMenu() {
    const header = document.querySelector('.header-grid');
    if (!header) return;

    if (!document.querySelector('.menu-toggle')) {
        const btn = document.createElement('button');
        btn.className = 'menu-toggle';
        btn.innerHTML = '<span>☰</span>';
        header.appendChild(btn);

        btn.addEventListener('click', () => {
            header.classList.toggle('nav-active');
            document.body.style.overflow = header.classList.contains('nav-active') ? 'hidden' : '';
        });
    }
}

window.onclick = (event) => {
    const modal = document.getElementById('productModal');
    if (event.target == modal) closeModal();
}

document.addEventListener('DOMContentLoaded', () => {
    hentProdukter();
    initMenu();
    document.getElementById('searchField')?.addEventListener('input', renderGrid);
});
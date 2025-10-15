/* productall-script.js
   Erişilebilir sekmeler + mobil dropdown + sızıntısız image slider + load more
   JTL Shop uyumlu - namespace korumalı
*/

// -----------------------------
// Namespace Protection
// -----------------------------
(function() {
  'use strict';
  
  // Global namespace pollution prevention
  if (window.BremerProductAll) {
    console.warn('BremerProductAll already exists, skipping initialization');
    return;
  }

// -----------------------------
// Ürün Verisi (mevcut verin)
// -----------------------------

var productallData = window.productallData || (window.productallData = { /* ——— sizin gönderdiğiniz productData burada aynen kalıyor ——— */ 
    bremer_pkw: [
        { title: "C SERIE", discount: 50, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/C/C1.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C2.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C3.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C4.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C5.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C6.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C8.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C10.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C11.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C12.webp","https://bremer-sitzbezuege.de/mediafiles/image/C/C13.webp" ], productUrl: "https://bremer-sitzbezuege.de/C-Serie" },
        { title: "DPL SERIE", discount: 15, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL511.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL510.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL509.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL508.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL507.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL506.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL505.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL504.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL502.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL501.webp" ], productUrl: "https://bremer-sitzbezuege.de/DPL-Serie_1" },
        { title: "DS SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS1.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS2.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS3.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS4.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS5.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS6.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS7.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS8.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS9.webp" ], productUrl: "https://bremer-sitzbezuege.de/DS-Serie" },
        { title: "H SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/H1/H1.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H2.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H3.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H4.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H5.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H6.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H8.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H10.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H11.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H12.webp","https://bremer-sitzbezuege.de/mediafiles/image/H1/H13.webp" ], productUrl: "https://bremer-sitzbezuege.de/H-Serie" },
        { title: "KT SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/KT301/KT301.webp","https://bremer-sitzbezuege.de/mediafiles/image/KT301/KT302.webp","https://bremer-sitzbezuege.de/mediafiles/image/KT301/KT304.webp","https://bremer-sitzbezuege.de/mediafiles/image/KT301/KT305.webp","https://bremer-sitzbezuege.de/mediafiles/image/KT301/KT306.webp" ], productUrl: "https://bremer-sitzbezuege.de/KT300-Serie" },
        { title: "LT SERIE", discount: 11, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/LT/LT3.webp","https://bremer-sitzbezuege.de/mediafiles/image/LT/LT4.webp","https://bremer-sitzbezuege.de/mediafiles/image/LT/LT5.webp" ], productUrl: "https://bremer-sitzbezuege.de/LT-Serie" },
        { title: "M SERIE", discount: 50, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/M/M1.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M2.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M3.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M4.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M5.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M6.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M7.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M8.webp","https://bremer-sitzbezuege.de/mediafiles/image/M/M9.webp" ], productUrl: "https://bremer-sitzbezuege.de/M-Serie" },
        { title: "NL SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/NL/NL1.webp","https://bremer-sitzbezuege.de/mediafiles/image/NL/NL2.webp","https://bremer-sitzbezuege.de/mediafiles/image/NL/NL3.webp" ], productUrl: "https://bremer-sitzbezuege.de/NL-Serie" },
        { title: "PLKT SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT201.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT202.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT204.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT205.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT206.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT207.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT208.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT209.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT210.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT211.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT212.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT213.webp" ], productUrl: "https://bremer-sitzbezuege.de/PLKT-Serie_1" },
        { title: "T SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/T/T1.webp","https://bremer-sitzbezuege.de/mediafiles/image/T/T2.webp" ], productUrl: "https://bremer-sitzbezuege.de/T-Serie" },
        { title: "V SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/V/V1.webp","https://bremer-sitzbezuege.de/mediafiles/image/V/V2.webp","https://bremer-sitzbezuege.de/mediafiles/image/V/V3.webp","https://bremer-sitzbezuege.de/mediafiles/image/V/V4.webp" ], productUrl: "https://bremer-sitzbezuege.de/V-Serie" },
        { title: "ZM SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/ZM/ZM1.webp","https://bremer-sitzbezuege.de/mediafiles/image/ZM/ZM2.webp","https://bremer-sitzbezuege.de/mediafiles/image/ZM/ZM3.webp","https://bremer-sitzbezuege.de/mediafiles/image/ZM/ZM4.webp","https://bremer-sitzbezuege.de/mediafiles/image/ZM/ZM6.webp" ], productUrl: "https://bremer-sitzbezuege.de/ZM-Serie" }
    ],
    bremer_wohnmobil: [
        { title: "PLKT SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT201.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT202.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT204.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT205.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT206.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT207.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT208.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT209.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT210.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT211.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT212.webp","https://bremer-sitzbezuege.de/mediafiles/image/PLKT/PLKT213.webp" ], productUrl: "https://bremer-sitzbezuege.de/PLKT-Serie" },
        { title: "DS SERIE",  discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS1.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS2.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS3.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS4.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS5.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS6.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS7.webp","https://bremer-sitzbezuege.de/mediafiles/image/DS1/DS8.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DS9.webp" ], productUrl: "https://bremer-sitzbezuege.de/DS-Serie_1" },
        { title: "LT SERIE", discount: 11, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/LT/LT3.webp","https://bremer-sitzbezuege.de/mediafiles/image/LT/LT4.webp","https://bremer-sitzbezuege.de/mediafiles/image/LT/LT5.webp" ], productUrl: "https://bremer-sitzbezuege.de/LT-Serie_1" },
        { title: "T SERIE", discount: 30, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/T/T1.webp","https://bremer-sitzbezuege.de/mediafiles/image/T/T2.webp" ], productUrl: "https://bremer-sitzbezuege.de/T-Serie_1" },
        { title: "DPL SERIE", discount: 15, images: [ "https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL511.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL510.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL509.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL508.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL507.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL506.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL505.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL504.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL502.webp","https://bremer-sitzbezuege.de/mediafiles/image/DPL/DPL501.webp" ], productUrl: "https://bremer-sitzbezuege.de/DPL-Serie" }
       
    ],
    bremer_other: [
        { title: "Klappmatratze 3-Teilig", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/169999/lg/klappmatratze-3-teilig-fuer-vw-t4-t5-t6-t61-transporter-multivan-california-beach-viano-fun-w639-vivaro-primastar-trafic-1m.webp"], productUrl: "https://bremer-sitzbezuege.de/Matratzen" },
        { title: "Multiflex-Matratze-Set", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/117838/lg/multiflex-matratze-set-fuer-vw-t5-t6-t61-multivan-fb03~3.webp"], productUrl: "https://bremer-sitzbezuege.de/Multiflexboard-Matratzen-Sets" },
        { title: "3 Fenster Gardinen", discount: 8, images: ["https://bremer-sitzbezuege.de/media/image/product/116521/lg/vw-3-fenster-set.webp"], productUrl: "https://bremer-sitzbezuege.de/Gardinen-Komplettsets" },
        { title: "VW-Heckabtrennung", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/116453/lg/vw-heckabtrennung.webp"], productUrl: "https://bremer-sitzbezuege.de/Heckscheiben-Abtrennungen" },
        { title: "Dachrelinge", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/117004/lg/vw-dachreling.webp"], productUrl: "https://bremer-sitzbezuege.de/Dachrelinge" },
        { title: "Grundträger", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/226120/lg/quertraeger-dachtraeger-grundtraeger-mit-schloss-fuer-vw-caddy-5-in-schwarz.webp"], productUrl: "https://bremer-sitzbezuege.de/Quertraeger-Dachtraeger-Grundtraeger-mit-Schloss-fuer-VW-Caddy-5-in-Schwarz" },
        { title: "Armlehnenbezüge", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/229390/lg/wohnmobil-armlehnenbezug-typ-1-fuer-fiat-ducato-peugeot-boxer-citroen-jumper~2.webp"], productUrl: "https://bremer-sitzbezuege.de/Wohnmobil-Armlehnenbezug-Typ-1-fuer-Fiat-Ducato-Peugeot-Boxer-Citroen-Jumper" },
        { title: "Universal Gummi Fußmatten Set 4-tlg", discount: 11, images: ["https://bremer-sitzbezuege.de/media/image/product/113466/lg/vw-fussmatten-serie.webp"], productUrl: "https://bremer-sitzbezuege.de/VW-Fussmatten-Serie" },
        { title: "Moskitonetz", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/229458/lg/moskitonetz-magnetisch-schiebetuer-fuer-fiat-ducato-peugeot-boxer-citroen-jumper-typ-250-baujahr-2006-2024~4.webp"], productUrl: "https://bremer-sitzbezuege.de/Moskitonetz" },
        { title: "Schonbezug Organizer", discount: 30, images: ["https://bremer-sitzbezuege.de/media/image/product/267064/lg/schonbezug-organizer-fuer-fiat-ducato-250-furgok-600-landsberg-wohnmobil-beige.webp"], productUrl: "https://bremer-sitzbezuege.de/Sitz-Organizer" }
    ]
});

// -----------------------------
// Yardımcı şablonlar
// -----------------------------
const IMG_FALLBACK = "https://via.placeholder.com/300x200/f8f9fa/6c757d?text=Produktbild";

const buildCardHTML = (product) => {
  const dots = product.images.map((_, i) => (
    `<span class="productall-dot ${i === 0 ? "active" : ""}" data-slide="${i}" tabindex="0" role="button" aria-label="Bild ${i+1} anzeigen"></span>`
  )).join("");

  const imgs = product.images.map((src, i) => (
    `<img src="${src}" alt="${product.title}" class="productall-product-image ${i===0?"active":""}" loading="lazy">`
  )).join("");

  return `
    <div class="productall-product-card" data-product-url="${product.productUrl}">
      <div class="productall-product-image-container">
        <div class="productall-image-slider">${imgs}</div>
        <span class="productall-product-title">${product.title}</span>
        <div class="productall-slider-dots">${dots}</div>
      </div>
      <button class="productall-prev-image-btn" type="button" aria-label="Vorheriges Bild">←</button>
      <button class="productall-next-image-btn" type="button" aria-label="Nächstes Bild">→</button>
    </div>
  `;
};

// -----------------------------
// Tab + Dropdown + Slider Yönetimi
// -----------------------------
var BremerProductAll = window.BremerProductAll || {};

if (!BremerProductAll.TabManager) { 
  BremerProductAll.TabManager = class TabManager {
  constructor() {
    this.currentTab = 'bremer_pkw';
    this.sliders = []; // Interval ve listener referansları
    this.allProducts = [];
    this.currentDisplayCount = 0;
    this.isMobile = false;
  }

  init() {
    this.cacheDom();
    if (!this.tabNav || this.tabButtons.length === 0 || this.panels.length === 0) {
      // JTL veya geç yüklenen DOM için yeniden dene
      const retry = () => {
        this.cacheDom();
        if (this.tabNav && this.tabButtons.length && this.panels.length) {
          this.bindTabEvents();
          this.initMobileDropdown();
          this.syncFromHash();
          this.loadProducts(this.currentTab);
          window.addEventListener('hashchange', () => this.syncFromHash());
        } else {
          setTimeout(retry, 100);
        }
      };
      retry();
      return;
    }

    this.bindTabEvents();
    this.initMobileDropdown();
    this.syncFromHash();   // URL #hash destek
    this.loadProducts(this.currentTab);
    window.addEventListener('hashchange', () => this.syncFromHash());
  }

  cacheDom() {
    // JTL Shop uyumlu - sadece kendi container'ı içinde arama yap
    const container = document.querySelector('.productall-container') || document;
    this.tabNav = container.querySelector('.productall-tab-navigation');
    this.tabButtons = Array.from(container.querySelectorAll('.productall-tab-navigation .productall-tab-button'));
    this.panels = Array.from(container.querySelectorAll('.productall-tab-panel'));
  }

  bindTabEvents() {
    // Mouse tıklama
    this.tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const category = e.currentTarget.getAttribute('data-category');
        this.switchTab(category, { updateHash: true });
      });
    });

    // Klavye (sol/sağ ok) - JTL Shop uyumlu event delegation
    if (this.tabNav) {
      this.tabNav.addEventListener('keydown', (e) => {
        // Sadece kendi butonlarımızda çalışsın
        if (!e.target.classList.contains('productall-tab-button')) return;
        
        const idx = this.tabButtons.indexOf(e.target);
        if (idx === -1) return;
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          e.stopPropagation();
          const next = (idx + 1) % this.tabButtons.length;
          this.tabButtons[next].focus();
          this.tabButtons[next].click();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          e.stopPropagation();
          const prev = (idx - 1 + this.tabButtons.length) % this.tabButtons.length;
          this.tabButtons[prev].focus();
          this.tabButtons[prev].click();
        }
      });
    }
  }

  syncFromHash() {
    const hash = (location.hash || '#bremer_pkw').replace('#','');
    if (['bremer_pkw','bremer_wohnmobil','bremer_other'].includes(hash) && hash !== this.currentTab) {
      this.switchTab(hash, { updateHash: false });
    }
  }

  switchTab(category, { updateHash = false } = {}) {
    // Sekme butonları
    this.tabButtons.forEach(b => {
      const isActive = b.getAttribute('data-category') === category;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', String(isActive));
      b.tabIndex = isActive ? 0 : -1;
    });

    // Paneller
    this.panels.forEach(p => {
      const isActive = p.id === category;
      p.classList.toggle('active', isActive);
      p.hidden = !isActive;
      p.setAttribute('aria-hidden', String(!isActive));
    });

    // Ürünleri yükle
    this.currentTab = category;
    if (updateHash) history.replaceState(null, '', `#${category}`);
    this.loadProducts(category);
  }

  loadProducts(category) {
    const productsContainer = document.getElementById(`${category}-products`);
    if (!productsContainer) return;

    // Mevcut slider’ları temizle (interval/leak önleme)
    this.destroyAllSliders(productsContainer);

    productsContainer.innerHTML = '<div class="productall-loading">Lade Produkte...</div>';

    // Küçük UX gecikmesi
    setTimeout(() => {
      const products = (window.productallData && window.productallData[category]) ? window.productallData[category] : [];
      const sortedProducts = this.sortProductsByRanking(products);
      this.renderProducts(productsContainer, sortedProducts);
    }, 300);
  }

  sortProductsByRanking(products) {
    // Not: Şimdilik sadece indirim oranına göre desc.
    return [...products].sort((a, b) => b.discount - a.discount);
  }

  renderProducts(container, products) {
    if (!products.length) {
      container.innerHTML = '<p>Keine Produkte verfügbar.</p>';
      return;
    }

    // Mobil sayısı
    const isMobile = window.innerWidth <= 768;
    const initialDisplayCount = isMobile ? 4 : products.length;

    this.allProducts = products;
    this.currentDisplayCount = initialDisplayCount;
    this.isMobile = isMobile;

    // Kartları bas
    container.innerHTML = products.slice(0, initialDisplayCount).map(buildCardHTML).join('');

    // Kart davranışları
    this.bindCards(container);

    // Load more
    if (isMobile && products.length > initialDisplayCount) {
      this.addLoadMoreButton(container);
    }
  }

  bindCards(container) {
    const cards = Array.from(container.querySelectorAll('.productall-product-card'));

    // Kart tıklaması (boş alanda linke git)
    cards.forEach(card => {
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        const isControl = e.target.closest('.productall-prev-image-btn, .productall-next-image-btn, .productall-slider-dots');
        if (isControl) return;
        const url = card.getAttribute('data-product-url');
        if (url) window.open(url, '_blank');
      });
    });

    // Slider başlat
    cards.forEach(card => this.createSliderForCard(card));
  }

  addLoadMoreButton(container) {
    const btn = document.createElement('button');
    btn.className = 'productall-load-more-btn';
    btn.type = 'button';
    btn.textContent = 'Mehr Produkte laden';
    btn.addEventListener('click', () => this.loadMore(container));
    container.appendChild(btn);
  }

  loadMore(container) {
    const remaining = this.allProducts.slice(this.currentDisplayCount);
    const nextBatch = remaining.slice(0, 4);

    if (!nextBatch.length) return;

    const loadMoreBtn = container.querySelector('.productall-load-more-btn');

    loadMoreBtn.insertAdjacentHTML('beforebegin', nextBatch.map(buildCardHTML).join(''));
    this.currentDisplayCount += nextBatch.length;

    // Yeni kartları bağla
    const newCards = Array.from(container.querySelectorAll('.productall-product-card'))
      .slice(-nextBatch.length);
    newCards.forEach(card => {
      // kart click + slider
      card.style.cursor = 'pointer';
      card.addEventListener('click', (e) => {
        const isControl = e.target.closest('.productall-prev-image-btn, .productall-next-image-btn, .productall-slider-dots');
        if (isControl) return;
        const url = card.getAttribute('data-product-url');
        if (url) window.open(url, '_blank');
      });
      this.createSliderForCard(card);
    });

    if (this.currentDisplayCount >= this.allProducts.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  // -----------------------------
  // Slider Yönetimi (sızıntısız)
  // -----------------------------
  createSliderForCard(card) {
    const images = Array.from(card.querySelectorAll('.productall-product-image'));
    const dots = Array.from(card.querySelectorAll('.productall-dot'));
    const prevBtn = card.querySelector('.productall-prev-image-btn');
    const nextBtn = card.querySelector('.productall-next-image-btn');
    const container = card.querySelector('.productall-product-image-container');

    let index = 0;
    let timerId = null;
    const hasMultiple = images.length > 1;

    // Safe image fallback without inline handlers
    images.forEach((img) => {
      img.addEventListener('error', () => {
        if (IMG_FALLBACK && img.src !== IMG_FALLBACK) {
          img.src = IMG_FALLBACK;
        }
      });
    });

    const goTo = (i) => {
      images.forEach(img => img.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      if (images[i]) images[i].classList.add('active');
      if (dots[i]) dots[i].classList.add('active');
      index = i;
    };

    const next = () => goTo((index + 1) % images.length);
    const prev = () => goTo((index - 1 + images.length) % images.length);

    const start = () => {
      if (!hasMultiple || timerId) return;
      timerId = window.setInterval(next, 3000);
    };
    const stop = () => {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    };

    // Dots
    dots.forEach((dot, i) => {
      dot.addEventListener('click', (e) => { e.stopPropagation(); goTo(i); });
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTo(i); }
      });
    });

    // Buttons
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); if (hasMultiple) prev(); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); if (hasMultiple) next(); });

    // Touch swipe
    let startX = 0;
    container.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
    container.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 50 && hasMultiple) (diff > 0 ? next() : prev());
    });

    // Hover pause/resume
    card.addEventListener('pointerenter', stop);
    card.addEventListener('pointerleave', start);

    // Başlat
    start();

    // Destroy hook
    const destroy = () => {
      stop();
      // Event listener’ları node ile birlikte GC olur; interval zaten temiz.
    };

    // Kaydet
    this.sliders.push({ card, destroy });
  }

  destroyAllSliders(container) {
    // Var olan slider’ların interval’ını durdur
    this.sliders.forEach(s => s.destroy());
    this.sliders = [];
    // Container içeriğini temizlemek üzereyiz; ek özel işlem yok.
  }

  // -----------------------------
  // Mobil Dropdown
  // -----------------------------
  initMobileDropdown() {
    // Initialize dropdowns for all tab panels - JTL Shop uyumlu
    const tabPanels = ['bremer_pkw', 'bremer_wohnmobil', 'bremer_other'];
    const container = document.querySelector('.productall-container') || document;
    
    tabPanels.forEach(panel => {
      const dropdownButton = container.querySelector(`#productall-dropdown-button-${panel}`);
      const dropdownMenu = container.querySelector(`#productall-dropdown-menu-${panel}`);
      const dropdownItems = dropdownMenu?.querySelectorAll('.productall-dropdown-item');
      
      if (!dropdownButton || !dropdownMenu || !dropdownItems) {
        console.warn(`BremerProductAll: Missing dropdown elements for ${panel}`);
        return;
      }

      // Başlangıçta aria-expanded'ı false olarak set et
      dropdownButton.setAttribute('aria-expanded', 'false');

      const open = () => {
        console.log('Opening dropdown...');
        dropdownButton.setAttribute('aria-expanded', 'true');
        dropdownMenu.classList.add('open');
        this.adjustDropdownPosition(dropdownButton, dropdownMenu);
        console.log('Dropdown opened, aria-expanded:', dropdownButton.getAttribute('aria-expanded'));
      };
      const close = () => {
        console.log('Closing dropdown...');
        dropdownButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('open');
        // pozisyonu default'a al
        dropdownMenu.style.top = '';
        dropdownMenu.style.left = '';
        console.log('Dropdown closed, aria-expanded:', dropdownButton.getAttribute('aria-expanded'));
      };

      dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dropdownButton.getAttribute('aria-expanded') === 'true';
        console.log(`Dropdown clicked - isOpen: ${isOpen}, aria-expanded: ${dropdownButton.getAttribute('aria-expanded')}`);
        console.log('Calling function:', isOpen ? 'close()' : 'open()');
        isOpen ? close() : open();
      });

      dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
          const category = item.getAttribute('data-category');
          this.switchTab(category, { updateHash: true });
          // aktif sınıf
          dropdownItems.forEach(i => i.classList.toggle('active', i === item));
          close();
        });
      });

      // JTL Shop uyumlu - sadece kendi dropdown'larımızı kapat
      document.addEventListener('click', (e) => {
        if (dropdownMenu.classList.contains('open') && 
            !dropdownButton.contains(e.target) && 
            !dropdownMenu.contains(e.target)) {
          close();
        }
      });

      // ESC ile kapat - JTL Shop uyumlu
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdownButton.getAttribute('aria-expanded') === 'true') {
          e.stopPropagation();
          close();
          dropdownButton.focus();
        }
      });
    });
  }

  adjustDropdownPosition(button, menu) {
    const buttonRect = button.getBoundingClientRect();
    const menuHeight = menu.offsetHeight || 200; // fallback height
    const viewportHeight = window.innerHeight;

    // Position the menu relative to the button using fixed positioning
    if (buttonRect.bottom + menuHeight > viewportHeight) {
      // yukarı aç
      menu.style.top = `${buttonRect.top - menuHeight - 8}px`;
      menu.style.left = `${buttonRect.left}px`;
    } else {
      // aşağı aç (default)
      menu.style.top = `${buttonRect.bottom + 8}px`;
      menu.style.left = `${buttonRect.left}px`;
    }
  }
}; }

// Global namespace'e ekle
window.BremerProductAll = BremerProductAll;

// -----------------------------
// Başlat - JTL Shop uyumlu
// -----------------------------
var BremerProductAllInit = function() {
  // Sadece kendi container'ımız varsa başlat
  const container = document.querySelector('.productall-container');
  if (!container) {
    console.warn('BremerProductAll: .productall-container not found');
    return;
  }
  
  // Mevcut instance'ı temizle
  if (window.bremerProductAllInstance) {
    window.bremerProductAllInstance.destroy && window.bremerProductAllInstance.destroy();
  }
  
  const manager = new BremerProductAll.TabManager();
  manager.init();
  window.bremerProductAllInstance = manager;
};

// JTL Shop uyumlu başlatma
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  BremerProductAllInit();
} else {
  document.addEventListener('DOMContentLoaded', BremerProductAllInit);
  window.addEventListener('load', BremerProductAllInit);
}

// JTL Shop için global erişim
window.BremerProductAllInit = BremerProductAllInit;

})(); // IIFE kapatma

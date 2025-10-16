(function () {
    'use strict';
  
    function onReady(fn) {
      if (document.readyState !== 'loading') fn();
      else document.addEventListener('DOMContentLoaded', fn, { once: true });
    }
  
    // Dealer Banner namespace
    const DealerBanner = {
      init() {
        // DOM hazır olduktan sonra çalıştır
        this.moveSelectionWizard();
        this.initAnimations();
        // İlk boyamadan sonra küçük sınıf/ölçü güncellemeleri gerekirse:
        requestAnimationFrame(() => {
          document.documentElement.classList.add('dealer-init-done');
        });
      },
  
      moveSelectionWizard() {
        // selectionwizard öğesini wohnmobil-selection içine taşı
        const divToMove = document.getElementById('selectionwizard');
        const newLocation = document.getElementById('wohnmobil-selection');
        if (divToMove && newLocation && !newLocation.contains(divToMove)) {
          newLocation.appendChild(divToMove);
        }
        // Bu öğeler bazen geç yükleniyorsa, dışarıdan tekrar çağrılabilir.
      },
  
      initAnimations() {
        // Scroll animasyonları
        if ('IntersectionObserver' in window) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('dealer-animate-in');
                  observer.unobserve(entry.target);
                }
              });
            },
            {
              root: null,
              rootMargin: '0px 0px -10% 0px', // biraz erken tetikleyelim
              threshold: 0.01,
            }
          );
  
          document.querySelectorAll('.dealer-banner-hero').forEach((el) => {
            observer.observe(el);
          });
        }
      },
  
      // Public methods for JTL integration
      show() {
        document.querySelectorAll('.dealer-banner-hero').forEach((el) => {
          el.style.display = 'flex';
        });
      },
  
      hide() {
        document.querySelectorAll('.dealer-banner-hero').forEach((el) => {
          el.style.display = 'none';
        });
      },
  
      updateContent(title, description) {
        const headline = document.querySelector('.dealer-banner-headline');
        const text = document.querySelector('.dealer-banner-text');
        if (headline && typeof title === 'string') headline.textContent = title;
        if (text && typeof description === 'string') text.textContent = description;
      },
    };
  
    // Global'e at
    window.DealerBanner = DealerBanner;
  
    // DOM hazır olduğunda başlat (defer ile uyumlu)
    onReady(() => DealerBanner.init());
  })();
  
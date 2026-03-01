/**
 * COFFEECO - Menú móvil y pequeñas interacciones
 */

(function () {
  'use strict';

  const menuToggle = document.querySelector('.menu-toggle');
  const navOverlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-overlay .nav-list a');

  // Abrir/cerrar menú hamburguesa
  if (menuToggle && navOverlay) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('is-open');
      navOverlay.classList.toggle('is-open');
      document.body.style.overflow = navOverlay.classList.contains('is-open') ? 'hidden' : '';
    });

    // Cerrar al hacer clic en un enlace (móvil)
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('is-open');
        navOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // Cerrar al hacer clic fuera del menú (en el overlay)
    navOverlay.addEventListener('click', function (e) {
      if (e.target === navOverlay) {
        menuToggle.classList.remove('is-open');
        navOverlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  // Botones "Pedir Ahora" (ejemplo: podrían abrir WhatsApp o un modal)
  const pedirBtns = document.querySelectorAll('.btn-pedir');
  pedirBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      // Enlace a WhatsApp con mensaje predefinido (opcional)
      var productName = this.closest('.producto-card')?.querySelector('h3')?.textContent || 'producto';
      var msg = encodeURIComponent('Hola, me gustaría pedir: ' + productName);
      window.open('https://wa.me/573001234567?text=' + msg, '_blank');
    });
  });
})();

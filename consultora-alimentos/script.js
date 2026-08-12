document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  let menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  const form = document.querySelector('#consultation-form');
  const status = document.querySelector('#form-status');

  document.querySelector('#year').textContent = new Date().getFullYear();

  const setHeader = () => header.classList.toggle('scrolled', window.scrollY > 70);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  if (!menuButton && menu) {
    menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', menu.id || 'main-nav');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    menu.id = menu.id || 'main-nav';
    menu.parentNode.insertBefore(menuButton, menu);
  }

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      document.body.classList.toggle('menu-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menú');
      });
    });
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
  }

  if (!form) return;

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const message = [
      'Solicitud de evaluación para Inocuo',
      '',
      'Nombre: ' + data.get('nombre'),
      'Empresa: ' + (data.get('empresa') || 'No indicada'),
      'Email: ' + data.get('email'),
      'Ubicación: ' + (data.get('ubicacion') || 'No indicada'),
      'Servicio: ' + data.get('servicio'),
      'Necesidad: ' + data.get('mensaje')
    ].join('\n');

    try {
      if (navigator.share) {
        await navigator.share({ title: 'Consulta para Inocuo', text: message });
        status.textContent = 'El mensaje quedó preparado y se abrió el menú para compartir.';
      } else {
        await navigator.clipboard.writeText(message);
        status.textContent = 'Copiamos el mensaje. Podés pegarlo en WhatsApp o en tu email.';
      }
      status.classList.add('success');
    } catch (error) {
      if (error.name !== 'AbortError') {
        status.textContent = 'No se pudo abrir el menú para compartir. Conservá los datos antes de salir.';
      }
    }
  });
});

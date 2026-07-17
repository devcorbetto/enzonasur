document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.mobile-menu');
  document.querySelectorAll('.mobile-panel a').forEach((link) => {
    link.addEventListener('click', () => menu?.removeAttribute('open'));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') menu?.removeAttribute('open');
  });
});

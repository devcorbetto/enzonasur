const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? 'Cerrar' : 'Menú';
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = 'Menú';
    }
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const searchForm = document.querySelector('#catalog-search');
const searchInput = document.querySelector('#product-search');
const productCards = [...document.querySelectorAll('[data-product]')];
const searchStatus = document.querySelector('#search-status');
const noResults = document.querySelector('#no-results');

if (searchForm && searchInput && productCards.length) {
  const normalize = (value) => value
    .toLocaleLowerCase('es')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  const filterProducts = () => {
    const query = normalize(searchInput.value);
    let visible = 0;

    productCards.forEach((card) => {
      const haystack = normalize(`${card.dataset.product} ${card.textContent}`);
      const matches = !query || haystack.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    if (searchStatus) {
      searchStatus.textContent = query
        ? `${visible} ${visible === 1 ? 'producto encontrado' : 'productos encontrados'} para “${searchInput.value.trim()}”`
        : 'Mostrando productos destacados';
    }
    if (noResults) noResults.hidden = visible !== 0;
  };

  searchInput.addEventListener('input', filterProducts);
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    filterProducts();
    document.querySelector('#catalogo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

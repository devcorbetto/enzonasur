const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const out = root;

const SITE = {
  name: "Polarizados Nano Ceramicos Zona Sur",
  brand: "Polarizados Nano Ceramicos Zona Sur",
  phone: "+5491112345678",
  phoneDisplay: "+54 11 1234-5678",
  whatsappNumber: "573212481668",
  whatsapp: "https://wa.me/5491112345678",
  url: "https://enzonasur.com/polarizados-nanoceramico-zona-sur",
  city: "Zona Sur",
  country: "CO",
  image:
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=82",
};

const ASSET_VERSION = "20260502-9";

const services = [
  {
    slug: "polarizado-nano-ceramico-zona-sur",
    name: "Polarizado nano ceramico",
    title: "Polarizado nano ceramico en Zona Sur a domicilio",
    description:
      "Instalacion de polarizado nano ceramico en Zona Sur a domicilio. Cotiza por WhatsApp, pago con Bold, tarjetas y otros medios.",
    intro:
      "Instalamos pelicula nano ceramica para vehiculos en Zona Sur con atencion a domicilio. Es una opcion pensada para reducir calor, mejorar privacidad y conservar una apariencia limpia sin depender de tintes metalizados.",
    bullets: [
      "Instalacion a domicilio en Zona Sur.",
      "Asesoria por tipo de vehiculo y nivel de privacidad.",
      "Cotizacion directa por WhatsApp con varias marcas y precios.",
      "Recibimos medios de pago digitales y tarjetas de credito con Bold.",
    ],
  },
  {
    slug: "luces-led-para-carro-zona-sur",
    name: "Luces LED",
    title: "Luces LED para carro en Zona Sur a domicilio",
    description:
      "Venta e instalacion de luces LED para vehiculo en Zona Sur. Servicio a domicilio y cotizacion por WhatsApp.",
    intro:
      "Mejora la visibilidad y el estilo de tu vehiculo con luces LED instaladas a domicilio en Zona Sur. Te orientamos segun el tipo de bombillo, uso y presupuesto.",
    bullets: [
      "Opciones para luces principales, exploradoras y accesorios.",
      "Instalacion practica en el lugar donde este tu vehiculo.",
      "Marcas y precios segun disponibilidad.",
      "Pago con tarjetas, transferencias y sistema Bold.",
    ],
  },
  {
    slug: "exploradoras-para-carro-zona-sur",
    name: "Exploradoras",
    title: "Exploradoras para carro en Zona Sur",
    description:
      "Exploradoras para carro en Zona Sur con instalacion a domicilio. Cotizaciones por WhatsApp y pago con Bold.",
    intro:
      "Instalamos exploradoras y accesorios de iluminacion para vehiculos en Zona Sur, cuidando el ajuste, la utilidad y el acabado visual.",
    bullets: [
      "Instalacion de exploradoras segun modelo del vehiculo.",
      "Atencion a domicilio en varias zonas de Zona Sur.",
      "Asesoria antes de comprar.",
      "Cotizacion rapida por WhatsApp.",
    ],
  },
  {
    slug: "tapetes-termoformados-zona-sur",
    name: "Tapetes termoformados",
    title: "Tapetes termoformados en Zona Sur",
    description:
      "Tapetes termoformados y tapetes planos para carro en Zona Sur. Domicilio, cotizacion por WhatsApp y varias referencias.",
    intro:
      "Ofrecemos tapetes termoformados y tapetes planos para proteger el interior del vehiculo con mejor ajuste, facil limpieza y buena presentacion.",
    bullets: [
      "Tapetes termoformados por referencia.",
      "Tapetes planos para diferentes presupuestos.",
      "Entrega o instalacion segun la zona.",
      "Consulta disponibilidad por WhatsApp.",
    ],
  },
  {
    slug: "accesorios-tuning-zona-sur",
    name: "Accesorios tuning",
    title: "Accesorios tuning para carro en Zona Sur",
    description:
      "Accesorios tuning, spoilers, pijamas y detalles para vehiculo en Zona Sur. Cotiza por WhatsApp con varias marcas.",
    intro:
      "Personaliza tu carro con accesorios tuning, spoilers, pijamas, tapetes, luces y detalles exteriores o interiores segun disponibilidad.",
    bullets: [
      "Accesorios esteticos y funcionales.",
      "Opciones para varias marcas de vehiculo.",
      "Domicilio en Zona Sur.",
      "Pagos digitales, tarjetas y Bold.",
    ],
  },
];

const zones = [
  "Quilmes",
  "Suba",
  "Lomas de Zamora",
  "Chapinero",
  "Usaquen",
  "Engativa",
  "Fontibon",
  "Bosa",
  "Teusaquillo",
  "Cedritos",
  "Modelia",
  "Puente Aranda",
  "Barrios Unidos",
  "Santa Barbara",
  "Toberin",
];

const vehicles = [
  "Mazda",
  "Mazda 2",
  "Mazda 3",
  "Ford",
  "Ford Fiesta",
  "Ford Escape",
  "Chevrolet",
  "Renault",
  "Toyota",
  "Kia",
  "Hyundai",
  "Nissan",
  "Volkswagen",
];

const vehicleBrands = [
  "Mazda",
  "Ford",
  "Chevrolet",
  "Renault",
  "Toyota",
  "Kia",
  "Hyundai",
  "Nissan",
  "Volkswagen",
  "Suzuki",
  "Honda",
  "Jeep",
];

const productLabels = [
  "Nano ceramico",
  "Luces LED",
  "Exploradoras",
  "Tapetes 3D",
  "Tapetes planos",
  "Pijamas",
  "Spoilers",
  "Tuning",
];

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=82",
    label: "Polarizado nano ceramico",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1800&q=82",
    label: "Servicio automotriz a domicilio",
  },
  {
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=82",
    label: "Accesorios tuning y luces LED",
  },
];

const showcaseItems = [
  {
    tag: "Confort",
    icon: "fa-solid fa-shield-halved",
    title: "Polarizado nano ceramico",
    text: "Pelicula para reducir calor, mejorar privacidad y darle al carro una apariencia elegante para uso diario en Zona Sur.",
    image:
      "https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Iluminacion",
    icon: "fa-solid fa-lightbulb",
    title: "Luces LED para carro",
    text: "Opciones LED para mejorar presencia, visibilidad y estilo segun el tipo de bombillo y la referencia del vehiculo.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Exploradoras",
    icon: "fa-solid fa-sun",
    title: "Exploradoras y luces auxiliares",
    text: "Instalacion de exploradoras y accesorios de iluminacion para quienes quieren mas presencia frontal y utilidad.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Interior",
    icon: "fa-solid fa-layer-group",
    title: "Tapetes termoformados",
    text: "Tapetes con mejor ajuste para proteger el piso del carro, facilitar limpieza y conservar mejor el interior.",
    image:
      "https://images.unsplash.com/photo-1523983302122-73e869e1f850?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Interior",
    icon: "fa-solid fa-grip-lines",
    title: "Tapetes planos",
    text: "Alternativa practica y economica para proteger el vehiculo con referencias segun disponibilidad.",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Proteccion",
    icon: "fa-solid fa-car-rear",
    title: "Pijamas para vehiculo",
    text: "Consulta pijamas para cubrir y proteger el carro segun tamano, uso y disponibilidad de referencia.",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Tuning",
    icon: "fa-solid fa-gauge-high",
    title: "Spoilers deportivos",
    text: "Detalles exteriores para mejorar la linea visual del carro y darle un acabado mas personalizado.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Tuning",
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Accesorios tuning",
    text: "Opciones esteticas y funcionales para personalizar el vehiculo segun marca, modelo, presupuesto y gusto.",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Cotizacion",
    icon: "fa-brands fa-whatsapp",
    title: "Asesoria por WhatsApp",
    text: "Envia fotos, marca, modelo y zona para recibir opciones de productos, marcas, precios y agenda a domicilio.",
    image:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "Pago facil",
    icon: "fa-solid fa-credit-card",
    title: "Pagos con Bold y tarjetas",
    text: "Recibimos diferentes medios de pago, incluyendo tarjetas de credito mediante sistema Bold.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=78",
  },
  {
    tag: "A domicilio",
    icon: "fa-solid fa-truck-fast",
    title: "Servicio movil en Zona Sur",
    text: "Coordinamos la visita segun zona, disponibilidad y condiciones del vehiculo para que no tengas que desplazarte.",
    image:
      "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=900&q=78",
  },
];

const testimonials = [
  {
    quote:
      "Me cotizaron por WhatsApp, fueron a domicilio y pude pagar con tarjeta. Muy practico para no mover el carro.",
    author: "Cliente en Quilmes",
  },
  {
    quote:
      "Me dieron varias opciones para el polarizado y tambien pregunte por luces LED. La atencion fue rapida.",
    author: "Cliente en Suba",
  },
  {
    quote:
      "El proceso fue claro: envie fotos, me confirmaron disponibilidad y agendamos la instalacion.",
    author: "Cliente en Lomas de Zamora",
  },
];

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function ensureDir(dir) {
  fs.mkdirSync(path.join(out, dir), { recursive: true });
}

function write(file, content) {
  const target = path.join(out, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content);
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

function pageUrl(slug) {
  return `${SITE.url}/${slug === "index" ? "" : slug + "/"}`;
}

function relativePrefix(slug) {
  if (slug === "index") return "";
  return "../".repeat(slug.split("/").length);
}

function localHref(prefix, slug = "") {
  if (!slug) return prefix || "./";
  return `${prefix}${slug}/`;
}

function assetUrl(file) {
  return `${SITE.url}/assets/${file}?v=${ASSET_VERSION}`;
}

function inlineScript() {
  const scriptPath = path.join(root, "assets/js/main.js");
  if (!fs.existsSync(scriptPath)) return "";
  return fs.readFileSync(scriptPath, "utf8").replace(/<\/script/gi, "<\\/script");
}

function icon(name) {
  return `<i class="${name}" aria-hidden="true"></i>`;
}

function serviceSchema(page, faqs) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      image: SITE.image,
      telephone: SITE.phone,
      url: SITE.url,
      priceRange: "$$",
      paymentAccepted:
        "Efectivo, transferencia, tarjetas de credito, tarjetas debito, Bold",
      areaServed: {
        "@type": "City",
        name: "Zona Sur",
        addressCountry: "CO",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Zona Sur",
        addressCountry: "CO",
      },
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          areaServed: "Zona Sur",
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      serviceType: page.name || "Polarizado nano ceramico",
      provider: { "@id": `${SITE.url}/#business` },
      areaServed: "Zona Sur",
      description: page.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function layout({
  title,
  description,
  slug,
  h1,
  eyebrow,
  body,
  schemas = [],
  canonical,
}) {
  const canonicalUrl = canonical || pageUrl(slug);
  const prefix = relativePrefix(slug);
  return `<!doctype html>
<html lang="es-AR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <link rel="canonical" href="${canonicalUrl}">
  <meta name="robots" content="index,follow">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:image" content="${SITE.image}">
  <meta name="theme-color" content="#0f172a">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
  <link rel="stylesheet" href="${prefix}assets/css/styles.css?v=${ASSET_VERSION}">
  ${schemas.map(jsonLd).join("\n  ")}
</head>
<body>
  <div class="top-strip" aria-label="Informacion rapida de contacto">
    <div class="top-strip-inner">
      <span class="top-pill">${icon("fa-solid fa-location-dot")} Domicilio en Zona Sur</span>
      <span class="top-pill">${icon("fa-solid fa-car-side")} Polarizado nano ceramico</span>
      <span class="top-pill hide-small">${icon("fa-solid fa-credit-card")} Bold y tarjetas</span>
      <a class="top-whatsapp" href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon("fa-brands fa-whatsapp")} ${SITE.phoneDisplay}</a>
    </div>
  </div>
  <header class="site-header" data-header>
    <a class="brand" href="${localHref(prefix)}" aria-label="${SITE.name}">
      <span class="brand-mark">PN</span>
      <span>${SITE.brand}</span>
    </a>
    <nav class="main-nav" aria-label="Navegacion principal">
      <a href="${localHref(prefix, "polarizado-nano-ceramico-zona-sur")}">${icon("fa-solid fa-shield-halved")} Polarizado</a>
      <a href="${localHref(prefix, "zonas")}">${icon("fa-solid fa-location-dot")} Zonas</a>
      <a href="${localHref(prefix, "vehiculos")}">${icon("fa-solid fa-car-side")} Vehiculos</a>
      <a href="${localHref(prefix, "servicios")}">${icon("fa-solid fa-screwdriver-wrench")} Servicios</a>
    </nav>
    <a class="header-cta" href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon("fa-brands fa-whatsapp")} WhatsApp</a>
  </header>
  <main>
    <section class="hero">
      <div class="hero-slider" data-slider="hero" aria-hidden="true">
        ${heroSlides
          .map(
            (slide, index) => `<div class="hero-slide${index === 0 ? " is-active" : ""}" style="background-image: url('${slide.image}')"></div>`
          )
          .join("")}
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">${escapeHtml(eyebrow)}</p>
        <h1>${escapeHtml(h1)}</h1>
        <p class="hero-copy">${escapeHtml(description)}</p>
        <div class="hero-actions">
          <a class="button primary" href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon("fa-brands fa-whatsapp")} Cotizar por WhatsApp</a>
          <a class="button secondary" href="tel:${SITE.phone}">${icon("fa-solid fa-phone")} Llamar ahora</a>
        </div>
        <ul class="trust-list">
          <li>${icon("fa-solid fa-house")} A domicilio en Zona Sur</li>
          <li>${icon("fa-solid fa-credit-card")} Pagos con Bold y tarjetas</li>
          <li>${icon("fa-solid fa-tags")} Varias marcas y precios</li>
        </ul>
        <div class="hero-controls" aria-label="Imagenes destacadas">
          ${heroSlides
            .map(
              (slide, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button" data-hero-dot="${index}">${escapeHtml(slide.label)}</button>`
            )
            .join("")}
        </div>
      </div>
    </section>
    ${marqueeBand()}
    ${body}
  </main>
  <a class="floating-whatsapp" href="${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="Cotizar por WhatsApp">${icon("fa-brands fa-whatsapp")}</a>
  <div class="mobile-cta">
    <a href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon("fa-brands fa-whatsapp")} Cotizar</a>
    <a href="tel:${SITE.phone}">${icon("fa-solid fa-phone")} Llamar</a>
  </div>
  ${siteFooter(prefix)}
  <script>
${inlineScript()}
  </script>
</body>
</html>`;
}

function cards(items, base, prefix = "") {
  return `<div class="card-grid">${items
    .map(
      (item) => `<a class="card" href="${localHref(prefix, `${base}/${slugify(item)}`)}">
        <span>${icon("fa-solid fa-location-dot")} ${escapeHtml(item)}</span>
        <small>Cotizar servicio a domicilio</small>
      </a>`
    )
    .join("")}</div>`;
}

function serviceCards(prefix = "") {
  return `<div class="card-grid">${services
    .map(
      (service) => `<a class="card" href="${localHref(prefix, service.slug)}">
        <span>${icon("fa-solid fa-car-burst")} ${escapeHtml(service.name)}</span>
        <small>${escapeHtml(service.description)}</small>
      </a>`
    )
    .join("")}</div>`;
}

function marqueeBand() {
  const items = [
    ...productLabels,
    "A domicilio en Zona Sur",
    "Pago con Bold",
    "Tarjetas de credito",
    ...vehicleBrands,
  ];
  const row = items
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("");
  return `<section class="marquee-band" aria-label="Servicios y marcas">
    <div class="marquee-track">${row}${row}</div>
  </section>`;
}

function brandStrip(title = "Trabajamos con vehiculos de alta rotacion") {
  return `<section class="section brand-section">
    <div class="section-heading">
      <p class="eyebrow">Marcas y modelos</p>
      <h2>${escapeHtml(title)}</h2>
      <p>Atendemos carros particulares, camionetas y vehiculos familiares. Para cotizar mejor, envia la marca, modelo, linea y fotos por WhatsApp.</p>
    </div>
    <div class="brand-strip">
      ${vehicleBrands.map((brand) => `<span>${escapeHtml(brand)}</span>`).join("")}
    </div>
    <div class="product-strip">
      ${productLabels.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
    </div>
  </section>`;
}

function statsBand() {
  const stats = [
    ["fa-solid fa-map-location-dot", "Zona Sur", "Cobertura a domicilio"],
    ["fa-solid fa-credit-card", "Bold", "Pagos con tarjeta"],
    ["fa-brands fa-whatsapp", "WhatsApp", "Cotizacion directa"],
    ["fa-solid fa-car-side", "Multi marca", "Carros y camionetas"],
  ];
  return `<section class="section stats-band">
    ${stats
      .map(
        ([iconName, value, label]) => `<div>
          ${icon(iconName)}
          <strong>${escapeHtml(value)}</strong>
          <span>${escapeHtml(label)}</span>
        </div>`
      )
      .join("")}
  </section>`;
}

function showcaseSlider(title = "Resultados y servicios destacados") {
  return `<section class="section showcase-section">
    <div class="section-heading">
      <p class="eyebrow">Showcase</p>
      <h2>${escapeHtml(title)}</h2>
      <p>Una vista rapida de los servicios mas consultados para vehiculos en Zona Sur.</p>
    </div>
    <div class="slider-shell" data-card-slider>
      <button class="slider-button prev" type="button" data-slider-prev aria-label="Ver anterior">‹</button>
      <div class="showcase-track" data-slider-track>
        ${showcaseItems
          .map(
            (item) => `<article class="showcase-card">
              <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
              <div>
                <span class="showcase-tag">${icon(item.icon)} ${escapeHtml(item.tag)}</span>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.text)}</p>
              </div>
            </article>`
          )
          .join("")}
      </div>
      <button class="slider-button next" type="button" data-slider-next aria-label="Ver siguiente">›</button>
    </div>
  </section>`;
}

function benefitGrid() {
  const benefits = [
    {
      icon: "fa-solid fa-temperature-low",
      title: "Menos calor al conducir",
      text: "La pelicula nano ceramica ayuda a mejorar la sensacion termica dentro del vehiculo, especialmente en recorridos largos, trancones y parqueaderos expuestos al sol.",
    },
    {
      icon: "fa-solid fa-user-shield",
      title: "Privacidad con buena apariencia",
      text: "Puedes elegir una tonalidad acorde al uso del carro, buscando privacidad, presencia y una linea visual limpia sin exagerar el acabado.",
    },
    {
      icon: "fa-solid fa-truck-fast",
      title: "Servicio sin desplazarte",
      text: "Coordinamos el servicio a domicilio en Zona Sur para que no tengas que mover el vehiculo a un local ni perder tiempo en traslados.",
    },
    {
      icon: "fa-solid fa-comments-dollar",
      title: "Cotizacion clara por WhatsApp",
      text: "Te pedimos datos simples del carro y te respondemos con opciones de marcas, disponibilidad, precios y formas de pago.",
    },
  ];
  return `<section class="section">
    <div class="section-heading">
      <p class="eyebrow">Beneficios</p>
      <h2>Por que elegir polarizado nano ceramico</h2>
    </div>
    <div class="feature-grid">
      ${benefits
        .map(
          (item) => `<article class="feature-card">
            ${icon(item.icon)}
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.text)}</p>
          </article>`
        )
        .join("")}
    </div>
  </section>`;
}

function testimonialSlider() {
  return `<section class="section testimonial-section">
    <div class="section-heading">
      <p class="eyebrow">Experiencia</p>
      <h2>Lo que busca un cliente: rapidez, claridad y domicilio</h2>
    </div>
    <div class="testimonial-slider" data-testimonial-slider>
      ${testimonials
        .map(
          (item, index) => `<article class="testimonial${index === 0 ? " is-active" : ""}">
            <p>${escapeHtml(item.quote)}</p>
            <strong>${escapeHtml(item.author)}</strong>
          </article>`
        )
        .join("")}
    </div>
  </section>`;
}

function packagesSection() {
  const packages = [
    {
      iconName: "fa-solid fa-shield-halved",
      title: "Confort Nano",
      text: "Polarizado nano ceramico para mejorar privacidad, presencia y sensacion termica.",
      meta: "Polarizado + domicilio",
    },
    {
      iconName: "fa-solid fa-lightbulb",
      title: "Luz y Presencia",
      text: "Opciones de luces LED, exploradoras y detalles para mejorar visibilidad y estilo.",
      meta: "LED + exploradoras",
    },
    {
      iconName: "fa-solid fa-layer-group",
      title: "Interior Protegido",
      text: "Tapetes termoformados, tapetes planos y accesorios para cuidar el interior.",
      meta: "Tapetes + proteccion",
    },
    {
      iconName: "fa-solid fa-wand-magic-sparkles",
      title: "Estilo Tuning",
      text: "Spoilers, pijamas y accesorios tuning segun marca, modelo y disponibilidad.",
      meta: "Spoilers + tuning",
    },
  ];
  return `<section class="section packages-section">
    <div class="section-heading">
      <p class="eyebrow">Paquetes sugeridos</p>
      <h2>Combina servicios sin complicarte</h2>
      <p>Elige una idea base y la ajustamos por WhatsApp segun tu vehiculo, zona de Zona Sur y presupuesto.</p>
    </div>
    <div class="package-grid">
      ${packages
        .map(
          (item) => `<article class="package-card">
            <div class="package-icon">${icon(item.iconName)}</div>
            <div class="package-copy">
              <span>${escapeHtml(item.meta)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </div>
          </article>`
        )
        .join("")}
    </div>
  </section>`;
}

function qualitySection() {
  return `<section class="section quality-section">
    <div>
      <p class="eyebrow">Criterio de instalacion</p>
      <h2>Una cotizacion bien hecha empieza con datos del carro</h2>
      <p>Para recomendar mejor, revisamos marca, modelo, zona, fotos del vehiculo y el tipo de servicio. Asi evitamos darte una respuesta generica y podemos orientar la cotizacion segun disponibilidad real.</p>
    </div>
    <div class="quality-list">
      <span>${icon("fa-solid fa-camera")} Fotos del vehiculo</span>
      <span>${icon("fa-solid fa-car-side")} Marca y modelo</span>
      <span>${icon("fa-solid fa-location-dot")} Zona de Zona Sur</span>
      <span>${icon("fa-solid fa-credit-card")} Medio de pago</span>
    </div>
  </section>`;
}

function processSection(place = "Zona Sur") {
  const steps = [
    ["fa-solid fa-camera", "Envias datos", "Marca, modelo, zona, fotos del vehiculo y servicio que quieres cotizar."],
    ["fa-solid fa-list-check", "Recibes opciones", "Revisamos disponibilidad, marcas, precios y el tipo de instalacion recomendado."],
    ["fa-solid fa-calendar-check", "Agendamos domicilio", `Coordinamos una visita en ${place} segun horario, zona y condiciones del vehiculo.`],
    ["fa-solid fa-wallet", "Pagas facil", "Recibimos efectivo, transferencias y tarjetas de credito mediante sistema Bold."],
  ];
  return `<section class="section dark-band">
    <div class="section-heading">
      <p class="eyebrow">Como funciona</p>
      <h2>Servicio a domicilio sin vueltas</h2>
    </div>
    <div class="steps">
      ${steps
        .map(
          ([iconName, title, text], index) => `<article class="step">
            <span>${String(index + 1).padStart(2, "0")}</span>
            ${icon(iconName)}
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(text)}</p>
          </article>`
        )
        .join("")}
    </div>
  </section>`;
}

function seoTextBlock({ heading, paragraphs }) {
  return `<section class="section text-block">
    <div class="section-heading">
      <p class="eyebrow">Informacion util</p>
      <h2>${escapeHtml(heading)}</h2>
    </div>
    <div class="text-columns">
      ${paragraphs.map((text) => `<p>${escapeHtml(text)}</p>`).join("")}
    </div>
  </section>`;
}

function ctaBand(title, text) {
  return `<section class="section cta-band">
    <div>
      <p class="eyebrow">Cotizacion directa</p>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text)}</p>
    </div>
    <a class="button primary" href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon("fa-brands fa-whatsapp")} Escribir por WhatsApp</a>
  </section>`;
}

function siteFooter(prefix) {
  const zoneLinks = zones.slice(0, 6);
  const vehicleLinks = vehicles.slice(0, 6);
  return `<footer class="site-footer">
    <section class="footer-cta">
      <div>
        <p class="eyebrow">Cotizacion rapida</p>
        <h2>Envia fotos del vehiculo y recibe opciones por WhatsApp</h2>
        <p>Atendemos polarizado nano ceramico, luces LED, exploradoras, tapetes, pijamas, spoilers y accesorios tuning en Zona Sur.</p>
      </div>
      <a class="button primary" href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon("fa-brands fa-whatsapp")} ${SITE.phoneDisplay}</a>
    </section>
    <section class="footer-main">
      <div class="footer-panel footer-brand">
        <a class="brand footer-logo" href="${localHref(prefix)}" aria-label="${SITE.name}">
          <span class="brand-mark">PN</span>
          <span>${SITE.brand}</span>
        </a>
        <p>Servicio automotriz movil en Zona Sur para quienes quieren mejorar confort, estilo, proteccion e iluminacion sin desplazarse.</p>
        <div class="footer-badges">
          <span>${icon("fa-solid fa-house")} Domicilio</span>
          <span>${icon("fa-solid fa-credit-card")} Bold</span>
          <span>${icon("fa-brands fa-whatsapp")} WhatsApp</span>
        </div>
        <div class="footer-contact">
          <h3>Contacto</h3>
          <a href="${SITE.whatsapp}" target="_blank" rel="noopener">${icon("fa-brands fa-whatsapp")} ${SITE.phoneDisplay}</a>
          <a href="tel:${SITE.phone}">${icon("fa-solid fa-phone")} Llamar ahora</a>
          <span>${icon("fa-solid fa-location-dot")} Zona Sur, Argentina</span>
        </div>
      </div>
      <nav class="footer-panel" aria-label="Servicios del footer">
        <h3>Servicios</h3>
        ${services
          .map((service) => `<a href="${localHref(prefix, service.slug)}">${service.name}</a>`)
          .join("")}
      </nav>
      <nav class="footer-panel" aria-label="Cobertura del footer">
        <h3>Zonas principales</h3>
        ${zoneLinks
          .map((zone) => `<a href="${localHref(prefix, `zonas/${slugify(zone)}`)}">${escapeHtml(zone)}</a>`)
          .join("")}
      </nav>
      <nav class="footer-panel" aria-label="Vehiculos del footer">
        <h3>Vehiculos</h3>
        ${vehicleLinks
          .map((vehicle) => `<a href="${localHref(prefix, `vehiculos/${slugify(vehicle)}`)}">${escapeHtml(vehicle)}</a>`)
          .join("")}
      </nav>
    </section>
    <section class="footer-bottom">
      <p>Las marcas de vehiculos mencionadas pertenecen a sus respectivos titulares. No somos concesionario ni representante oficial.</p>
      <a href="${localHref(prefix, "servicios")}">Ver servicios</a>
    </section>
  </footer>`;
}

function faqBlock(faqs) {
  return `<section class="section faq-section">
    <div class="section-heading">
      <p class="eyebrow">Preguntas frecuentes</p>
      <h2>Antes de cotizar</h2>
    </div>
    <div class="faq-list">
      ${faqs
        .map(
          (faq) => `<details>
            <summary>${escapeHtml(faq.q)}</summary>
            <p>${escapeHtml(faq.a)}</p>
          </details>`
        )
        .join("")}
    </div>
  </section>`;
}

const defaultFaqs = [
  {
    q: "El servicio de polarizado nano ceramico es a domicilio en Zona Sur?",
    a: "Si. Atendemos a domicilio en Zona Sur y coordinamos por WhatsApp segun la zona, el tipo de vehiculo y la disponibilidad.",
  },
  {
    q: "Puedo pagar con tarjeta de credito?",
    a: "Si. Recibimos diferentes medios de pago, incluyendo tarjetas de credito mediante sistema Bold.",
  },
  {
    q: "Como solicito una cotizacion?",
    a: `Envia una foto del vehiculo, marca, modelo y zona de Zona Sur al WhatsApp ${SITE.phoneDisplay} para revisar opciones, marcas y precios.`,
  },
  {
    q: "Tambien instalan accesorios para vehiculos?",
    a: "Si. Ademas de polarizados manejamos luces LED, exploradoras, pijamas, spoilers, tapetes termoformados, tapetes planos y accesorios tuning.",
  },
];

function homePage() {
  const prefix = relativePrefix("index");
  const body = `
    <section class="section split">
      <div>
        <p class="eyebrow">Servicio movil</p>
        <h2>Tenemos lo que tu vehiculo necesita y lo mejor: a domicilio</h2>
        <p>Trabajamos polarizado nano ceramico y accesorios para carro en Zona Sur con cotizacion directa por WhatsApp. Puedes consultar varias marcas, comparar precios y pagar con medios digitales, tarjetas de credito o sistema Bold.</p>
      </div>
      <div class="service-panel">
        <h3>Servicios disponibles</h3>
        <ul>
          <li>Polarizado nano ceramico</li>
          <li>Luces LED y exploradoras</li>
          <li>Pijamas, spoilers y accesorios tuning</li>
          <li>Tapetes termoformados y tapetes planos</li>
        </ul>
      </div>
    </section>
    ${statsBand()}
    ${brandStrip("Polarizados y accesorios para las marcas mas buscadas")}
    ${showcaseSlider("Servicios premium para mejorar tu vehiculo")}
    ${benefitGrid()}
    ${packagesSection()}
    ${qualitySection()}
    ${processSection("Zona Sur")}
    ${testimonialSlider()}
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Servicios</p>
        <h2>Polarizados y accesorios para tu carro</h2>
      </div>
      ${serviceCards(prefix)}
    </section>
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Cobertura local</p>
        <h2>Polarizado nano ceramico por zonas de Zona Sur</h2>
      </div>
      ${cards(zones, "zonas", prefix)}
    </section>
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Marcas y modelos</p>
        <h2>Landings para vehiculos buscados</h2>
      </div>
      ${cards(vehicles, "vehiculos", prefix)}
    </section>
    ${seoTextBlock({
      heading: "Polarizados nano ceramicos y accesorios automotrices en Zona Sur",
      paragraphs: [
        "El polarizado nano ceramico es una de las opciones mas buscadas por conductores que quieren mejorar privacidad, presencia y confort dentro del carro. En Zona Sur, donde el clima puede cambiar rapido y el sol pega fuerte en trayectos diarios, una buena pelicula ayuda a que el vehiculo se sienta mas comodo.",
        "Ademas del polarizado, puedes cotizar luces LED, exploradoras, tapetes termoformados, tapetes planos, pijamas, spoilers y accesorios tuning. La idea es resolver varias necesidades del vehiculo en una misma conversacion, con opciones segun marca, modelo, presupuesto y disponibilidad.",
      ],
    })}
    ${ctaBand(
      "Envia fotos del carro y recibe opciones",
      "Escribenos por WhatsApp con la marca, modelo, zona de Zona Sur y el servicio que necesitas. Te respondemos con alternativas, precios y medios de pago disponibles."
    )}
    ${faqBlock(defaultFaqs)}
  `;
  const schemas = [
    ...serviceSchema(
      {
        title: "Polarizado nano ceramico en Zona Sur a domicilio",
        name: "Polarizado nano ceramico",
        description:
          "Servicio a domicilio en Zona Sur para polarizado nano ceramico, luces LED, exploradoras, tapetes, spoilers y accesorios tuning.",
      },
      defaultFaqs
    ),
    breadcrumbSchema([{ name: "Inicio", url: SITE.url }]),
  ];
  return layout({
    title: "Polarizado nano ceramico en Zona Sur a domicilio | Cotiza por WhatsApp",
    description:
      "Polarizado nano ceramico en Zona Sur a domicilio. Luces LED, exploradoras, tapetes, spoilers, pijamas y accesorios tuning. Pagos con Bold.",
    slug: "index",
    h1: "Polarizado nano ceramico en Zona Sur a domicilio",
    eyebrow: `Cotiza por WhatsApp: ${SITE.phoneDisplay}`,
    body,
    schemas,
    canonical: pageUrl("index"),
  });
}

function servicePage(service) {
  const prefix = relativePrefix(service.slug);
  const faqs = [
    {
      q: `${service.name} se puede pedir a domicilio en Zona Sur?`,
      a: `Si. El servicio de ${service.name.toLowerCase()} se coordina a domicilio en Zona Sur por WhatsApp, segun zona y disponibilidad.`,
    },
    ...defaultFaqs.slice(1),
  ];
  const body = `
    <section class="section split">
      <div>
        <p class="eyebrow">Servicio especializado</p>
        <h2>${escapeHtml(service.title)}</h2>
        <p>${escapeHtml(service.intro)}</p>
        <div class="hero-actions compact">
          <a class="button primary" href="${SITE.whatsapp}" target="_blank" rel="noopener">Pedir cotizacion</a>
        </div>
      </div>
      <div class="service-panel">
        <h3>Incluye</h3>
        <ul>${service.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
    </section>
    ${statsBand()}
    ${brandStrip(`${escapeHtml(service.name)} para diferentes marcas de vehiculo`)}
    ${showcaseSlider(`${escapeHtml(service.name)} y accesorios complementarios`)}
    ${packagesSection()}
    ${qualitySection()}
    ${processSection("Zona Sur")}
    ${testimonialSlider()}
    ${seoTextBlock({
      heading: `${service.name} con atencion a domicilio`,
      paragraphs: [
        `El servicio de ${service.name.toLowerCase()} se cotiza segun el tipo de vehiculo, la referencia, la zona de Zona Sur y la disponibilidad de marcas. Por eso recomendamos enviar fotos y datos basicos antes de agendar.`,
        "Nuestro enfoque es practico: resolver la necesidad del carro sin que tengas que desplazarte. Tambien puedes preguntar por accesorios complementarios como tapetes, exploradoras, luces LED, pijamas, spoilers y detalles tuning.",
      ],
    })}
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Tambien por zona</p>
        <h2>Busca el servicio cerca de ti</h2>
      </div>
      ${cards(zones.slice(0, 9), "zonas", prefix)}
    </section>
    ${faqBlock(faqs)}
  `;
  return layout({
    title: `${service.title} | Servicio a domicilio`,
    description: service.description,
    slug: service.slug,
    h1: service.title,
    eyebrow: "Instalacion y accesorios a domicilio",
    body,
    schemas: [
      ...serviceSchema(service, faqs),
      breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: service.name, url: pageUrl(service.slug) },
      ]),
    ],
  });
}

function zonePage(zone) {
  const slug = `zonas/${slugify(zone)}`;
  const prefix = relativePrefix(slug);
  const title = `Polarizado nano ceramico en ${zone}, Zona Sur`;
  const description = `Polarizado nano ceramico a domicilio en ${zone}, Zona Sur. Cotiza por WhatsApp, varias marcas y pago con tarjetas por Bold.`;
  const faqs = [
    {
      q: `Hacen polarizado nano ceramico a domicilio en ${zone}?`,
      a: `Si. Coordinamos servicio a domicilio en ${zone}, Zona Sur, para polarizado nano ceramico y accesorios segun disponibilidad.`,
    },
    {
      q: `Que datos envio para cotizar en ${zone}?`,
      a: "Envia marca, modelo, fotos del vehiculo y la ubicacion aproximada por WhatsApp para darte opciones de marcas y precios.",
    },
    ...defaultFaqs.slice(1, 3),
  ];
  const body = `
    <section class="section split">
      <div>
        <p class="eyebrow">Cobertura local</p>
        <h2>Servicio movil en ${escapeHtml(zone)}</h2>
        <p>Si estas en ${escapeHtml(zone)}, puedes cotizar polarizado nano ceramico y accesorios para tu vehiculo sin desplazarte. Coordinamos la visita por WhatsApp y revisamos el tipo de carro, marca, modelo y producto que necesitas.</p>
      </div>
      <div class="service-panel">
        <h3>Muy pedido en ${escapeHtml(zone)}</h3>
        <ul>
          <li>Polarizado nano ceramico para carro</li>
          <li>Luces LED y exploradoras</li>
          <li>Tapetes termoformados y planos</li>
          <li>Accesorios tuning y spoilers</li>
        </ul>
      </div>
    </section>
    ${statsBand()}
    ${benefitGrid()}
    ${packagesSection()}
    ${qualitySection()}
    ${processSection(zone)}
    ${brandStrip(`Polarizado y accesorios para carros en ${escapeHtml(zone)}`)}
    ${showcaseSlider(`Servicios solicitados en ${escapeHtml(zone)}`)}
    ${seoTextBlock({
      heading: `Polarizado nano ceramico a domicilio en ${zone}`,
      paragraphs: [
        `Si buscas polarizado nano ceramico en ${zone}, Zona Sur, puedes cotizar directamente por WhatsApp sin visitar un local. Revisamos la marca, modelo, tipo de pelicula y nivel de privacidad que quieres antes de confirmar disponibilidad.`,
        `Tambien puedes consultar accesorios para el vehiculo en ${zone}: luces LED, exploradoras, tapetes termoformados, tapetes planos, pijamas, spoilers y accesorios tuning. El servicio se coordina segun zona, agenda y condiciones del carro.`,
      ],
    })}
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Servicios</p>
        <h2>Opciones disponibles para ${escapeHtml(zone)}</h2>
      </div>
      ${serviceCards(prefix)}
    </section>
    ${ctaBand(
      `Cotiza en ${zone} por WhatsApp`,
      `Envia tu ubicacion aproximada en ${zone}, fotos del vehiculo y el servicio que necesitas para revisar opciones disponibles.`
    )}
    ${faqBlock(faqs)}
  `;
  return layout({
    title: `${title} a domicilio | Cotiza por WhatsApp`,
    description,
    slug,
    h1: title,
    eyebrow: "Servicio en Zona Sur por localidad y barrio",
    body,
    schemas: [
      ...serviceSchema(
        { title, name: "Polarizado nano ceramico", description },
        faqs
      ),
      breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Zonas", url: `${SITE.url}/zonas/` },
        { name: zone, url: pageUrl(slug) },
      ]),
    ],
  });
}

function vehiclePage(vehicle) {
  const slug = `vehiculos/${slugify(vehicle)}`;
  const prefix = relativePrefix(slug);
  const title = `Polarizado nano ceramico para ${vehicle} en Zona Sur`;
  const description = `Polarizado nano ceramico para ${vehicle} en Zona Sur a domicilio. Cotiza por WhatsApp y paga con tarjetas por Bold.`;
  const faqs = [
    {
      q: `Instalan polarizado nano ceramico para ${vehicle}?`,
      a: `Si. Cotizamos e instalamos polarizado nano ceramico para ${vehicle} en Zona Sur, de acuerdo con la referencia, disponibilidad y nivel deseado.`,
    },
    {
      q: `Tambien tienen accesorios para ${vehicle}?`,
      a: `Puedes consultar luces LED, exploradoras, tapetes, pijamas, spoilers y accesorios tuning para ${vehicle}, segun disponibilidad.`,
    },
    ...defaultFaqs.slice(1, 3),
  ];
  const body = `
    <section class="section split">
      <div>
        <p class="eyebrow">Por marca y modelo</p>
        <h2>Polarizado y accesorios para ${escapeHtml(vehicle)}</h2>
        <p>Atendemos propietarios de ${escapeHtml(vehicle)} en Zona Sur que buscan polarizado nano ceramico, mejor control de calor, privacidad y accesorios instalados con servicio a domicilio.</p>
      </div>
      <div class="service-panel">
        <h3>Consulta por WhatsApp</h3>
        <ul>
          <li>Marca y modelo: ${escapeHtml(vehicle)}</li>
          <li>Zona de Zona Sur donde esta el vehiculo</li>
          <li>Fotos o referencia del accesorio requerido</li>
          <li>Medio de pago preferido</li>
        </ul>
      </div>
    </section>
    ${statsBand()}
    ${benefitGrid()}
    ${packagesSection()}
    ${qualitySection()}
    ${processSection("Zona Sur")}
    ${showcaseSlider(`Opciones para ${escapeHtml(vehicle)}`)}
    ${seoTextBlock({
      heading: `Polarizado nano ceramico para ${vehicle}`,
      paragraphs: [
        `Cada ${vehicle} puede requerir una recomendacion diferente segun tamano de vidrios, uso diario, nivel de privacidad buscado y presupuesto. Por eso pedimos datos del vehiculo antes de cotizar el polarizado nano ceramico.`,
        `Tambien puedes consultar accesorios para ${vehicle}: luces LED, exploradoras, tapetes termoformados, tapetes planos, pijamas, spoilers y detalles tuning. La disponibilidad puede variar por referencia y por marca.`,
      ],
    })}
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Servicios para ${escapeHtml(vehicle)}</p>
        <h2>Opciones que puedes cotizar</h2>
      </div>
      ${serviceCards(prefix)}
    </section>
    ${ctaBand(
      `Cotiza accesorios y polarizado para ${vehicle}`,
      "Envia fotos del carro, la zona donde se encuentra y el servicio que quieres. Te respondemos con opciones y medios de pago."
    )}
    ${faqBlock(faqs)}
  `;
  return layout({
    title: `${title} | A domicilio`,
    description,
    slug,
    h1: title,
    eyebrow: "Servicio automotriz movil en Zona Sur",
    body,
    schemas: [
      ...serviceSchema(
        { title, name: "Polarizado nano ceramico", description },
        faqs
      ),
      breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Vehiculos", url: `${SITE.url}/vehiculos/` },
        { name: vehicle, url: pageUrl(slug) },
      ]),
    ],
  });
}

function listingPage(type) {
  const prefix = relativePrefix(type);
  const isZones = type === "zonas";
  const title = isZones
    ? "Polarizado nano ceramico por zonas de Zona Sur"
    : "Polarizado nano ceramico por marca de vehiculo";
  const description = isZones
    ? "Encuentra servicio de polarizado nano ceramico a domicilio por zonas de Zona Sur como Quilmes, Suba, Salitre, Chapinero y mas."
    : "Landings SEO para polarizado nano ceramico por marcas y modelos como Mazda, Ford Fiesta, Chevrolet, Renault, Toyota y mas.";
  const items = isZones ? zones : vehicles;
  const body = `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">${isZones ? "Cobertura" : "Vehiculos"}</p>
        <h2>${escapeHtml(title)}</h2>
      </div>
      ${cards(items, type, prefix)}
    </section>
  `;
  return layout({
    title,
    description,
    slug: type,
    h1: title,
    eyebrow: "SEO local para Zona Sur",
    body,
    schemas: [
      breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: isZones ? "Zonas" : "Vehiculos", url: `${SITE.url}/${type}/` },
      ]),
    ],
  });
}

function servicesPage() {
  const prefix = relativePrefix("servicios");
  const body = `
    <section class="section">
      <div class="section-heading">
        <p class="eyebrow">Catalogo</p>
        <h2>Servicios automotrices a domicilio en Zona Sur</h2>
      </div>
      ${serviceCards(prefix)}
    </section>
  `;
  return layout({
    title: "Servicios para vehiculos en Zona Sur a domicilio",
    description:
      "Polarizado nano ceramico, luces LED, exploradoras, tapetes, spoilers, pijamas y accesorios tuning en Zona Sur.",
    slug: "servicios",
    h1: "Servicios para vehiculos en Zona Sur a domicilio",
    eyebrow: "Polarizados y accesorios",
    body,
    schemas: [
      breadcrumbSchema([
        { name: "Inicio", url: SITE.url },
        { name: "Servicios", url: `${SITE.url}/servicios/` },
      ]),
    ],
  });
}

function sitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === pageUrl("index") ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

ensureDir("assets/css");
ensureDir("assets/js");

write("index.html", homePage());
write("servicios/index.html", servicesPage());
write("zonas/index.html", listingPage("zonas"));
write("vehiculos/index.html", listingPage("vehiculos"));

for (const service of services) {
  write(`${service.slug}/index.html`, servicePage(service));
}

for (const zone of zones) {
  write(`zonas/${slugify(zone)}/index.html`, zonePage(zone));
}

for (const vehicle of vehicles) {
  write(`vehiculos/${slugify(vehicle)}/index.html`, vehiclePage(vehicle));
}

const urls = [
  pageUrl("index"),
  `${SITE.url}/servicios/`,
  `${SITE.url}/zonas/`,
  `${SITE.url}/vehiculos/`,
  ...services.map((service) => pageUrl(service.slug)),
  ...zones.map((zone) => pageUrl(`zonas/${slugify(zone)}`)),
  ...vehicles.map((vehicle) => pageUrl(`vehiculos/${slugify(vehicle)}`)),
];

write("sitemap.xml", sitemap(urls));
write(
  "robots.txt",
  `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`
);

console.log(`Generated ${urls.length} SEO pages.`);

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://enzonasur.com/manicure-zona-sur';
// Agrega el número después de 57 cuando esté confirmado; por ejemplo: 573001234567.
const whatsappNumber = '5491112345678';
const whatsappIntro = 'Te hablo desde la página web para solicitar una cita.';

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const wa = (message = '') => {
  const detail = message.replace(/^Hola,\s*/i, '').trim();
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`${whatsappIntro}${detail ? ` ${detail}` : ''}`)}`;
};
const img = (depth, name) => `${depth ? '../' : ''}images/${name}`;

function schemaFor({ canonical, title, description, type = 'WebPage', faq = [], article }) {
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'Manicure Zona Sur',
      inLanguage: 'es-AR'
    },
    {
      '@type': type,
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: 'es-AR',
      isPartOf: { '@id': `${baseUrl}/#website` },
      ...(article || {})
    }
  ];
  if (faq.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      mainEntity: faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }))
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

function header(depth = 0) {
  const p = depth ? '../' : '';
  return `
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <div class="announcement">Atención a domicilio en Quilmes, Lomas de Zamora y zonas cercanas de Quilmes</div>
  <header class="site-header">
    <div class="wrap nav-shell">
      <a class="brand" href="${p}index.html" aria-label="Manicure Zona Sur, inicio"><span class="brand-mark">ZS</span><span>ZONA SUR</span></a>
      <nav class="desktop-nav" aria-label="Navegación principal">
        <a href="${p}index.html#servicios">Servicios</a>
        <a href="${p}manicure-quilmes.html">Quilmes</a>
        <a href="${p}manicure-lomas-de-zamora.html">Lomas de Zamora</a>
        <a href="${p}blog/index.html">Blog</a>
        <a href="${p}index.html#preguntas">Preguntas</a>
      </nav>
      <a class="button button-primary" href="${wa('Hola, quiero consultar disponibilidad para un manicure a domicilio en Zona Sur.')}" target="_blank" rel="noopener">Reservar por WhatsApp</a>
      <details class="mobile-menu">
        <summary aria-label="Abrir menú">☰</summary>
        <nav class="mobile-panel" aria-label="Navegación móvil">
          <a href="${p}index.html">Inicio</a><a href="${p}index.html#servicios">Servicios</a><a href="${p}manicure-quilmes.html">Manicure en Quilmes</a><a href="${p}manicure-lomas-de-zamora.html">Manicure en Lomas de Zamora</a><a href="${p}blog/index.html">Blog</a><a href="${p}index.html#preguntas">Preguntas frecuentes</a>
        </nav>
      </details>
    </div>
  </header>`;
}

function footer(depth = 0) {
  const p = depth ? '../' : '';
  return `
  <footer class="footer">
    <div class="wrap footer-grid">
      <div><a class="brand" href="${p}index.html"><span class="brand-mark">ZS</span><span>ZONA SUR</span></a><p>Manicure tradicional y semipermanente a domicilio en Zona Sur del Gran Buenos Aires.</p></div>
      <div><h3>Servicios</h3><div class="footer-links"><a href="${p}manicure-tradicional.html">Manicure tradicional</a><a href="${p}manicure-semipermanente.html">Semipermanente</a><a href="${p}manicure-quilmes.html">En Quilmes</a><a href="${p}manicure-lomas-de-zamora.html">En Lomas de Zamora</a></div></div>
      <div><h3>Más zonas</h3><div class="footer-links"><a href="${p}manicure-a-domicilio-zona-sur.html">A domicilio en Quilmes</a><a href="${p}manicure-banfield.html">Banfield</a><a href="${p}manicure-lanus.html">Lanús</a><a href="${p}manicure-avellaneda.html">Avellaneda</a><a href="${p}manicure-adrogue.html">Adrogué</a></div></div>
      <div><h3>Información</h3><div class="footer-links"><a href="${p}blog/index.html">Consejos para tus uñas</a><a href="${p}index.html#como-funciona">Cómo reservar</a><a href="${p}index.html#preguntas">Preguntas frecuentes</a><a href="${wa('Hola, quiero información sobre manicure a domicilio.')}" target="_blank" rel="noopener">WhatsApp</a></div></div>
    </div>
    <div class="wrap footer-bottom"><span>© 2026 Manicure Zona Sur · Un proyecto de <a href="https://enzonasur.com/">En Zona Sur</a></span><span>Quilmes, Argentina · <a href="https://seoparaempresas.com/" target="_blank" rel="noopener">SEO para empresas</a></span></div>
  </footer>
  <a class="mobile-cta" href="${wa('Hola, quiero reservar un manicure a domicilio en Zona Sur.')}" target="_blank" rel="noopener">Reservar por WhatsApp ↗</a>`;
}

function page({ title, description, path = '', depth = 0, body, faq = [], type, article }) {
  const canonical = path ? `${baseUrl}/${path}` : `${baseUrl}/`;
  const asset = depth ? '../' : '';
  const socialImage = `${baseUrl}/images/og.png`;
  return `<!doctype html>
<html lang="es-AR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="theme-color" content="#68152f">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="${article ? 'article' : 'website'}">
  <meta property="og:locale" content="es_AR">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${socialImage}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=DM+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${asset}styles.css">
  <script type="application/ld+json">${schemaFor({ canonical, title, description, type, faq, article })}</script>
</head>
<body>
${header(depth)}
<main id="contenido">${body}</main>
${footer(depth)}
<script src="${asset}script.js" defer></script>
</body>
</html>`;
}

const faqHome = [
  ['¿Qué incluye el manicure a domicilio?', 'Incluye preparación de las uñas, limado, cuidado de cutículas y esmaltado. Al reservar tenés que indicar si deseas manicure tradicional, semipermanente o retiro previo.'],
  ['¿Cuánto dura el manicure semipermanente?', 'Habitualmente conserva el acabado entre dos y tres semanas. La duración depende del crecimiento de la uña, las actividades diarias y los cuidados posteriores.'],
  ['¿Atienden en Zona Sur?', 'Sí. Zona Sur son las zonas principales de atención. La cobertura en sectores cercanos se confirma por WhatsApp según el día y el horario.'],
  ['¿Debo tener productos o herramientas en casa?', 'No. El servicio se realiza con los implementos necesarios. Solo se necesita un lugar iluminado, una mesa o superficie estable y acceso a una toma de corriente para el servicio semipermanente.'],
  ['¿Puedo solicitar retiro de semipermanente?', 'Sí. Tenés que indicarlo al reservar para separar el tiempo y preparar los materiales necesarios.']
];

const homeBody = `
<section class="hero"><div class="wrap hero-grid">
  <div><p class="eyebrow">Manicure a domicilio en Quilmes</p><h1>Manicure en Zona Sur, <em>impecable. Sin salir de casa.</em></h1><p class="lead">Manicure tradicional y semipermanente con atención cuidadosa en la comodidad de tu hogar.</p><div class="hero-actions"><a class="button button-primary" href="${wa('Hola, quiero reservar un servicio de manicure a domicilio en Zona Sur.')}" target="_blank" rel="noopener">Reservar por WhatsApp</a><a class="button button-secondary" href="#servicios">Ver servicios →</a></div><ul class="trust-list"><li>Implementos preparados</li><li>Atención puntual</li><li>Acabado cuidado</li></ul></div>
  <div class="hero-media"><img src="images/hero-manicure.webp" alt="Manicure nude realizado a domicilio en Quilmes" width="1448" height="1086" fetchpriority="high"><div class="media-note"><strong>Atención a domicilio</strong><br>Quilmes · Lomas de Zamora · zonas cercanas</div></div>
</div></section>
<section class="section section-white" id="servicios"><div class="wrap"><div class="section-head"><p class="eyebrow">Elige tu acabado</p><h2>Servicios para consentir tus manos</h2><p class="section-copy">Una cita organizada de principio a fin, sin desplazamientos ni salas de espera.</p></div><div class="grid-2">
  <article class="card"><img class="card-media" src="images/manicure-tradicional.webp" alt="Proceso de manicure tradicional" width="1448" height="1086" loading="lazy"><div class="card-body"><span class="tag">Clásico y natural</span><h3>Manicure tradicional</h3><p>Preparación, limado, cuidado de cutículas y esmaltado tradicional con el color que elijas.</p><a class="card-link" href="manicure-tradicional.html">Conocer el servicio →</a></div></article>
  <article class="card"><img class="card-media" src="images/manicure-semipermanente.webp" alt="Manicure semipermanente color borgoña" width="1448" height="1086" loading="lazy"><div class="card-body"><span class="tag">Más duración</span><h3>Manicure semipermanente</h3><p>Acabado uniforme, brillante y resistente para disfrutar tus uñas por más tiempo.</p><a class="card-link" href="manicure-semipermanente.html">Conocer el servicio →</a></div></article>
</div></div></section>
<section class="section section-soft"><div class="wrap split"><img class="split-image" src="images/manicure-tradicional.webp" alt="Preparación profesional de las uñas" width="1448" height="1086" loading="lazy"><div><p class="eyebrow">Belleza sin complicaciones</p><h2>Una experiencia pensada para tu comodidad</h2><p class="section-copy">Cuidamos la preparación, el orden y los detalles para que tú solo tengas que elegir el color y disfrutar el resultado.</p><div><div class="feature"><b>Higiene y preparación</b><br><span>Implementos organizados y proceso cuidadoso.</span></div><div class="feature"><b>Atención sin afán</b><br><span>Tiempo para cuidar la forma, el acabado y cada detalle.</span></div><div class="feature"><b>Comodidad real</b><br><span>Recibe el servicio en casa, sin tráfico ni desplazamientos.</span></div></div></div></div></section>
<section class="section steps" id="como-funciona"><div class="wrap"><div class="section-head"><p class="eyebrow">Reservar es muy fácil</p><h2>Tu manicure en tres pasos</h2></div><ol class="grid-3" style="list-style:none;padding:0;margin:0"><li class="step"><span>1</span><h3>Elige tu servicio</h3><p>Tradicional, semipermanente o con retiro previo.</p></li><li class="step"><span>2</span><h3>Coordina tu cita</h3><p>Indica la zona, el día y el horario que prefieres.</p></li><li class="step"><span>3</span><h3>Disfruta en casa</h3><p>Prepara un espacio iluminado y disfruta tu momento.</p></li></ol></div></section>
<section class="section section-white"><div class="wrap"><div class="section-head"><p class="eyebrow">Zonas de atención</p><h2>Manicure a domicilio en Zona Sur del Gran Buenos Aires</h2><p class="section-copy">Confirma la cobertura exacta y la disponibilidad antes de reservar.</p></div><div class="grid-2"><article class="coverage"><span class="tag">Quilmes</span><h3>Manicure en Quilmes</h3><p>Atención a domicilio en Quilmes y sectores cercanos.</p><a class="card-link" href="manicure-quilmes.html">Ver cobertura en Quilmes →</a></article><article class="coverage"><span class="tag">Lomas de Zamora</span><h3>Manicure en Lomas de Zamora</h3><p>Una alternativa cómoda para cuidar tus uñas sin salir de casa.</p><a class="card-link" href="manicure-lomas-de-zamora.html">Ver cobertura en Lomas de Zamora →</a></article></div><div class="grid-3" style="margin-top:1.4rem"><article class="card"><div class="card-body"><h3>Banfield</h3><p>Consulta atención a domicilio en el sector y sus alrededores.</p><a class="card-link" href="manicure-banfield.html">Ver landing →</a></div></article><article class="card"><div class="card-body"><h3>Lanús</h3><p>Opciones de manicure tradicional y semipermanente en casa.</p><a class="card-link" href="manicure-lanus.html">Ver landing →</a></div></article><article class="card"><div class="card-body"><h3>Más zonas</h3><p>Avellaneda, Berazategui, Temperley y Adrogué.</p><a class="card-link" href="manicure-a-domicilio-zona-sur.html">Ver todas las zonas →</a></div></article></div></div></section>
<section class="section section-soft" id="preguntas"><div class="wrap split"><div><p class="eyebrow">Antes de tu cita</p><h2>Preguntas frecuentes</h2><p class="section-copy">Información útil para reservar con claridad.</p></div><div class="faq">${faqHome.map(([q,a],i)=>`<details${i===0?' open':''}><summary>${q}</summary><p>${a}</p></details>`).join('')}</div></div></section>
<section class="section section-white"><div class="wrap cta"><p class="eyebrow">Tu próximo color te espera</p><h2>¿Lista para unas uñas impecables?</h2><p class="section-copy">Consulta disponibilidad para Quilmes, Lomas de Zamora o una zona cercana.</p><a class="button button-primary" style="margin-top:1.5rem" href="${wa('Hola, quiero reservar un manicure a domicilio. Mi zona es: ')}" target="_blank" rel="noopener">Consultar disponibilidad</a></div></section>`;

const pages = [];
pages.push(['index.html', page({ title: 'Manicure en Zona Sur | Servicio a domicilio', description: 'Manicure tradicional y semipermanente a domicilio en Zona Sur, Quilmes. Consulta cobertura y reserva tu cita por WhatsApp.', body: homeBody, faq: faqHome })]);

function landingBody({ eyebrow, heading, italic, lead, image, imageAlt, introTitle, intro, benefits, zone, zoneCopy, related }) {
  return `
  <section class="hero page-hero"><div class="wrap hero-grid"><div><nav class="breadcrumbs" aria-label="Migas de pan"><a href="index.html">Inicio</a> / ${eyebrow}</nav><p class="eyebrow">${eyebrow}</p><h1>${heading}<em>${italic}</em></h1><p class="lead">${lead}</p><div class="hero-actions"><a class="button button-primary" href="${wa(`Hola, quiero consultar disponibilidad para ${eyebrow.toLowerCase()}.`)}" target="_blank" rel="noopener">Consultar disponibilidad</a><a class="button button-secondary" href="#incluye">Qué incluye →</a></div></div><div class="hero-media"><img src="images/${image}" alt="${imageAlt}" width="1448" height="1086" fetchpriority="high"><div class="media-note"><strong>Servicio a domicilio</strong><br>${zone}</div></div></div></section>
  <section class="section section-white" id="incluye"><div class="wrap split"><div><p class="eyebrow">Cuidado en cada paso</p><h2>${introTitle}</h2><p class="section-copy">${intro}</p></div><div class="card">${benefits.map(([t,c])=>`<div class="feature"><b>${t}</b><br><span>${c}</span></div>`).join('')}</div></div></section>
  <section class="section section-soft"><div class="wrap grid-2"><div class="coverage"><span class="tag">Cobertura</span><h2>${zone}</h2><p>${zoneCopy}</p><a class="card-link" href="${wa(`Hola, quiero confirmar cobertura para ${zone}. Mi dirección o sector es: `)}" target="_blank" rel="noopener">Confirmar mi zona por WhatsApp →</a></div><div><p class="eyebrow">Antes de reservar</p><h2>Cuéntanos qué necesitas</h2><p class="section-copy">Indica si tienes esmalte anterior, el tipo de servicio que buscas y el sector donde estás. Así será más fácil confirmar el tiempo y la cobertura.</p></div></div></section>
  <section class="section section-white"><div class="wrap"><div class="section-head"><p class="eyebrow">También puede interesarte</p><h2>Explora más opciones</h2></div><div class="grid-3">${related.map(([href,t,c])=>`<article class="card"><div class="card-body"><h3>${t}</h3><p>${c}</p><a class="card-link" href="${href}">Ver información →</a></div></article>`).join('')}</div></div></section>
  <section class="section section-white"><div class="wrap cta"><p class="eyebrow">Agenda desde casa</p><h2>Confirma zona, servicio y horario</h2><p class="section-copy">Escríbenos para consultar disponibilidad.</p><a class="button button-primary" style="margin-top:1.5rem" href="${wa(`Hola, quiero reservar ${eyebrow.toLowerCase()}.`)}" target="_blank" rel="noopener">Escribir por WhatsApp</a></div></section>`;
}

const commonRelated = [
  ['manicure-tradicional.html','Manicure tradicional','Una opción clásica, versátil y fácil de retirar.'],
  ['manicure-semipermanente.html','Manicure semipermanente','Brillo y color resistente por más tiempo.'],
  ['blog/index.html','Guía de cuidado','Consejos prácticos para cuidar tus uñas antes y después de la cita.']
];

pages.push(['manicure-quilmes.html', page({ title: 'Manicure en Quilmes Quilmes | Servicio a domicilio', description: 'Servicio de manicure tradicional y semipermanente a domicilio en Quilmes, Quilmes. Consulta cobertura y disponibilidad.', path: 'manicure-quilmes.html', type:'Service', body: landingBody({ eyebrow:'Manicure en Quilmes', heading:'Manicure a domicilio en Quilmes', italic:'tu cita, a tu ritmo.', lead:'Cuida tus manos con una cita en casa y evita desplazamientos, tráfico y esperas.', image:'hero-manicure.webp', imageAlt:'Uñas nude cuidadas después de un manicure', introTitle:'Una cita cómoda en Quilmes', intro:'El servicio se coordina con anticipación para preparar los implementos y dedicar el tiempo adecuado al acabado que elijas.', benefits:[['Preparación completa','Limado, forma y cuidado de cutículas.'],['Acabado a tu gusto','Esmaltado tradicional o semipermanente.'],['Atención en casa','Solo necesitas un espacio estable e iluminado.']], zone:'Quilmes, Quilmes', zoneCopy:'La cobertura se confirma según el sector, el día y el horario. También podés consultar por zonas cercanas como Temperley, Berazategui y Avellaneda.', related:commonRelated }) })]);

pages.push(['manicure-lomas-de-zamora.html', page({ title: 'Manicure en Lomas de Zamora Quilmes | Servicio a domicilio', description: 'Manicure tradicional y semipermanente a domicilio en Lomas de Zamora, Quilmes. Consulta cobertura y pedí tu cita por WhatsApp.', path: 'manicure-lomas-de-zamora.html', type:'Service', body: landingBody({ eyebrow:'Manicure en Lomas de Zamora', heading:'Manicure a domicilio en Lomas de Zamora', italic:'más tiempo para ti.', lead:'Recibe una atención cuidada en casa, con opciones tradicionales y semipermanentes.', image:'manicure-tradicional.webp', imageAlt:'Manicurista preparando las uñas de una clienta', introTitle:'Cuidado profesional sin salir de Lomas de Zamora', intro:'Coordina el servicio, el retiro previo y el horario desde WhatsApp para que tu cita sea clara desde el comienzo.', benefits:[['Servicio personalizado','Elige forma, longitud y tipo de esmalte.'],['Comodidad','Evita traslados y organiza la cita en tu espacio.'],['Preparación ordenada','Implementos listos para el servicio solicitado.']], zone:'Lomas de Zamora, Quilmes', zoneCopy:'Lomas de Zamora es una de las zonas principales de atención. Para barrios cercanos, la cobertura depende de la ruta disponible para el día de tu cita.', related:commonRelated }) })]);

pages.push(['manicure-tradicional.html', page({ title: 'Manicure tradicional a domicilio en Zona Sur', description: 'Manicure tradicional a domicilio con preparación, limado, cuidado de cutículas y esmaltado en Zona Sur, Quilmes.', path: 'manicure-tradicional.html', type:'Service', body: landingBody({ eyebrow:'Manicure tradicional', heading:'Manicure tradicional a domicilio', italic:'un clásico bien cuidado.', lead:'Ideal si disfrutas cambiar de color con frecuencia o prefieres un retiro sencillo en casa.', image:'manicure-tradicional.webp', imageAlt:'Proceso cuidadoso de manicure tradicional', introTitle:'¿Qué incluye el manicure tradicional?', intro:'La cita se enfoca en preparar la uña y lograr un acabado limpio. El tiempo de secado depende del esmalte y de las capas aplicadas.', benefits:[['Preparación y limado','Forma y longitud acordadas antes de esmaltar.'],['Cuidado de cutículas','Trabajo cuidadoso alrededor de la uña.'],['Esmaltado tradicional','Base, color y acabado según el producto elegido.']], zone:'Zona Sur', zoneCopy:'Consulta disponibilidad para Quilmes, Lomas de Zamora y sectores cercanos dZona Sur del Gran Buenos Aires.', related:[['manicure-semipermanente.html','¿Prefieres más duración?','Compara el servicio semipermanente antes de elegir.'],['blog/manicure-tradicional-o-semipermanente.html','Tradicional vs. semipermanente','Conoce las diferencias de duración, retiro y mantenimiento.'],['blog/cuidados-para-que-el-esmalte-dure-mas.html','Cuida tu esmalte','Hábitos sencillos que ayudan a mantener el acabado.']] }) })]);

pages.push(['manicure-semipermanente.html', page({ title: 'Manicure semipermanente en Zona Sur | A domicilio', description: 'Manicure semipermanente a domicilio en Zona Sur, Quilmes. Acabado brillante y resistente. Consulta cobertura y disponibilidad.', path: 'manicure-semipermanente.html', type:'Service', body: landingBody({ eyebrow:'Manicure semipermanente', heading:'Semipermanente a domicilio', italic:'brillo que acompaña tu rutina.', lead:'Una opción resistente para quienes quieren mantener el color impecable durante más tiempo.', image:'manicure-semipermanente.webp', imageAlt:'Manicure semipermanente en tonos borgoña y rosa', introTitle:'Un acabado uniforme y duradero', intro:'El esmalte en gel se aplica en capas y se cura con lámpara. Si tienes producto anterior, avísalo al reservar para contemplar el retiro.', benefits:[['Preparación completa','Forma, superficie y cutículas listas para el color.'],['Aplicación en gel','Capas finas curadas con lámpara.'],['Retiro responsable','Evita desprender el producto en casa para no debilitar la uña.']], zone:'Zona Sur', zoneCopy:'El servicio se presta a domicilio con cobertura sujeta a ruta y disponibilidad. Es necesario contar con acceso cercano a una toma de corriente.', related:[['manicure-tradicional.html','Manicure tradicional','Una alternativa clásica de retiro sencillo.'],['blog/cuanto-dura-manicure-semipermanente.html','¿Cuánto dura?','Factores que cambian la duración del semipermanente.'],['blog/cuidados-para-que-el-esmalte-dure-mas.html','Cuidados posteriores','Cómo proteger el borde y el brillo de tus uñas.']] }) })]);

const localLandings = [
  {
    slug: 'manicure-a-domicilio-zona-sur.html',
    title: 'Manicure a domicilio en Quilmes | Tradicional y semipermanente',
    description: 'Servicio de manicure a domicilio en Quilmes con opciones tradicionales y semipermanentes. Consulta cobertura en Quilmes, Lomas de Zamora, Lanús y zonas cercanas.',
    eyebrow: 'Manicure a domicilio en Quilmes',
    heading: 'Tu manicure llega hasta tu casa',
    italic: 'menos traslados, más tiempo para ti.',
    lead: 'Coordina una cita de manicure tradicional o semipermanente en tu hogar y confirma la cobertura de tu sector por WhatsApp.',
    image: 'hero-manicure.webp',
    imageAlt: 'Manicure a domicilio con acabado nude',
    introTitle: 'Un servicio pensado para tu rutina',
    intro: 'La atención a domicilio permite organizar la cita alrededor de tu día. Antes de confirmar, indícanos la zona, el servicio y si necesitas retiro de esmalte anterior.',
    benefits: [['Sin desplazamientos','Recibe el servicio en un espacio cómodo de tu hogar.'],['Dos tipos de acabado','Elige entre manicure tradicional o semipermanente.'],['Reserva clara','Confirma cobertura, retiro y horario antes de la cita.']],
    zone: 'Quilmes y zonas de cobertura',
    zoneCopy: 'La atención se concentra en Zona Sur del Gran Buenos Aires: Quilmes, Lomas de Zamora, Avellaneda, Berazategui, Temperley, Adrogué, Banfield y sectores de Lanús. Toda cita está sujeta a confirmación de ruta.',
    related: [['manicure-tradicional.html','Manicure tradicional','Color clásico y retiro sencillo.'],['manicure-semipermanente.html','Manicure semipermanente','Un acabado brillante y más resistente.'],['blog/como-preparar-cita-manicure-domicilio.html','Prepara tu cita','Qué espacio necesitas y qué tenés que informar al reservar.']]
  },
  {
    slug: 'manicure-banfield.html',
    title: 'Manicure en Banfield | Servicio a domicilio',
    description: 'Manicure tradicional y semipermanente a domicilio en el sector de Banfield, Quilmes. Consulta cobertura y disponibilidad.',
    eyebrow: 'Manicure en Banfield',
    heading: 'Manicure a domicilio cerca de Banfield',
    italic: 'cuida tus manos sin salir de casa.',
    lead: 'Consulta atención para el sector de Banfield y coordina el servicio que mejor se ajusta a tu rutina.',
    image: 'manicure-semipermanente.webp',
    imageAlt: 'Uñas semipermanentes en tonos borgoña y rosa',
    introTitle: 'Tradicional o semipermanente en tu hogar',
    intro: 'Podés solicitar preparación, limado, cuidado de cutículas y el tipo de esmaltado que prefieras. Si llevas producto anterior, avísalo desde la reserva.',
    benefits: [['Cita coordinada','Indica dirección, conjunto o sector para revisar la ruta.'],['Acabado personalizado','Escoge el tipo de esmalte y la forma de tus uñas.'],['Comodidad en casa','Prepara una mesa iluminada y evita desplazamientos.']],
    zone: 'Banfield, Quilmes',
    zoneCopy: 'La cobertura se confirma según la dirección exacta, la ruta disponible y el horario solicitado. También podés consultar por sectores cercanos de Lanús.',
  },
  {
    slug: 'manicure-lanus.html',
    title: 'Manicure en Lanús Quilmes | Servicio a domicilio',
    description: 'Servicio de manicure tradicional y semipermanente a domicilio en Lanús, Quilmes. Consulta cobertura para tu sector y agenda por WhatsApp.',
    eyebrow: 'Manicure en Lanús',
    heading: 'Manicure a domicilio en Lanús',
    italic: 'una cita cómoda en tu espacio.',
    lead: 'Ahorra el desplazamiento y consulta una cita de manicure tradicional o semipermanente en tu sector de Lanús.',
    image: 'manicure-tradicional.webp',
    imageAlt: 'Preparación cuidadosa para un manicure a domicilio',
    introTitle: 'Atención organizada desde la reserva',
    intro: 'Lanús reúne sectores amplios y rutas distintas. Por eso confirmamos previamente la ubicación, el tipo de servicio y el tiempo necesario para atenderte.',
    benefits: [['Cobertura confirmada','Comparte tu barrio o sector antes de agendar.'],['Servicio completo','Preparación, cutículas, limado y esmaltado.'],['Opciones para tu rutina','Tradicional para cambiar con frecuencia o gel para más duración.']],
    zone: 'Lanús, Quilmes',
    zoneCopy: 'La disponibilidad puede variar entre sectores de Lanús. Envíanos tu ubicación aproximada para validar la cobertura sin compromisos.',
  },
  {
    slug: 'manicure-avellaneda.html',
    title: 'Manicure en Avellaneda Quilmes | Atención a domicilio',
    description: 'Manicure tradicional y semipermanente a domicilio en Avellaneda, Quilmes. Confirma cobertura, retiro y disponibilidad por WhatsApp.',
    eyebrow: 'Manicure en Avellaneda',
    heading: 'Manicure a domicilio en Avellaneda',
    italic: 'tu momento de cuidado, en casa.',
    lead: 'Organiza tu cita sin alterar tu día y elige entre esmaltado tradicional o semipermanente.',
    image: 'hero-manicure.webp',
    imageAlt: 'Manos con manicure nude en un ambiente cálido',
    introTitle: 'Una cita sencilla de organizar',
    intro: 'Antes del servicio confirmamos si necesitas retiro, el tipo de acabado y el horario. Así se preparan los materiales adecuados para tu cita.',
    benefits: [['Atención en tu espacio','Evita traslados y salas de espera.'],['Preparación cuidadosa','Limado y cuidado de cutículas antes del color.'],['Reserva anticipada','Coordina la ruta y el horario con claridad.']],
    zone: 'Avellaneda, Quilmes',
    zoneCopy: 'Avellaneda hace parte de la zona de consulta habitual. La dirección exacta y la disponibilidad se validan antes de confirmar la cita.',
  },
  {
    slug: 'manicure-berazategui.html',
    title: 'Manicure en Berazategui Quilmes | Servicio a domicilio',
    description: 'Manicure tradicional y semipermanente a domicilio en Berazategui, Quilmes. Consulta disponibilidad y cobertura para tu dirección.',
    eyebrow: 'Manicure en Berazategui',
    heading: 'Manicure a domicilio en Berazategui',
    italic: 'belleza sin desplazamientos.',
    lead: 'Recibe el servicio en casa y dedica tu tiempo a elegir el color y disfrutar el resultado.',
    image: 'manicure-tradicional.webp',
    imageAlt: 'Manicurista realizando cuidado de cutículas',
    introTitle: 'Cuidado de manos cerca de ti',
    intro: 'El servicio se adapta al acabado que elijas. Indica si deseas manicure tradicional, semipermanente o retiro antes de la nueva aplicación.',
    benefits: [['Servicio personalizado','Forma, longitud y color según tu preferencia.'],['Materiales preparados','La reserva previa permite organizar cada cita.'],['Atención tranquila','Un proceso sin afán dentro de tu hogar.']],
    zone: 'Berazategui, Quilmes',
    zoneCopy: 'Consulta disponibilidad para Berazategui y sectores cercanos. La cobertura está sujeta a la ruta programada para el día y el horario.',
  },
  {
    slug: 'manicure-temperley.html',
    title: 'Manicure en Temperley | Servicio a domicilio',
    description: 'Servicio de manicure tradicional y semipermanente a domicilio en Temperley, Quilmes. Confirma cobertura y reserva por WhatsApp.',
    eyebrow: 'Manicure en Temperley',
    heading: 'Manicure a domicilio en Temperley',
    italic: 'una pausa para cuidar tus manos.',
    lead: 'Consulta una cita en casa con preparación cuidadosa y el acabado que prefieras.',
    image: 'manicure-semipermanente.webp',
    imageAlt: 'Acabado semipermanente brillante en uñas cortas',
    introTitle: 'Una opción cómoda cerca de Quilmes',
    intro: 'Coordina el servicio con anticipación e informa si tienes esmalte anterior. Esto permite separar el tiempo adecuado y llevar los implementos necesarios.',
    benefits: [['Tradicional o gel','Elige según duración, retiro y rutina.'],['Atención a domicilio','Prepara una mesa estable y bien iluminada.'],['Confirmación previa','Valida la dirección y el horario antes de la cita.']],
    zone: 'Temperley, Quilmes',
    zoneCopy: 'La cobertura para Temperley se revisa según la dirección exacta y la ruta disponible. También podés consultar por Quilmes.',
  },
  {
    slug: 'manicure-adrogue.html',
    title: 'Manicure en Adrogué Quilmes | Atención a domicilio',
    description: 'Manicure tradicional y semipermanente a domicilio en sectores de Adrogué, Quilmes. Consulta cobertura y disponibilidad por WhatsApp.',
    eyebrow: 'Manicure en Adrogué',
    heading: 'Manicure a domicilio en Adrogué',
    italic: 'consulta cobertura para tu sector.',
    lead: 'Coordina una cita en casa para cuidar tus manos sin sumar otro desplazamiento a tu día.',
    image: 'hero-manicure.webp',
    imageAlt: 'Manicure nude de aspecto natural realizado en casa',
    introTitle: 'Servicio sujeto a ruta en Adrogué',
    intro: 'Adrogué comprende numerosos sectores. Comparte tu ubicación aproximada para confirmar si la ruta del día permite atenderte y en qué horario.',
    benefits: [['Revisión de cobertura','La dirección se valida antes de confirmar.'],['Servicio a elección','Tradicional, semipermanente o retiro previo.'],['Cita preparada','Informa el estado actual de tus uñas al reservar.']],
    zone: 'Adrogué, Quilmes',
    zoneCopy: 'La cobertura no es uniforme en toda la localidad. La disponibilidad depende del sector, la distancia y la agenda del día.',
  }
];

const localRelated = [
  ['manicure-a-domicilio-zona-sur.html','Manicure a domicilio','Conoce el servicio y todas las zonas de consulta.'],
  ['manicure-tradicional.html','Manicure tradicional','Una opción clásica y fácil de cambiar.'],
  ['manicure-semipermanente.html','Manicure semipermanente','Más duración y brillo para tu rutina.']
];

for (const local of localLandings) {
  pages.push([local.slug, page({
    title: local.title,
    description: local.description,
    path: local.slug,
    type: 'Service',
    body: landingBody({
      eyebrow: local.eyebrow,
      heading: local.heading,
      italic: local.italic,
      lead: local.lead,
      image: local.image,
      imageAlt: local.imageAlt,
      introTitle: local.introTitle,
      intro: local.intro,
      benefits: local.benefits,
      zone: local.zone,
      zoneCopy: local.zoneCopy,
      related: local.related || localRelated
    })
  })]);
}

const posts = [
  {
    slug: 'manicure-tradicional-o-semipermanente.html',
    title: '¿Manicure tradicional o semipermanente? Guía para elegir',
    description: 'Compara manicure tradicional y semipermanente: duración, retiro, acabado y cuál puede ajustarse mejor a tu rutina.',
    image: 'manicure-semipermanente.webp',
    imageAlt: 'Uñas con manicure semipermanente color borgoña',
    read: '6 min',
    intro: 'Ambas opciones pueden verse impecables, pero responden a rutinas distintas. La mejor elección depende de cuánto tiempo quieres conservar el color, cada cuánto te gusta cambiarlo y cómo prefieres retirarlo.',
    content: `
      <h2>La diferencia principal está en la duración y el retiro</h2>
      <p>El esmalte tradicional seca al aire y suele ser más fácil de retirar en casa. El semipermanente se cura con lámpara, se adhiere durante más tiempo y requiere un proceso de retiro más cuidadoso.</p>
      <h3>Elige manicure tradicional si…</h3>
      <ul><li>Te gusta cambiar el color con frecuencia.</li><li>Prefieres retirar el esmalte fácilmente en casa.</li><li>Podés dedicar un poco de tiempo al secado después de la cita.</li><li>Buscas una opción sencilla para una ocasión puntual.</li></ul>
      <h3>Elige semipermanente si…</h3>
      <ul><li>Quieres mantener el brillo durante más días.</li><li>Usas mucho las manos y necesitas un acabado más resistente.</li><li>Prefieres salir de la cita con el esmalte ya curado.</li><li>Podés programar un retiro profesional cuando sea necesario.</li></ul>
      <div class="article-callout"><strong>Consejo práctico:</strong> si ya llevas semipermanente, avisa al reservar. El retiro agrega tiempo a la cita y necesita materiales específicos.</div>
      <h2>¿Cuál cuida más la uña?</h2>
      <p>Más que el tipo de esmalte, importa la preparación y el retiro. Limar en exceso, arrancar el producto o retirar capas de la uña puede debilitarla. Un proceso cuidadoso y pausas cuando la uña lo necesita ayudan a mantenerla en buenas condiciones.</p>
      <h2>Cómo decidir según tu semana</h2>
      <p>Para viajes, semanas intensas o eventos consecutivos, el semipermanente suele ser cómodo por su resistencia. Si disfrutas combinar el color con distintos planes o quieres retirarlo sin cita adicional, el tradicional puede ser mejor.</p>
      <p>No hay una opción universal: hay una opción que encaja mejor con tu ritmo, tus hábitos y el estado actual de tus uñas.</p>`
  },
  {
    slug: 'cuanto-dura-manicure-semipermanente.html',
    title: '¿Cuánto dura el manicure semipermanente y qué lo afecta?',
    description: 'Descubre cuánto puede durar un manicure semipermanente y qué hábitos, productos y factores influyen en el acabado.',
    image: 'manicure-semipermanente.webp',
    imageAlt: 'Uñas con esmalte semipermanente brillante',
    read: '5 min',
    intro: 'Un manicure semipermanente suele conservar el brillo entre dos y tres semanas, pero no todas las uñas ni todas las rutinas se comportan igual.',
    content: `
      <h2>Una referencia: entre dos y tres semanas</h2><p>La duración se cuenta desde la aplicación hasta que el crecimiento, el desgaste o un levantamiento hacen recomendable el retiro. En algunas personas el crecimiento visible motiva el cambio antes de que el esmalte pierda brillo.</p>
      <h2>Cinco factores que cambian la duración</h2><ol><li><strong>Preparación de la uña:</strong> una superficie limpia y bien preparada favorece la adherencia.</li><li><strong>Estado de las uñas:</strong> uñas muy flexibles, delgadas o descamadas pueden retener el producto por menos tiempo.</li><li><strong>Contacto con agua y químicos:</strong> la exposición repetida puede acelerar el desgaste.</li><li><strong>Uso de las manos:</strong> golpes, presión sobre el borde o usar las uñas como herramienta favorece los levantamientos.</li><li><strong>Crecimiento natural:</strong> aunque el producto siga intacto, la base crecerá y será visible.</li></ol>
      <div class="article-callout"><strong>Importante:</strong> si aparece un levantamiento, evita pegarlo o arrancarlo. Agenda el retiro para impedir que el producto tire de la capa superficial de la uña.</div>
      <h2>Cómo ayudar a que dure más</h2><p>Usa guantes para lavar o manipular limpiadores, aplica aceite de cutícula, evita raspar superficies con las uñas y no recortes el borde esmaltado. Son hábitos pequeños que protegen el sellado.</p>
      <h2>¿Cuándo conviene retirarlo?</h2><p>Conviene retirar el semipermanente cuando el crecimiento ya te incomoda, aparece un levantamiento o el acabado está desgastado. No es recomendable cubrir indefinidamente una aplicación deteriorada.</p>`
  },
  {
    slug: 'cuidados-para-que-el-esmalte-dure-mas.html',
    title: '7 cuidados para que tu manicure dure más',
    description: 'Consejos sencillos para proteger el esmalte, el brillo y el borde de tus uñas después de un manicure.',
    image: 'hero-manicure.webp',
    imageAlt: 'Manos con manicure nude sobre una toalla',
    read: '5 min',
    intro: 'El cuidado posterior puede marcar una diferencia visible. No necesitas una rutina complicada: basta con proteger las uñas de golpes, químicos y resequedad.',
    content: `
      <h2>Hábitos sencillos después de tu cita</h2><ol><li><strong>Usa guantes para las tareas de limpieza.</strong> El contacto prolongado con agua y limpiadores puede desgastar el brillo y el borde.</li><li><strong>No uses las uñas como herramientas.</strong> Evita abrir latas, despegar etiquetas o raspar superficies con ellas.</li><li><strong>Hidrata cutículas y manos.</strong> Un aceite de cutícula y una crema ayudan a mantener flexible la piel alrededor de la uña.</li><li><strong>Protege el borde libre.</strong> Es la zona que más recibe golpes; evita limarla después de un semipermanente porque podés romper el sellado.</li><li><strong>Seca bien las manos.</strong> La humedad constante no favorece la piel ni el acabado.</li><li><strong>No arranques el esmalte.</strong> Al desprenderlo podés llevarte capas superficiales de la uña.</li><li><strong>Programa el retiro a tiempo.</strong> Un producto levantado necesita atención antes de engancharse o quebrarse.</li></ol>
      <div class="article-callout"><strong>Para esmalte tradicional:</strong> durante las primeras horas, trata de evitar golpes, agua muy caliente y presión sobre la superficie mientras termina de endurecer.</div>
      <h2>Qué llevar en la cartera</h2><p>Una crema de manos pequeña y un aceite de cutícula tipo lápiz son suficientes para una rutina diaria rápida. Aplicar poca cantidad con frecuencia suele ser más práctico que esperar a sentir resequedad.</p>
      <h2>Si el esmalte se levanta</h2><p>No tires del borde. Si es tradicional, podés retirarlo y reaplicar. Si es semipermanente, consulta para hacer un retiro controlado y revisar el estado de la uña.</p>`
  },
  {
    slug: 'como-preparar-cita-manicure-domicilio.html',
    title: 'Cómo preparar tu cita de manicure a domicilio',
    description: 'Prepara el espacio y la información necesaria para que tu cita de manicure a domicilio sea cómoda y eficiente.',
    image: 'manicure-tradicional.webp',
    imageAlt: 'Mesa organizada para una cita de manicure',
    read: '4 min',
    intro: 'Una buena cita a domicilio comienza antes de elegir el color. Preparar un espacio estable y contar lo que llevas actualmente ayuda a reservar el tiempo correcto.',
    content: `
      <h2>Antes de reservar</h2><p>Indica tu sector, el servicio que quieres y si tienes esmalte tradicional, semipermanente o algún producto para retirar. Si deseas diseño, comparte una referencia sencilla para confirmar que sea posible.</p>
      <h2>Prepara el espacio</h2><ul><li>Elige una mesa estable con dos sillas cómodas.</li><li>Busca un lugar con buena iluminación y ventilación.</li><li>Deja libre la superficie antes de la llegada.</li><li>Para semipermanente, confirma que haya una toma de corriente cercana.</li><li>Mantén mascotas y niños alejados de los productos durante la aplicación.</li></ul>
      <div class="article-callout"><strong>No necesitas herramientas propias.</strong> La persona que presta el servicio lleva los implementos acordados; tú preparas un espacio limpio y cómodo.</div>
      <h2>El día de la cita</h2><p>Evita aplicar crema o aceite justo antes, porque pueden interferir con la preparación. Si tienes sensibilidad, una lesión, inflamación o cambios visibles en la uña, coméntalo antes de iniciar.</p>
      <h2>Después del servicio</h2><p>Pregunta por el tiempo de secado o por los cuidados específicos del producto aplicado. En un manicure tradicional, reserva unos minutos tranquilos antes de retomar actividades que puedan marcar el esmalte.</p>`
  }
];

const blogCards = posts.map((post) => `<article class="card"><img class="card-media" src="../images/${post.image}" alt="${post.imageAlt}" width="1448" height="1086" loading="lazy"><div class="card-body"><span class="tag">Guía · ${post.read}</span><h3>${post.title}</h3><p>${post.description}</p><a class="card-link" href="${post.slug}">Leer artículo →</a></div></article>`).join('');

const blogBody = `
<section class="hero page-hero"><div class="wrap"><nav class="breadcrumbs" aria-label="Migas de pan"><a href="../index.html">Inicio</a> / Blog</nav><p class="eyebrow">Guía de cuidado</p><h1>Consejos para cuidar <em>tus manos y tus uñas.</em></h1><p class="lead">Respuestas claras para elegir tu servicio, preparar la cita y mantener el acabado por más tiempo.</p></div></section>
<section class="section section-white"><div class="wrap"><div class="grid-2">${blogCards}</div></div></section>
<section class="section section-soft"><div class="wrap cta"><p class="eyebrow">¿Ya elegiste tu servicio?</p><h2>Consulta disponibilidad en tu zona</h2><p class="section-copy">Atención a domicilio en Quilmes, Lomas de Zamora y sectores cercanos.</p><a class="button button-primary" style="margin-top:1.5rem" href="${wa('Hola, leí el blog y quiero consultar disponibilidad para un manicure a domicilio.')}" target="_blank" rel="noopener">Escribir por WhatsApp</a></div></section>`;
pages.push(['blog/index.html', page({ title:'Blog de manicure | Consejos para uñas y esmalte', description:'Guías de manicure tradicional y semipermanente, cuidados del esmalte y consejos para preparar una cita a domicilio.', path:'blog/', depth:1, body:blogBody, type:'CollectionPage' })]);

function articleBody(post) {
  const others = posts.filter((item) => item.slug !== post.slug).slice(0,3);
  return `
  <section class="hero page-hero"><div class="wrap"><nav class="breadcrumbs" aria-label="Migas de pan"><a href="../index.html">Inicio</a> / <a href="index.html">Blog</a> / ${post.title}</nav><p class="eyebrow">Guía de cuidado · ${post.read} de lectura</p><h1>${post.title}</h1><p class="lead">${post.intro}</p></div></section>
  <section class="section section-soft"><div class="wrap article-layout"><article class="article"><img class="card-media" style="border-radius:1rem" src="../images/${post.image}" alt="${post.imageAlt}" width="1448" height="1086" fetchpriority="high">${post.content}<div class="article-callout"><strong>¿Quieres reservar?</strong><p>Consulta cobertura y disponibilidad para manicure a domicilio en Zona Sur.</p><a class="card-link" href="${wa(`Hola, leí el artículo “${post.title}” y quiero consultar una cita.`)}" target="_blank" rel="noopener">Escribir por WhatsApp →</a></div></article><aside class="sidebar" aria-label="Contenido relacionado"><div class="sidebar-box"><strong>Servicios</strong><a href="../manicure-tradicional.html">Manicure tradicional</a><a href="../manicure-semipermanente.html">Manicure semipermanente</a><a href="../manicure-quilmes.html">Atención en Quilmes</a><a href="../manicure-lomas-de-zamora.html">Atención en Lomas de Zamora</a></div><div class="sidebar-box"><strong>Lee también</strong>${others.map((item)=>`<a href="${item.slug}">${item.title}</a>`).join('')}</div></aside></div></section>`;
}

for (const post of posts) {
  pages.push([`blog/${post.slug}`, page({
    title: `${post.title} | Manicure Zona Sur`,
    description: post.description,
    path: `blog/${post.slug}`,
    depth: 1,
    body: articleBody(post),
    type: 'Article',
    article: {
      headline: post.title,
      image: `${baseUrl}/images/${post.image}`,
      datePublished: '2026-07-16',
      dateModified: '2026-07-16',
      author: { '@type': 'Organization', name: 'Manicure Zona Sur' },
      mainEntityOfPage: { '@id': `${baseUrl}/blog/${post.slug}#webpage` }
    }
  })]);
}

for (const [file, contents] of pages) {
  const target = join(root, file);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, contents);
}

const sitemapPaths = [
  '',
  'manicure-quilmes.html',
  'manicure-lomas-de-zamora.html',
  'manicure-tradicional.html',
  'manicure-semipermanente.html',
  ...localLandings.map((landing) => landing.slug),
  'blog/',
  ...posts.map((post) => `blog/${post.slug}`)
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((path, index) => `  <url><loc>${baseUrl}/${path}</loc><lastmod>2026-07-16</lastmod><changefreq>${path.startsWith('blog/') ? 'monthly' : 'weekly'}</changefreq><priority>${index === 0 ? '1.0' : path === 'blog/' ? '0.8' : '0.9'}</priority></url>`).join('\n')}
</urlset>`;
await writeFile(join(root, 'sitemap.xml'), sitemap);
await writeFile(join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`);

console.log(`Generated ${pages.length} HTML pages, sitemap.xml and robots.txt.`);

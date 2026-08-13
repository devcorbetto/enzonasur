<?php

declare(strict_types=1);

$phoneDisplay = '11 3438-8560';
$phoneWa = '5491134388560';
$baseUrl = 'https://enzonasur.com/mayorista-ferreteria/';
$today = date('Y-m-d');

$locations = [
    [
        'slug' => 'mayorista-ferreteria-monte-grande',
        'city' => 'Monte Grande',
        'region' => 'Esteban Echeverría · Zona Sur',
        'description' => 'Mayorista de ferretería en Monte Grande para comercios, industrias, obras, talleres e instaladores. Enviá tu lista y consultá por WhatsApp.',
        'headline' => 'Ferretería mayorista en Monte Grande',
        'lead' => 'Herramientas, fijaciones, electricidad, plomería, pintura y protección personal para abastecer comercios, mantenimiento, talleres y obras de Esteban Echeverría.',
        'context' => 'Monte Grande conecta actividad comercial, construcción y servicios técnicos con el corredor de la Ruta 205, la Ruta Provincial 4 y los accesos hacia Ezeiza. Eso genera pedidos muy distintos: reposición para ferreterías, consumibles para cuadrillas, herramientas para instaladores y materiales para mantenimiento de depósitos o establecimientos.',
        'focus' => 'Podés enviar una lista completa, una planilla o fotos de referencia. Indicá medidas, cantidades y localidad para consultar disponibilidad y la modalidad posible para tu pedido.',
        'needs' => [
            ['Reposición comercial', 'Fijaciones, adhesivos, abrasivos, herramientas y consumibles para mantener surtido.'],
            ['Obras y reformas', 'Material eléctrico, plomería, pintura y accesorios para distintas etapas de obra.'],
            ['Mantenimiento', 'Insumos para reparaciones programadas en locales, depósitos y establecimientos.'],
            ['Profesionales', 'Herramientas y protección para electricistas, plomeros, pintores y técnicos.'],
        ],
        'nearby' => ['Luis Guillón', 'El Jagüel', 'Ezeiza', 'Canning'],
        'related' => ['mayorista-ferreteria-burzaco', 'mayorista-ferreteria-ezeiza', 'mayorista-ferreteria-lomas-de-zamora'],
    ],
    [
        'slug' => 'mayorista-ferreteria-burzaco',
        'city' => 'Burzaco',
        'region' => 'Almirante Brown · Zona Sur',
        'description' => 'Ferretería mayorista en Burzaco para industrias, talleres, obras y comercios de Almirante Brown. Consultá herramientas e insumos por WhatsApp.',
        'headline' => 'Mayorista de ferretería en Burzaco',
        'lead' => 'Abastecimiento para fábricas, talleres, mantenimiento, construcción y comercios del corredor productivo de Almirante Brown.',
        'context' => 'Burzaco combina el movimiento del parque industrial de Almirante Brown con talleres, depósitos, empresas de servicios y obra privada. Las compras suelen concentrar consumibles de uso diario, elementos de seguridad, fijaciones, herramientas y materiales para mantenimiento preventivo o correctivo.',
        'focus' => 'Para agilizar la cotización, separá tu lista por rubro e indicá medida, unidad o presentación. Si el pedido es para una planta o una obra, contanos también la localidad y el plazo estimado.',
        'needs' => [
            ['Plantas y fábricas', 'Abrasivos, fijaciones, herramientas y EPP para mantenimiento industrial.'],
            ['Talleres', 'Consumibles, discos, mechas, adhesivos y herramientas para trabajo continuo.'],
            ['Construcción', 'Materiales eléctricos, plomería, pintura y accesorios para cuadrillas.'],
            ['Ferreterías', 'Consulta de surtido y reposición por cantidad para comercios de la zona.'],
        ],
        'nearby' => ['Adrogué', 'Longchamps', 'Malvinas Argentinas', 'Claypole'],
        'related' => ['mayorista-ferreteria-monte-grande', 'mayorista-ferreteria-lomas-de-zamora', 'mayorista-ferreteria-quilmes'],
    ],
    [
        'slug' => 'mayorista-ferreteria-ezeiza',
        'city' => 'Ezeiza',
        'region' => 'Ezeiza · Zona Sur',
        'description' => 'Mayorista de ferretería en Ezeiza para logística, depósitos, industria, obras y mantenimiento. Consultá materiales y herramientas por WhatsApp.',
        'headline' => 'Ferretería mayorista en Ezeiza',
        'lead' => 'Herramientas e insumos para depósitos, logística, plantas, talleres y obras del corredor Ezeiza–Cañuelas y Spegazzini.',
        'context' => 'Ezeiza y Carlos Spegazzini articulan depósitos, logística, industria y construcción alrededor de la Autopista Ezeiza–Cañuelas y sus accesos. Es una zona donde pesan la continuidad operativa, el mantenimiento de instalaciones y la compra planificada para cuadrillas.',
        'focus' => 'Mandanos el detalle por área de trabajo: depósito, montaje, mantenimiento, electricidad, sanitaria o pintura. Indicá cantidades y ubicación para recibir una orientación más precisa.',
        'needs' => [
            ['Logística y depósitos', 'Insumos para reparaciones, señalización, herramientas y operación edilicia.'],
            ['Industria', 'Fijaciones, abrasivos, selladores, medición y protección personal.'],
            ['Montajes', 'Materiales y consumibles para instalaciones eléctricas, sanitarias y mecánicas.'],
            ['Obra nueva', 'Listas por etapa para construcción, ampliaciones y puesta en marcha.'],
        ],
        'nearby' => ['Carlos Spegazzini', 'Tristán Suárez', 'La Unión', 'Monte Grande'],
        'related' => ['mayorista-ferreteria-monte-grande', 'mayorista-ferreteria-burzaco', 'mayorista-ferreteria-lomas-de-zamora'],
    ],
    [
        'slug' => 'mayorista-ferreteria-lomas-de-zamora',
        'city' => 'Lomas de Zamora',
        'region' => 'Lomas de Zamora · Zona Sur',
        'description' => 'Ferretería mayorista en Lomas de Zamora para comercios, obras, consorcios, talleres e instaladores. Enviá tu lista por WhatsApp.',
        'headline' => 'Mayorista de ferretería en Lomas de Zamora',
        'lead' => 'Productos para reposición comercial, construcción, mantenimiento urbano, talleres y profesionales de Lomas y alrededores.',
        'context' => 'Lomas de Zamora combina corredores comerciales densos, edificios, viviendas, talleres y obras de renovación. Por eso son frecuentes las listas que mezclan electricidad, plomería, pintura, fijaciones y herramientas para resolver trabajos en una sola compra.',
        'focus' => 'Si comprás para una obra o consorcio, separá urgentes y reposición. Si sos comerciante, indicá los productos de mayor rotación y las presentaciones que buscás.',
        'needs' => [
            ['Comercios', 'Reposición de productos de rotación para ferreterías y casas de materiales.'],
            ['Consorcios', 'Insumos para mantenimiento eléctrico, sanitario y reparaciones edilicias.'],
            ['Reformas', 'Herramientas, pintura, fijaciones y consumibles para obra urbana.'],
            ['Servicios técnicos', 'Materiales para instaladores y equipos de mantenimiento de la zona.'],
        ],
        'nearby' => ['Banfield', 'Temperley', 'Turdera', 'Lavallol'],
        'related' => ['mayorista-ferreteria-lanus', 'mayorista-ferreteria-burzaco', 'mayorista-ferreteria-monte-grande'],
    ],
    [
        'slug' => 'mayorista-ferreteria-avellaneda',
        'city' => 'Avellaneda',
        'region' => 'Avellaneda · Zona Sur',
        'description' => 'Mayorista de ferretería en Avellaneda para industrias, depósitos, constructoras, talleres y comercios. Consultá herramientas e insumos por WhatsApp.',
        'headline' => 'Ferretería mayorista en Avellaneda',
        'lead' => 'Abastecimiento para industria, logística, mantenimiento, construcción y comercios de Avellaneda y alrededores.',
        'context' => 'Avellaneda concentra actividad fabril, depósitos, talleres, comercios y obras conectadas con todo el corredor de Zona Sur. Los pedidos suelen exigir variedad, desde elementos de protección y herramientas hasta fijaciones, electricidad y plomería.',
        'focus' => 'Compartí la lista completa y marcá qué productos son críticos para la operación. Consultá disponibilidad, presentaciones y modalidad antes de organizar el retiro o recepción.',
        'needs' => [
            ['Industria y depósitos', 'Consumibles, herramientas y seguridad para operación y mantenimiento.'],
            ['Obras', 'Materiales para instalaciones, fijación, pintura y terminaciones.'],
            ['Talleres', 'Abrasivos, mechas, discos, adhesivos y herramientas de uso frecuente.'],
            ['Comercios', 'Reposición mayorista para atender demanda profesional y domiciliaria.'],
        ],
        'nearby' => ['Dock Sud', 'Sarandí', 'Wilde', 'Piñeyro'],
        'related' => ['mayorista-ferreteria-lanus', 'mayorista-ferreteria-quilmes', 'mayorista-ferreteria-lomas-de-zamora'],
    ],
    [
        'slug' => 'mayorista-ferreteria-lanus',
        'city' => 'Lanús',
        'region' => 'Lanús · Zona Sur',
        'description' => 'Ferretería mayorista en Lanús para talleres, comercios, pequeñas industrias, obras y mantenimiento. Pedí cotización por WhatsApp.',
        'headline' => 'Mayorista de ferretería en Lanús',
        'lead' => 'Herramientas y materiales para talleres, pymes, obras, instaladores y comercios de Lanús Este, Oeste y alrededores.',
        'context' => 'Lanús sostiene una trama intensa de talleres, pequeñas industrias, comercios y construcción urbana. Esa diversidad favorece pedidos multirrubro con herramientas, abrasivos, fijaciones, electricidad, plomería y elementos de protección.',
        'focus' => 'Mandá fotos cuando el repuesto o accesorio sea difícil de identificar. Para compras recurrentes, indicá presentación y cantidad habitual para ordenar mejor la consulta.',
        'needs' => [
            ['Talleres y pymes', 'Consumibles, herramientas, abrasivos y protección para producción y reparación.'],
            ['Obra urbana', 'Materiales eléctricos, sanitarios, pintura y fijación.'],
            ['Instaladores', 'Listas de trabajo para servicios técnicos y mantenimiento.'],
            ['Ferreterías', 'Consulta de productos por cantidad para reposición comercial.'],
        ],
        'nearby' => ['Remedios de Escalada', 'Valentín Alsina', 'Gerli', 'Monte Chingolo'],
        'related' => ['mayorista-ferreteria-avellaneda', 'mayorista-ferreteria-lomas-de-zamora', 'mayorista-ferreteria-quilmes'],
    ],
    [
        'slug' => 'mayorista-ferreteria-quilmes',
        'city' => 'Quilmes',
        'region' => 'Quilmes · Zona Sur',
        'description' => 'Mayorista de ferretería en Quilmes para industrias, obras, talleres, instaladores y comercios. Consultá productos y cantidades por WhatsApp.',
        'headline' => 'Ferretería mayorista en Quilmes',
        'lead' => 'Insumos para comercios, producción, mantenimiento, construcción y profesionales del corredor Quilmes–Berazategui.',
        'context' => 'Quilmes articula una base amplia de comercios, talleres, industrias y obras con conexiones hacia Berazategui, Avellaneda y La Plata. Las compras pueden combinar reposición minorista con insumos técnicos para mantenimiento y construcción.',
        'focus' => 'Indicá localidad, rubro, medida y cantidad. Si necesitás varias categorías, una planilla o lista ordenada ayuda a revisar el pedido completo.',
        'needs' => [
            ['Industria', 'Herramientas, fijaciones, abrasivos y EPP para mantenimiento y producción.'],
            ['Construcción', 'Material eléctrico, plomería, pintura y consumibles de obra.'],
            ['Comercios', 'Reposición de ferretería para atención domiciliaria y profesional.'],
            ['Técnicos', 'Insumos para instaladores, montadores y servicios de mantenimiento.'],
        ],
        'nearby' => ['Bernal', 'Ezpeleta', 'Berazategui', 'Don Bosco'],
        'related' => ['mayorista-ferreteria-avellaneda', 'mayorista-ferreteria-burzaco', 'mayorista-ferreteria-lanus'],
    ],
];

$bySlug = [];
foreach ($locations as $location) {
    $bySlug[$location['slug']] = $location;
}

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function wa(string $phone, string $city, string $extra = ''): string
{
    $message = "Hola, quiero cotizar un pedido mayorista de ferretería para {$city}. {$extra}";
    return 'https://wa.me/' . $phone . '?text=' . rawurlencode(trim($message));
}

foreach ($locations as $location) {
    $canonical = $baseUrl . $location['slug'] . '.html';
    $faq = [
        ["¿Atienden pedidos mayoristas en {$location['city']}?", "Podés consultar pedidos para {$location['city']} y localidades cercanas. Enviá ubicación, productos y cantidades para confirmar disponibilidad y modalidad."],
        ["¿Qué productos de ferretería puedo consultar?", 'Herramientas, electricidad, plomería, pintura, fijaciones, abrasivos, adhesivos y elementos de protección personal, entre otros rubros.'],
        ["¿Cómo pido una cotización para {$location['city']}?", 'Mandá por WhatsApp una lista o planilla con producto, medida, cantidad y localidad. También podés adjuntar fotos de referencia.'],
        ["¿Trabajan con industrias y obras?", 'La atención está orientada a comercios, industrias, talleres, empresas de mantenimiento, contratistas, obras y profesionales. Los mínimos y presentaciones se consultan según producto.'],
    ];

    $schema = [
        '@context' => 'https://schema.org',
        '@graph' => [
            [
                '@type' => 'WebPage',
                '@id' => $canonical . '#pagina',
                'url' => $canonical,
                'name' => $location['headline'],
                'description' => $location['description'],
                'inLanguage' => 'es-AR',
                'about' => ['@id' => $baseUrl . '#negocio'],
                'breadcrumb' => ['@id' => $canonical . '#migas'],
            ],
            [
                '@type' => 'BreadcrumbList',
                '@id' => $canonical . '#migas',
                'itemListElement' => [
                    ['@type' => 'ListItem', 'position' => 1, 'name' => 'Mayorista de ferretería', 'item' => $baseUrl],
                    ['@type' => 'ListItem', 'position' => 2, 'name' => $location['city'], 'item' => $canonical],
                ],
            ],
            [
                '@type' => 'Service',
                '@id' => $canonical . '#servicio',
                'name' => 'Venta mayorista de ferretería en ' . $location['city'],
                'serviceType' => 'Venta mayorista de artículos de ferretería',
                'areaServed' => ['@type' => 'City', 'name' => $location['city']],
                'provider' => ['@id' => $baseUrl . '#negocio'],
            ],
            [
                '@type' => 'FAQPage',
                '@id' => $canonical . '#preguntas',
                'mainEntity' => array_map(static fn(array $item): array => [
                    '@type' => 'Question',
                    'name' => $item[0],
                    'acceptedAnswer' => ['@type' => 'Answer', 'text' => $item[1]],
                ], $faq),
            ],
        ],
    ];

    $needCards = '';
    foreach ($location['needs'] as $index => $need) {
        $number = str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT);
        $needCards .= '<article><span>' . $number . '</span><h3>' . e($need[0]) . '</h3><p>' . e($need[1]) . '</p></article>';
    }

    $nearby = '';
    foreach ($location['nearby'] as $place) {
        $nearby .= '<span>' . e($place) . '</span>';
    }

    $related = '';
    foreach ($location['related'] as $relatedSlug) {
        $item = $bySlug[$relatedSlug];
        $related .= '<a href="' . e($relatedSlug) . '.html"><small>' . e($item['region']) . '</small><strong>' . e($item['city']) . '</strong><span>Ver atención por zona →</span></a>';
    }

    $faqHtml = '';
    foreach ($faq as $item) {
        $faqHtml .= '<details><summary>' . e($item[0]) . '<span>+</span></summary><p>' . e($item[1]) . '</p></details>';
    }

    $waMain = wa($phoneWa, $location['city'], 'Adjunto mi lista:');
    $jsonLd = json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    $title = 'Ferretería Mayorista en ' . $location['city'] . ' | En Zona Sur';

    $html = <<<HTML
<!doctype html>
<html lang="es-AR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{$title}</title>
  <meta name="description" content="{$location['description']}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
  <meta name="theme-color" content="#171717">
  <link rel="icon" href="/assets/images/favicon.ico" sizes="any">
  <link rel="canonical" href="{$canonical}">
  <link rel="alternate" hreflang="es-AR" href="{$canonical}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&amp;family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="locations.css">
  <meta property="og:locale" content="es_AR">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{$location['headline']}">
  <meta property="og:description" content="{$location['lead']}">
  <meta property="og:url" content="{$canonical}">
  <meta property="og:image" content="{$baseUrl}assets/og-ferreteria-en-zona-sur.png">
  <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">{$jsonLd}</script>
</head>
<body class="location-page">
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <div class="topbar"><div class="container topbar-inner"><p>Atención mayorista · {$location['region']}</p><a href="tel:+5491134388560">{$phoneDisplay}</a></div></div>
  <header class="site-header" id="inicio"><div class="container header-inner">
    <a class="brand" href="index.html" aria-label="En Zona Sur, Ferretería Mayorista, inicio"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="brand-copy"><strong>En Zona Sur</strong><small>Ferretería Mayorista</small></span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="nav-principal">Menú</button>
    <nav class="nav" id="nav-principal" aria-label="Navegación principal"><a href="#necesidades">Soluciones</a><a href="#como-pedir">Cómo pedir</a><a href="#zonas-cercanas">Zonas</a><a href="#preguntas">Preguntas</a><a class="nav-cta" href="{$waMain}" target="_blank" rel="noopener">Cotizar por WhatsApp</a></nav>
  </div></header>

  <main id="contenido">
    <section class="location-hero"><div class="container location-hero-grid">
      <div><nav class="breadcrumbs" aria-label="Migas de pan"><a href="index.html">Mayorista de ferretería</a><span>/</span><b>{$location['city']}</b></nav><p class="eyebrow"><span></span>{$location['region']}</p><h1>{$location['headline']}</h1><p class="hero-lead">{$location['lead']}</p><div class="hero-actions"><a class="button button-whatsapp" href="{$waMain}" target="_blank" rel="noopener"><span aria-hidden="true">●</span> Enviar lista</a><a class="button button-ghost" href="#necesidades">Ver soluciones</a></div></div>
      <aside class="location-panel"><small>Zona de consulta</small><strong>{$location['city']}</strong><p>{$location['region']}</p><div><span>Industria</span><span>Obras</span><span>Comercios</span><span>Mantenimiento</span></div><a href="tel:+5491134388560">{$phoneDisplay}</a></aside>
    </div></section>

    <section class="location-intro"><div class="container location-intro-grid"><div><p class="kicker">Ferretería por mayor en Zona Sur</p><h2>Compras pensadas para el trabajo real de la zona.</h2></div><div><p>{$location['context']}</p><p>{$location['focus']}</p></div></div></section>

    <section class="section local-needs" id="necesidades"><div class="container"><div class="section-heading"><div><p class="kicker">Quiénes nos consultan</p><h2>Soluciones para {$location['city']}.</h2></div><p>Centralizá rubros y cantidades en una sola consulta. La disponibilidad, marcas, presentaciones y mínimos se confirman según cada producto.</p></div><div class="local-needs-grid">{$needCards}</div></div></section>

    <section class="section order-band" id="como-pedir"><div class="container order-grid"><div><p class="kicker light">Pedido mayorista</p><h2>Más datos.<br>Mejor cotización.</h2><p>Para revisar tu lista necesitamos información concreta. No hace falta que conozcas todos los códigos: una foto clara puede ayudar.</p></div><ol><li><b>01</b><span><strong>Producto o foto</strong>Nombre, modelo, medida o referencia visual.</span></li><li><b>02</b><span><strong>Cantidad</strong>Unidades, cajas, metros o presentación.</span></li><li><b>03</b><span><strong>Destino</strong>Indicá {$location['city']} o la localidad cercana.</span></li><li><b>04</b><span><strong>Consulta</strong>Confirmá disponibilidad y modalidad.</span></li></ol></div></section>

    <section class="section nearby" id="zonas-cercanas"><div class="container nearby-grid"><div><p class="kicker">Cobertura geográfica</p><h2>{$location['city']} y alrededores.</h2><p>También recibimos consultas de localidades y barrios cercanos. La atención efectiva depende del tipo de pedido y la modalidad disponible.</p><div class="nearby-chips">{$nearby}</div></div><div class="area-stamp"><small>Área principal</small><strong>{$location['city']}</strong><span>{$location['region']}</span></div></div></section>

    <section class="section related"><div class="container"><div class="section-heading"><div><p class="kicker">Más localidades de Zona Sur</p><h2>Atención cerca de tu actividad.</h2></div><p>Explorá la página específica para el lugar donde está tu comercio, planta, taller u obra.</p></div><div class="related-grid">{$related}</div><a class="all-zones-link" href="index.html#zonas-seo">Ver toda Zona Sur →</a></div></section>

    <section class="section faq" id="preguntas"><div class="container faq-grid"><div class="faq-title"><p class="kicker">Preguntas frecuentes</p><h2>Antes de cotizar.</h2><p>Escribinos si necesitás confirmar un producto o una zona.</p><a class="phone-link" href="tel:+5491134388560">{$phoneDisplay}</a></div><div class="faq-list">{$faqHtml}</div></div></section>

    <section class="cta-section"><div class="container cta-card"><div><p class="kicker light">Consulta para {$location['city']}</p><h2>Mandanos tu lista por WhatsApp.</h2></div><div class="cta-action"><p>Atención mayorista</p><a href="{$waMain}" target="_blank" rel="noopener">{$phoneDisplay}<span>→</span></a><small>{$location['region']}</small></div></div></section>
  </main>

  <footer class="site-footer"><div class="container footer-grid"><a class="brand brand-footer" href="index.html"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="brand-copy"><strong>En Zona Sur</strong><small>Ferretería Mayorista</small></span></a><p>Herramientas e insumos para comercios, industrias, obras, talleres y profesionales de Zona Sur.</p><div><a href="index.html#rubros">Rubros</a><a href="index.html#zonas-seo">Localidades</a><a href="#preguntas">Preguntas</a><a href="{$waMain}" target="_blank" rel="noopener">WhatsApp</a></div></div><div class="container footer-bottom"><span>© <span id="year">2026</span> EnZonaSur.com</span><span>{$location['city']} · Zona Sur</span></div></footer>
  <a class="whatsapp-float" href="{$waMain}" target="_blank" rel="noopener" aria-label="Consultar por WhatsApp"><span aria-hidden="true">●</span><b>WhatsApp</b></a>
  <script src="script.js" defer></script>
</body>
</html>
HTML;

    file_put_contents(__DIR__ . '/' . $location['slug'] . '.html', $html);
}

$sitemap = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
$sitemap[] = "  <url><loc>{$baseUrl}</loc><lastmod>{$today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>";
foreach ($locations as $location) {
    $url = $baseUrl . $location['slug'] . '.html';
    $sitemap[] = "  <url><loc>{$url}</loc><lastmod>{$today}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>";
}
$sitemap[] = '</urlset>';
file_put_contents(__DIR__ . '/sitemap.xml', implode("\n", $sitemap) . "\n");

echo 'Generated ' . count($locations) . " location pages and sitemap.\n";

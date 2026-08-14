<?php

declare(strict_types=1);

date_default_timezone_set('America/Bogota');

$phoneDisplay = '11 3438-8560';
$phoneWa = '5491134388560';
$baseUrl = 'https://enzonasur.com/mayorista-ferreteria/';
$today = date('Y-m-d');

$categories = [
    [
        'slug' => 'seguridad-industrial-zona-sur',
        'name' => 'Seguridad industrial',
        'short' => 'Seguridad',
        'icon' => '◆',
        'eyebrow' => 'EPP y seguridad laboral · Zona Sur',
        'description' => 'Productos de seguridad industrial y elementos de protección personal para empresas, obras, talleres y cuadrillas de Zona Sur. Cotizá por WhatsApp.',
        'headline' => 'Seguridad industrial en Zona Sur',
        'lead' => 'Elementos de protección personal, indumentaria, señalización y productos para acompañar el trabajo seguro en industrias, depósitos, talleres y obras.',
        'intro' => 'Cada tarea presenta riesgos y requerimientos diferentes. Por eso una consulta de seguridad industrial debe identificar la actividad, el entorno, la cantidad de personas y el nivel de exposición antes de definir productos o reemplazos.',
        'focus' => 'Enviá el tipo de tarea, cantidad, talles y cualquier especificación técnica disponible. La marca, norma aplicable, certificación, disponibilidad y presentación se confirman para cada producto antes de comprar.',
        'products' => [
            ['Protección de cabeza', 'Cascos, accesorios y complementos para distintas tareas y entornos.'],
            ['Protección ocular y facial', 'Anteojos, antiparras, máscaras y pantallas para consultar según el riesgo.'],
            ['Protección auditiva', 'Tapones y protectores de copa para actividades con exposición a ruido.'],
            ['Protección respiratoria', 'Mascarillas, semimáscaras, filtros y consumibles según necesidad declarada.'],
            ['Guantes de trabajo', 'Opciones para manipulación, mecánica, construcción, mantenimiento y tareas generales.'],
            ['Indumentaria laboral', 'Ropa de trabajo, prendas reflectivas, impermeables y complementos por talle.'],
            ['Trabajo en altura', 'Arneses, cabos y accesorios sujetos a especificación y verificación técnica.'],
            ['Señalización y demarcación', 'Conos, cintas, cartelería y elementos para organizar áreas de trabajo.'],
        ],
        'audiences' => [
            ['Industria y mantenimiento', 'Reposición y equipamiento para personal operativo y equipos técnicos.'],
            ['Construcción', 'Protección para cuadrillas, contratistas y distintas etapas de obra.'],
            ['Logística y depósitos', 'Elementos para operación, circulación, carga y mantenimiento edilicio.'],
            ['Talleres y servicios', 'Protección para soldadura, corte, reparación y tareas técnicas.'],
        ],
        'faq' => [
            ['¿Qué datos tengo que enviar para cotizar EPP?', 'Indicá tarea, cantidad de personas, producto buscado, talle y cualquier requisito técnico o norma que tu organización solicite.'],
            ['¿Puedo pedir distintos talles en una misma consulta?', 'Sí. Detallá la cantidad por talle y modelo para revisar la disponibilidad y la presentación de cada producto.'],
            ['¿Los productos están certificados?', 'La certificación y norma aplicable deben confirmarse producto por producto antes de comprar. No sustituyas la evaluación de un responsable de higiene y seguridad.'],
        ],
    ],
    [
        'slug' => 'herramientas-mayorista-zona-sur',
        'name' => 'Herramientas por mayor',
        'short' => 'Herramientas',
        'icon' => '⚒',
        'eyebrow' => 'Herramientas profesionales · Zona Sur',
        'description' => 'Herramientas manuales, eléctricas y accesorios por mayor para ferreterías, talleres, industrias y obras de Zona Sur. Consultá por WhatsApp.',
        'headline' => 'Herramientas por mayor en Zona Sur',
        'lead' => 'Herramientas manuales, eléctricas, medición, corte y accesorios para reposición comercial, mantenimiento, producción y obra.',
        'intro' => 'Una compra de herramientas puede buscar surtido para reventa, equipamiento de una cuadrilla o reposición técnica. Identificar el uso, la frecuencia y el material a trabajar ayuda a orientar la consulta.',
        'focus' => 'Indicá tipo de herramienta, potencia o medida, cantidad y accesorios necesarios. Si buscás un modelo equivalente, adjuntá foto, ficha o código de referencia.',
        'products' => [
            ['Herramientas manuales', 'Llaves, pinzas, alicates, martillos, destornilladores y juegos.'],
            ['Herramientas eléctricas', 'Taladros, amoladoras, rotomartillos y equipos sujetos a consulta.'],
            ['Medición y nivelación', 'Cintas, niveles, calibres y elementos para control y replanteo.'],
            ['Corte y desbaste', 'Discos, hojas, sierras, cutters y consumibles para distintos materiales.'],
            ['Mechas y accesorios', 'Mechas, puntas, mandriles y complementos según herramienta y uso.'],
            ['Organización', 'Cajas, bolsos, carros y soluciones para transportar herramientas.'],
        ],
        'audiences' => [
            ['Ferreterías', 'Surtido y reposición de productos de rotación para mostrador.'],
            ['Talleres', 'Herramientas y consumibles para reparación y producción.'],
            ['Mantenimiento', 'Equipamiento para tareas preventivas, correctivas y montajes.'],
            ['Obras', 'Herramientas para cuadrillas y etapas de construcción o reforma.'],
        ],
        'faq' => [
            ['¿Trabajan herramientas por cantidad?', 'Podés consultar unidades o compras por cantidad. Los mínimos y presentaciones dependen de cada producto.'],
            ['¿Puedo consultar una marca o modelo específico?', 'Sí. Enviá marca, modelo, potencia, medida o foto para revisar opciones y disponibilidad.'],
            ['¿También venden consumibles y accesorios?', 'Podés consultar mechas, discos, hojas, puntas y otros accesorios junto con las herramientas.'],
        ],
    ],
    [
        'slug' => 'materiales-electricos-mayorista-zona-sur',
        'name' => 'Materiales eléctricos',
        'short' => 'Electricidad',
        'icon' => 'ϟ',
        'eyebrow' => 'Electricidad por mayor · Zona Sur',
        'description' => 'Materiales eléctricos por mayor para instaladores, obras, industrias, mantenimiento y comercios de Zona Sur. Enviá tu lista por WhatsApp.',
        'headline' => 'Materiales eléctricos por mayor',
        'lead' => 'Cables, protecciones, llaves, tomas, tableros, canalización e iluminación para instalaciones, mantenimiento y reposición.',
        'intro' => 'Las especificaciones eléctricas no deberían resolverse por aproximación. Sección, tensión, capacidad, aplicación y requisitos del proyecto deben estar claros para revisar correctamente una lista.',
        'focus' => 'Mandá la planilla o listado con medidas, cantidad, presentación y especificaciones. La selección final corresponde al profesional responsable de la instalación.',
        'products' => [
            ['Cables y conductores', 'Opciones por sección, tipo y presentación para consultar según instalación.'],
            ['Protecciones eléctricas', 'Térmicas, diferenciales y componentes sujetos a especificación técnica.'],
            ['Llaves y tomas', 'Módulos, bastidores, tapas, fichas y accesorios de conexión.'],
            ['Tableros y gabinetes', 'Soluciones de montaje y distribución para distintas capacidades.'],
            ['Canalización', 'Caños, cajas, conectores, bandejas y accesorios para tendido.'],
            ['Iluminación', 'Lámparas, artefactos y complementos para uso comercial o técnico.'],
        ],
        'audiences' => [
            ['Instaladores', 'Listas por trabajo para instalaciones nuevas y reparaciones.'],
            ['Obras', 'Materiales organizados por etapa, sector o unidad funcional.'],
            ['Industria', 'Componentes y consumibles para mantenimiento de instalaciones.'],
            ['Ferreterías', 'Reposición de productos eléctricos de demanda habitual.'],
        ],
        'faq' => [
            ['¿Puedo enviar una planilla de materiales?', 'Sí. Incluí producto, especificación, unidad, cantidad y localidad para ordenar la consulta.'],
            ['¿Cotizan cables por rollo o por metro?', 'La presentación depende del producto. Indicá qué formato necesitás para consultar disponibilidad.'],
            ['¿Ayudan a definir la instalación?', 'La página facilita la consulta comercial; el dimensionamiento y la selección técnica corresponden a un profesional habilitado.'],
        ],
    ],
    [
        'slug' => 'plomeria-mayorista-zona-sur',
        'name' => 'Plomería por mayor',
        'short' => 'Plomería',
        'icon' => '◉',
        'eyebrow' => 'Sanitaria y conexiones · Zona Sur',
        'description' => 'Productos de plomería por mayor para ferreterías, instaladores, mantenimiento y obras de Zona Sur. Consultá conexiones y accesorios.',
        'headline' => 'Plomería por mayor en Zona Sur',
        'lead' => 'Conexiones, válvulas, flexibles, selladores y accesorios para instalaciones sanitarias, reparaciones y reposición comercial.',
        'intro' => 'Diámetro, material, tipo de rosca, presión y aplicación son datos importantes al consultar productos sanitarios. Una foto con medida de referencia puede ayudar a identificar una pieza.',
        'focus' => 'Indicá material, medida, cantidad y uso. Para repuestos o conexiones difíciles de nombrar, enviá fotos claras desde más de un ángulo.',
        'products' => [
            ['Conexiones', 'Codos, tees, cuplas, adaptadores y piezas según sistema y medida.'],
            ['Válvulas y llaves', 'Elementos de paso y control sujetos a medida y aplicación.'],
            ['Flexibles y accesorios', 'Conexiones flexibles y complementos para instalaciones.'],
            ['Selladores', 'Cintas, adhesivos y productos de sellado según material y uso.'],
            ['Desagües', 'Accesorios y conexiones para sistemas sanitarios y pluviales.'],
            ['Grifería y reparación', 'Repuestos y complementos para mantenimiento domiciliario o edilicio.'],
        ],
        'audiences' => [
            ['Sanitaristas', 'Listas por instalación, reparación o mantenimiento.'],
            ['Ferreterías', 'Reposición de medidas y conexiones de uso frecuente.'],
            ['Consorcios', 'Insumos para reparaciones y mantenimiento sanitario.'],
            ['Obras', 'Materiales organizados por etapa y sector del proyecto.'],
        ],
        'faq' => [
            ['¿Puedo consultar una conexión con una foto?', 'Sí. Sumá una referencia de medida, material y uso para facilitar la identificación.'],
            ['¿Venden por unidad y por caja?', 'La presentación y los mínimos varían según producto. Indicá la cantidad requerida.'],
            ['¿Cotizan listas completas de sanitaria?', 'Sí. Enviá la lista ordenada por producto, medida, unidad y cantidad.'],
        ],
    ],
    [
        'slug' => 'insumos-pintura-mayorista-zona-sur',
        'name' => 'Insumos de pintura',
        'short' => 'Pintura',
        'icon' => '▰',
        'eyebrow' => 'Accesorios de pintura · Zona Sur',
        'description' => 'Insumos y accesorios de pintura por mayor para pinturerías, obras, profesionales y mantenimiento de Zona Sur. Cotizá tu lista.',
        'headline' => 'Insumos de pintura por mayor',
        'lead' => 'Rodillos, pinceles, cintas, lijas, bandejas, enduidos, adhesivos y complementos para preparación, aplicación y terminación.',
        'intro' => 'El tipo de superficie, producto a aplicar y terminación buscada determinan qué accesorios conviene consultar. Las compras por obra también pueden organizarse por etapa y cuadrilla.',
        'focus' => 'Indicá superficie, medida, tipo de trabajo, presentación y cantidad. La compatibilidad del producto debe verificarse antes de la aplicación.',
        'products' => [
            ['Rodillos y repuestos', 'Medidas y materiales para distintas superficies y terminaciones.'],
            ['Pinceles y brochas', 'Opciones para aplicación, recorte y trabajos de detalle.'],
            ['Cintas y protección', 'Enmascarado, cobertores y complementos para proteger áreas.'],
            ['Lijas y abrasivos', 'Hojas, discos y formatos según superficie y etapa de trabajo.'],
            ['Bandejas y accesorios', 'Cubetas, extensores, espátulas y elementos de aplicación.'],
            ['Preparación y reparación', 'Enduidos, selladores, adhesivos y complementos sujetos a consulta.'],
        ],
        'audiences' => [
            ['Pinturerías', 'Reposición de accesorios y productos complementarios.'],
            ['Pintores', 'Listas por ambiente, superficie o tipo de trabajo.'],
            ['Obras', 'Insumos para preparación, aplicación y terminación.'],
            ['Mantenimiento', 'Productos para reparaciones, retoques y tareas programadas.'],
        ],
        'faq' => [
            ['¿Cotizan accesorios de pintura por caja?', 'Podés consultar unidades, packs o cajas según el producto y la presentación disponible.'],
            ['¿Puedo enviar una lista para una obra?', 'Sí. Separá los productos por etapa, medida, presentación y cantidad.'],
            ['¿Cómo consulto una lija o rodillo específico?', 'Indicá medida, material o grano, superficie de uso y agregá una foto si tenés referencia.'],
        ],
    ],
    [
        'slug' => 'fijaciones-mayorista-zona-sur',
        'name' => 'Fijaciones por mayor',
        'short' => 'Fijaciones',
        'icon' => '⬢',
        'eyebrow' => 'Tornillos y anclajes · Zona Sur',
        'description' => 'Tornillos, tarugos, bulones, tuercas y fijaciones por mayor para ferreterías, industria, talleres y obras de Zona Sur.',
        'headline' => 'Fijaciones por mayor en Zona Sur',
        'lead' => 'Tornillos, tarugos, bulones, tuercas, arandelas, mechas y anclajes para reposición comercial, montaje, mantenimiento y obra.',
        'intro' => 'Una fijación debe corresponder al material base, la carga, el ambiente y el tipo de montaje. Medida, material, cabeza, rosca y terminación ayudan a evitar errores de identificación.',
        'focus' => 'Enviá nombre o foto, diámetro, largo, material, cantidad y aplicación. La selección para usos estructurales o críticos debe validarla el responsable técnico.',
        'products' => [
            ['Tornillos', 'Opciones por cabeza, rosca, diámetro, largo y material.'],
            ['Tarugos', 'Fijaciones para distintos materiales base y aplicaciones declaradas.'],
            ['Bulones y tuercas', 'Medidas, pasos y terminaciones para montaje y mantenimiento.'],
            ['Arandelas', 'Planas, presión y otros formatos sujetos a especificación.'],
            ['Anclajes', 'Soluciones mecánicas o químicas según requerimiento técnico.'],
            ['Mechas', 'Accesorios de perforación para distintos materiales y diámetros.'],
        ],
        'audiences' => [
            ['Ferreterías', 'Reposición de medidas y presentaciones de rotación.'],
            ['Industria', 'Fijaciones para mantenimiento, fabricación y montaje.'],
            ['Talleres', 'Bulonería y consumibles para reparación y producción.'],
            ['Construcción', 'Anclajes y fijaciones para distintas etapas de obra.'],
        ],
        'faq' => [
            ['¿Qué medida tengo que informar?', 'Siempre que puedas, indicá diámetro, largo, tipo de rosca, cabeza, material y cantidad.'],
            ['¿Puedo consultar con una muestra o foto?', 'Sí. Una foto con regla o calibre visible puede ayudar, aunque la medida debe confirmarse antes de comprar.'],
            ['¿Venden cajas cerradas?', 'Las presentaciones y mínimos varían por producto. Indicá si buscás unidades, bolsas o cajas.'],
        ],
    ],
];

function esc(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function whatsapp(string $phone, string $category, string $extra = ''): string
{
    $message = "Hola, quiero cotizar {$category} por mayor en Zona Sur. {$extra}";
    return 'https://wa.me/' . $phone . '?text=' . rawurlencode(trim($message));
}

$bySlug = [];
foreach ($categories as $category) {
    $bySlug[$category['slug']] = $category;
}

foreach ($categories as $category) {
    $canonical = $baseUrl . $category['slug'] . '.html';
    $waMain = whatsapp($phoneWa, $category['short'], 'Quiero consultar estos productos y cantidades:');
    $schema = [
        '@context' => 'https://schema.org',
        '@graph' => [
            [
                '@type' => 'WebPage',
                '@id' => $canonical . '#pagina',
                'url' => $canonical,
                'name' => $category['headline'],
                'description' => $category['description'],
                'inLanguage' => 'es-AR',
                'breadcrumb' => ['@id' => $canonical . '#migas'],
            ],
            [
                '@type' => 'BreadcrumbList',
                '@id' => $canonical . '#migas',
                'itemListElement' => [
                    ['@type' => 'ListItem', 'position' => 1, 'name' => 'Ferretería mayorista', 'item' => $baseUrl],
                    ['@type' => 'ListItem', 'position' => 2, 'name' => $category['short'], 'item' => $canonical],
                ],
            ],
            [
                '@type' => 'Service',
                '@id' => $canonical . '#servicio',
                'name' => $category['name'] . ' en Zona Sur',
                'serviceType' => 'Consulta y cotización mayorista de ' . $category['short'],
                'areaServed' => ['@type' => 'AdministrativeArea', 'name' => 'Zona Sur del Gran Buenos Aires'],
            ],
            [
                '@type' => 'FAQPage',
                '@id' => $canonical . '#preguntas',
                'mainEntity' => array_map(static fn(array $item): array => [
                    '@type' => 'Question',
                    'name' => $item[0],
                    'acceptedAnswer' => ['@type' => 'Answer', 'text' => $item[1]],
                ], $category['faq']),
            ],
        ],
    ];

    $productCards = '';
    foreach ($category['products'] as $index => $product) {
        $number = str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT);
        $productWa = whatsapp($phoneWa, $category['short'], 'Quiero consultar ' . $product[0] . ':');
        $productCards .= '<article class="rubric-product"><div><span>' . $number . '</span><i aria-hidden="true">' . esc($category['icon']) . '</i></div><h3>' . esc($product[0]) . '</h3><p>' . esc($product[1]) . '</p><a href="' . esc($productWa) . '" target="_blank" rel="noopener">Consultar esta familia →</a></article>';
    }

    $audienceCards = '';
    foreach ($category['audiences'] as $index => $audience) {
        $number = str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT);
        $audienceCards .= '<article><span>' . $number . '</span><h3>' . esc($audience[0]) . '</h3><p>' . esc($audience[1]) . '</p></article>';
    }

    $faqHtml = '';
    foreach ($category['faq'] as $item) {
        $faqHtml .= '<details><summary>' . esc($item[0]) . '<span>+</span></summary><p>' . esc($item[1]) . '</p></details>';
    }

    $relatedHtml = '';
    foreach ($categories as $related) {
        if ($related['slug'] === $category['slug']) {
            continue;
        }
        $relatedHtml .= '<a href="' . esc($related['slug']) . '.html"><small>Rubro mayorista</small><strong>' . esc($related['short']) . '</strong><span>' . esc($related['icon']) . ' Ver productos →</span></a>';
    }

    $jsonLd = json_encode($schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
    $title = $category['headline'] . ' | En Zona Sur';

    $html = <<<HTML
<!doctype html>
<html lang="es-AR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{$title}</title>
  <meta name="description" content="{$category['description']}">
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1">
  <meta name="theme-color" content="#171717">
  <link rel="icon" href="/assets/images/favicon.ico" sizes="any">
  <link rel="canonical" href="{$canonical}">
  <link rel="alternate" hreflang="es-AR" href="{$canonical}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&amp;family=Manrope:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="product-pages.css">
  <meta property="og:locale" content="es_AR">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{$category['headline']}">
  <meta property="og:description" content="{$category['lead']}">
  <meta property="og:url" content="{$canonical}">
  <meta property="og:image" content="{$baseUrl}assets/og-ferreteria-en-zona-sur.png">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">{$jsonLd}</script>
</head>
<body class="product-page">
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <div class="topbar"><div class="container topbar-inner"><p>Venta mayorista · {$category['short']} · Zona Sur</p><a href="tel:+5491134388560">{$phoneDisplay}</a></div></div>
  <header class="site-header" id="inicio"><div class="container header-inner">
    <a class="brand" href="index.html" aria-label="En Zona Sur, Ferretería Mayorista, inicio"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="brand-copy"><strong>En Zona Sur</strong><small>Ferretería Mayorista</small></span></a>
    <button class="menu-button" type="button" aria-expanded="false" aria-controls="nav-principal">Menú</button>
    <nav class="nav" id="nav-principal" aria-label="Navegación principal"><a href="#productos">Productos</a><a href="#compradores">Quiénes compran</a><a href="#como-pedir">Cómo pedir</a><a href="#otros-rubros">Otros rubros</a><a class="nav-cta" href="{$waMain}" target="_blank" rel="noopener">Cotizar</a></nav>
  </div></header>

  <main id="contenido">
    <section class="rubric-hero"><div class="container rubric-hero-grid">
      <div><nav class="breadcrumbs" aria-label="Migas de pan"><a href="index.html">Ferretería mayorista</a><span>/</span><b>{$category['short']}</b></nav><p class="eyebrow"><span></span>{$category['eyebrow']}</p><h1>{$category['headline']}</h1><p class="hero-lead">{$category['lead']}</p><div class="hero-actions"><a class="button button-whatsapp" href="{$waMain}" target="_blank" rel="noopener"><span aria-hidden="true">●</span> Cotizar productos</a><a class="button button-ghost" href="#productos">Ver categorías</a></div></div>
      <aside class="rubric-showcase"><small>Rubro destacado</small><i aria-hidden="true">{$category['icon']}</i><strong>{$category['short']}</strong><p>Consultá marcas, medidas, presentaciones y cantidades.</p><div><span>Zona Sur</span><span>Venta mayorista</span></div></aside>
    </div></section>

    <section class="rubric-intro"><div class="container rubric-intro-grid"><div><p class="kicker">Compra por rubro</p><h2>Una consulta más precisa.</h2></div><div><p>{$category['intro']}</p><p>{$category['focus']}</p></div></div></section>

    <section class="section rubric-catalog" id="productos"><div class="container"><div class="section-heading"><div><p class="kicker">Tipos de producto</p><h2>Qué podés consultar.</h2></div><p>Esta selección es orientativa. La disponibilidad, marca, modelo, presentación y mínimos se confirman según cada pedido.</p></div><div class="rubric-product-grid">{$productCards}</div></div></section>

    <section class="section rubric-audiences" id="compradores"><div class="container"><div class="section-heading"><div><p class="kicker light">Atención mayorista</p><h2>Soluciones para cada actividad.</h2></div><p>Organizá los productos por sector, cuadrilla, sucursal, obra o centro de costo para recibir una respuesta más clara.</p></div><div class="rubric-audience-grid">{$audienceCards}</div></div></section>

    <section class="section order-band" id="como-pedir"><div class="container order-grid"><div><p class="kicker light">Cómo cotizar</p><h2>Mandá los datos importantes.</h2><p>Cuanto más concreta sea la lista, mejor se puede revisar disponibilidad, presentaciones y alternativas.</p></div><ol><li><b>01</b><span><strong>Producto</strong>Nombre, marca, modelo, medida o una foto clara.</span></li><li><b>02</b><span><strong>Especificación</strong>Indicá uso, material, talle o requisito técnico cuando corresponda.</span></li><li><b>03</b><span><strong>Cantidad</strong>Unidades, packs, cajas, rollos u otra presentación.</span></li><li><b>04</b><span><strong>Localidad</strong>Decinos dónde estás en Zona Sur y cuándo lo necesitás.</span></li></ol></div></section>

    <section class="section related" id="otros-rubros"><div class="container"><div class="section-heading"><div><p class="kicker">Catálogo multirrubro</p><h2>Completá tu pedido.</h2></div><p>Podés combinar distintas categorías de ferretería en una misma lista mayorista.</p></div><div class="related-grid rubric-related">{$relatedHtml}</div><a class="all-zones-link" href="index.html#catalogo">Volver al catálogo general →</a></div></section>

    <section class="section faq" id="preguntas"><div class="container faq-grid"><div class="faq-title"><p class="kicker">Preguntas frecuentes</p><h2>Antes de cotizar.</h2><p>Si tenés una ficha técnica, foto o planilla, adjuntala al mensaje.</p><a class="phone-link" href="tel:+5491134388560">{$phoneDisplay}</a></div><div class="faq-list">{$faqHtml}</div></div></section>

    <section class="cta-section"><div class="container cta-card"><div><p class="kicker light">{$category['short']} por mayor</p><h2>Enviá tu lista por WhatsApp.</h2></div><div class="cta-action"><p>Atención en Zona Sur</p><a href="{$waMain}" target="_blank" rel="noopener">{$phoneDisplay}<span>→</span></a><small>Productos y cantidades</small></div></div></section>
  </main>

  <footer class="site-footer"><div class="container footer-grid"><a class="brand brand-footer" href="index.html"><span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="brand-copy"><strong>En Zona Sur</strong><small>Ferretería Mayorista</small></span></a><p>Catálogo mayorista para comercios, industrias, obras, talleres y profesionales de Zona Sur.</p><div><a href="#productos">Productos</a><a href="#otros-rubros">Otros rubros</a><a href="#preguntas">Preguntas</a><a href="{$waMain}" target="_blank" rel="noopener">WhatsApp</a></div></div><div class="container footer-bottom"><span>© <span id="year">2026</span> EnZonaSur.com</span><span>{$category['short']} · Zona Sur</span></div></footer>
  <a class="whatsapp-float" href="{$waMain}" target="_blank" rel="noopener" aria-label="Consultar {$category['short']} por WhatsApp"><span aria-hidden="true">●</span><b>WhatsApp</b></a>
  <script src="script.js" defer></script>
</body>
</html>
HTML;

    file_put_contents(__DIR__ . '/' . $category['slug'] . '.html', $html);
}

echo 'Generated ' . count($categories) . " product category pages.\n";

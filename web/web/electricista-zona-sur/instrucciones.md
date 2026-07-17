# INSTRUCCIONES DEFINITIVAS PARA CODEX
# Proyecto: Electricista en Zona Sur

## 0. Propósito de este archivo

Este archivo existe para transformar un proyecto HTML estático que actualmente está orientado a **Electricista en Quilmes / Quilmes** y convertirlo en una web SEO local orientada a:

**Electricista en Zona Sur**

La web final debe quedar publicada con esta estructura pública:

```txt
Home principal:
https://enzonasur.com/electricista-zona-sur/

Landings locales:
https://enzonasur.com/electricista-en-lanus.html
https://enzonasur.com/electricista-en-lomas-de-zamora.html
https://enzonasur.com/electricista-en-banfield.html
https://enzonasur.com/electricista-en-temperley.html
https://enzonasur.com/electricista-en-avellaneda.html
https://enzonasur.com/electricista-en-adrogue.html
https://enzonasur.com/electricista-en-quilmes.html
https://enzonasur.com/electricista-en-burzaco.html

Posts:
https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html
https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html
https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html
0.1 Regla crítica de URLs públicas

La carpeta local del proyecto puede llamarse:

electricista-zona-sur

Pero eso NO significa que todas las URLs públicas deban incluir esa carpeta.

La única URL pública que debe usar /electricista-zona-sur/ es la home principal:

https://enzonasur.com/electricista-zona-sur/

Las landings locales y los posts deben publicarse en raíz del dominio:

https://enzonasur.com/electricista-en-lanus.html
https://enzonasur.com/electricista-en-lomas-de-zamora.html
https://enzonasur.com/electricista-en-banfield.html
https://enzonasur.com/electricista-en-temperley.html
https://enzonasur.com/electricista-en-avellaneda.html
https://enzonasur.com/electricista-en-adrogue.html
https://enzonasur.com/electricista-en-quilmes.html
https://enzonasur.com/electricista-en-burzaco.html
https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html
https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html
https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html
0.2 Regla obligatoria para canonical, og:url, schema y sitemap

Cada página debe usar exactamente la misma URL pública en:

canonical
og:url
schema url
schema @id
BreadcrumbList
sitemap.xml

Ejemplo correcto para Lanús:

https://enzonasur.com/electricista-en-lanus.html

Ejemplo incorrecto para Lanús:

https://enzonasur.com/electricista-zona-sur/electricista-en-lanus.html

No usar la estructura incorrecta en ninguna landing, post, schema, breadcrumb, sitemap ni Open Graph.

1. Objetivo general

Tengo un proyecto HTML estático de electricista actualmente orientado a:

Quilmes
Quilmes
Quilmes
Quilmes
Electricista Quilmes
Barrios de Quilmes

Ahora todo el proyecto debe quedar orientado a:

Zona Sur
GBA Sur
Sur del Gran Buenos Aires
Localidades específicas de Zona Sur

El sitio final debe posicionar servicios de electricista en:

Zona Sur
Lanús
Lomas de Zamora
Banfield
Temperley
Avellaneda
Adrogué
Quilmes
Burzaco
2. Resultado final esperado

El resultado debe ser una web de electricista en Zona Sur con:

index.html orientado a "Electricista en Zona Sur"
landings locales para localidades de Zona Sur
3 posts de blog adaptados a electricidad
metadata SEO consistente
canonicals correctos
Open Graph correcto
schemas correctos
BreadcrumbList correcto
footer enlazado
navegación interna correcta
sitemap correcto
sin URLs mezcladas
sin restos importantes del proyecto anterior de Quilmes
sin enlaces a páginas viejas de Quilmes
sin páginas demo del template enlazadas
3. Reglas generales de edición
No modificar

No modificar:

Diseño visual.
Estructura HTML principal.
Clases CSS.
Rutas CSS.
Rutas JS.
Carpeta assets/.
Imágenes existentes.
Rutas de imágenes.
Sliders.
Carousels.
Menú mobile.
Scripts del template.
Animaciones.
Layout responsive.
Funcionalidad general del template.
Data attributes necesarios para scripts.
Estructura de tabs, sliders, cards o accordions si ya funcionan.
Sí modificar

Sí modificar:

Textos visibles.
Metadata SEO.
Titles.
Meta descriptions.
Meta keywords si existen.
Canonicals.
Open Graph.
H1, H2, H3.
Textos de hero.
Textos de servicios.
Textos de about / sobre nosotros.
Textos de beneficios.
Textos de procesos.
Testimonios si mencionan Quilmes o barrios viejos.
Blog cards.
FAQs visibles.
FAQ Schema.
Electrician Schema.
Breadcrumb Schema.
Footer.
Header.
Enlaces internos.
Sitemap.
Nombres de archivos locales.
Alt text de imágenes cuando mencionen Quilmes, Quilmes o barrios anteriores.
4. Archivos actuales del proyecto

El proyecto actual puede contener archivos como:

index.html
como-saber-si-hay-un-cortocircuito.html
cuando-cambiar-un-tablero-electrico.html
por-que-salta-la-termica-o-el-disyuntor.html
electricista-en-barrio-norte.html
electricista-en-quilmesllito.html
electricista-en-mataderos.html
electricista-en-monte-grande.html
electricista-en-quilmes.html
electricista-en-recoleta.html
electricista-en-san-telmo.html
electricista-en-villa-crespo.html
electricista-en-villa-urquiza.html
sitemap.xml
assets/
5. Archivos finales que deben quedar activos

El proyecto final debe quedar compuesto por:

index.html
electricista-en-lanus.html
electricista-en-lomas-de-zamora.html
electricista-en-banfield.html
electricista-en-temperley.html
electricista-en-avellaneda.html
electricista-en-adrogue.html
electricista-en-quilmes.html
electricista-en-burzaco.html
como-saber-si-hay-un-cortocircuito.html
cuando-cambiar-un-tablero-electrico.html
por-que-salta-la-termica-o-el-disyuntor.html
sitemap.xml
assets/
Archivos viejos que no deben quedar enlazados

No dejar enlazadas como páginas principales las antiguas páginas de Quilmes:

electricista-en-barrio-norte.html
electricista-en-quilmesllito.html
electricista-en-mataderos.html
electricista-en-monte-grande.html
electricista-en-quilmes.html
electricista-en-recoleta.html
electricista-en-san-telmo.html
electricista-en-villa-crespo.html
electricista-en-villa-urquiza.html

Si esos archivos siguen existiendo en disco, no deben aparecer en:

header
footer
sitemap
breadcrumbs
cards internas
secciones de zonas
schemas
enlaces destacados
blog cards
botones
menú mobile
6. Nueva arquitectura SEO final
Página principal

Archivo:

index.html

URL pública:

https://enzonasur.com/electricista-zona-sur/

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-zona-sur/">

Keyword principal:

electricista en Zona Sur

Variantes:

electricista Zona Sur
electricista en GBA Sur
electricista en el sur del Gran Buenos Aires
electricista urgente Zona Sur
electricista 24 horas Zona Sur
electricista matriculado Zona Sur
instalaciones eléctricas Zona Sur
mantenimiento eléctrico Zona Sur
tableros eléctricos Zona Sur
disyuntores y térmicas Zona Sur
Landings locales finales
electricista-en-lanus.html
electricista-en-lomas-de-zamora.html
electricista-en-banfield.html
electricista-en-temperley.html
electricista-en-avellaneda.html
electricista-en-adrogue.html
electricista-en-quilmes.html
electricista-en-burzaco.html
Posts finales
como-saber-si-hay-un-cortocircuito.html
cuando-cambiar-un-tablero-electrico.html
por-que-salta-la-termica-o-el-disyuntor.html
7. Datos de contacto

No inventar datos sensibles.

Si el sitio actual tiene teléfono real confirmado, conservarlo.

Si el teléfono es de ejemplo, usar placeholder:

+54 11 XXXX-XXXX

Href:

tel:+5411XXXXXXXX

WhatsApp placeholder:

https://wa.me/5411XXXXXXXX

Email placeholder:

contacto@enzonasur.com

Zona:

Zona Sur, Buenos Aires

No inventar:

matrícula
dirección exacta
razón social
nombre de empresa
número de WhatsApp real
localidad de oficina física
8. Cambiar orientación SEO anterior
Eliminar foco principal anterior

Revisar y reemplazar menciones principales de:

Quilmes
Quilmes
Quilmes
Quilmes
Barrio Norte
Caballito
Mataderos
Monte Grande
Quilmes
Recoleta
San Telmo
Villa Crespo
Villa Urquiza
Nuevo foco principal

Usar:

Zona Sur
GBA Sur
Sur del Gran Buenos Aires
Lanús
Lomas de Zamora
Banfield
Temperley
Avellaneda
Adrogué
Quilmes
Burzaco
Regla de contexto

No hacer reemplazos mecánicos sin revisar.

Incorrecto:

Electricista en Zona Sur para barrios de Quilmes.

Correcto:

Electricista en Zona Sur para viviendas, comercios, locales, edificios y consorcios de localidades como Lanús, Lomas de Zamora, Banfield, Temperley, Avellaneda, Adrogué, Quilmes y Burzaco.
9. Header

El header debe quedar limpio, sin páginas viejas de Quilmes.

Header en index.html

Usar anclas internas:

<a href="#inicio">Inicio</a>
<a href="#sobre-nosotros">Nosotros</a>
<a href="#servicios">Servicios</a>
<a href="#zonas">Zonas</a>
<a href="#faqs">FAQs</a>
<a href="#blog">Blog</a>
<a href="#contacto">Contacto</a>
Header en landings y posts

Usar enlaces hacia el index con anclas:

<a href="index.html#inicio">Inicio</a>
<a href="index.html#sobre-nosotros">Nosotros</a>
<a href="index.html#servicios">Servicios</a>
<a href="index.html#zonas">Zonas</a>
<a href="index.html#faqs">FAQs</a>
<a href="index.html#blog">Blog</a>
<a href="index.html#contacto">Contacto</a>
CTA principal

Texto:

Pedir presupuesto

o:

Consultar ahora

Href:

tel:+5411XXXXXXXX

o:

https://wa.me/5411XXXXXXXX
Logo

En index.html:

<a href="#inicio">

En páginas internas:

<a href="index.html">

Alt:

alt="Electricista en Zona Sur"
10. Footer global

El footer debe enlazar todas las páginas finales del proyecto.

Columna páginas principales
<a href="index.html">Electricista en Zona Sur</a>
<a href="electricista-en-lanus.html">Electricista en Lanús</a>
<a href="electricista-en-lomas-de-zamora.html">Electricista en Lomas de Zamora</a>
<a href="electricista-en-banfield.html">Electricista en Banfield</a>
<a href="electricista-en-temperley.html">Electricista en Temperley</a>
<a href="electricista-en-avellaneda.html">Electricista en Avellaneda</a>
<a href="electricista-en-adrogue.html">Electricista en Adrogué</a>
<a href="electricista-en-quilmes.html">Electricista en Quilmes</a>
<a href="electricista-en-burzaco.html">Electricista en Burzaco</a>
Columna blog
<a href="como-saber-si-hay-un-cortocircuito.html">Cómo saber si hay un cortocircuito</a>
<a href="cuando-cambiar-un-tablero-electrico.html">Cuándo cambiar un tablero eléctrico</a>
<a href="por-que-salta-la-termica-o-el-disyuntor.html">Por qué salta la térmica o el disyuntor</a>
Columna secciones en index
<a href="#inicio">Inicio</a>
<a href="#sobre-nosotros">Nosotros</a>
<a href="#servicios">Servicios</a>
<a href="#zonas">Zonas</a>
<a href="#faqs">FAQs</a>
<a href="#blog">Blog</a>
<a href="#contacto">Contacto</a>
Columna secciones en páginas internas
<a href="index.html#inicio">Inicio</a>
<a href="index.html#sobre-nosotros">Nosotros</a>
<a href="index.html#servicios">Servicios</a>
<a href="index.html#zonas">Zonas</a>
<a href="index.html#faqs">FAQs</a>
<a href="index.html#blog">Blog</a>
<a href="index.html#contacto">Contacto</a>
Copyright

Reemplazar créditos viejos por:

<p>Copyright © Electricista Zona Sur. Todos los derechos reservados.</p>
<p>Diseñado por <a href="https://enzonasur.com/" target="_blank" rel="noopener">Diseño Web Argentina</a></p>

No dejar créditos del template original.

11. IDs obligatorios en index.html

El index.html debe tener, sin duplicados:

id="inicio"
id="sobre-nosotros"
id="servicios"
id="zonas"
id="beneficios"
id="faqs"
id="blog"
id="contacto"

Si una sección equivalente ya existe con otro nombre, adaptarla sin romper JS o estilos.

12. SEO del index.html
Title
<title>Electricista en Zona Sur | Urgencias, Instalaciones y Tableros</title>
Meta description
<meta name="description" content="Electricista en Zona Sur para urgencias, instalaciones eléctricas, tableros, disyuntores, térmicas, iluminación, mantenimiento y reparaciones en hogares, comercios y consorcios.">
Meta keywords si existen
<meta name="keywords" content="electricista en zona sur, electricista zona sur, electricista urgente zona sur, electricista 24 horas zona sur, electricista matriculado zona sur, tableros eléctricos zona sur, instalaciones eléctricas zona sur">
Canonical
<link rel="canonical" href="https://enzonasur.com/electricista-zona-sur/">
Open Graph
<meta property="og:title" content="Electricista en Zona Sur | Urgencias e Instalaciones">
<meta property="og:description" content="Servicio eléctrico en Zona Sur para urgencias, tableros, térmicas, disyuntores, iluminación, mantenimiento, hogares, comercios y consorcios.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://enzonasur.com/electricista-zona-sur/">
<meta property="og:locale" content="es_AR">
13. Textos base para index.html
Hero

H1:

Electricista en Zona Sur

Subtítulo:

Servicio eléctrico en Zona Sur para urgencias, instalaciones, tableros, térmicas, disyuntores, iluminación, mantenimiento y reparaciones en hogares, comercios, edificios y consorcios.

CTA principal:

Pedir presupuesto

CTA secundario:

Ver servicios
Sobre nosotros

H2:

Electricista en Zona Sur para viviendas, comercios y consorcios

Texto:

Brindamos servicios eléctricos en Zona Sur con atención para casas, departamentos, locales, oficinas, edificios y consorcios. Realizamos reparaciones, instalaciones, mantenimiento eléctrico, revisión de tableros, térmicas, disyuntores, tomas, luminarias y fallas de energía.

Segundo texto si existe:

Trabajamos con diagnóstico claro, comunicación directa y soluciones adaptadas al tipo de instalación. La idea es resolver cada intervención con prolijidad, seguridad y criterio técnico, evitando arreglos improvisados y revisando el origen real de la falla.
Servicios principales

Usar estos servicios:

Urgencias eléctricas
Instalaciones eléctricas
Tableros eléctricos
Térmicas y disyuntores
Iluminación y luminarias
Tomas, enchufes y cableado
Mantenimiento para consorcios
Electricidad para comercios
Por qué elegirnos

H2:

Servicio eléctrico en Zona Sur con atención clara y resolutiva

Beneficios:

Diagnóstico claro
Presupuesto previo
Atención por zona
Soluciones seguras
Trabajos para hogares y comercios
Mantenimiento para edificios y consorcios
Sección zonas

Título:

Electricista en Zona Sur y localidades cercanas

Texto:

Atendemos consultas eléctricas en distintas localidades de Zona Sur, con páginas específicas para quienes buscan electricista en Lanús, Lomas de Zamora, Banfield, Temperley, Avellaneda, Adrogué, Quilmes y Burzaco.

Links:

<a href="electricista-en-lanus.html">Electricista en Lanús</a>
<a href="electricista-en-lomas-de-zamora.html">Electricista en Lomas de Zamora</a>
<a href="electricista-en-banfield.html">Electricista en Banfield</a>
<a href="electricista-en-temperley.html">Electricista en Temperley</a>
<a href="electricista-en-avellaneda.html">Electricista en Avellaneda</a>
<a href="electricista-en-adrogue.html">Electricista en Adrogué</a>
<a href="electricista-en-quilmes.html">Electricista en Quilmes</a>
<a href="electricista-en-burzaco.html">Electricista en Burzaco</a>
14. SEO por landing
Lanús

Archivo:

electricista-en-lanus.html

URL pública:

https://enzonasur.com/electricista-en-lanus.html

Title:

<title>Electricista en Lanús | Urgencias, Tableros e Instalaciones</title>

Meta description:

<meta name="description" content="Electricista en Lanús para urgencias, instalaciones eléctricas, tableros, térmicas, disyuntores, iluminación, enchufes y mantenimiento en hogares, comercios y edificios.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-lanus.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-lanus.html">

H1:

Electricista en Lanús

Texto diferencial:

En Lanús atendemos trabajos eléctricos para casas, departamentos, locales, oficinas y edificios que necesitan resolver cortes parciales, fallas de energía, tableros antiguos, térmicas que saltan o nuevas instalaciones. Revisamos cada caso según el consumo real del espacio y el estado de la instalación.
Lomas de Zamora

Archivo:

electricista-en-lomas-de-zamora.html

URL pública:

https://enzonasur.com/electricista-en-lomas-de-zamora.html

Title:

<title>Electricista en Lomas de Zamora | Reparaciones y Mantenimiento</title>

Meta description:

<meta name="description" content="Servicio de electricista en Lomas de Zamora para reparaciones, urgencias, instalaciones eléctricas, tableros, disyuntores, térmicas, iluminación y mantenimiento.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-lomas-de-zamora.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-lomas-de-zamora.html">

H1:

Electricista en Lomas de Zamora

Texto diferencial:

En Lomas de Zamora realizamos reparaciones e instalaciones eléctricas para viviendas, comercios, edificios y consorcios. Podemos revisar tableros, circuitos, disyuntores, tomas, luminarias y problemas frecuentes de consumo o cortes en sectores específicos.
Banfield

Archivo:

electricista-en-banfield.html

URL pública:

https://enzonasur.com/electricista-en-banfield.html

Title:

<title>Electricista en Banfield | Servicio Eléctrico a Domicilio</title>

Meta description:

<meta name="description" content="Electricista en Banfield para urgencias, tableros eléctricos, instalaciones, térmicas, disyuntores, iluminación, tomas, enchufes y mantenimiento general.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-banfield.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-banfield.html">

H1:

Electricista en Banfield

Texto diferencial:

En Banfield trabajamos con casas, departamentos, locales y propiedades que necesitan resolver fallas eléctricas, mejorar protecciones, renovar luminarias o sumar nuevos puntos de consumo. La atención se orienta a detectar la causa del problema antes de avanzar con la reparación.
Temperley

Archivo:

electricista-en-temperley.html

URL pública:

https://enzonasur.com/electricista-en-temperley.html

Title:

<title>Electricista en Temperley | Tableros, Térmicas y Reparaciones</title>

Meta description:

<meta name="description" content="Electricista en Temperley para reparación de fallas, tableros, térmicas, disyuntores, instalaciones eléctricas, iluminación y mantenimiento en hogares y comercios.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-temperley.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-temperley.html">

H1:

Electricista en Temperley

Texto diferencial:

En Temperley atendemos consultas eléctricas para viviendas familiares, comercios y edificios con problemas de térmicas que saltan, disyuntores, cortes parciales, tomacorrientes deteriorados o instalaciones que necesitan mantenimiento y revisión técnica.
Avellaneda

Archivo:

electricista-en-avellaneda.html

URL pública:

https://enzonasur.com/electricista-en-avellaneda.html

Title:

<title>Electricista en Avellaneda | Urgencias e Instalaciones Eléctricas</title>

Meta description:

<meta name="description" content="Servicio de electricista en Avellaneda para urgencias, instalaciones eléctricas, tableros, térmicas, disyuntores, iluminación, comercios, oficinas y viviendas.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-avellaneda.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-avellaneda.html">

H1:

Electricista en Avellaneda

Texto diferencial:

En Avellaneda ofrecemos servicio eléctrico para casas, departamentos, oficinas, locales y edificios. Podemos revisar fallas en tableros, circuitos sobrecargados, luminarias, enchufes, protecciones eléctricas y necesidades de mantenimiento preventivo.
Adrogué

Archivo:

electricista-en-adrogue.html

URL pública:

https://enzonasur.com/electricista-en-adrogue.html

Title:

<title>Electricista en Adrogué | Reparaciones, Tableros y Mantenimiento</title>

Meta description:

<meta name="description" content="Electricista en Adrogué para reparaciones eléctricas, urgencias, tableros, disyuntores, térmicas, tomas, iluminación y mantenimiento en casas y comercios.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-adrogue.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-adrogue.html">

H1:

Electricista en Adrogué

Texto diferencial:

En Adrogué realizamos trabajos eléctricos para casas, comercios y propiedades que necesitan resolver fallas, actualizar tableros, colocar luminarias, revisar térmicas o mejorar la seguridad general de la instalación.
Quilmes

Archivo:

electricista-en-quilmes.html

URL pública:

https://enzonasur.com/electricista-en-quilmes.html

Title:

<title>Electricista en Quilmes | Servicio Eléctrico para Hogares y Comercios</title>

Meta description:

<meta name="description" content="Electricista en Quilmes para urgencias, reparaciones, instalaciones eléctricas, tableros, disyuntores, térmicas, iluminación y mantenimiento para viviendas y comercios.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-quilmes.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-quilmes.html">

H1:

Electricista en Quilmes

Texto diferencial:

En Quilmes brindamos servicio eléctrico para viviendas, comercios, oficinas y edificios que necesitan reparaciones, revisión de tableros, colocación de tomas, iluminación o solución de cortes y fallas frecuentes.
Burzaco

Archivo:

electricista-en-burzaco.html

URL pública:

https://enzonasur.com/electricista-en-burzaco.html

Title:

<title>Electricista en Burzaco | Instalaciones, Urgencias y Mantenimiento</title>

Meta description:

<meta name="description" content="Electricista en Burzaco para instalaciones eléctricas, urgencias, tableros, térmicas, disyuntores, reparación de fallas, iluminación y mantenimiento.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/electricista-en-burzaco.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/electricista-en-burzaco.html">

H1:

Electricista en Burzaco

Texto diferencial:

En Burzaco atendemos instalaciones y reparaciones eléctricas para casas, comercios y espacios de trabajo. Revisamos fallas, tableros, protecciones, iluminación, tomas y circuitos que requieren una solución segura y ordenada.
15. Regla anti contenido duplicado

No hacer landings clonadas.

Cada página debe tener:

H1 único
Title único
Meta description única
Hero adaptado
Párrafo sobre nosotros adaptado
Servicios con pequeñas variaciones
FAQs adaptadas a la localidad
Schema adaptado
Canonical propio
OG URL propio
Breadcrumb propio
Footer con todas las páginas

Cada landing debe diferir al menos un 40% respecto al index y respecto a las demás landings.

No repetir la misma estructura textual cambiando solo el nombre de la localidad.

Ejemplo incorrecto:

En Lanús realizamos trabajos eléctricos para hogares y comercios.
En Banfield realizamos trabajos eléctricos para hogares y comercios.
En Quilmes realizamos trabajos eléctricos para hogares y comercios.

Ejemplo correcto:

En Lanús atendemos trabajos eléctricos para casas, departamentos, locales, oficinas y edificios que necesitan resolver cortes parciales, fallas de energía o tableros antiguos.

En Banfield trabajamos con casas, departamentos y propiedades que necesitan mejorar protecciones, renovar luminarias o sumar nuevos puntos de consumo.

En Quilmes brindamos servicio eléctrico para viviendas, comercios, oficinas y edificios que necesitan revisión de tableros, colocación de tomas, iluminación o solución de cortes.
16. FAQs para index.html
FAQ 1

Pregunta:

¿Realizan trabajos eléctricos en Zona Sur?

Respuesta:

Sí, realizamos servicios eléctricos en distintas localidades de Zona Sur, incluyendo Lanús, Lomas de Zamora, Banfield, Temperley, Avellaneda, Adrogué, Quilmes, Burzaco y zonas cercanas.
FAQ 2

Pregunta:

¿Qué servicios eléctricos ofrecen?

Respuesta:

Realizamos urgencias eléctricas, instalaciones, reparación de fallas, tableros, térmicas, disyuntores, iluminación, tomas, enchufes, cableado y mantenimiento general.
FAQ 3

Pregunta:

¿Atienden urgencias eléctricas?

Respuesta:

Podemos orientar consultas urgentes por cortes de luz, térmicas que saltan, disyuntores, chispazos, enchufes quemados, olor a cable recalentado o sectores sin energía.
FAQ 4

Pregunta:

¿Trabajan para casas, comercios y consorcios?

Respuesta:

Sí, atendemos viviendas particulares, locales comerciales, oficinas, edificios y consorcios que necesitan reparaciones, instalaciones o mantenimiento eléctrico.
FAQ 5

Pregunta:

¿Puedo pedir presupuesto por WhatsApp?

Respuesta:

Sí, podés enviar fotos, ubicación, descripción de la falla y detalles del trabajo para recibir una orientación inicial antes de coordinar el servicio.
FAQ 6

Pregunta:

¿Cuándo conviene revisar un tablero eléctrico?

Respuesta:

Conviene revisarlo cuando saltan las térmicas, hay olor a quemado, se agregan equipos de alto consumo, el tablero es antiguo o no cuenta con protecciones adecuadas.
17. FAQs por localidad

Cada landing debe tener entre 5 y 6 preguntas adaptadas a su localidad.

Ejemplo para Lanús:

¿Realizan trabajos eléctricos en Lanús?
Sí, realizamos servicios eléctricos en Lanús para casas, departamentos, comercios, oficinas, edificios y consorcios.

Ejemplo para Lomas de Zamora:

¿Atienden urgencias eléctricas en Lomas de Zamora?
Sí, podemos orientar consultas por cortes, térmicas que saltan, disyuntores, enchufes quemados, chispazos o problemas de energía en Lomas de Zamora.

Ejemplo para Banfield:

¿Hacen instalación de tableros eléctricos en Banfield?
Sí, podemos revisar, ordenar o reemplazar tableros eléctricos en viviendas, locales y edificios de Banfield según el estado de la instalación.

Ejemplo para Quilmes:

¿Realizan mantenimiento eléctrico en Quilmes?
Sí, atendemos consultas de mantenimiento eléctrico en Quilmes para viviendas, comercios, oficinas y edificios que necesitan revisión de tableros, luminarias, tomas o protecciones.

Ejemplo para Burzaco:

¿Atienden reparaciones eléctricas en Burzaco?
Sí, podemos revisar fallas eléctricas en Burzaco relacionadas con térmicas, disyuntores, enchufes, iluminación, tableros o circuitos con problemas.

No dejar FAQs que digan Quilmes o Quilmes.

18. FAQ Schema

Cada página debe tener FAQPage Schema.

Las preguntas y respuestas del schema deben coincidir exactamente con las FAQs visibles.

No dejar FAQ Schema viejo de Quilmes.

No dejar una FAQ visible de Lanús con schema de Quilmes.

Estructura base:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Realizan trabajos eléctricos en Zona Sur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, realizamos servicios eléctricos en distintas localidades de Zona Sur, incluyendo Lanús, Lomas de Zamora, Banfield, Temperley, Avellaneda, Adrogué, Quilmes, Burzaco y zonas cercanas."
      }
    }
  ]
}
</script>

Completar con todas las FAQs visibles de cada página.

19. Electrician Schema

Cada página debe tener schema adaptado.

Schema del index
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://enzonasur.com/electricista-zona-sur/#electrician",
  "name": "Electricista en Zona Sur",
  "url": "https://enzonasur.com/electricista-zona-sur/",
  "telephone": "+54 11 XXXX-XXXX",
  "email": "contacto@enzonasur.com",
  "description": "Servicio de electricista en Zona Sur para urgencias, instalaciones eléctricas, tableros, térmicas, disyuntores, iluminación, mantenimiento y reparaciones en hogares, comercios y consorcios.",
  "areaServed": [
    {
      "@type": "Place",
      "name": "Zona Sur"
    },
    {
      "@type": "Place",
      "name": "Lanús"
    },
    {
      "@type": "Place",
      "name": "Lomas de Zamora"
    },
    {
      "@type": "Place",
      "name": "Banfield"
    },
    {
      "@type": "Place",
      "name": "Temperley"
    },
    {
      "@type": "Place",
      "name": "Avellaneda"
    },
    {
      "@type": "Place",
      "name": "Adrogué"
    },
    {
      "@type": "Place",
      "name": "Quilmes"
    },
    {
      "@type": "Place",
      "name": "Burzaco"
    }
  ],
  "priceRange": "$$"
}
</script>
Schema para landing Lanús
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://enzonasur.com/electricista-en-lanus.html#electrician",
  "name": "Electricista en Lanús",
  "url": "https://enzonasur.com/electricista-en-lanus.html",
  "telephone": "+54 11 XXXX-XXXX",
  "email": "contacto@enzonasur.com",
  "description": "Servicio de electricista en Lanús para urgencias, instalaciones eléctricas, tableros, térmicas, disyuntores, iluminación, mantenimiento y reparaciones.",
  "areaServed": [
    {
      "@type": "Place",
      "name": "Lanús"
    },
    {
      "@type": "Place",
      "name": "Zona Sur"
    }
  ],
  "priceRange": "$$"
}
</script>
Regla para todas las landings

Cada landing debe cambiar:

@id
name
url
description
areaServed
addressLocality si existe
canonical
og:url
breadcrumb

El @id de cada landing debe usar la URL raíz de esa landing:

https://enzonasur.com/electricista-en-lanus.html#electrician
https://enzonasur.com/electricista-en-lomas-de-zamora.html#electrician
https://enzonasur.com/electricista-en-banfield.html#electrician
https://enzonasur.com/electricista-en-temperley.html#electrician
https://enzonasur.com/electricista-en-avellaneda.html#electrician
https://enzonasur.com/electricista-en-adrogue.html#electrician
https://enzonasur.com/electricista-en-quilmes.html#electrician
https://enzonasur.com/electricista-en-burzaco.html#electrician

Nunca usar:

https://enzonasur.com/electricista-zona-sur/electricista-en-lanus.html#electrician

Eso está mal para este proyecto.

20. Breadcrumb Schema

Cada página debe tener BreadcrumbList con la misma URL que canonical, og:url, schema y sitemap.

Index
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://enzonasur.com/electricista-zona-sur/#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Electricista en Zona Sur",
      "item": "https://enzonasur.com/electricista-zona-sur/"
    }
  ]
}
</script>
Landing Lanús
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://enzonasur.com/electricista-en-lanus.html#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Electricista en Zona Sur",
      "item": "https://enzonasur.com/electricista-zona-sur/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Electricista en Lanús",
      "item": "https://enzonasur.com/electricista-en-lanus.html"
    }
  ]
}
</script>
Regla para todas las landings

El breadcrumb de cada landing debe usar:

Position 1:
Electricista en Zona Sur
https://enzonasur.com/electricista-zona-sur/

Position 2:
Electricista en [LOCALIDAD]
https://enzonasur.com/electricista-en-[localidad].html

Ejemplo correcto:

https://enzonasur.com/electricista-en-banfield.html

Ejemplo incorrecto:

https://enzonasur.com/electricista-zona-sur/electricista-en-banfield.html
21. Blog posts

Mantener estos 3 posts:

como-saber-si-hay-un-cortocircuito.html
cuando-cambiar-un-tablero-electrico.html
por-que-salta-la-termica-o-el-disyuntor.html

Adaptar sus textos para que mencionen Zona Sur cuando corresponda.

Post 1

Archivo:

como-saber-si-hay-un-cortocircuito.html

URL pública:

https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html

Title:

<title>Cómo saber si hay un cortocircuito | Electricista Zona Sur</title>

Meta description:

<meta name="description" content="Conocé las señales de un cortocircuito, qué riesgos puede generar y cuándo conviene llamar a un electricista en Zona Sur.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html">

Breadcrumb @id:

https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html#breadcrumb
Post 2

Archivo:

cuando-cambiar-un-tablero-electrico.html

URL pública:

https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html

Title:

<title>Cuándo cambiar un tablero eléctrico | Electricista Zona Sur</title>

Meta description:

<meta name="description" content="Señales para saber cuándo conviene cambiar o modernizar un tablero eléctrico en una vivienda, comercio, oficina o consorcio de Zona Sur.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html">

Breadcrumb @id:

https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html#breadcrumb
Post 3

Archivo:

por-que-salta-la-termica-o-el-disyuntor.html

URL pública:

https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html

Title:

<title>Por qué salta la térmica o el disyuntor | Electricista Zona Sur</title>

Meta description:

<meta name="description" content="Conocé por qué puede saltar una térmica o un disyuntor, qué significa cada falla y cuándo pedir una revisión eléctrica en Zona Sur.">

Canonical:

<link rel="canonical" href="https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html">

OG URL:

<meta property="og:url" content="https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html">

Breadcrumb @id:

https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html#breadcrumb
22. Breadcrumb Schema para posts

Cada post debe tener BreadcrumbList.

Ejemplo para post de cortocircuito:

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Electricista en Zona Sur",
      "item": "https://enzonasur.com/electricista-zona-sur/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cómo saber si hay un cortocircuito",
      "item": "https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html"
    }
  ]
}
</script>
23. Blog cards

En index y landings, las cards de blog deben apuntar a:

<a href="como-saber-si-hay-un-cortocircuito.html">Cómo saber si hay un cortocircuito</a>
<a href="cuando-cambiar-un-tablero-electrico.html">Cuándo cambiar un tablero eléctrico</a>
<a href="por-que-salta-la-termica-o-el-disyuntor.html">Por qué salta la térmica o el disyuntor</a>

No dejar links a:

blog-details.html
blog.html si no existe página blog final
posts viejos
páginas demo
posts de Quilmes
24. Testimonios

Si hay testimonios que mencionan Quilmes, Quilmes o barrios viejos, reescribirlos.

Ejemplos:

Consultamos por una falla que hacía saltar la térmica y nos orientaron con claridad antes de coordinar el trabajo. Revisaron el tablero y explicaron la solución antes de avanzar.
Necesitábamos revisar la instalación de un local porque había cortes en un sector. Detectaron el problema y dejaron todo funcionando correctamente.
Pedimos mantenimiento eléctrico para un edificio en Zona Sur y resolvieron varias fallas de iluminación, tomas y protecciones con buena comunicación durante todo el proceso.

Firmas sugeridas:

Cliente residencial
Comercio de Zona Sur
Administración de edificio

No inventar nombres personales completos.

25. Sitemap.xml actualizado

Actualizar sitemap.xml con estas URLs finales exactas:

<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://enzonasur.com/electricista-zona-sur/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-lanus.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-lomas-de-zamora.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-banfield.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-temperley.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-avellaneda.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-adrogue.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-quilmes.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/electricista-en-burzaco.html</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html</loc>
    <priority>0.7</priority>
  </url>
</urlset>

No incluir en sitemap:

https://enzonasur.com/electricista-zona-sur/electricista-en-lanus.html
https://enzonasur.com/electricista-zona-sur/electricista-en-lomas-de-zamora.html
https://enzonasur.com/electricista-zona-sur/electricista-en-banfield.html
https://enzonasur.com/electricista-zona-sur/electricista-en-temperley.html
https://enzonasur.com/electricista-zona-sur/electricista-en-avellaneda.html
https://enzonasur.com/electricista-zona-sur/electricista-en-adrogue.html
https://enzonasur.com/electricista-zona-sur/electricista-en-quilmes.html
https://enzonasur.com/electricista-zona-sur/electricista-en-burzaco.html
26. Revisión obligatoria de restos del proyecto anterior

Antes de terminar, buscar en todos los HTML editables si quedaron restos de:

Quilmes
Quilmes
Quilmes
Quilmes
Barrio Norte
Caballito
Mataderos
Monte Grande
Quilmes
Recoleta
San Telmo
Villa Crespo
Villa Urquiza

No puede quedar ninguna mención principal vieja en:

title
meta description
H1
H2 importantes
FAQs
schemas
breadcrumbs
footer
header
cards
sitemap
canonical
og:url
schema @id
schema url

Si queda alguna mención vieja en un archivo no activo, ese archivo no debe estar enlazado desde ningún lugar.

27. Checklist final obligatorio

Antes de terminar, verificar:

No quedan menciones principales a Quilmes o Quilmes.
No quedan links a páginas viejas de Quilmes.
No quedan canonicals viejos.
No quedan og:url viejos.
No quedan schemas con URLs viejas.
No quedan breadcrumbs con URLs viejas.
No quedan URLs incorrectas con /electricista-zona-sur/ en landings locales.
index.html habla de Electricista en Zona Sur.
Las landings nuevas existen.
Cada landing tiene H1 único.
Cada landing tiene title único.
Cada landing tiene meta description única.
Cada landing tiene canonical propio.
Cada landing tiene og:url propio.
Cada landing tiene FAQ visible propia.
Cada landing tiene FAQ Schema propio.
Cada landing tiene Electrician Schema propio.
Cada landing tiene BreadcrumbList propio.
El footer enlaza todas las páginas finales.
Los 3 posts están adaptados a Zona Sur.
Los posts usan canonicals de raíz del dominio.
Los posts usan og:url de raíz del dominio.
Los posts tienen BreadcrumbList correcto.
El sitemap incluye solo URLs finales.
La home usa:
https://enzonasur.com/electricista-zona-sur/
Las landings usan raíz:
https://enzonasur.com/electricista-en-lanus.html
https://enzonasur.com/electricista-en-lomas-de-zamora.html
https://enzonasur.com/electricista-en-banfield.html
https://enzonasur.com/electricista-en-temperley.html
https://enzonasur.com/electricista-en-avellaneda.html
https://enzonasur.com/electricista-en-adrogue.html
https://enzonasur.com/electricista-en-quilmes.html
https://enzonasur.com/electricista-en-burzaco.html
No se modificaron CSS, JS ni assets.
No se rompió el menú mobile.
No se rompieron sliders o carousels.
No se inventaron datos sensibles.
28. Resultado esperado

El resultado final debe ser una web SEO local completa para:

Electricista en Zona Sur

Con landings para:

Lanús
Lomas de Zamora
Banfield
Temperley
Avellaneda
Adrogué
Quilmes
Burzaco

Y blog orientado a consultas eléctricas:

cortocircuitos
tableros eléctricos
térmicas y disyuntores

El sitio debe quedar listo para publicarse con esta arquitectura:

https://enzonasur.com/electricista-zona-sur/
https://enzonasur.com/electricista-en-lanus.html
https://enzonasur.com/electricista-en-lomas-de-zamora.html
https://enzonasur.com/electricista-en-banfield.html
https://enzonasur.com/electricista-en-temperley.html
https://enzonasur.com/electricista-en-avellaneda.html
https://enzonasur.com/electricista-en-adrogue.html
https://enzonasur.com/electricista-en-quilmes.html
https://enzonasur.com/electricista-en-burzaco.html
https://enzonasur.com/como-saber-si-hay-un-cortocircuito.html
https://enzonasur.com/cuando-cambiar-un-tablero-electrico.html
https://enzonasur.com/por-que-salta-la-termica-o-el-disyuntor.html

sin depender de las páginas anteriores de Electricista en Quilmes.
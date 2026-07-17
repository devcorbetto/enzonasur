# INSTRUCCIONES.md — Finalización web Endocrinología Infantil en Zona Sur## Objetivo generalTerminar la web estática del proyecto `ENDOCRINOLOGO`, orientada a SEO para la keyword principal:**Endocrinólogo infantil en Zona Sur**y sus landings locales:- Endocrinólogo infantil en Quilmes- Endocrinólogo infantil en Lomas de Zamora- Endocrinólogo infantil en Banfield- Endocrinólogo infantil en Lanús- Endocrinólogo infantil en Avellaneda- Endocrinólogo infantil en BerazateguiLa web debe quedar completamente en español, sin textos demo en inglés, con header/footer consistentes, schemas correctos, canonicals correctos, enlaces internos bien armados, enlaces ancla funcionales en el index y sin contenido falso de comentarios/demo.---## Estructura actual del proyectoArchivos principales existentes:```txtindex.htmlblog.htmlblog-single-post.htmlassets/
A partir de esta base se deben crear o completar las páginas necesarias.
El archivo index.html actual es la página principal base para endocrinología en Zona Sur. Ya contiene contenido orientado a endocrinología, diabetes, tiroides, obesidad, metabolismo, alteraciones hormonales, endocrinología pediátrica y osteoporosis. Usar esa estructura como base del sitio.

Prioridad SEO principal
Aunque el index actual está redactado como “Endocrinólogo en Zona Sur”, la nueva orientación del proyecto debe ser:
Endocrinólogo infantil en Zona SurEndocrinología pediátrica en Zona SurEspecialista en crecimiento infantilPubertad precoz en niñosDiabetes infantilTiroides en niñosObesidad infantilAlteraciones hormonales infantiles
Actualizar textos donde corresponda para que el foco principal sea endocrinología infantil, sin eliminar por completo menciones generales a endocrinología, diabetes, tiroides y metabolismo.

Dominio y URLs finales
El dominio final del sitio será:
https://enzonasur.com/endocrinologo-infantil-zona-sur
Importante: aunque el archivo local sea index.html, el canonical/schema debe apuntar a:
https://enzonasur.com/endocrinologo-infantil-zona-sur
Las landings locales NO deben tratarse como subcarpetas. Deben ser URLs individuales al mismo nivel:
https://enzonasur.com/endocrinologo-infantil-quilmeshttps://enzonasur.com/endocrinologo-infantil-lomas-de-zamorahttps://enzonasur.com/endocrinologo-infantil-banfieldhttps://enzonasur.com/endocrinologo-infantil-lanushttps://enzonasur.com/endocrinologo-infantil-avellanedahttps://enzonasur.com/endocrinologo-infantil-berazategui
No usar estructuras tipo:
/endocrinologo-infantil-zona-sur/endocrinologo-infantil-quilmes/endocrinologo-infantil-zona-sur/quilmes/ciudades/quilmes
Cada landing debe tener su canonical propio, por ejemplo:
<link rel="canonical" href="https://enzonasur.com/endocrinologo-infantil-quilmes">

Archivos a crear
Crear las siguientes landings:
endocrinologo-infantil-en-quilmes.htmlendocrinologo-infantil-en-lomas-de-zamora.htmlendocrinologo-infantil-en-banfield.htmlendocrinologo-infantil-en-lanus.htmlendocrinologo-infantil-en-avellaneda.htmlendocrinologo-infantil-en-berazategui.html
Crear también, si no existen:
about.htmlcontact.htmlfaq.html
Crear 3 single posts:
crecimiento-infantil-cuando-consultar.htmlpubertad-precoz-en-ninos.htmldiabetes-infantil-senales-alerta.html
Mantener blog.html como listado general de artículos.

Links ancla obligatorios en index.html
El index debe usar navegación con links ancla para moverse dentro de la página principal.
Agregar IDs a secciones principales:
<section id="inicio" class="slider"><section id="servicios" class="services-layout1 services-carousel"><section id="sobre-nosotros" class="about-layout2 pb-0"><section id="especialidades" class="team-layout2 pb-80"><section id="proceso" class="work-process work-process-carousel pt-130 pb-0 bg-overlay bg-overlay-secondary"><section id="faq" class="faq pt-120 pb-70"><section id="blog" class="blog-grid pb-50"><section id="contacto">
En el menú del index, usar enlaces ancla:
<a href="#inicio">Inicio</a><a href="#sobre-nosotros">Nosotros</a><a href="#servicios">Servicios</a><a href="#especialidades">Especialidades</a><a href="#faq">FAQ</a><a href="#blog">Blog</a><a href="#contacto">Contacto</a>
Para páginas internas, usar enlaces hacia el index con ancla:
<a href="index.html#inicio">Inicio</a><a href="index.html#sobre-nosotros">Nosotros</a><a href="index.html#servicios">Servicios</a><a href="index.html#especialidades">Especialidades</a><a href="index.html#faq">FAQ</a><a href="index.html#blog">Blog</a><a href="index.html#contacto">Contacto</a>

Header global
Revisar y corregir el header en todos los archivos:


index.html


blog.html


blog-single-post.html


los 3 nuevos single posts


landings de ciudad


about/contact/faq si se crean


El header debe estar completamente en español.
Eliminar o traducir cualquier texto como:
HomeAboutServicesDoctorsContactBlog DetailsSearchShopDepartmentsAppointmentTestimonialsSign InSign UpPrivacy PolicyTerms & ConditionsEmergency CasesOpening Hours
Menú sugerido para index:
InicioNosotrosServiciosEspecialidadesCiudadesFAQBlogContacto
Dropdown de ciudades:
Endocrinólogo infantil en QuilmesEndocrinólogo infantil en Lomas de ZamoraEndocrinólogo infantil en BanfieldEndocrinólogo infantil en LanúsEndocrinólogo infantil en AvellanedaEndocrinólogo infantil en Berazategui
Enlaces locales:
<a href="endocrinologo-infantil-en-quilmes.html">Quilmes</a><a href="endocrinologo-infantil-en-lomas-de-zamora.html">Lomas de Zamora</a><a href="endocrinologo-infantil-en-banfield.html">Banfield</a><a href="endocrinologo-infantil-en-lanus.html">Lanús</a><a href="endocrinologo-infantil-en-avellaneda.html">Avellaneda</a><a href="endocrinologo-infantil-en-berazategui.html">Berazategui</a>

Footer global
El footer debe quedar igual o muy similar en todos los archivos.
Debe estar en español.
Debe incluir enlaces internos a:
InicioNosotrosServiciosEspecialidadesFAQBlogContactoEndocrinólogo infantil en QuilmesEndocrinólogo infantil en Lomas de ZamoraEndocrinólogo infantil en BanfieldEndocrinólogo infantil en LanúsEndocrinólogo infantil en AvellanedaEndocrinólogo infantil en Berazategui
Datos de contacto genéricos:
Zona Sur+54 11 1234-5678contacto@enzonasur.com
Eliminar redes sociales falsas o links demo.
El copyright debe decir exactamente:
<p>  Copyright &copy; <script>document.write(new Date().getFullYear())</script> Endocrinólogo Infantil Zona Sur. Todos los derechos reservados. Diseñado por   <a href="https://enzonasur.com/" target="_blank">enzonasur.com</a></p>
No debe quedar:
MedcityDataSoft7oroofThemeforestAll Rights ReservedWith Love bytextos en inglés

Corrección del index.html
El index actual tiene buena base visual, pero debe corregirse para endocrinología infantil.
Cambiar el foco del H1:
<h1 class="slide__title">Endocrinólogo infantil en Zona Sur</h1>
Mantener H1 corto. No usar H1 demasiado largo.
Ejemplo correcto:
Endocrinólogo infantil en Zona Sur
Evitar:
Endocrinólogo infantil en Zona Sur para el cuidado integral hormonal, metabólico y endocrino de niños y adolescentes
Actualizar el hero para que mencione:
Atención especializada para crecimiento infantil, pubertad precoz o tardía, diabetes infantil, tiroides en niños, obesidad infantil y alteraciones hormonales pediátricas.

Servicios principales del index
En la sección de servicios, reemplazar servicios generales por servicios de endocrinología infantil.
Servicios sugeridos:


Crecimiento infantil


Pubertad precoz o tardía


Diabetes infantil


Tiroides en niños


Obesidad infantil y metabolismo


Alteraciones hormonales pediátricas


Trastornos del calcio, vitamina D y salud ósea


Segunda opinión endocrinológica pediátrica


Usar títulos compactos:
Crecimiento infantilPubertad precozDiabetes infantilTiroides en niñosObesidad infantilHormonas pediátricas

FAQ en index y landings de ciudad
El index actual trae una sección FAQ con mucho contenido demo en inglés. Debe limpiarse por completo.
Eliminar textos como:
Emergency CasesOpening Hours2020 Patient ReportsWhat Payment Methods Are Available?Which Plan Is Right For Me?Do I have to commit to a contract?
Reemplazar por FAQ real para endocrinología infantil.
FAQ Zona Sur
Preguntas sugeridas:


¿Cuándo consultar con un endocrinólogo infantil en Zona Sur?


¿Qué problemas atiende la endocrinología pediátrica?


¿Cuándo preocuparse por el crecimiento de un niño?


¿Qué es la pubertad precoz?


¿La obesidad infantil puede tener causas hormonales?


¿Cuándo revisar la tiroides en niños?


¿Qué señales pueden indicar diabetes infantil?


¿Se puede hacer seguimiento endocrino por teleconsulta?


Cada pregunta debe estar visible en el HTML y también en schema FAQPage.
FAQ por ciudad
Cada landing debe tener FAQ visible + schema FAQPage, adaptado a su ciudad.
Quilmes:
endocrinólogo infantil en Quilmesendocrinología pediátrica en Quilmesconsulta hormonal infantil en Quilmes
Lomas de Zamora:
endocrinólogo infantil en Lomas de Zamoraendocrinología pediátrica en Lomas de Zamoraconsulta hormonal infantil en Lomas de Zamora
Banfield:
endocrinólogo infantil en Banfieldendocrinología pediátrica en Banfieldconsulta hormonal infantil en Banfield
Lanús:
endocrinólogo infantil en Lanúsendocrinología pediátrica en Lanúsconsulta hormonal infantil en Lanús
Avellaneda:
endocrinólogo infantil en Avellanedaendocrinología pediátrica en Avellanedaconsulta hormonal infantil en Avellaneda
Berazategui:
endocrinólogo infantil en Berazateguiendocrinología pediátrica en Berazateguiconsulta hormonal infantil en Berazategui

Schema para index
En index.html, usar canonical:
<link rel="canonical" href="https://enzonasur.com/endocrinologo-infantil-zona-sur">
Schema recomendado:
<script type="application/ld+json">{  "@context": "https://schema.org",  "@type": "MedicalClinic",  "@id": "https://enzonasur.com/endocrinologo-infantil-zona-sur#medicalclinic",  "name": "Endocrinólogo infantil en Zona Sur",  "url": "https://enzonasur.com/endocrinologo-infantil-zona-sur",  "description": "Consulta de endocrinología infantil en Zona Sur para crecimiento, pubertad, diabetes infantil, tiroides en niños, obesidad infantil y alteraciones hormonales pediátricas.",  "medicalSpecialty": "Pediatric Endocrinology",  "telephone": "+54 11 1234-5678",  "address": {    "@type": "PostalAddress",    "addressCountry": "AR",    "addressLocality": "Zona Sur"  },  "areaServed": [    { "@type": "Country", "name": "Zona Sur" },    { "@type": "City", "name": "Quilmes" },    { "@type": "City", "name": "Lomas de Zamora" },    { "@type": "City", "name": "Berazategui" },    { "@type": "City", "name": "Banfield" },    { "@type": "City", "name": "Lanús" },    { "@type": "City", "name": "Avellaneda" }  ],  "availableService": [    "Consulta de endocrinología infantil",    "Valoración de crecimiento infantil",    "Pubertad precoz o tardía",    "Diabetes infantil",    "Tiroides en niños",    "Obesidad infantil",    "Alteraciones hormonales pediátricas",    "Salud ósea y vitamina D"  ]}</script>
También agregar schema FAQPage con las preguntas visibles del FAQ.

Schema para landings de ciudad
Cada landing debe tener canonical propio y schema MedicalClinic.
Ejemplo Quilmes:
<link rel="canonical" href="https://enzonasur.com/endocrinologo-infantil-quilmes">
Schema Quilmes:
{  "@context": "https://schema.org",  "@type": "MedicalClinic",  "@id": "https://enzonasur.com/endocrinologo-infantil-quilmes#medicalclinic",  "name": "Endocrinólogo infantil en Quilmes",  "url": "https://enzonasur.com/endocrinologo-infantil-quilmes",  "description": "Consulta de endocrinología infantil en Quilmes para crecimiento, pubertad, diabetes infantil, tiroides en niños, obesidad infantil y alteraciones hormonales pediátricas.",  "medicalSpecialty": "Pediatric Endocrinology",  "telephone": "+54 11 1234-5678",  "address": {    "@type": "PostalAddress",    "addressCountry": "AR",    "addressLocality": "Quilmes"  },  "areaServed": {    "@type": "City",    "name": "Quilmes"  }}
Repetir para Lomas de Zamora, Banfield, Lanús, Avellaneda y Berazategui, cambiando:


name


url


description


addressLocality


areaServed.name



Landings por ciudad
Crear cada landing replicando la estructura del index, pero adaptando textos a cada ciudad.
Cada landing debe tener:


H1 corto:


Endocrinólogo infantil en Quilmes


Endocrinólogo infantil en Lomas de Zamora


Endocrinólogo infantil en Banfield


Endocrinólogo infantil en Lanús


Endocrinólogo infantil en Avellaneda


Endocrinólogo infantil en Berazategui




Meta title único.


Meta description única.


Canonical único.


Schema MedicalClinic único.


FAQ visible adaptado a ciudad.


FAQPage schema adaptado a ciudad.


Footer global con enlaces a todas las ciudades.


Header global con enlaces a todas las ciudades.


Ejemplo meta title Quilmes:
Endocrinólogo infantil en Quilmes | Endocrinología pediátrica
Ejemplo meta description Quilmes:
Endocrinólogo infantil en Quilmes para crecimiento, pubertad, diabetes infantil, tiroides, obesidad infantil y alteraciones hormonales pediátricas. Pedí tu valoración.

Crear 3 single posts
Usar como base estructural blog-single-post.html.
Crear estos 3 archivos:
crecimiento-infantil-cuando-consultar.htmlpubertad-precoz-en-ninos.htmldiabetes-infantil-senales-alerta.html
Actualizar enlaces en index.html y blog.html para que cada card apunte a su single post correspondiente.
Posts actuales del index
En el index actual aparecen estos artículos:


Señales de alerta de diabetes y prediabetes que no deberías ignorar


Hipotiroidismo e hipertiroidismo: síntomas frecuentes y cuándo consultar


Obesidad, resistencia a la insulina y síndrome metabólico: claves de manejo


Como ahora la web se orienta a endocrinología infantil, adaptar los posts a:


Crecimiento infantil: cuándo consultar con endocrinología pediátrica


Pubertad precoz en niños: señales que deben evaluarse


Diabetes infantil: señales de alerta para padres



Imágenes destacadas de los posts
Usar las mismas imágenes que están usando los posts en el index:
Post 1:
assets/images/blog/grid/1.jpg
Post 2:
assets/images/blog/grid/2.jpg
Post 3:
assets/images/blog/grid/3.jpg
No usar imágenes externas.
Todas las imágenes deben tener alt en español.

Limpieza obligatoria de los single posts
En los 3 single posts eliminar completamente:


Comentarios:


Comments


Leave a comment


formulario de comentarios


nombres demo


respuestas falsas




About Author:


bloque de autor


imagen de autor


redes sociales del autor


texto demo de autor




Gallery:


galerías demo


imágenes sin relación


secciones tipo “Gallery”




Redes sociales falsas:


Facebook/Twitter/Instagram demo


“Share”


links vacíos




Textos demo en inglés:


Home


Blog Details


Related Post


Categories


Recent Posts


Tags


Search


Read More


Medical


Healthcare


Medicine


etc.




Todo debe quedar en español.

Contenido de los 3 posts
Post 1
Archivo:
crecimiento-infantil-cuando-consultar.html
Title SEO:
Crecimiento infantil: cuándo consultar | Endocrinología pediátrica
Meta description:
Conoce cuándo consultar con un endocrinólogo infantil por baja talla, crecimiento lento o cambios en la curva de crecimiento de niños y adolescentes.
H1:
Crecimiento infantil: cuándo consultar
Categoría:
Crecimiento infantil
Contenido mínimo:


Qué es el crecimiento infantil normal.


Por qué es importante evaluar la curva de crecimiento.


Señales de alerta.


Baja talla.


Crecimiento acelerado o lento.


Qué evalúa el endocrinólogo infantil.


Exámenes posibles.


Cuándo pedir una valoración.


CTA hacia cita.


Keywords:
crecimiento infantilendocrinólogo infantil en Zona Surendocrinología pediátricabaja talla en niñoscurva de crecimientoespecialista en crecimiento infantil

Post 2
Archivo:
pubertad-precoz-en-ninos.html
Title SEO:
Pubertad precoz en niños | Señales y valoración médica
Meta description:
La pubertad precoz en niños y niñas requiere valoración especializada. Conoce señales de alerta y cuándo consultar con endocrinología pediátrica.
H1:
Pubertad precoz en niños
Categoría:
Pubertad
Contenido mínimo:


Qué es la pubertad precoz.


Diferencias entre niños y niñas.


Signos frecuentes.


Por qué conviene evaluarla.


Relación con crecimiento y talla final.


Qué puede revisar el especialista.


Cuándo consultar.


CTA hacia valoración.


Keywords:
pubertad precozpubertad tempranaendocrinólogo infantil en Zona Surendocrinología pediátricaalteraciones hormonales infantilescrecimiento y pubertad

Post 3
Archivo:
diabetes-infantil-senales-alerta.html
Title SEO:
Diabetes infantil: señales de alerta | Endocrinólogo infantil
Meta description:
Conoce señales de alerta de diabetes infantil, síntomas que no deben ignorarse y cuándo consultar con un endocrinólogo infantil.
H1:
Diabetes infantil: señales de alerta
Categoría:
Diabetes infantil
Contenido mínimo:


Qué es la diabetes infantil.


Síntomas frecuentes.


Sed excesiva.


Orina frecuente.


Pérdida de peso.


Cansancio.


Cuándo consultar.


Importancia del diagnóstico oportuno.


Seguimiento endocrinológico.


CTA hacia cita.


Keywords:
diabetes infantildiabetes en niñosendocrinólogo infantil en Zona Surendocrinología pediátricased excesiva en niñosglucosa alta en niños

Schema BlogPosting para cada post
Cada single post debe incluir JSON-LD BlogPosting dentro del <head>.
Ejemplo base:
<script type="application/ld+json">{  "@context": "https://schema.org",  "@type": "BlogPosting",  "headline": "Crecimiento infantil: cuándo consultar",  "description": "Conoce cuándo consultar con un endocrinólogo infantil por baja talla, crecimiento lento o cambios en la curva de crecimiento de niños y adolescentes.",  "image": "https://enzonasur.com/assets/images/blog/grid/1.jpg",  "author": {    "@type": "Organization",    "name": "Endocrinólogo Infantil Zona Sur"  },  "publisher": {    "@type": "Organization",    "name": "Endocrinólogo Infantil Zona Sur",    "logo": {      "@type": "ImageObject",      "url": "https://enzonasur.com/assets/images/logo/logo-dark.png"    }  },  "datePublished": "2026-04-29",  "dateModified": "2026-04-29",  "mainEntityOfPage": {    "@type": "WebPage",    "@id": "https://enzonasur.com/crecimiento-infantil-cuando-consultar"  }}</script>
Adaptar headline, description, image y @id para cada post.
Canonicals de posts:
https://enzonasur.com/crecimiento-infantil-cuando-consultarhttps://enzonasur.com/pubertad-precoz-en-ninoshttps://enzonasur.com/diabetes-infantil-senales-alerta

Actualizar sección blog del index
En index.html, buscar la sección:
<section class="blog-grid pb-50">
Agregar ID:
<section id="blog" class="blog-grid pb-50">
Actualizar títulos y enlaces:
Post 1:
<a href="crecimiento-infantil-cuando-consultar.html">Crecimiento infantil: cuándo consultar con endocrinología pediátrica</a>
Post 2:
<a href="pubertad-precoz-en-ninos.html">Pubertad precoz en niños: señales que deben evaluarse</a>
Post 3:
<a href="diabetes-infantil-senales-alerta.html">Diabetes infantil: señales de alerta para padres</a>
Botones:
<a href="crecimiento-infantil-cuando-consultar.html" class="btn btn__secondary btn__link btn__rounded"><span>Leer más</span><i class="icon-arrow-right"></i></a>
Repetir con cada post.

Blog listado blog.html
Convertir blog.html en un listado de artículos en español.
Debe incluir los 3 posts:


Crecimiento infantil: cuándo consultar


Pubertad precoz en niños


Diabetes infantil: señales de alerta


Cada card debe tener:


Imagen


Fecha


Categoría


Título


Extracto


Botón “Leer más”


Enlace al single post correcto


Eliminar textos demo en inglés.

Contacto
Usar datos genéricos:
+54 11 1234-5678contacto@enzonasur.comZona Sur
No usar teléfonos de Estados Unidos, India, New York, Medcity ni datos demo.

Eliminar redes sociales falsas
Eliminar redes sociales de:


Header


Footer


Sidebar


Cards de doctores


Posts


Bloque “Share”


About Author


No dejar links vacíos href="#" en redes sociales falsas.

Eliminar idioma inglés
Revisar todos los archivos finales y eliminar/traducir cualquier texto inglés visible.
Buscar palabras como:
HomeAboutServicesDoctorsContactBlog DetailsRelated PostCommentsLeave a commentSearchCategoriesTagsGalleryRead MoreOpen HoursContact InfoImportant LinkHappy PatientsMedical ExpertsYears Of ExperienceEmergencyAppointmentDepartmentsEmergency CasesOpening HoursPatient Reports
Todo debe quedar en español.

Títulos H1 y textos principales
No crear H1 demasiado largos.
Mantener H1 compactos para que no rompan el diseño.
Ejemplos correctos:
Endocrinólogo infantil en Zona SurEndocrinólogo infantil en QuilmesEndocrinólogo infantil en Lomas de ZamoraCrecimiento infantilPubertad precozDiabetes infantil
Evitar H1 largos como:
Endocrinólogo infantil en Zona Sur para el diagnóstico y tratamiento de alteraciones hormonales, crecimiento, pubertad, diabetes y tiroides en niños y adolescentes

Imágenes
No descargar imágenes nuevas.
Usar las imágenes existentes en /assets.
No romper rutas relativas.
Todas las imágenes deben tener alt en español.
Ejemplos:
<img src="assets/images/blog/grid/1.jpg" alt="Consulta por crecimiento infantil"><img src="assets/images/blog/grid/2.jpg" alt="Evaluación de pubertad precoz en niños"><img src="assets/images/blog/grid/3.jpg" alt="Señales de diabetes infantil">

CTA globales
Usar textos claros:
Solicitar valoraciónAgendar consultaConsultar disponibilidadLeer másVer artículosContactar ahora
Evitar textos en inglés como:
Make AppointmentRead MoreFind A DoctorContact Us

Checklist final obligatorio
Antes de terminar, revisar:


 index.html está 100% en español.


 El index usa links ancla funcionales.


 Todas las secciones principales del index tienen ID correcto.


 Todas las landings de ciudad están 100% en español.


 Existen landings para Quilmes, Lomas de Zamora, Banfield, Lanús, Avellaneda y Berazategui.


 blog.html está en español.


 Existen los 3 single posts.


 Los 3 single posts no tienen comentarios.


 Los 3 single posts no tienen formulario de comentarios.


 Los 3 single posts no tienen About Author.


 Los 3 single posts no tienen Gallery demo.


 No hay redes sociales falsas.


 El footer está corregido en todas las páginas.


 El copyright dice “Diseñado por enzonasur.com”.


 Todos los links internos funcionan.


 Los posts del index apuntan a sus archivos correctos.


 blog.html apunta a los single posts correctos.


 Cada página tiene canonical correcto.


 Cada página principal tiene schema correcto.


 Cada FAQ visible tiene su schema FAQPage.


 No hay “Medcity”, “DataSoft”, “7oroof”, “Lorem ipsum” ni textos demo visibles.


 No hay rutas canonical como subcarpetas incorrectas.


 No se rompieron clases, assets, JS ni estructura visual del template.



Prioridad de trabajo
Para terminar lo más rápido posible:


Corregir el foco SEO del index hacia endocrinología infantil.


Agregar links ancla en el index.


Corregir header/footer global.


Crear landings por ciudad replicando el index.


Crear los 3 single posts desde blog-single-post.html.


Limpiar comentarios, galería, autor y redes demo.


Actualizar enlaces del index y blog.


Agregar FAQ + schema a index y landings.


Revisar canonical/schema de todas las páginas.


Buscar y reemplazar textos en inglés.


Verificar que la web cargue sin errores visuales.


Usé como base el `index.html` de endocrinología que compartiste, donde ya aparecen servicios, blog, FAQ y footer que Codex debe adaptar y limpiar para el enfoque de endocrinología infantil. :contentReference[oaicite:0]{index=0}
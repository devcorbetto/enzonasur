from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

brand_old = "Pisos Flotantes Capital Federal"
brand_new = "Pisos Flotantes Zona Sur"
domain_old = "pisosflotantescapitalfederal.com"
domain_new = "pisosflotanteszonasur.com"

local_pages = [
    ("pisos-flotantes-belgrano.html", "pisos-flotantes-avellaneda.html", "Belgrano", "Avellaneda"),
    ("pisos-flotantes-nunez.html", "pisos-flotantes-lanus.html", "Nunez", "Lanus"),
    ("pisos-flotantes-palermo.html", "pisos-flotantes-lomas-de-zamora.html", "Palermo", "Lomas de Zamora"),
    ("pisos-flotantes-congreso.html", "pisos-flotantes-quilmes.html", "Congreso", "Quilmes"),
    ("pisos-flotantes-villa-crespo.html", "pisos-flotantes-banfield.html", "Villa Crespo", "Banfield"),
    ("pisos-flotantes-caballito.html", "pisos-flotantes-temperley.html", "Caballito", "Temperley"),
]

blog_posts = [
    {
        "old": "como-elegir-piso-flotante-ambiente-chico.html",
        "new": "pisos-flotantes-zona-sur-guia-elegir.html",
        "title": "Pisos flotantes en Zona Sur: guia para elegir el material correcto",
        "description": "Guia practica para elegir pisos flotantes en Zona Sur segun humedad, transito, base existente, zocalos y uso del ambiente.",
        "category": "Pisos flotantes",
        "image": "assets/images/blog/blogThumb4_1.jpg",
        "paras": [
            "Elegir un piso flotante en Zona Sur no deberia depender solo del color. En casas, PH, departamentos y locales de Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield y Temperley conviene revisar primero la humedad, el nivel de la carpeta y el uso real del ambiente.",
            "Los tonos claros ayudan a agrandar visualmente dormitorios y livings, mientras que los tonos medios disimulan mejor el uso diario. Tambien importa el espesor, la calidad del encastre, la manta niveladora y la forma en que se resuelven puertas, zocalos y perfiles.",
            "Cuando el ambiente recibe mucho transito, mascotas o muebles pesados, recomendamos priorizar resistencia y buena base antes que elegir solo por estetica. Una colocacion prolija evita ruidos, separaciones entre tablas y terminaciones desparejas.",
            "Para cotizar con precision se pueden enviar medidas, fotos del piso actual y localidad. Con esa informacion orientamos el material, la preparacion necesaria y los tiempos de instalacion."
        ],
        "highlight": "Un piso flotante bien elegido para Zona Sur combina material adecuado, base nivelada y terminaciones pensadas para el uso cotidiano.",
        "tags": ["Pisos flotantes", "Zona Sur", "Colocacion"]
    },
    {
        "old": "pisos-flotantes-para-departamentos-caba.html",
        "new": "pisos-flotantes-departamentos-zona-sur.html",
        "title": "Pisos flotantes para departamentos en Zona Sur",
        "description": "Consejos para colocar pisos flotantes en departamentos de Zona Sur: tiempos de obra, ruidos, accesos, zocalos y terminaciones.",
        "category": "Departamentos",
        "image": "assets/images/blog/blogThumb4_5.jpg",
        "paras": [
            "En departamentos de Zona Sur, la colocacion de pisos flotantes necesita una planificacion distinta a la de una casa. Hay que considerar horarios del edificio, traslado de materiales, ascensores, proteccion de pasillos y el orden de trabajo por ambientes.",
            "Si el departamento esta habitado, conviene definir una secuencia clara: retirar muebles, revisar la base, colocar manta, instalar tablas y terminar zocalos o perfiles. Asi se reduce el desorden y se evita dejar sectores inutilizables durante mas tiempo del necesario.",
            "Los pisos flotantes funcionan muy bien en dormitorios, livings y pasillos cuando la carpeta esta firme y seca. En cocinas integradas se revisan especialmente los encuentros, porque los cambios de humedad y limpieza pueden exigir una terminacion mas cuidada.",
            "Para presupuestos en Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield o Temperley, lo ideal es enviar medidas por ambiente y fotos de puertas, zocalos y desniveles."
        ],
        "highlight": "En departamentos, una buena instalacion depende tanto del material como de la organizacion previa del trabajo.",
        "tags": ["Departamentos", "Zona Sur", "Instalacion"]
    },
    {
        "old": "preparacion-antes-plastificar-piso.html",
        "new": "plastificado-pisos-madera-zona-sur.html",
        "title": "Plastificado de pisos de madera en Zona Sur: preparacion y tiempos",
        "description": "Como preparar un piso de madera antes del plastificado en Zona Sur, cuanto tarda el trabajo y que revisar antes de aplicar la terminacion.",
        "category": "Plastificado",
        "image": "assets/images/blog/blogThumb4_4.jpg",
        "paras": [
            "El plastificado de pisos de madera en Zona Sur empieza mucho antes de aplicar el producto. Primero se revisa si el parquet esta firme, si hay tablas flojas, manchas profundas, humedad o sectores que necesitan reparacion.",
            "Despues se realiza el pulido para nivelar la superficie y abrir el poro de la madera. Esta etapa define gran parte del resultado final: si se saltea una reparacion o se pule de manera despareja, el brillo y la proteccion no quedan uniformes.",
            "Tambien es importante preparar el ambiente: retirar muebles, cuidar zocalos, liberar enchufes bajos y prever el tiempo de secado. En viviendas habitadas se coordina por ambientes para que el trabajo sea mas llevadero.",
            "El plastificado suele elegirse cuando se busca una terminacion resistente y con buen brillo. Antes de decidir, conviene comparar con hidrolaqueado segun uso, ventilacion y resultado estetico esperado."
        ],
        "highlight": "La durabilidad del plastificado depende de la preparacion del parquet y de respetar los tiempos de secado.",
        "tags": ["Plastificado", "Parquet", "Zona Sur"]
    },
    {
        "old": "ventajas-hidrolaqueado-pisos-madera.html",
        "new": "hidrolaqueado-parquet-zona-sur.html",
        "title": "Hidrolaqueado de parquet en Zona Sur: cuando conviene elegirlo",
        "description": "Ventajas del hidrolaqueado de parquet en Zona Sur para casas y departamentos: acabado natural, menor olor y buena proteccion.",
        "category": "Hidrolaqueado",
        "image": "assets/images/blog/blogThumb4_3.jpg",
        "paras": [
            "El hidrolaqueado de parquet es una excelente opcion cuando se busca una terminacion mas natural, con menor olor y una puesta en uso mas amable para viviendas habitadas. En Zona Sur lo recomendamos especialmente para dormitorios, livings y ambientes familiares.",
            "A diferencia de terminaciones mas brillantes, el hidrolaqueado puede dejar la madera con un aspecto sobrio y actual. Permite conservar mejor la veta y combinar con decoraciones modernas, muebles claros o espacios donde se quiere evitar un brillo excesivo.",
            "Antes de aplicarlo se pule el parquet, se corrigen detalles y se limpia muy bien la superficie. La calidad de esa preparacion influye directamente en la adherencia y en la uniformidad del acabado.",
            "La eleccion entre plastificado e hidrolaqueado depende del uso del ambiente, la ventilacion, el brillo deseado y el tiempo disponible para la obra. Por eso conviene evaluar el piso en persona o con fotos claras."
        ],
        "highlight": "El hidrolaqueado es ideal cuando se busca proteger la madera sin perder una apariencia natural.",
        "tags": ["Hidrolaqueado", "Parquet", "Zona Sur"]
    },
    {
        "old": "como-recuperar-parquet-opaco-rayado.html",
        "new": "pulido-parquet-rayado-zona-sur.html",
        "title": "Como recuperar parquet rayado u opaco en Zona Sur",
        "description": "Opciones para recuperar parquet rayado, opaco o gastado en Zona Sur mediante pulido, reparaciones, plastificado o hidrolaqueado.",
        "category": "Pulido de parquet",
        "image": "assets/images/blog/blogThumb4_2.jpg",
        "paras": [
            "Un parquet rayado u opaco no siempre necesita reemplazo. Muchas veces puede recuperarse con pulido profesional, reparaciones puntuales y una terminacion adecuada al uso del ambiente.",
            "En casas y departamentos de Zona Sur encontramos pisos con desgaste por muebles, humedad vieja, alfombras retiradas o mascotas. Antes de definir el trabajo se revisa profundidad de rayas, firmeza de tablas y manchas que puedan haber penetrado la madera.",
            "Si la madera esta sana, el pulido permite emparejar la superficie y renovar completamente el aspecto. Luego se puede aplicar plastificado para mayor brillo y resistencia, o hidrolaqueado para una terminacion mas natural.",
            "Cuando hay piezas flojas o faltantes, conviene repararlas antes de terminar el piso. Asi se evita que el resultado quede lindo al principio pero empiece a moverse con el uso diario."
        ],
        "highlight": "El parquet gastado puede volver a lucir bien si se combina pulido, reparacion y una terminacion correcta.",
        "tags": ["Pulido", "Parquet rayado", "Zona Sur"]
    },
    {
        "old": "plastificado-o-hidrolaqueado-que-conviene.html",
        "new": "mantenimiento-pisos-flotantes-zona-sur.html",
        "title": "Mantenimiento de pisos flotantes y madera en Zona Sur",
        "description": "Consejos de mantenimiento para pisos flotantes, parquet plastificado e hidrolaqueado en Zona Sur: limpieza, humedad y cuidados diarios.",
        "category": "Mantenimiento",
        "image": "assets/images/blog/blogThumb4_6.jpg",
        "paras": [
            "El mantenimiento correcto alarga la vida de los pisos flotantes y de madera. En Zona Sur, donde muchas viviendas combinan humedad ambiente, mascotas y uso intenso, los cuidados diarios hacen una diferencia enorme.",
            "Para pisos flotantes, lo principal es evitar exceso de agua, usar paños apenas humedos y colocar felpas en patas de sillas o muebles. Tambien conviene revisar filtraciones o ingresos de humedad cerca de balcones, cocinas y puertas exteriores.",
            "En parquet plastificado o hidrolaqueado, la limpieza debe ser suave y constante. Los productos abrasivos, ceras inadecuadas o baldes con mucha agua pueden opacar la terminacion antes de tiempo.",
            "Si aparecen rayas, zonas opacas o tablas levantadas, es mejor consultar antes de improvisar. Una intervencion temprana suele ser mas economica que esperar a que el dano avance."
        ],
        "highlight": "La mejor proteccion del piso empieza con limpieza simple, poca agua y reparaciones a tiempo.",
        "tags": ["Mantenimiento", "Pisos flotantes", "Parquet"]
    },
]

def read(path):
    return (ROOT / path).read_text(encoding="utf-8")

def write(path, text):
    (ROOT / path).write_text(text, encoding="utf-8")

def localize_text(text):
    replacements = {
        brand_old: brand_new,
        domain_old: domain_new,
        "Pisos Flotantes Capital": brand_new,
        "Capital Federal, Buenos Aires": "Zona Sur, Buenos Aires",
        "Capital Federal": "Zona Sur",
        "Ciudad Autonoma de Buenos Aires": "Zona Sur del Gran Buenos Aires",
        "CABA": "Zona Sur",
        "AR-C": "AR-B",
        "PISOS EN CAPITAL FEDERAL": "PISOS EN ZONA SUR",
        "info@pisosflotantescapitalfederal.com": "info@pisosflotanteszonasur.com",
        "mailto:info@pisosflotantescapitalfederal.com": "mailto:info@pisosflotanteszonasur.com",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    for old_file, new_file, old_city, new_city in local_pages:
        text = text.replace(old_file, new_file)
        text = text.replace(old_city, new_city)
    for post in blog_posts:
        text = text.replace(post["old"], post["new"])
    return text

def update_head(text, title, description, image=None):
    text = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{description}">', text, count=1)
    text = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", text, count=1, flags=re.S)
    text = re.sub(r'<meta property="og:title" content="[^"]*">', f'<meta property="og:title" content="{title}">', text, count=1)
    text = re.sub(r'<meta property="og:description"\s+content="[^"]*">', f'<meta property="og:description" content="{description}">', text, count=1, flags=re.S)
    if image:
        text = re.sub(r'"image": "assets/images/blog/[^"]+"', f'"image": "{image}"', text, count=1)
    return text

def update_blog_article(post):
    src = post["old"]
    text = localize_text(read(src))
    text = update_head(text, post["title"] + " | Pisos Flotantes Zona Sur", post["description"], post["image"])
    text = re.sub(r'"headline": "[^"]+"', f'"headline": "{post["title"]}"', text, count=1)
    text = re.sub(r'"description": "[^"]+"', f'"description": "{post["description"]}"', text, count=1)
    text = re.sub(r'"mainEntityOfPage": "[^"]+"', f'"mainEntityOfPage": "{post["new"]}"', text, count=1)
    text = re.sub(r'<h1 class="breadcumb-title">.*?</h1>', f'<h1 class="breadcumb-title">{post["title"]}</h1>', text, count=1, flags=re.S)
    text = re.sub(r'<li class="active">.*?</li>', f'<li class="active">{post["title"]}</li>', text, count=1, flags=re.S)
    recent = recent_posts_html()
    text = re.sub(r'<div class="recent-post-area">.*?</div>\s*</div>\s*<div class="single-sidebar-widget wow fadeInUp" data-wow-delay="\.4s">',
                  recent + '</div>\n                            <div class="single-sidebar-widget wow fadeInUp" data-wow-delay=".4s">',
                  text, count=1, flags=re.S)
    content = f'''
                                <div class="post-content">
                                    <ul class="post-list d-flex align-items-center wow fadeInUp" data-wow-delay=".2s"><li>Por equipo tecnico</li><li>{post["category"]}</li></ul>
                                    <h3 class="wow fadeInUp" data-wow-delay=".4s">{post["title"]}</h3>
                                    <p class="mb-3 wow fadeInUp" data-wow-delay=".6s">{post["paras"][0]}</p>
                                    <p class="mb-3 wow fadeInUp" data-wow-delay=".8s">{post["paras"][1]}</p>
                                    <div class="group-img row g-4 wow fadeInUp" data-wow-delay="1s"><div class="col-lg-6"><div class="details-image"><img src="assets/images/blog/blogDetailsThumb1_2.jpg" alt="Detalle de piso flotante en Zona Sur"></div></div><div class="col-lg-6"><div class="details-image"><img src="assets/images/blog/blogDetailsThumb1_3.jpg" alt="Terminacion de piso de madera en Zona Sur"></div></div></div>
                                    <p class="wow fadeInUp" data-wow-delay="1s">{post["paras"][2]}</p>
                                    <div class="hilight-text wow fadeInUp" data-wow-delay=".8s"><p>{post["highlight"]}</p></div>
                                    <p class="mb-5 wow fadeInUp" data-wow-delay="1s">{post["paras"][3]}</p>
                                </div>'''
    text = re.sub(r'\s*<div class="post-content">.*?</div>\s*</div>\s*</div>\s*<div class="row tag-share-wrap',
                  content + "\n                            </div>\n                            <div class=\"row tag-share-wrap",
                  text, count=1, flags=re.S)
    tags = "\n                                        ".join(
        f'<a href="{post["new"]}"{" class=\"active\"" if i == 1 else ""}>{tag}</a>' for i, tag in enumerate(post["tags"])
    )
    tag_block = f'''<div class="row tag-share-wrap mb-30 wow fadeInUp" data-wow-delay=".8s"><div class="col-lg-8 col-12"><div class="tagcloud"><h6 class="d-inline me-2">Temas: </h6>{tags}</div></div><div class="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end wow fadeInUp" data-wow-delay="1.2s"><div class="social-share"><span class="me-3">Compartir:</span><a href="#"><i class="fab fa-facebook-f"></i></a><a href="#"><i class="fab fa-linkedin-in"></i></a></div></div></div>'''
    text = re.sub(r'<div class="row tag-share-wrap.*?</div></div></div>\s*<div class="comment-form-wrap',
                  tag_block + '\n                            <div class="comment-form-wrap',
                  text, count=1, flags=re.S)
    write(post["new"], text)
    write(post["old"], re.sub(r'<meta name="robots" content="index, follow">', '<meta name="robots" content="noindex, follow">', text, count=1))

def recent_posts_html():
    items = []
    for post in blog_posts[:3]:
        items.append(
            f'<div class="recent-items"><div class="recent-thumb"><img src="{post["image"]}" alt="{post["title"]}"></div><div class="recent-content"><ul><li><img src="assets/images/icon/calendarIcon.svg" alt="icon"> 2026</li></ul><h6><a href="{post["new"]}">{post["title"]}</a></h6></div></div>'
        )
    return '<div class="recent-post-area">' + "\n                                    ".join(items) + '</div>'

def update_blog_index(path):
    text = localize_text(read(path))
    text = update_head(
        text,
        "Blog de pisos flotantes en Zona Sur | Consejos y mantenimiento",
        "Consejos sobre colocacion de pisos flotantes, plastificado, hidrolaqueado, pulido y mantenimiento de parquet en Zona Sur."
    )
    text = re.sub(r'<h1 class="breadcumb-title">.*?</h1>', '<h1 class="breadcumb-title">Blog de pisos en Zona Sur</h1>', text, count=1, flags=re.S)
    for post in blog_posts:
        text = text.replace(post["old"], post["new"])
    titles = [
        "Como elegir piso flotante para un ambiente chico",
        "Como recuperar un parquet opaco o rayado",
        "Ventajas del hidrolaqueado en pisos de madera",
        "Preparacion antes de plastificar un piso",
        "Pisos flotantes para departamentos en Zona Sur",
        "Plastificado o hidrolaqueado: que conviene para parquet",
    ]
    for old_title, post in zip(titles, blog_posts):
        text = text.replace(old_title, post["title"])
    text = text.replace("Por equipo tecnico", "Por especialistas en pisos")
    write(path, text)

def make_local_pages():
    for old_file, new_file, old_city, new_city in local_pages:
        text = localize_text(read(old_file))
        text = update_head(
            text,
            f"Pisos flotantes en {new_city} | Colocacion, plastificado y parquet",
            f"Colocacion de pisos flotantes en {new_city}. Pulido, plastificado e hidrolaqueado de parquet para casas, departamentos, locales y oficinas en Zona Sur."
        )
        text = text.replace(f"Pisos flotantes en {old_city}", f"Pisos flotantes en {new_city}")
        text = text.replace("Servicio profesional en Zona Sur con revision previa, materiales adecuados y terminaciones prolijas.",
                            f"Servicio profesional en {new_city} y alrededores, con revision de base, materiales adecuados y terminaciones prolijas.")
        text = re.sub(r'"areaServed": \[[^\]]+\]', f'"areaServed": ["{new_city}", "Zona Sur", "Buenos Aires"]', text, count=2)
        write(new_file, text)
        old_text = read(old_file)
        old_text = re.sub(r'<meta name="robots" content="index, follow">', '<meta name="robots" content="noindex, follow">', old_text, count=1)
        write(old_file, old_text)

def update_sitemap():
    urls = [
        ("index.html", "1.0"),
        ("about.html", "0.7"),
        ("services.html", "0.9"),
        ("service-details.html", "0.8"),
        ("project.html", "0.7"),
        ("faq.html", "0.7"),
        ("blog.html", "0.75"),
    ]
    urls += [(post["new"], "0.7") for post in blog_posts]
    urls += [(new_file, "0.85") for _, new_file, _, _ in local_pages]
    urls += [("contact.html", "0.8")]
    body = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for loc, priority in urls:
        freq = "weekly" if loc in ("index.html", "blog.html") else "monthly"
        body.append(f'''    <url>
        <loc>https://{domain_new}/{loc}</loc>
        <lastmod>2026-04-28</lastmod>
        <changefreq>{freq}</changefreq>
        <priority>{priority}</priority>
    </url>''')
    body.append("</urlset>\n")
    write("sitemap.xml", "\n".join(body))
    write("robots.txt", f"User-agent: *\nAllow: /\n\nSitemap: https://{domain_new}/sitemap.xml\n")

def update_all_html():
    files = [p for p in ROOT.glob("*.html")]
    for path in files:
        text = localize_text(path.read_text(encoding="utf-8"))
        path.write_text(text, encoding="utf-8")

def update_home():
    text = read("index.html")
    text = update_head(
        text,
        "Pisos Flotantes Zona Sur | Colocacion, plastificado y parquet",
        "Colocacion de pisos flotantes, plastificado, pulido e hidrolaqueado de parquet en Zona Sur. Trabajos en Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield y Temperley."
    )
    text = text.replace("PISOS EN ZONA SUR", "PISOS FLOTANTES ZONA SUR")
    text = text.replace("Pisos flotantes y plastificados <br> en\n                                                        Zona Sur",
                        "Pisos flotantes zona sur <br> colocacion y plastificado")
    text = text.replace("Colocacion de pisos flotantes, pulido, plastificado e\n                                                        hidrolaqueado de parquet en Zona Sur. Trabajos prolijos para\n                                                        departamentos, casas, locales y oficinas.",
                        "Instalamos pisos flotantes y renovamos parquet con pulido, plastificado e hidrolaqueado. Atendemos Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield, Temperley y alrededores.")
    text = text.replace("Instalacion de pisos flotantes <br> en\n                                                        Zona Sur",
                        "Colocacion de pisos flotantes <br> en Zona Sur")
    text = text.replace("Trabajamos en Zona Sur con\n                                        colocacion, reparacion y terminacion de pisos. Evaluamos el estado del ambiente,\n                                        la humedad, el transito y el uso esperado para recomendar una solucion duradera.",
                        "Somos especialistas en colocacion de pisos flotantes y restauracion de parquet en Zona Sur. Revisamos humedad, nivelacion, transito y terminaciones para que el trabajo quede firme, parejo y listo para el uso diario.")
    text = text.replace("Soluciones para pisos\n                            flotantes y madera en Zona Sur",
                        "Servicios de pisos flotantes y parquet en Zona Sur")
    write("index.html", text)

def main():
    make_local_pages()
    update_all_html()
    for post in blog_posts:
        update_blog_article(post)
    update_blog_index("blog.html")
    if (ROOT / "blog-standard.html").exists():
        update_blog_index("blog-standard.html")
    if (ROOT / "blog-right-sidebar.html").exists():
        update_blog_index("blog-right-sidebar.html")
    update_home()
    update_sitemap()

if __name__ == "__main__":
    main()

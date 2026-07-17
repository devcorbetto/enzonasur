from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

ACTIVE_PAGES = {
    "index.html",
    "about.html",
    "services.html",
    "service-details.html",
    "project.html",
    "faq.html",
    "blog.html",
    "blog-standard.html",
    "blog-right-sidebar.html",
    "contact.html",
    "pisos-flotantes-avellaneda.html",
    "pisos-flotantes-lanus.html",
    "pisos-flotantes-lomas-de-zamora.html",
    "pisos-flotantes-quilmes.html",
    "pisos-flotantes-banfield.html",
    "pisos-flotantes-temperley.html",
    "pisos-flotantes-zona-sur-guia-elegir.html",
    "pisos-flotantes-departamentos-zona-sur.html",
    "plastificado-pisos-madera-zona-sur.html",
    "hidrolaqueado-parquet-zona-sur.html",
    "pulido-parquet-rayado-zona-sur.html",
    "mantenimiento-pisos-flotantes-zona-sur.html",
    "pisos-flotantes-zona-sur-guia-precios.html",
    "plastificado-o-hidrolaqueado-zona-sur.html",
}

LOCAL_PAGES = {
    "pisos-flotantes-avellaneda.html": "Avellaneda",
    "pisos-flotantes-lanus.html": "Lanus",
    "pisos-flotantes-lomas-de-zamora.html": "Lomas de Zamora",
    "pisos-flotantes-quilmes.html": "Quilmes",
    "pisos-flotantes-banfield.html": "Banfield",
    "pisos-flotantes-temperley.html": "Temperley",
}

OLD_LOCAL_PAGES = {
    "pisos-flotantes-belgrano.html",
    "pisos-flotantes-nunez.html",
    "pisos-flotantes-palermo.html",
    "pisos-flotantes-congreso.html",
    "pisos-flotantes-villa-crespo.html",
    "pisos-flotantes-caballito.html",
}

SERVICE_TEXTS = [
    (
        "Pisos flotantes",
        "Instalacion sobre bases firmes, con manta, perfiles y zocalos resueltos para que el piso trabaje sin ruidos ni separaciones.",
    ),
    (
        "Plastificado de madera",
        "Pulimos y protegemos parquet o pinotea con una terminacion resistente, pareja y pensada para ambientes de uso intenso.",
    ),
    (
        "Pulido de parquet",
        "Recuperamos pisos opacos, rayados o manchados cuando la madera todavia permite nivelar y volver a terminar.",
    ),
    (
        "Hidrolaqueado",
        "Aplicamos una proteccion de aspecto mas natural, con menor olor y buen resultado para casas o departamentos habitados.",
    ),
    (
        "Reparacion de tablas",
        "Ajustamos piezas flojas, reemplazos puntuales, encuentros con puertas y detalles previos a la terminacion final.",
    ),
    (
        "Asesoramiento en obra",
        "Revisamos humedad, carpeta, desniveles y uso del ambiente antes de recomendar material, brillo o sistema de colocacion.",
    ),
]

GENERIC_DESCRIPTIONS = {
    "gallery.html": ("Galeria de trabajos de pisos en Zona Sur", "Fotos de colocacion de pisos flotantes, pulido, plastificado e hidrolaqueado de madera en Zona Sur."),
    "project.html": ("Trabajos de pisos flotantes y parquet en Zona Sur", "Ejemplos de obras de pisos flotantes, parquet recuperado y terminaciones de madera en Zona Sur."),
    "pricing.html": ("Presupuestos para pisos flotantes en Zona Sur", "Informacion orientativa para cotizar colocacion, plastificado, pulido e hidrolaqueado de pisos en Zona Sur."),
    "team.html": ("Equipo de colocacion de pisos en Zona Sur", "Equipo tecnico para instalacion de pisos flotantes, plastificado y restauracion de parquet en Zona Sur."),
    "cart.html": ("Consulta de servicios de pisos en Zona Sur", "Pagina auxiliar para consultas de servicios de pisos flotantes y madera en Zona Sur."),
    "checkout.html": ("Solicitud de presupuesto de pisos en Zona Sur", "Pagina auxiliar para solicitar presupuesto de colocacion, plastificado o pulido de pisos en Zona Sur."),
    "login.html": ("Acceso | Pisos Flotantes Zona Sur", "Acceso auxiliar del sitio Pisos Flotantes Zona Sur."),
    "shop.html": ("Materiales para pisos flotantes en Zona Sur", "Catalogo auxiliar de materiales y terminaciones para pisos flotantes y parquet en Zona Sur."),
    "shop-right-sidebar.html": ("Materiales para pisos en Zona Sur", "Catalogo auxiliar de materiales para colocacion y terminacion de pisos de madera en Zona Sur."),
    "shop-list.html": ("Listado de materiales para pisos en Zona Sur", "Opciones auxiliares de materiales, zocalos y terminaciones para pisos en Zona Sur."),
    "shop-list-right-sidebar.html": ("Listado de pisos y terminaciones en Zona Sur", "Opciones auxiliares para pisos flotantes, parquet y terminaciones en Zona Sur."),
    "shop-details.html": ("Detalle de material para pisos en Zona Sur", "Ficha auxiliar de materiales y terminaciones para pisos flotantes y madera en Zona Sur."),
}

PLACEHOLDERS = [
    "Evaluamos el piso existente, la humedad y el uso del ambiente para recomendar una solucion que dure.",
    "Coordinamos cada etapa con orden: preparacion, colocacion, terminacion y limpieza final del sector.",
    "Trabajamos con materiales adecuados para viviendas, locales y oficinas de Zona Sur.",
    "La terminacion se define segun brillo deseado, circulacion, ventilacion y estado real de la madera.",
]


def read(path):
    return (ROOT / path).read_text(encoding="utf-8")


def write(path, text):
    (ROOT / path).write_text(text, encoding="utf-8")


def set_meta(text, title, description, robots=None):
    text = re.sub(r'<meta name="author" content="[^"]*">', '<meta name="author" content="Pisos Flotantes Zona Sur">', text, count=1)
    text = re.sub(r'<meta name="description"\s+content="[^"]*">', f'<meta name="description" content="{description}">', text, count=1, flags=re.S)
    text = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", text, count=1, flags=re.S)
    if robots:
        if re.search(r'<meta name="robots" content="[^"]*">', text):
            text = re.sub(r'<meta name="robots" content="[^"]*">', f'<meta name="robots" content="{robots}">', text, count=1)
        else:
            text = text.replace('<meta name="viewport" content="width=device-width, initial-scale=1">', '<meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="robots" content="' + robots + '">', 1)
    return text


def common_cleanup(text):
    replacements = {
        "CAPITAL FEDERAL": "ZONA SUR",
        "Capital Federal": "Zona Sur",
        "CABA": "Zona Sur",
        "Ciudad Autonoma de Buenos Aires": "Zona Sur del Gran Buenos Aires",
        "AR-C": "AR-B",
        "Gramentheme": "Pisos Flotantes Zona Sur",
        "Florem - Flooring & Tiling Html Template": "Pisos Flotantes Zona Sur",
        "Pisos Flotantes Capital Federal": "Pisos Flotantes Zona Sur",
        "pisosflotantescapitalfederal.com": "pisosflotanteszonasur.com",
        "info@pisosflotantescapitalfederal.com": "info@pisosflotanteszonasur.com",
        "ABOUT\n                                        NOSOTROS": "SOBRE NOSOTROS",
        "ABOUT NOSOTROS": "SOBRE NOSOTROS",
        "Florem": "Pisos Flotantes Zona Sur",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)

    lorem_patterns = [
        r'There are many variations of passages of Lorem Ipsum available, but the majority\s+have suffered alteration in some form, by injected\s+humour, or randomised words which',
        r'There are many variations of passages of Lorem Ipsum available[^<]*',
        r'There are many passages Lorem of Ipsum available[^<]*',
        r'Lorem ipsum dolor sit amet consectetur\.[^<]*',
        r'Lorem Ipsum is simply dummy text of the printing and typesetting[^<]*',
    ]
    for i, pattern in enumerate(lorem_patterns):
        text = re.sub(pattern, PLACEHOLDERS[i % len(PLACEHOLDERS)], text, flags=re.S)
    return text


def polish_home():
    text = common_cleanup(read("index.html"))
    text = set_meta(
        text,
        "Pisos Flotantes Zona Sur | Colocacion y restauracion de parquet",
        "Instalacion de pisos flotantes, pulido, plastificado e hidrolaqueado de parquet en Zona Sur. Presupuestos en Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield y Temperley.",
        "index, follow",
    )
    text = re.sub(
        r'"areaServed": \[[^\]]+\]',
        '"areaServed": ["Avellaneda", "Lanus", "Lomas de Zamora", "Quilmes", "Banfield", "Temperley", "Zona Sur"]',
        text,
        count=1,
        flags=re.S,
    )
    text = text.replace('"addressRegion": "Zona Sur"', '"addressRegion": "Buenos Aires"')
    text = text.replace("Instalamos pisos flotantes y renovamos parquet con pulido, plastificado e hidrolaqueado. Atendemos Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield, Temperley y alrededores.",
                        "Colocamos pisos flotantes y recuperamos parquet con terminaciones prolijas. Trabajamos en Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield, Temperley y otras localidades cercanas.")
    text = text.replace("Somos especialistas en colocacion de pisos flotantes y restauracion de parquet en Zona Sur. Revisamos humedad, nivelacion, transito y terminaciones para que el trabajo quede firme, parejo y listo para el uso diario.",
                        "Antes de instalar o renovar un piso miramos la base, la humedad y el uso del ambiente. Con esa revision definimos material, zocalos, brillo y tiempos de obra sin promesas infladas.")
    write("index.html", text)


def rewrite_service_cards(text, place):
    place_texts = [
        desc if place == "Zona Sur" else desc.replace("Zona Sur", place)
        for _, desc in SERVICE_TEXTS
    ]
    titles = [title for title, _ in SERVICE_TEXTS]
    index = 0

    def replace_card(match):
        nonlocal index
        if index >= len(titles):
            return match.group(0)
        prefix, _old_title, middle, _old_desc, suffix = match.groups()
        idx = index
        index += 1
        title = titles[idx]
        desc = place_texts[idx]
        if place != "Zona Sur":
            desc = desc.rstrip(".") + f" en {place} y alrededores."
        return f'{prefix}{title}{middle}{desc}{suffix}'

    return re.sub(
        r'(<h3><a href="service-details\.html">)(.*?)(</a></h3>\s*<p class="text">)(.*?)(</p>)',
        replace_card,
        text,
        count=6,
        flags=re.S,
    )


def polish_services_page(path, place="Zona Sur"):
    text = common_cleanup(read(path))
    title_place = place if place != "Zona Sur" else "Zona Sur"
    if path == "services.html":
        text = set_meta(
            text,
            "Servicios de pisos flotantes, plastificado y parquet en Zona Sur",
            "Colocacion de pisos flotantes, pulido de parquet, plastificado, hidrolaqueado y reparaciones de pisos de madera en Zona Sur.",
            "index, follow",
        )
    elif path in LOCAL_PAGES:
        text = set_meta(
            text,
            f"Pisos flotantes en {place} | Colocacion y parquet",
            f"Colocacion de pisos flotantes, reparacion de parquet, pulido, plastificado e hidrolaqueado en {place} y alrededores.",
            "index, follow",
        )
    text = rewrite_service_cards(text, title_place)
    area = '["Avellaneda", "Lanus", "Lomas de Zamora", "Quilmes", "Banfield", "Temperley", "Zona Sur"]' if path == "services.html" else f'["{title_place}", "Zona Sur", "Buenos Aires"]'
    text = re.sub(r'"areaServed": \[[^\]]+\]', f'"areaServed": {area}', text, count=2, flags=re.S)
    text = text.replace("RENOVA TU PISO EN ZONA SUR", f"RENOVA TU PISO EN {title_place.upper()}")
    write(path, text)


def rebuild_services_from_local_template():
    text = read("pisos-flotantes-avellaneda.html")
    text = text.replace("Avellaneda", "Zona Sur")
    text = text.replace("AVELLANEDA", "ZONA SUR")
    text = re.sub(r'<h1 class="breadcumb-title">.*?</h1>', '<h1 class="breadcumb-title">Servicios de pisos en Zona Sur</h1>', text, count=1, flags=re.S)
    text = re.sub(r'<li class="active">.*?</li>', '<li class="active">Servicios</li>', text, count=1, flags=re.S)
    write("services.html", text)


def polish_inactive_page(path):
    text = common_cleanup(read(path))
    title, desc = GENERIC_DESCRIPTIONS.get(
        path,
        ("Pisos Flotantes Zona Sur", "Pagina auxiliar del sitio de colocacion y restauracion de pisos en Zona Sur."),
    )
    robots = "noindex, follow" if path not in ACTIVE_PAGES else "index, follow"
    text = set_meta(text, title, desc, robots)
    write(path, text)


def force_active_indexing():
    for path in ACTIVE_PAGES:
        file = ROOT / path
        if file.exists():
            text = file.read_text(encoding="utf-8")
            text = re.sub(r'<meta name="robots" content="[^"]*">', '<meta name="robots" content="index, follow">', text, count=1)
            file.write_text(text, encoding="utf-8")


def polish_sitemap_dates():
    sitemap = ROOT / "sitemap.xml"
    if sitemap.exists():
        text = sitemap.read_text(encoding="utf-8").replace("<lastmod>2026-04-28</lastmod>", "<lastmod>2026-04-29</lastmod>")
        sitemap.write_text(text, encoding="utf-8")


def mark_old_pages():
    for path in OLD_LOCAL_PAGES:
        if (ROOT / path).exists():
            text = common_cleanup(read(path))
            text = set_meta(
                text,
                "Pagina reemplazada | Pisos Flotantes Zona Sur",
                "Esta pagina fue reemplazada por las secciones locales actualizadas de Pisos Flotantes Zona Sur.",
                "noindex, follow",
            )
            write(path, text)


def main():
    polish_home()
    rebuild_services_from_local_template()
    polish_services_page("services.html")
    for path, place in LOCAL_PAGES.items():
        polish_services_page(path, place)
    mark_old_pages()
    for file in ROOT.glob("*.html"):
        if file.name not in ACTIVE_PAGES and file.name not in OLD_LOCAL_PAGES:
            polish_inactive_page(file.name)
        elif file.name in ACTIVE_PAGES and file.name not in {"index.html", "services.html", *LOCAL_PAGES.keys()}:
            write(file.name, common_cleanup(read(file.name)))
    force_active_indexing()
    polish_sitemap_dates()


if __name__ == "__main__":
    main()

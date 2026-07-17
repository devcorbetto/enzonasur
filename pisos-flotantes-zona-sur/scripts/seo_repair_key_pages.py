from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DOMAIN = "pisosflotanteszonasur.com"

local_pages = [
    ("pisos-flotantes-avellaneda.html", "Avellaneda"),
    ("pisos-flotantes-lanus.html", "Lanus"),
    ("pisos-flotantes-lomas-de-zamora.html", "Lomas de Zamora"),
    ("pisos-flotantes-quilmes.html", "Quilmes"),
    ("pisos-flotantes-banfield.html", "Banfield"),
    ("pisos-flotantes-temperley.html", "Temperley"),
]

blog_posts = [
    ("pisos-flotantes-zona-sur-guia-elegir.html", "Pisos flotantes en Zona Sur: guia para elegir el material correcto", "Pisos"),
    ("pisos-flotantes-departamentos-zona-sur.html", "Pisos flotantes para departamentos en Zona Sur", "Departamentos"),
    ("plastificado-pisos-madera-zona-sur.html", "Plastificado de pisos de madera en Zona Sur: preparacion y tiempos", "Plastificado"),
    ("hidrolaqueado-parquet-zona-sur.html", "Hidrolaqueado de parquet en Zona Sur: cuando conviene elegirlo", "Hidrolaqueado"),
    ("pulido-parquet-rayado-zona-sur.html", "Como recuperar parquet rayado u opaco en Zona Sur", "Parquet"),
    ("mantenimiento-pisos-flotantes-zona-sur.html", "Mantenimiento de pisos flotantes y madera en Zona Sur", "Mantenimiento"),
]

def read(name):
    return (ROOT / name).read_text(encoding="utf-8")

def write(name, text):
    (ROOT / name).write_text(text, encoding="utf-8")

def basics(text):
    replacements = {
        'lang="zxx"': 'lang="es-AR"',
        "Gramentheme": "Pisos Flotantes Zona Sur",
        "Florem - Flooring & Tiling Html Template": "Pisos Flotantes Zona Sur",
        "Loading": "Cargando",
        "Home": "Inicio",
        "About Us": "Quienes somos",
        "Services": "Servicios",
        "Service Details": "Detalle de servicio",
        "Project": "Trabajos",
        "Faq's": "Preguntas frecuentes",
        "Blog": "Blog",
        "Contact Us": "Contacto",
        "Read More": "Ver mas",
        "Pisos Flotantes Capital Federal": "Pisos Flotantes Zona Sur",
        "Capital Federal": "Zona Sur",
        "CABA": "Zona Sur",
        "pisosflotantescapitalfederal.com": "pisosflotanteszonasur.com",
        "info@pisosflotantescapitalfederal.com": "info@pisosflotanteszonasur.com",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    old_locals = [
        ("pisos-flotantes-belgrano.html", "pisos-flotantes-avellaneda.html", "Belgrano", "Avellaneda"),
        ("pisos-flotantes-nunez.html", "pisos-flotantes-lanus.html", "Nunez", "Lanus"),
        ("pisos-flotantes-palermo.html", "pisos-flotantes-lomas-de-zamora.html", "Palermo", "Lomas de Zamora"),
        ("pisos-flotantes-congreso.html", "pisos-flotantes-quilmes.html", "Congreso", "Quilmes"),
        ("pisos-flotantes-villa-crespo.html", "pisos-flotantes-banfield.html", "Villa Crespo", "Banfield"),
        ("pisos-flotantes-caballito.html", "pisos-flotantes-temperley.html", "Caballito", "Temperley"),
    ]
    for old_file, new_file, old_city, new_city in old_locals:
        text = text.replace(old_file, new_file).replace(old_city, new_city)
    return text

def set_meta(text, title, desc):
    text = re.sub(r'<meta name="description" content="[^"]*">', f'<meta name="description" content="{desc}">', text, count=1)
    text = re.sub(r'<meta name="author" content="[^"]*">', '<meta name="author" content="Pisos Flotantes Zona Sur">', text, count=1)
    text = re.sub(r"<title>.*?</title>", f"<title>{title}</title>", text, count=1, flags=re.S)
    return text

def inject_schema(text):
    schema = '''    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
            "name": "Pisos Flotantes Zona Sur",
            "description": "Colocacion de pisos flotantes, plastificado, pulido e hidrolaqueado de parquet en Zona Sur.",
            "url": "https://pisosflotanteszonasur.com/index.html",
            "areaServed": ["Avellaneda", "Lanus", "Lomas de Zamora", "Quilmes", "Banfield", "Temperley", "Zona Sur"],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zona Sur",
                "addressRegion": "Buenos Aires",
                "addressCountry": "AR"
            },
            "priceRange": "$$"
        }
    </script>
'''
    if "application/ld+json" in text:
        return text
    return text.replace('    <link rel="stylesheet" href="assets/css/main.css">\n', '    <link rel="stylesheet" href="assets/css/main.css">\n' + schema, 1)

def repair_home():
    text = basics(read("index.html"))
    text = set_meta(
        text,
        "Pisos Flotantes Zona Sur | Colocacion, plastificado y parquet",
        "Colocacion de pisos flotantes, plastificado, pulido e hidrolaqueado de parquet en Zona Sur. Trabajos en Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield y Temperley."
    )
    text = inject_schema(text)
    text = re.sub(r'<div class="subtitle text-start" data-ani="slideindown".*?</div>',
                  '<div class="subtitle text-start" data-ani="slideindown" data-ani-delay="0.3s"> <img class="me-1" src="assets/images/shape/titleShape1_1.png" alt="icon"> PISOS FLOTANTES ZONA SUR </div>',
                  text, count=1, flags=re.S)
    text = re.sub(r'<h1 class="text-start mt-15".*?</h1>',
                  '<h1 class="text-start mt-15" data-ani="slideindown" data-ani-delay="0.5s">Pisos flotantes zona sur <br> colocacion y plastificado</h1>',
                  text, count=1, flags=re.S)
    text = re.sub(r'<p class="desc" data-ani="slideinup" data-ani-delay="0.8s">.*?</p>',
                  '<p class="desc" data-ani="slideinup" data-ani-delay="0.8s">Instalamos pisos flotantes y renovamos parquet con pulido, plastificado e hidrolaqueado. Atendemos Avellaneda, Lanus, Lomas de Zamora, Quilmes, Banfield, Temperley y alrededores.</p>',
                  text, count=1, flags=re.S)
    text = re.sub(r'<h3><a href="blog-details.html">.*?</a></h3>',
                  f'<h3><a href="{blog_posts[0][0]}">{blog_posts[0][1]}</a></h3>',
                  text, count=1, flags=re.S)
    text = re.sub(r'<h3><a href="blog-details.html">.*?</a></h3>',
                  f'<h3><a href="{blog_posts[2][0]}">{blog_posts[2][1]}</a></h3>',
                  text, count=1, flags=re.S)
    text = re.sub(r'<h3><a href="blog-details.html">.*?</a></h3>',
                  f'<h3><a href="{blog_posts[3][0]}">{blog_posts[3][1]}</a></h3>',
                  text, count=1, flags=re.S)
    text = re.sub(r'<h3><a href="blog-details.html">.*?</a></h3>',
                  f'<h3><a href="{blog_posts[5][0]}">{blog_posts[5][1]}</a></h3>',
                  text, count=1, flags=re.S)
    write("index.html", text)

def repair_blog_index():
    text = basics(read("blog.html"))
    text = set_meta(
        text,
        "Blog de pisos flotantes en Zona Sur | Consejos y mantenimiento",
        "Consejos sobre colocacion de pisos flotantes, plastificado, hidrolaqueado, pulido y mantenimiento de parquet en Zona Sur."
    )
    text = re.sub(r'<h1 class="breadcumb-title">.*?</h1>', '<h1 class="breadcumb-title">Blog de pisos en Zona Sur</h1>', text, count=1, flags=re.S)
    matches = list(re.finditer(r'<h3><a href="[^"]+">.*?</a></h3>', text, flags=re.S))
    for match, (slug, title, _) in zip(matches[:6], blog_posts):
        text = text[:match.start()] + f'<h3><a href="{slug}">{title}</a></h3>' + text[match.end():]
        delta = len(f'<h3><a href="{slug}">{title}</a></h3>') - (match.end() - match.start())
        matches = [m for m in re.finditer(r'<h3><a href="[^"]+">.*?</a></h3>', text, flags=re.S)]
    write("blog.html", text)

def repair_local_pages():
    for slug, city in local_pages:
        text = basics(read(slug))
        text = set_meta(
            text,
            f"Pisos flotantes en {city} | Colocacion, plastificado y parquet",
            f"Colocacion de pisos flotantes en {city}. Pulido, plastificado e hidrolaqueado de parquet para casas, departamentos, locales y oficinas en Zona Sur."
        )
        text = re.sub(r'<h1 class="breadcumb-title">.*?</h1>', f'<h1 class="breadcumb-title">Pisos flotantes en {city}</h1>', text, count=1, flags=re.S)
        text = text.replace('"areaServed": ["Quilmes", "Zona Sur", "Zona Sur"]', f'"areaServed": ["{city}", "Zona Sur", "Buenos Aires"]')
        write(slug, text)

def main():
    repair_home()
    repair_blog_index()
    repair_local_pages()

if __name__ == "__main__":
    main()

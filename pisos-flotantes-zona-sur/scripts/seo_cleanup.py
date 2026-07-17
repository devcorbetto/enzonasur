from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

posts = [
    ("pisos-flotantes-zona-sur-guia-elegir.html", "Pisos flotantes en Zona Sur: guia para elegir el material correcto"),
    ("pisos-flotantes-departamentos-zona-sur.html", "Pisos flotantes para departamentos en Zona Sur"),
    ("plastificado-pisos-madera-zona-sur.html", "Plastificado de pisos de madera en Zona Sur: preparacion y tiempos"),
    ("hidrolaqueado-parquet-zona-sur.html", "Hidrolaqueado de parquet en Zona Sur: cuando conviene elegirlo"),
    ("pulido-parquet-rayado-zona-sur.html", "Como recuperar parquet rayado u opaco en Zona Sur"),
    ("mantenimiento-pisos-flotantes-zona-sur.html", "Mantenimiento de pisos flotantes y madera en Zona Sur"),
]

def read(name):
    return (ROOT / name).read_text(encoding="utf-8")

def write(name, text):
    (ROOT / name).write_text(text, encoding="utf-8")

def cleanup_common(text):
    replacements = {
        "InicioAndConstructionBusiness": "HomeAndConstructionBusiness",
        "PRE\n                                                        CISION TILE & FLORING SOLUTIONS": "COLOCACION PROFESIONAL",
        "DISCOVER MORE": "PEDIR PRESUPUESTO",
        "Examine Contemporary\n                                        Tiles, Stone, & Consulting": "Especialistas en pisos flotantes, parquet y plastificados",
        "Examine Contemporary\n                            Tiles, Stone, & Consulting": "Servicios para renovar pisos en Zona Sur",
        "Modern & luxurious Flooring interior": "Colocacion prolija, nivelacion y terminaciones cuidadas",
        "See Our Best Offer To Build Your": "Servicios de colocacion y terminacion de pisos",
        "Modern Tiles": "Pisos flotantes",
        "Terracotta Tiles": "Pisos de madera",
        "Discover our gallery of": "Trabajos de pisos flotantes y parquet",
        "We Offer Dependable": "Trabajos prolijos con materiales adecuados",
        "Let's Look at the Newest Items": "Materiales y terminaciones para pisos",
        "What People Say About": "Opiniones sobre nuestros trabajos de pisos",
        "Professionals to": "Proceso de trabajo profesional",
        "View the Most Recent Articles on": "Consejos para cuidar y elegir pisos",
        "Subscribe to Our Newsletter": "Solicita presupuesto para tu piso",
        "© All Copyright 2024 by Florem": "© 2026 Pisos Flotantes Zona Sur",
        "Tiels": "Pisos",
        "Tiles": "Pisos",
        "Stone, & Consulting": "madera y parquet",
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    lorem = re.compile(r'There are\s+many variations of passages of Lorem Ipsum available, but the\s+majority have suffered alteration in some form, by injected\s+humour, or randomised words which', re.S)
    text = lorem.sub("Colocamos pisos flotantes y restauramos parquet con pulido, plastificado e hidrolaqueado. Coordinamos trabajos en casas, departamentos, locales y oficinas de Zona Sur.", text)
    text = text.replace("Come Help Us Improve <br> Your House", "Renova tus pisos <br> con especialistas")
    return text

def fix_blog_index():
    text = read("blog.html")
    pieces = text.split('<div class="blog-content">')
    rebuilt = [pieces[0]]
    for idx, piece in enumerate(pieces[1:], start=1):
        if idx <= len(posts):
            slug, title = posts[idx - 1]
            piece = re.sub(r'\s*<h3.*?<ul>', f'\n                            <h3><a href="{slug}">{title}</a></h3>\n                            <ul>', piece, count=1, flags=re.S)
        rebuilt.append('<div class="blog-content">' + piece)
    write("blog.html", cleanup_common("".join(rebuilt)))

def fix_index():
    text = cleanup_common(read("index.html"))
    write("index.html", text)

def fix_schema_types():
    for path in ROOT.glob("*.html"):
        text = read(path.name)
        fixed = cleanup_common(text)
        if fixed != text:
            write(path.name, fixed)

def main():
    fix_blog_index()
    fix_index()
    fix_schema_types()

if __name__ == "__main__":
    main()

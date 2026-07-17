#!/usr/bin/env python3
"""Adapta los seis micrositios importados a EnZonaSur.com y Argentina.

El script es intencionalmente repetible: solo renombra rutas que todavía
conservan su nombre original y aplica reemplazos de texto idempotentes.
"""

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
TEXT_EXTENSIONS = {".html", ".xml", ".txt", ".md", ".mjs", ".js", ".css"}

LOCALITIES = [
    ("portal-de-las-americas", "banfield"),
    ("quinta-paredes", "temperley"),
    ("bucaramanga", "avellaneda"),
    ("barranquilla", "banfield"),
    ("cartagena", "lanus"),
    ("medellin", "lomas-de-zamora"),
    ("normandia", "berazategui"),
    ("fontibon", "adrogue"),
    ("hayuelos", "avellaneda"),
    ("kennedy", "lanus"),
    ("modelia", "lomas-de-zamora"),
    ("salitre", "quilmes"),
    ("bogota", "quilmes"),
    ("cali", "berazategui"),
]

CITY_TEXT = [
    ("Portal de las Américas", "Banfield"),
    ("Portal de las Americas", "Banfield"),
    ("Quinta Paredes", "Temperley"),
    ("Bucaramanga", "Avellaneda"),
    ("Barranquilla", "Banfield"),
    ("Cartagena", "Lanús"),
    ("Medellín", "Lomas de Zamora"),
    (r"Medell\u00edn", "Lomas de Zamora"),
    ("Normandía", "Berazategui"),
    ("Normandia", "Berazategui"),
    ("Fontibón", "Adrogué"),
    ("Fontibon", "Adrogué"),
    ("Hayuelos", "Avellaneda"),
    ("Kennedy", "Lanús"),
    ("Modelia", "Lomas de Zamora"),
    ("Salitre", "Quilmes"),
    ("Bogotá", "Quilmes"),
    (r"Bogot\u00e1", "Quilmes"),
    ("Cali", "Berazategui"),
]

PROJECTS = {
    "endocrinologo-infantil-colombia": "endocrinologo-infantil-zona-sur",
    "gastroenterologo-infantil-colombia": "gastroenterologo-infantil-zona-sur",
    "hemato-oncologia-pediatra-colombia": "hemato-oncologia-pediatrica-zona-sur",
    "neumologia-infantil-colombia": "neumologia-infantil-zona-sur",
    "manicure-salitre-modelia": "manicure-zona-sur",
    "finanzas-personales": "finanzas-personales",
}


def replace_text(path: Path, replacements: list[tuple[str, str]]) -> None:
    try:
        value = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return
    updated = value
    for old, new in replacements:
        updated = updated.replace(old, new)
    if updated != value:
        path.write_text(updated, encoding="utf-8")


def rename_local_files(directory: Path, manicure: bool = False) -> None:
    pairs = LOCALITIES if manicure else [
        ("bucaramanga", "avellaneda"),
        ("barranquilla", "banfield"),
        ("cartagena", "lanus"),
        ("medellin", "lomas-de-zamora"),
        ("bogota", "quilmes"),
        ("cali", "berazategui"),
    ]
    for path in sorted(directory.rglob("*"), key=lambda p: len(p.parts), reverse=True):
        if not path.is_file():
            continue
        new_name = path.name
        for old, new in pairs:
            new_name = new_name.replace(old, new)
        if manicure:
            new_name = new_name.replace("manicure-a-domicilio-quilmes", "manicure-a-domicilio-zona-sur")
        if new_name != path.name:
            target = path.with_name(new_name)
            if not target.exists():
                path.rename(target)


def main() -> None:
    for original, target_name in PROJECTS.items():
        directory = ROOT / original
        target = ROOT / target_name
        if directory.exists() and directory != target and not target.exists():
            directory.rename(target)
        directory = target
        if not directory.exists():
            continue

        is_manicure = target_name == "manicure-zona-sur"
        rename_local_files(directory, manicure=is_manicure)

        replacements: list[tuple[str, str]] = []
        if is_manicure:
            replacements.extend([
                ("Manicure Salitre & Modelia", "Manicure Zona Sur"),
                ("Manicure Salitre y Modelia", "Manicure Zona Sur"),
                ("SALITRE · MODELIA", "ZONA SUR"),
                ("Ciudad Salitre · Modelia · zonas cercanas", "Quilmes · Lomas de Zamora · zonas cercanas"),
                ("el occidente de Bogotá", "Zona Sur del Gran Buenos Aires"),
                ("occidente de Bogotá", "Zona Sur del Gran Buenos Aires"),
                ("manicure-salitre-modelia", "manicure-zona-sur"),
                ("manicure-a-domicilio-bogota", "manicure-a-domicilio-zona-sur"),
                ("SM</span>", "ZS</span>"),
                ("const whatsappNumber = '573138948286'", "const whatsappNumber = '5491112345678'"),
                ("wa.me/573138948286", "wa.me/5491112345678"),
                ('<a href="https://www.instagram.com/yuranylashes.nails/" target="_blank" rel="noopener noreferrer">Instagram · @Yuranylashes.nails</a>', ""),
            ])
            for old, new in LOCALITIES:
                replacements.append((f"manicure-{old}", f"manicure-{new}"))
            replacements.extend(CITY_TEXT)
            replacements.extend([
                ("Ciudad Quilmes", "Quilmes"),
                ("Quilmes y Lomas de Zamora", "Zona Sur"),
                ("Quilmes o Lomas de Zamora", "Zona Sur"),
            ])
        elif target_name != "finanzas-personales":
            specialty_old = original
            replacements.extend([
                (specialty_old, target_name),
                ("hemato-oncologia-pediatra-zona-sur", "hemato-oncologia-pediatrica-zona-sur"),
            ])
            for old, new in [
                ("bucaramanga", "avellaneda"),
                ("barranquilla", "banfield"),
                ("cartagena", "lanus"),
                ("medellin", "lomas-de-zamora"),
                ("bogota", "quilmes"),
                ("cali", "berazategui"),
            ]:
                replacements.append((f"-{old}", f"-{new}"))
            replacements.extend(CITY_TEXT[:6] + CITY_TEXT[-6:])
            replacements.extend([
                ("Colombia", "Zona Sur"),
                ("colombia", "zona sur"),
            ])
        else:
            replacements.extend([
                ("Slendy", "Finanzas Zona Sur"),
                ("SLENDY", "FINANZAS ZONA SUR"),
                ('<span class="brand-mark">S</span>', '<span class="brand-mark">F</span>'),
                ("Fintech personal · Dark experience", "Finanzas personales · Zona Sur"),
                ("finanzas personales inteligentes en modo dark", "finanzas personales en Zona Sur"),
                ("digitalescolombia.com", "enzonasur.com"),
                ("wa.me/573180435023", "wa.me/5491112345678"),
                ("Colombia", "Argentina"),
                ("colombia", "argentina"),
            ])

        replacements.extend([
            ("https://digitalescolombia.com/", "https://enzonasur.com/"),
            ("digitalescolombia.com", "enzonasur.com"),
            ("Digitales Colombia", "En Zona Sur"),
            ("es-CO", "es-AR"),
            ("es_CO", "es_AR"),
            ('"addressCountry": "CO"', '"addressCountry": "AR"'),
            ('"addressCountry":"CO"', '"addressCountry":"AR"'),
            ("+57 xxxxxxxxxx", "+54 11 1234-5678"),
            ("+57xxxxxxxxxx", "+541112345678"),
            ("+57 ", "+54 11 "),
            ("Agenda tu", "Pedí tu"),
            ("agenda tu", "pedí tu"),
            ("puedes", "podés"),
            ("Puedes", "Podés"),
            ("debes", "tenés que"),
            ("Debes", "Tenés que"),
        ])

        for path in directory.rglob("*"):
            if path.is_file() and path.suffix.lower() in TEXT_EXTENSIONS:
                replace_text(path, replacements)

    # Segunda pasada: limpia residuos presentes en bloques agregados por las
    # plantillas y normaliza referencias luego de los renombres.
    project_dirs = [ROOT / target for target in PROJECTS.values()]
    cleanup = [
        ("digitaleszona sur.com", "enzonasur.com"),
        ("digitaleszona%20sur.com", "enzonasur.com"),
        ("digitales zona sur.com", "enzonasur.com"),
        ("wa.me/573180435023", "wa.me/5491112345678"),
        ("wa.me/573138948286", "wa.me/5491112345678"),
        ("hola@slendy.com", "contacto@enzonasur.com"),
        ("https://slendy.com", "https://enzonasur.com/finanzas-personales"),
        ("servicios-locales-bogota.html", "servicios-locales-zona-sur.html"),
        ("Servicios locales Bogotá", "Servicios locales de Zona Sur"),
        ("Bogotá", "Zona Sur"),
        (r"Bogot\u00e1", "Zona Sur"),
        ("Colombia", "Argentina"),
        ("colombia", "argentina"),
        ('"addressCountry": "Zona Sur"', '"addressCountry": "AR"'),
        ('"addressCountry":"Zona Sur"', '"addressCountry":"AR"'),
        ('"addressCountry": "Argentina"', '"addressCountry": "AR"'),
        ('"addressCountry":"Argentina"', '"addressCountry":"AR"'),
        ('<html lang="es">', '<html lang="es-AR">'),
        ('<html lang="es"', '<html lang="es-AR"'),
        ("Medellín", "Lomas de Zamora"),
        (r"Medell\u00edn", "Lomas de Zamora"),
        ("Barranquilla", "Banfield"),
        ("Cartagena", "Lanús"),
        ("Bucaramanga", "Avellaneda"),
        ("Cali", "Berazategui"),
        ("addressLoberazateguity", "addressLocality"),
        ("loberazateguidades", "localidades"),
        ("loberazateguidad", "localidad"),
        ("berazateguidad", "calidad"),
        ("berazateguiente", "caliente"),
        ("berazateguificado", "calificado"),
        ("<span>+57\n                    xxxxxxxxxx</span>", "<span>+54 11 1234-5678</span>"),
        ("<span>+57 xxxxxxxxxx</span>", "<span>+54 11 1234-5678</span>"),
        ("<span>+57", "<span>+54 11"),
        ("https://enzonasur.com/faq-endocrinologia-pediatrica-zona sur", "https://enzonasur.com/endocrinologo-infantil-zona-sur/faq.html"),
        ("https://enzonasur.com/blog-endocrinologia-pediatrica-zona sur", "https://enzonasur.com/endocrinologo-infantil-zona-sur/blog.html"),
        ("https://enzonasur.com/guia-endocrinologia-pediatrica-zona sur", "https://enzonasur.com/endocrinologo-infantil-zona-sur/blog-single-post.html"),
        ("https://enzonasur.com/sobre-endocrinologia-pediatrica-zona sur", "https://enzonasur.com/endocrinologo-infantil-zona-sur/about.html"),
        ("https://enzonasur.com/blog-gastroenterologia-pediatrica-zona sur", "https://enzonasur.com/gastroenterologo-infantil-zona-sur/blog.html"),
        ("https://enzonasur.com/neumatologo-infantil-zona sur", "https://enzonasur.com/neumologia-infantil-zona-sur/"),
        ("https://enzonasur.com/hemato-oncologo-pediatra-zona sur", "https://enzonasur.com/hemato-oncologia-pediatrica-zona-sur/"),
        ('"inLanguage":"es"', '"inLanguage":"es-AR"'),
        ('"inLanguage": "es"', '"inLanguage": "es-AR"'),
    ]
    for directory in project_dirs:
        if not directory.exists():
            continue
        for path in directory.rglob("*"):
            if path.is_file() and path.suffix.lower() in TEXT_EXTENSIONS:
                replace_text(path, cleanup)

    # La fuente de gastroenterología incluía un single post de endocrinología.
    # Se conserva su layout, pero se adapta el contenido y sus enlaces.
    gastro_post = ROOT / "gastroenterologo-infantil-zona-sur/blog-single-post.html"
    if gastro_post.exists():
        gastro_cleanup = [
            ("Endocrinólogo Infantil", "Gastroenterólogo Infantil"),
            ("Endocrinólogo infantil", "Gastroenterólogo infantil"),
            ("endocrinólogo infantil", "gastroenterólogo infantil"),
            ("Endocrinología pediátrica", "Gastroenterología pediátrica"),
            ("endocrinología pediátrica", "gastroenterología pediátrica"),
            ("crecimiento, pubertad, diabetes infantil y tiroides en niños", "dolor abdominal, estreñimiento, reflujo y salud digestiva infantil"),
            ("crecimiento infantil, pubertad, diabetes infantil y tiroides en niños", "dolor abdominal, estreñimiento, reflujo y salud digestiva infantil"),
            ("crecimiento-infantil-cuando-consultar.html", "dolor-abdominal-recurrente-ninos.html"),
            ("pubertad-precoz-en-ninos.html", "estrenimiento-infantil-cuando-consultar.html"),
            ("diabetes-infantil-senales-alerta.html", "reflujo-gastroesofagico-en-bebes-y-ninos.html"),
            ("Crecimiento infantil: cuándo consultar", "Dolor abdominal recurrente en niños"),
            ("Pubertad precoz en niños", "Estreñimiento infantil: cuándo consultar"),
            ("Diabetes infantil: señales de alerta", "Reflujo gastroesofágico en bebés y niños"),
            ("La endocrinología pediátrica revisa cómo las hormonas influyen en el crecimiento, la pubertad, la glucosa, el metabolismo y la tiroides de niños y adolescentes.", "La gastroenterología pediátrica evalúa el aparato digestivo, la alimentación y la nutrición de bebés, niños y adolescentes."),
            ("Consultar a tiempo permite identificar señales que pueden pasar desapercibidas, como cambios en la talla, pubertad temprana o tardía, cansancio persistente, aumento o pérdida de peso y sed excesiva.", "Consultar a tiempo permite evaluar síntomas frecuentes como dolor abdominal recurrente, estreñimiento, diarrea persistente, reflujo, vómitos o dificultades con la alimentación."),
            ("La valoración suele incluir historia clínica, revisión de curvas de crecimiento, antecedentes familiares y estudios complementarios cuando son necesarios.", "La valoración suele incluir historia clínica, revisión del crecimiento y la alimentación, antecedentes familiares y estudios complementarios cuando son necesarios."),
            ("Si buscas información específica, en el blog encontrarás guías sobre crecimiento infantil, pubertad precoz en niños y señales de alerta de diabetes infantil.", "En el blog encontrarás guías sobre dolor abdominal recurrente, estreñimiento infantil y reflujo gastroesofágico en bebés y niños."),
            ("contact.html", "index.html#contacto"),
            ("faq.html", "index.html#faq"),
            ("https://enzonasur.com/endocrinologo-infantil-zona-sur/blog-single-post.html", "https://enzonasur.com/gastroenterologo-infantil-zona-sur/blog-single-post.html"),
        ]
        for locality in ("quilmes", "lomas-de-zamora", "banfield", "lanus", "avellaneda", "berazategui"):
            gastro_cleanup.append((f"endocrinologo-infantil-en-{locality}.html", f"gastroenterologo-infantil-en-{locality}.html"))
        replace_text(gastro_post, gastro_cleanup)

    # Los canonical de archivos HTML deben reflejar exactamente su ruta real.
    # Esto evita arrastrar URLs planas o nombres antiguos de las fuentes.
    for directory in project_dirs:
        if not directory.exists():
            continue
        for path in directory.rglob("*.html"):
            relative = path.relative_to(directory).as_posix()
            canonical = f"https://enzonasur.com/{directory.name}/"
            if relative != "index.html":
                canonical += relative
            value = path.read_text(encoding="utf-8")
            value = re.sub(
                r'<link\s+href="[^"]*"\s+rel="canonical"\s*/?>',
                f'<link href="{canonical}" rel="canonical"/>',
                value,
                count=1,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r'<link\s+rel="canonical"\s+href="[^"]*"\s*/?>',
                f'<link rel="canonical" href="{canonical}">',
                value,
                count=1,
                flags=re.IGNORECASE,
            )
            path.write_text(value, encoding="utf-8")

    # Regenera sitemaps completos. Varias fuentes médicas traían urlsets
    # vacíos, por lo que sus landings no quedaban declaradas para indexación.
    for directory in project_dirs:
        if not directory.exists():
            continue
        urls = []
        for path in sorted(directory.rglob("*.html")):
            if path.name.startswith("google"):
                continue
            relative = path.relative_to(directory)
            if path.name == "index.html":
                parent = relative.parent.as_posix()
                url = f"https://enzonasur.com/{directory.name}/"
                if parent != ".":
                    url += f"{parent}/"
            else:
                url = f"https://enzonasur.com/{directory.name}/{relative.as_posix()}"
            priority = "1.0" if relative.as_posix() == "index.html" else "0.8"
            urls.append(
                f"  <url><loc>{url}</loc><lastmod>2026-07-16</lastmod>"
                f"<changefreq>monthly</changefreq><priority>{priority}</priority></url>"
            )
        sitemap = (
            '<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "\n".join(urls)
            + "\n</urlset>\n"
        )
        (directory / "sitemap.xml").write_text(sitemap, encoding="utf-8")


if __name__ == "__main__":
    main()

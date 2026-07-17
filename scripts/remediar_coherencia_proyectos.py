#!/usr/bin/env python3
"""Corrige geografía heredada, URLs por carpeta y copy interno visible."""

from __future__ import annotations

import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DOMAIN = "https://enzonasur.com"
TEXT_SUFFIXES = {".html", ".xml", ".txt", ".md", ".js", ".css", ".php", ".ps1", ".json"}

GEO_PROJECTS = {
    "plomeria-quilmes",
    "plomeria-zona-sur",
    "electricista-quilmes",
    "carpinteria-muebles-quilmes",
    "enlozado-baneras-quilmes",
    "pintura-albanileria-quilmes",
    "pisos-flotantes-quilmes",
    "pisos-flotantes-zona-sur",
    "aires-acondicionados-instalacion",
    "escribania-quilmes",
}

SLUG_MAP = {
    "villa-urquiza": "temperley",
    "villa-crespo": "remedios-de-escalada",
    "villa-devoto": "banfield",
    "zona-norte": "florencio-varela",
    "quilmesllito": "berazategui",
    "microcentro": "lomas-de-zamora",
    "mataderos": "lanus",
    "belgrano": "bernal",
    "recoleta": "avellaneda",
    "congreso": "monte-grande",
    "balvanera": "sarandi",
    "almagro": "adrogue",
    "nunez": "wilde",
    "flores": "jose-marmol",
    "barrio-norte": "burzaco",
    "puerto-madero": "ezeiza",
    "colegiales": "ezpeleta",
    "chacarita": "san-francisco-solano",
    "palermo": "quilmes-oeste",
}

TEXT_MAP = [
    ("Ciudad Autónoma de Buenos Aires", "Zona Sur del Gran Buenos Aires"),
    ("Ciudad Autonoma de Buenos Aires", "Zona Sur del Gran Buenos Aires"),
    ("Capital Federal", "Zona Sur"),
    ("Villa Urquiza", "Temperley"),
    ("Villa Crespo", "Remedios de Escalada"),
    ("Villa Devoto", "Banfield"),
    ("Zona Norte", "Florencio Varela"),
    ("Caballito", "Berazategui"),
    ("Microcentro", "Lomas de Zamora"),
    ("Mataderos", "Lanús"),
    ("Belgrano", "Bernal"),
    ("Recoleta", "Avellaneda"),
    ("Congreso", "Monte Grande"),
    ("Balvanera", "Sarandí"),
    ("Almagro", "Adrogué"),
    ("Núñez", "Wilde"),
    ("Nunez", "Wilde"),
    ("Flores", "José Mármol"),
    ("Barrio Norte", "Burzaco"),
    ("Puerto Madero", "Ezeiza"),
    ("Colegiales", "Ezpeleta"),
    ("Chacarita", "San Francisco Solano"),
    ("Palermo", "Quilmes Oeste"),
    ("CABA", "Zona Sur"),
]

GENERIC_PROJECTS = {
    "aire-acondicionado", "alquiler-mobiliario-eventos", "car-detail",
    "carpinteria", "colchoneria", "contador-estudio-contable", "costurera",
    "dentistas", "electricista", "entrenador-personal", "fotografo",
    "herreria", "impermeabilizacion", "lavado-auto-domicilio",
    "lavado-sillones-colchones", "limpieza-piletas", "pintores",
    "plomero-gasista", "psicopedagoga", "steel-framing",
    "veterinaria-domicilio",
}

FOREIGN_PROJECTS = {
    "cirujano-maxilofacial-en-bogota": "cirujano-maxilofacial-zona-sur",
    "dentista-bogota-kennedy": "dentista-zona-sur",
    "polarizados-nanoceramico-bogota": "polarizados-nanoceramico-zona-sur",
    "estetica-barcelona": "estetica-masculina-zona-sur",
}


def replace_file(path: Path, replacements: list[tuple[str, str]]) -> None:
    try:
        original = path.read_text(encoding="utf-8")
    except (UnicodeDecodeError, OSError):
        return
    updated = original
    for old, new in replacements:
        updated = updated.replace(old, new)
    if updated != original:
        path.write_text(updated, encoding="utf-8")


def rename_geo_files(directory: Path, mapping: dict[str, str]) -> None:
    for path in sorted(directory.rglob("*.html"), key=lambda p: len(p.parts), reverse=True):
        name = path.name
        for old, new in mapping.items():
            name = name.replace(old, new)
        if name == path.name:
            continue
        target = path.with_name(name)
        if target.exists():
            # El contenido existente tiene prioridad; se conserva el archivo
            # heredado hasta que pueda mapearse a otra localidad sin pisarlo.
            continue
        path.rename(target)


def fix_geography() -> None:
    for project in GEO_PROJECTS:
        directory = ROOT / project
        if not directory.exists():
            continue
        mapping = dict(SLUG_MAP)
        if project == "plomeria-zona-sur":
            mapping["mataderos"] = "quilmes"
        replacements = list(TEXT_MAP)
        if project == "plomeria-zona-sur":
            replacements = [("Mataderos", "Quilmes") if old == "Mataderos" else (old, new) for old, new in replacements]
        for old, new in mapping.items():
            replacements.append((old, new))
        for path in directory.rglob("*"):
            if path.is_file() and path.suffix.lower() in TEXT_SUFFIXES:
                replace_file(path, replacements)
                try:
                    value = path.read_text(encoding="utf-8")
                except UnicodeDecodeError:
                    continue
                for old, new in TEXT_MAP:
                    value = re.sub(re.escape(old), new, value, flags=re.IGNORECASE)
                path.write_text(value, encoding="utf-8")
        rename_geo_files(directory, mapping)

    # Este archivo tenía nombre Monte Grande pero todo su contenido era de Mataderos.
    special = ROOT / "electricista-zona-sur/electricista-en-monte-grande.html"
    if special.exists():
        replacements = [("Mataderos", "Monte Grande"), ("mataderos", "monte-grande")]
        replacements += list(TEXT_MAP)
        replacements += list(SLUG_MAP.items())
        replace_file(special, replacements)


def transform_foreign_projects() -> None:
    text_replacements = [
        ("Bogotá Kennedy", "Quilmes y Zona Sur"),
        ("Bogota Kennedy", "Quilmes y Zona Sur"),
        ("Ciudad Salitre", "Lomas de Zamora"),
        ("Portal de las Américas", "Banfield"),
        ("Quinta Paredes", "Temperley"),
        ("Bucaramanga", "Avellaneda"),
        ("Barranquilla", "Banfield"),
        ("Cartagena", "Lanús"),
        ("Medellín", "Lomas de Zamora"),
        ("Medellin", "Lomas de Zamora"),
        ("Bogotá", "Zona Sur"),
        ("Bogota", "Zona Sur"),
        ("Kennedy", "Quilmes"),
        ("Cali", "Berazategui"),
        ("Digitales Colombia", "En Zona Sur"),
        ("/marketing-digital-colombia.html", "/marketing-digital-zona-sur/"),
        ("/salud-en-colombia.html", "/pediatra-zona-sur/"),
        ("/abogados-en-colombia.html", "/estudio-abogados-zona-sur/"),
        ("/servicios-locales-bogota.html", "/"),
        ("/alojamientos-y-turismo-colombia.html", "/"),
        ("Colombia", "Argentina"),
        ("colombia", "argentina"),
        ("Barcelona", "Zona Sur"),
        ("España", "Argentina"),
        ("Espana", "Argentina"),
        ("es-CO", "es-AR"),
        ("es_CO", "es_AR"),
        ("es-ES", "es-AR"),
        ("es_ES", "es_AR"),
        ('"addressCountry": "CO"', '"addressCountry": "AR"'),
        ('"addressCountry":"CO"', '"addressCountry":"AR"'),
        ('"addressCountry": "ES"', '"addressCountry": "AR"'),
        ("wa.me/573138948286", "wa.me/5491112345678"),
        ("wa.me/573180435023", "wa.me/5491112345678"),
        ("wa.me/573212481668", "wa.me/5491112345678"),
        ("wa.me/5491136135344", "wa.me/5491112345678"),
        ("Bogot%C3%A1", "Zona%20Sur"),
        ("Bogot%C3%A1", "Zona%20Sur"),
        ("+5491136135344", "+5491112345678"),
        ("+54 11 311 361 35344", "+54 11 1234-5678"),
        ("+54 11 300 123 4567", "+54 11 1234-5678"),
        ("+54 11 321 248 1668", "+54 11 1234-5678"),
        ("+54 113212481668", "+5491112345678"),
        ("+54 11 313 894 8286", "+54 11 1234-5678"),
        ("+54 113138948286", "+5491112345678"),
        ("+57", "+54 11"),
    ]
    slug_replacements = [
        ("bogota-kennedy", "zona-sur"),
        ("bogota", "zona-sur"),
        ("kennedy", "quilmes"),
        ("barcelona", "zona-sur"),
        ("medellin", "lomas-de-zamora"),
        ("barranquilla", "banfield"),
        ("bucaramanga", "avellaneda"),
        ("cartagena", "lanus"),
        ("cali", "berazategui"),
    ]
    for old_name, new_name in FOREIGN_PROJECTS.items():
        old_dir = ROOT / old_name
        directory = ROOT / new_name
        if old_dir.exists() and not directory.exists():
            old_dir.rename(directory)
        if not directory.exists():
            continue
        # Los slugs se reemplazan sólo cuando forman parte de una ruta. Un
        # reemplazo libre de `cali`, por ejemplo, dañaría palabras como
        # `calidad`, `localidad` o `addressLocality`.
        safe_slug_replacements = []
        for old, new in slug_replacements:
            safe_slug_replacements.extend(
                [
                    (f"-{old}", f"-{new}"),
                    (f"/{old}", f"/{new}"),
                    (f"_{old}", f"_{new}"),
                ]
            )
        replacements = [(old_name, new_name)] + text_replacements + safe_slug_replacements
        for path in directory.rglob("*"):
            if path.is_file() and path.suffix.lower() in TEXT_SUFFIXES:
                replace_file(path, replacements)
        for path in sorted(directory.rglob("*"), key=lambda p: len(p.parts), reverse=True):
            name = path.name
            for old, new in slug_replacements:
                name = name.replace(old, new)
            if name == path.name:
                continue
            target = path.with_name(name)
            if not target.exists():
                path.rename(target)


def clean_auxiliary_geography() -> None:
    """Evita que scripts auxiliares vuelvan a generar contenido extranjero."""
    directory = ROOT / "gastroenterologo-infantil-zona-sur"
    if not directory.exists():
        return
    replacements = [
        ("gastroenterologo-infantil-en-bogota", "gastroenterologo-infantil-en-quilmes"),
        ("Bogotá", "Quilmes y Zona Sur"),
        ("Bogota", "Quilmes y Zona Sur"),
        ("bogota", "quilmes"),
        ("Digitales Colombia", "En Zona Sur"),
        ("Colombia", "Argentina"),
        ("colombia", "argentina"),
        ("/marketing-digital-argentina.html", "/marketing-digital-zona-sur/"),
        ("/salud-en-argentina.html", "/pediatra-zona-sur/"),
        ("/abogados-en-argentina.html", "/estudio-abogados-zona-sur/"),
        ("/servicios-locales-quilmes.html", "/"),
        ("/alojamientos-y-turismo-argentina.html", "/"),
    ]
    for path in directory.rglob("*"):
        if path.is_file() and path.suffix.lower() in TEXT_SUFFIXES:
            replace_file(path, replacements)


def rewrite_internal_copy() -> None:
    replacements = [
        ("Enfoque comercial", "Atención en Zona Sur"),
        ("Páginas locales preparadas con contenido específico por localidad.", "Consultá cobertura y disponibilidad según tu localidad."),
        ("FAQs listas para rich results.", "Preguntas frecuentes para resolver dudas antes de consultar."),
        ("URL limpia por rubro y por localidad.", "Información organizada por servicio y localidad."),
        ("Interlinking con otros servicios complementarios.", "Acceso sencillo a servicios relacionados."),
        ("Contenido inicial para captar tráfico orgánico", "Información práctica para conocer el servicio"),
        ("Contenido preparado para SEO", "Información clara y útil"),
        ("contenido preparado para SEO", "información clara y útil"),
        ("calidad del lead", "claridad de la consulta"),
        ("mejorar la conversión", "facilitar la coordinación"),
        ("captar y derivar consultas", "recibir y responder consultas"),
        ("captar tráfico", "responder búsquedas frecuentes"),
        ("La landing está orientada a", "La atención está dirigida a"),
        ("la landing está orientada a", "la atención está dirigida a"),
        ("reforzar el SEO local", "resolver dudas frecuentes"),
        ("Contenido preparado para posicionar en Google y convertir búsquedas en consultas.", "Información clara sobre servicios, cobertura y formas de consulta."),
        ("Contenido preparado para captar búsquedas de servicio + zona.", "Información específica del servicio y su cobertura local."),
        ("La página está preparada para captar consultas", "Se reciben consultas"),
        ("Los botones están preparados para derivar la consulta", "Los botones permiten enviar la consulta"),
        ("Bogot??", "Quilmes y Zona Sur"),
        ("Contenido informativo para captar búsquedas relacionadas con", "Guías prácticas sobre"),
        ("Artículo informativo con enfoque SEO local.", "Artículo con información práctica para resolver dudas frecuentes."),
        ("Landings internas para captar búsquedas locales y de servicios pediátricos.", "Páginas relacionadas con atención pediátrica y cobertura local."),
        ("Landing SEO", "Información local"),
        ("Ideal para captar búsquedas más concretas y enlazarlas desde el footer y las landings locales.", "Útil para consultar servicios específicos y acceder desde las páginas locales."),
        ("CTA directo para derivar consultas comerciales.", "Contacto directo para realizar consultas por WhatsApp."),
        ("Arquitectura pensada para Quilmes, Lanús, Avellaneda, Lomas, Banfield, Adrogué y más.", "Cobertura en Quilmes, Lanús, Avellaneda, Lomas de Zamora, Banfield, Adrogué y localidades cercanas."),
        ("SEO local", "Información local"),
        ("Ver landing SEO", "Ver información del servicio"),
        ('href="\'#"', 'href="#"'),
    ]
    for directory in sorted(p for p in ROOT.iterdir() if p.is_dir() and not p.name.startswith(".")):
        if not list(directory.rglob("*.html")):
            continue
        for path in directory.rglob("*.html"):
            replace_file(path, replacements)
            try:
                value = path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                continue
            value = re.sub(
                r"Esta landing está preparada para captar y derivar consultas de (.*?) en (.*?) y zonas cercanas\.",
                r"Podés consultar por \1 en \2 y zonas cercanas. La disponibilidad se confirma al coordinar.",
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r"Esta landing está preparada para recibir y responder consultas de (.*?) en (.*?) y zonas cercanas\.",
                r"Podés consultar por \1 en \2 y zonas cercanas. La disponibilidad se confirma al coordinar.",
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r"Esta página concentra la intención de búsqueda de usuarios que necesitan (.*?) cerca de (.*?)\. El contenido está escrito para resolver dudas iniciales, explicar qué información enviar y facilitar una derivación comercial rápida\.",
                r"Si necesitás \1 en \2, podés consultar disponibilidad, alcance y presupuesto. Para orientarte mejor, indicá qué necesitás, dónde estás y cuándo te gustaría coordinar.",
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r"Esta carpeta está pensada para atraer usuarios con intención clara: personas que necesitan (.*?), comparan opciones y quieren consultar rápido\. La estructura evita mezclar rubros y permite medir qué servicios generan mejores leads\.",
                r"Ofrecemos información sobre \1 para que puedas conocer el alcance, revisar las zonas atendidas y consultar disponibilidad de forma directa.",
                value,
                flags=re.IGNORECASE,
            )
            value = value.replace(
                "Para facilitar la coordinación, el mensaje de contacto debe incluir ubicación, tipo de trabajo, disponibilidad y referencias visuales cuando corresponda.",
                "Al escribir, indicá tu ubicación, el trabajo que necesitás, disponibilidad y fotos cuando corresponda.",
            )
            value = re.sub(r"contenidos? preparados? para SEO", "guías prácticas y fáciles de aplicar", value, flags=re.IGNORECASE)
            value = re.sub(r"páginas locales preparadas", "páginas con información local", value, flags=re.IGNORECASE)
            value = re.sub(r"intención de búsqueda de usuarios", "necesidad concreta de quienes consultan", value, flags=re.IGNORECASE)
            value = re.sub(r"preparad[oa]s? para SEO", "pensado para informar con claridad", value, flags=re.IGNORECASE)
            value = re.sub(
                r"esta página está pensada para captar consultas",
                "esta página facilita las consultas",
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r"Ciudad Autónoma de Buenos\s+\s*Aires",
                "Quilmes y Zona Sur",
                value,
                flags=re.IGNORECASE,
            )
            path.write_text(value, encoding="utf-8")


def canonical_for(project: str, path: Path) -> str:
    relative = path.relative_to(ROOT / project)
    if relative.name == "index.html":
        parent = relative.parent.as_posix()
        return f"{DOMAIN}/{project}/" + ("" if parent == "." else f"{parent}/")
    return f"{DOMAIN}/{project}/{relative.as_posix()}"


def normalize_html_urls() -> None:
    project_names = {p.name for p in ROOT.iterdir() if p.is_dir()}
    for directory in sorted(p for p in ROOT.iterdir() if p.is_dir() and not p.name.startswith(".")):
        pages = list(directory.rglob("*.html"))
        if not pages:
            continue
        project = directory.name
        for path in pages:
            canonical = canonical_for(project, path)
            try:
                value = path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                continue
            canonical_tag = f'<link rel="canonical" href="{canonical}">'
            patterns = [
                r'<link\b[^>]*\brel=["\']canonical["\'][^>]*>',
                r'<link\b[^>]*\bhref=["\'][^"\']+["\'][^>]*\brel=["\']canonical["\'][^>]*>',
            ]
            replaced = False
            for pattern in patterns:
                if re.search(pattern, value, flags=re.IGNORECASE):
                    value = re.sub(pattern, canonical_tag, value, count=1, flags=re.IGNORECASE)
                    replaced = True
                    break
            if not replaced and "</head>" in value.lower():
                value = re.sub(r'</head>', canonical_tag + '</head>', value, count=1, flags=re.IGNORECASE)
            value = re.sub(
                r'(<meta\b[^>]*\bproperty=["\']og:url["\'][^>]*\bcontent=["\'])[^"\']*(["\'])',
                rf'\g<1>{canonical}\2', value, count=1, flags=re.IGNORECASE,
            )
            value = re.sub(
                r'(<meta\b[^>]*\bcontent=["\'])[^"\']*(["\'][^>]*\bproperty=["\']og:url["\'][^>]*>)',
                rf'\g<1>{canonical}\2', value, count=1, flags=re.IGNORECASE,
            )
            # Cada sitio se publica dentro de /{proyecto}/. Los enlaces que
            # empiezan con una sola barra deben conservar ese prefijo; de lo
            # contrario /assets o /contacto apuntan a la raíz de enzonasur.com.
            prefix = f"/{project}"
            value = re.sub(
                r'((?:href|src|action)=["\'])/(?!/)(?!' + re.escape(project) + r'(?:/|["\']))',
                rf'\1{prefix}/',
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r'((?:href|src|action)=["\'])' + re.escape(prefix) + r'/(["\'])',
                rf'\1{prefix}/\2',
                value,
                flags=re.IGNORECASE,
            )
            value = re.sub(
                r'(url\(["\']?)/(?!/)(?!' + re.escape(project) + r'/)',
                rf'\1{prefix}/',
                value,
                flags=re.IGNORECASE,
            )

            def scope_enzonasur_url(match: re.Match) -> str:
                full = match.group(0)
                raw_path = match.group(1) or ""
                parts = raw_path.strip("/").split("/", 1)
                if not parts or not parts[0] or parts[0] in project_names:
                    return full
                remainder = parts[1] if parts[0].endswith(".ar") and len(parts) > 1 else raw_path.strip("/")
                return f"{DOMAIN}/{project}/" + remainder

            value = re.sub(
                r'https://enzonasur\.com(/[A-Za-z0-9._~!$&()*+,;=:@%/-]*)?',
                scope_enzonasur_url,
                value,
            )
            path.write_text(value, encoding="utf-8")


def repair_local_links() -> None:
    category_links = {
        "marketing-digital-argentina.html": "/marketing-digital-zona-sur/",
        "salud-en-argentina.html": "/pediatra-zona-sur/",
        "abogados-en-argentina.html": "/estudio-abogados-zona-sur/",
        "servicios-locales-zona-sur.html": "/",
        "alojamientos-y-turismo-argentina.html": "/",
    }
    attr_pattern = re.compile(r'(?P<attr>href|src|action)=(?P<q>["\'])(?P<url>[^"\']*)(?P=q)', re.IGNORECASE)
    for directory in sorted(p for p in ROOT.iterdir() if p.is_dir() and not p.name.startswith(".")):
        if directory.name in {"web", "web2"}:
            continue
        project = directory.name
        for path in directory.rglob("*.html"):
            try:
                value = path.read_text(encoding="utf-8")
            except UnicodeDecodeError:
                continue

            def repair(match: re.Match) -> str:
                attr, quote, url = match.group("attr", "q", "url")
                if url != url.strip():
                    url = url.strip()
                if not url or url.startswith(("http:", "https:", "mailto:", "tel:", "javascript:", "data:", "//", "#")):
                    return f"{attr}={quote}{url}{quote}"
                if re.fullmatch(r"\+\d[\d\s()-]+", url):
                    phone = re.sub(r"[^+\d]", "", url)
                    return f"{attr}={quote}tel:{phone}{quote}"
                clean = re.split(r"[?#]", url, maxsplit=1)[0]
                suffix = url[len(clean):]
                target = ROOT / clean.lstrip("/") if clean.startswith("/") else (path.parent / clean).resolve()
                if clean.endswith("/"):
                    target = target / "index.html"
                if target.exists():
                    return match.group(0)

                name = Path(clean).name
                if attr.lower() == "href" and name in category_links:
                    new_url = category_links[name]
                elif attr.lower() == "href" and name == "blog.html" and (directory / "blog/index.html").exists():
                    new_url = f"/{project}/blog/"
                elif attr.lower() == "href" and name in {"servicios.html", "services.html"}:
                    new_url = f"/{project}/#servicios"
                elif attr.lower() == "href" and name in {"zonas.html", "zones.html"}:
                    new_url = f"/{project}/#zonas"
                else:
                    # Primero intentamos el recurso dentro de la raíz del
                    # proyecto (útil desde páginas anidadas); luego el recurso
                    # compartido en la raíz general.
                    local_candidate = directory / clean.lstrip("/").removeprefix(project + "/")
                    shared_candidate = ROOT / clean.lstrip("/").removeprefix(project + "/")
                    if local_candidate.exists():
                        new_url = f"/{project}/{local_candidate.relative_to(directory).as_posix()}"
                    elif shared_candidate.exists():
                        new_url = f"/{shared_candidate.relative_to(ROOT).as_posix()}"
                    elif attr.lower() == "href" and clean.lower().endswith((".html", ".htm")):
                        # Los templates heredados incluyen menús a demos que
                        # nunca se publicaron. Se evita dejar un 404 y se lleva
                        # al inicio del proyecto correspondiente.
                        new_url = f"/{project}/"
                    elif attr.lower() == "src" and Path(clean).suffix.lower() in {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"}:
                        new_url = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        suffix = ""
                    elif attr.lower() == "src" and Path(clean).suffix.lower() == ".js":
                        candidates = list(directory.rglob(Path(clean).name))
                        if not candidates and "jquery" in Path(clean).name.lower():
                            candidates = list(directory.rglob("jquery*.min.js")) or [ROOT / "assets/js/jquery.min.js"]
                        if not candidates or not candidates[0].exists():
                            new_url = "data:text/javascript,"
                            suffix = ""
                        else:
                            new_url = f"/{candidates[0].relative_to(ROOT).as_posix()}"
                    elif attr.lower() == "href" and Path(clean).suffix.lower() == ".css":
                        candidates = list(directory.rglob(Path(clean).name))
                        if not candidates:
                            new_url = "data:text/css,"
                            suffix = ""
                        else:
                            new_url = f"/{candidates[0].relative_to(ROOT).as_posix()}"
                    elif attr.lower() == "href" and Path(clean).suffix.lower() in {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".ico"}:
                        new_url = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        suffix = ""
                    elif attr.lower() == "href":
                        new_url = f"/{project}/"
                    else:
                        return match.group(0)
                return f"{attr}={quote}{new_url}{suffix}{quote}"

            value = attr_pattern.sub(repair, value)
            if 'id="servicios"' not in value:
                value = value.replace('<main><section class="wrap section">', '<main><section class="wrap section" id="servicios">', 1)
            path.write_text(value, encoding="utf-8")


def regenerate_sitemaps() -> None:
    skip_projects = {"web", "web2"}
    for directory in sorted(p for p in ROOT.iterdir() if p.is_dir() and not p.name.startswith(".")):
        if directory.name in skip_projects:
            continue
        pages = [p for p in directory.rglob("*.html") if not p.name.startswith("google")]
        if not pages:
            continue
        urls = []
        for path in sorted(pages):
            rel = path.relative_to(directory).as_posix()
            if re.fullmatch(r'(?:index\d*|index(?:-[a-z0-9]+)+|portfolio[^/]*)\.html', path.name, flags=re.IGNORECASE) and path.name != "index.html":
                continue
            url = canonical_for(directory.name, path)
            priority = "1.0" if rel == "index.html" else "0.8"
            urls.append(f"  <url><loc>{url}</loc><lastmod>2026-07-16</lastmod><changefreq>monthly</changefreq><priority>{priority}</priority></url>")
        xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + "\n".join(urls) + "\n</urlset>\n"
        (directory / "sitemap.xml").write_text(xml, encoding="utf-8")
        (directory / "robots.txt").write_text(
            f"User-agent: *\nAllow: /\nSitemap: {DOMAIN}/{directory.name}/sitemap.xml\n",
            encoding="utf-8",
        )

    # El sitemap principal se reconstruye desde los sitemaps de cada proyecto
    # para no conservar URLs de carpetas o archivos que ya fueron renombrados.
    all_urls = {f"{DOMAIN}/"}
    for sitemap in sorted(ROOT.glob("*/sitemap.xml")):
        if sitemap.parent.name in skip_projects:
            continue
        try:
            all_urls.update(re.findall(r"<loc>(.*?)</loc>", sitemap.read_text(encoding="utf-8")))
        except UnicodeDecodeError:
            continue
    rows = [
        f"  <url><loc>{url}</loc><lastmod>2026-07-16</lastmod><changefreq>monthly</changefreq><priority>{'1.0' if url == DOMAIN + '/' else '0.8'}</priority></url>"
        for url in sorted(all_urls)
    ]
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(rows)
        + "\n</urlset>\n",
        encoding="utf-8",
    )


def cleanup_credits_and_demo_domains() -> None:
    for directory in sorted(p for p in ROOT.iterdir() if p.is_dir() and not p.name.startswith(".")):
        if not list(directory.rglob("*.html")):
            continue
        replacements = [
            ("https://digitalescolombia.com", "https://enzonasur.com"),
            ("Digitales Colombia", "En Zona Sur"),
            ("https://tudominio.com", f"{DOMAIN}/{directory.name}"),
            ("http://tudominio.com", f"{DOMAIN}/{directory.name}"),
            ("contacto@tudominio.com.ar", "contacto@enzonasur.com"),
            ("contacto@tudominio.com", "contacto@enzonasur.com"),
            ("info@tudominio.com", "contacto@enzonasur.com"),
            ("hola@tudominio.com", "contacto@enzonasur.com"),
            ("tudominio.com.ar", "enzonasur.com"),
            ("tudominio.com", "enzonasur.com"),
        ]
        for path in directory.rglob("*"):
            if path.is_file() and path.suffix.lower() in TEXT_SUFFIXES:
                replace_file(path, replacements)


def main() -> None:
    fix_geography()
    transform_foreign_projects()
    clean_auxiliary_geography()
    rewrite_internal_copy()
    cleanup_credits_and_demo_domains()
    normalize_html_urls()
    repair_local_links()
    regenerate_sitemaps()


if __name__ == "__main__":
    main()

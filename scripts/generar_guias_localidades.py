#!/usr/bin/env python3
"""Genera las guías institucionales de localidades para En Zona Sur.

La información sensible se enlaza a sitios oficiales para reducir el riesgo de
publicar teléfonos u horarios desactualizados. El contenido editorial de cada
ficha queda en este archivo para poder revisarlo y ampliarlo con facilidad.
"""

import json
from html import escape
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "localidades"
DOMAIN = "https://enzonasur.com"

EMERGENCIES = [
    ("911", "Policía", "Emergencias policiales"),
    ("100", "Bomberos", "Incendios y rescates"),
    ("103", "Defensa Civil", "Riesgos y eventos en la vía pública"),
    ("107", "Emergencias médicas", "SAME o sistema local de emergencias"),
    ("144", "Violencia de género", "Atención y asesoramiento"),
]

LOCALITIES = [
    {
        "slug": "quilmes",
        "name": "Quilmes",
        "municipality": "Municipio de Quilmes",
        "party": "Partido de Quilmes",
        "summary": "Guía práctica de Quilmes con accesos a servicios públicos, salud, seguridad, trámites, historia y propuestas para recorrer la ciudad.",
        "history": "La historia oficial de Quilmes se remonta a los primeros repartos de tierras posteriores a la segunda fundación de Buenos Aires. En 1855 se realizó la primera elección municipal y en 1856 se instaló la primera municipalidad. El partido fue también origen histórico de otros distritos de la zona sur.",
        "identity": "Quilmes combina una fuerte identidad ribereña, actividad comercial e industrial y una red de barrios que incluye Bernal, Ezpeleta, Don Bosco, San Francisco Solano y Quilmes Oeste.",
        "official": "https://www.quilmes.gov.ar/",
        "health": "https://www.quilmes.gov.ar/salud.php",
        "security": "https://quilmes.gov.ar/gestion/seguridad.php",
        "history_url": "https://www.quilmes.gov.ar/quilmes/historia.php",
        "topics": ["CAPS y hospitales", "SAME y emergencias", "Mi Alerta Quilmes", "Trámites municipales", "Cultura y espacios públicos"],
    },
    {
        "slug": "lanus",
        "name": "Lanús",
        "municipality": "Municipio de Lanús",
        "party": "Partido de Lanús",
        "summary": "Información útil de Lanús: servicios municipales, salud, emergencias, seguridad, transporte, historia y datos para vecinos y visitantes.",
        "history": "Lanús obtuvo su autonomía el 29 de septiembre de 1944 y comenzó a funcionar como partido el 1 de enero de 1945. El distrito está formado por seis localidades: Gerli, Lanús Este, Lanús Oeste, Monte Chingolo, Remedios de Escalada y Valentín Alsina.",
        "identity": "Es un municipio urbano, denso y conectado con la Ciudad de Buenos Aires, con una identidad marcada por sus clubes, su actividad comercial y la historia ferroviaria e industrial.",
        "official": "https://www.lanus.gob.ar/",
        "health": "https://www.lanus.gob.ar/sel",
        "security": "https://www.lanus.gob.ar/",
        "history_url": "https://www.lanus.gob.ar/municipiodelanus",
        "topics": ["Sistema de Emergencias Lanús", "Unidades sanitarias", "Seguridad Ciudadana 147", "Trámites y tasas", "Circuitos históricos"],
    },
    {
        "slug": "avellaneda",
        "name": "Avellaneda",
        "municipality": "Municipalidad de Avellaneda",
        "party": "Partido de Avellaneda",
        "summary": "Guía de Avellaneda para resolver consultas cotidianas: municipio, salud pública, emergencias, seguridad, historia, barrios y lugares de interés.",
        "history": "La ciudad fue fundada el 7 de abril de 1852 y se desarrolló como un núcleo industrial, comercial y portuario del sur del área metropolitana. El municipio está integrado por Avellaneda Centro, Dock Sud, Gerli, Piñeyro, Sarandí, Villa Domínico y Wilde.",
        "identity": "Su cercanía con el Riachuelo, el puerto de Dock Sud, el patrimonio industrial y la tradición deportiva son parte central de la identidad avellanedense.",
        "official": "https://www.mda.gob.ar/",
        "health": "https://www.mda.gob.ar/gobierno/secretaria-de-salud/",
        "security": "https://autogestion.mda.gob.ar/",
        "history_url": "https://www.mda.gob.ar/ciudad/avellaneda/",
        "topics": ["Hospitales y unidades sanitarias", "SAME y Defensa Civil", "Autogestión municipal", "Puerto y patrimonio industrial", "Cultura y deportes"],
    },
    {
        "slug": "lomas-de-zamora",
        "name": "Lomas de Zamora",
        "municipality": "Municipio de Lomas de Zamora",
        "party": "Partido de Lomas de Zamora",
        "summary": "Todo lo básico de Lomas de Zamora en un solo lugar: trámites, salud, seguridad, emergencias, historia, transporte y propuestas locales.",
        "history": "Lomas de Zamora fue fundado el 10 de septiembre de 1861 con el nombre de Pueblo de la Paz. El distrito tiene una extensa red de localidades y barrios, además de la Reserva Natural Provincial Santa Catalina.",
        "identity": "Lomas reúne centros comerciales tradicionales, espacios culturales, instituciones educativas y áreas verdes que conectan la vida urbana con la historia del sur bonaerense.",
        "official": "https://lomasdezamora.gov.ar/",
        "health": "https://lomasdezamora.gov.ar/unidadessanitarias.aspx",
        "security": "https://lomasdezamora.gov.ar/gestion/seguridad-lomas",
        "history_url": "https://lomasdezamora.gov.ar/municipio",
        "topics": ["Hospitales y CIS", "Seguridad Lomas", "Centros de Gestión", "Turnos y documentación", "Reserva Santa Catalina"],
    },
    {
        "slug": "banfield",
        "name": "Banfield",
        "municipality": "Municipio de Lomas de Zamora",
        "party": "Partido de Lomas de Zamora",
        "summary": "Guía útil de Banfield: servicios del municipio, salud y emergencias, seguridad, trámites, transporte, historia barrial y actividades.",
        "history": "Banfield forma parte del Partido de Lomas de Zamora y creció alrededor del ferrocarril y de sus barrios residenciales. Su identidad se construyó con instituciones educativas, clubes, comercios y una intensa vida cultural.",
        "identity": "La estación, el centro comercial, los clubes y la cercanía con Lomas de Zamora y Temperley hacen de Banfield una localidad conectada y de mucha actividad cotidiana.",
        "official": "https://lomasdezamora.gov.ar/",
        "health": "https://lomasdezamora.gov.ar/unidadessanitarias.aspx",
        "security": "https://lomasdezamora.gov.ar/gestion/seguridad-lomas",
        "history_url": "https://lomasdezamora.gov.ar/municipio",
        "topics": ["CIS y hospitales de Lomas", "Seguridad Lomas", "Centros de Gestión", "Trámites online", "Agenda cultural"],
    },
    {
        "slug": "adrogue",
        "name": "Adrogué",
        "municipality": "Municipio de Almirante Brown",
        "party": "Partido de Almirante Brown",
        "summary": "Información práctica de Adrogué: atención municipal, salud, emergencias, seguridad, trámites, historia y espacios para conocer.",
        "history": "Adrogué es la localidad cabecera de Almirante Brown. Su crecimiento estuvo ligado al trazado urbano, la llegada del ferrocarril y la consolidación de una identidad residencial y cultural propia del sur del Gran Buenos Aires.",
        "identity": "El centro de Adrogué, sus calles arboladas, plazas, comercios y espacios culturales forman uno de los recorridos urbanos más reconocibles de la zona.",
        "official": "https://www.almirantebrown.gov.ar/",
        "health": "https://www.almirantebrown.gov.ar/",
        "security": "https://www.almirantebrown.gov.ar/",
        "history_url": "https://www.almirantebrown.gov.ar/",
        "topics": ["Salas y hospitales del distrito", "Emergencias 911 / 107", "Trámites municipales", "Cultura y patrimonio", "Plazas y espacios verdes"],
    },
    {
        "slug": "burzaco",
        "name": "Burzaco",
        "municipality": "Municipio de Almirante Brown",
        "party": "Partido de Almirante Brown",
        "summary": "Guía local de Burzaco con enlaces a servicios públicos, salud, seguridad, trámites, transporte, historia y actividades de la comunidad.",
        "history": "Burzaco forma parte de Almirante Brown y se desarrolló alrededor de la estación ferroviaria y de la expansión urbana del sur bonaerense. La localidad conserva espacios verdes e instituciones que sostienen una vida comunitaria activa.",
        "identity": "La plaza y el centro de Burzaco funcionan como referencias cotidianas, junto con sus clubes, escuelas, comercios y conexiones ferroviarias y viales.",
        "official": "https://www.almirantebrown.gov.ar/",
        "health": "https://www.almirantebrown.gov.ar/",
        "security": "https://www.almirantebrown.gov.ar/",
        "history_url": "https://www.almirantebrown.gov.ar/",
        "topics": ["Salud municipal y provincial", "Emergencias", "Trámites y reclamos", "Transporte y estación", "Actividades barriales"],
    },
    {
        "slug": "monte-grande",
        "name": "Monte Grande",
        "municipality": "Municipio de Esteban Echeverría",
        "party": "Partido de Esteban Echeverría",
        "summary": "Guía de Monte Grande con datos útiles para vecinos y visitantes: municipio, salud, seguridad, emergencias, trámites, historia y agenda local.",
        "history": "Monte Grande nació como parte de Lomas de Zamora y su estación ferroviaria se fundó el 20 de julio de 1889. En 1913 se creó el Partido de Esteban Echeverría, con Monte Grande como ciudad cabecera.",
        "identity": "La estación, el centro comercial, la Plaza Mitre y las instituciones históricas de Monte Grande son referencias del partido y de su conexión con Luis Guillón, El Jagüel y Canning.",
        "official": "https://www.estebanecheverria.gob.ar/",
        "health": "https://www.estebanecheverria.gob.ar/",
        "security": "https://www.estebanecheverria.gob.ar/",
        "history_url": "https://www.estebanecheverria.gob.ar/municipio/",
        "topics": ["Hospital Santamarina y salud", "Centro de Atención al Vecino", "Policía y emergencias", "Trámites municipales", "Cultura y plazas"],
    },
    {
        "slug": "ezeiza",
        "name": "Ezeiza",
        "municipality": "Municipio de Ezeiza",
        "party": "Partido de Ezeiza",
        "summary": "Información útil de Ezeiza: servicios municipales, salud, emergencias, seguridad, trámites, historia, transporte y puntos de interés.",
        "history": "Ezeiza nació alrededor de la estación ferroviaria inaugurada en 1884 y tomó su nombre de José María Ezeiza. En 1994 se creó el nuevo distrito mediante la Ley 11.550, separado de Esteban Echeverría.",
        "identity": "El aeropuerto, el corredor de la Ruta 205, el ferrocarril, los espacios verdes y el crecimiento de sus localidades hacen de Ezeiza un punto estratégico de conexión metropolitana.",
        "official": "https://www.ezeiza.gob.ar/",
        "health": "https://www.ezeiza.gob.ar/",
        "security": "https://www.ezeiza.gob.ar/",
        "history_url": "https://www.ezeiza.gob.ar/historia.php",
        "topics": ["Hospital Interzonal Ezeiza", "Emergencias 4232-8000", "Trámites online", "Aeropuerto y transporte", "Historia local"],
    },
]


CSS = """
:root{--ink:#14213d;--muted:#5c6b7a;--brand:#0d6b5f;--blue:#173b4f;--bg:#f7f9fb;--line:#dfe7ee;--card:#fff}
*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--ink);line-height:1.62}a{color:inherit}.wrap{width:min(1120px,calc(100% - 40px));margin:auto}.top{background:linear-gradient(135deg,var(--brand),var(--blue));color:#fff;padding:18px 0}.nav{display:flex;justify-content:space-between;gap:20px;align-items:center}.brand{text-decoration:none;font-weight:800}.nav a:last-child{border:1px solid #ffffff66;border-radius:999px;padding:8px 14px}.hero{padding:78px 0 62px;background:#fff}.eyebrow{text-transform:uppercase;letter-spacing:.13em;color:var(--brand);font-size:12px;font-weight:800}.hero h1{font-size:clamp(42px,7vw,76px);line-height:1;margin:12px 0 20px;max-width:900px;letter-spacing:-.05em}.lead{font-size:20px;color:var(--muted);max-width:800px}.crumb{font-size:14px;color:var(--muted);margin-bottom:26px}.section{padding:64px 0}.section h2{font-size:clamp(28px,4vw,44px);line-height:1.08;margin:0 0 14px}.section-intro{color:var(--muted);max-width:760px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}.card{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:24px;box-shadow:0 12px 30px #173b4f0b}.card h3{margin:0 0 8px;font-size:20px}.card p{margin:0;color:var(--muted)}.card a{display:inline-block;margin-top:14px;color:var(--brand);font-weight:700}.split{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start}.history{background:#eef5f3}.numbers{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}.number{background:#fff;border:1px solid var(--line);border-radius:14px;padding:13px 16px;min-width:150px}.number strong{display:block;font-size:22px;color:var(--brand)}.number span{font-size:13px;color:var(--muted)}.links{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px}.pill{padding:11px 14px;border-radius:999px;background:#fff;border:1px solid var(--line);text-decoration:none;font-weight:700}.note{margin-top:28px;padding:18px;border-left:4px solid var(--brand);background:#fff;color:var(--muted)}footer{background:#111a30;color:#dfe7ee;padding:36px 0}footer a{color:#fff}.source{font-size:13px;color:#b6c4d0;margin-top:8px}.sources{display:flex;flex-wrap:wrap;gap:18px}.sources a{font-weight:700}.local-nav{background:#fff;border-bottom:1px solid var(--line);padding:13px 0}.local-nav .wrap{display:flex;gap:20px;flex-wrap:wrap;font-size:14px;font-weight:700}.local-nav a{text-decoration:none}@media(max-width:760px){.grid,.split{grid-template-columns:1fr}.hero{padding:54px 0 44px}.section{padding:48px 0}.nav{align-items:flex-start;flex-direction:column}.nav a:last-child{align-self:flex-start}}
"""


def card(title: str, text: str, url: str) -> str:
    return f'<article class="card"><h3>{escape(title)}</h3><p>{escape(text)}</p><a href="{escape(url)}" target="_blank" rel="noopener">Consultar fuente oficial →</a></article>'


def page(data: dict) -> str:
    locality_url = f"{DOMAIN}/localidades/{data['slug']}/"
    topics = "".join(f'<li>{escape(topic)}</li>' for topic in data["topics"])
    emergency_cards = "".join(f'<div class="number"><strong>{number}</strong><span>{escape(label)} · {escape(detail)}</span></div>' for number, label, detail in EMERGENCIES)
    return f'''<!doctype html>
<html lang="es-AR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{escape(data['name'])}: servicios, trámites, historia y datos útiles | En Zona Sur</title>
<meta name="description" content="{escape(data['summary'])}"><link rel="canonical" href="{locality_url}"><meta name="robots" content="index,follow,max-image-preview:large"><meta name="theme-color" content="#0d6b5f">
<style>{CSS}</style>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"Article","headline":{json.dumps(data['name'] + ': guía local', ensure_ascii=False)},"description":{json.dumps(data['summary'], ensure_ascii=False)},"inLanguage":"es-AR","url":{json.dumps(locality_url)},"dateModified":"2026-08-30","publisher":{{"@type":"Organization","name":"En Zona Sur","url":"{DOMAIN}/"}}}}</script>
</head><body><header class="top"><div class="wrap nav"><a class="brand" href="{DOMAIN}/">En Zona Sur</a><a href="{DOMAIN}/localidades/">Todas las localidades</a></div></header>
<nav class="local-nav"><div class="wrap"><a href="#servicios">Servicios básicos</a><a href="#emergencias">Emergencias</a><a href="#historia">Historia</a><a href="#fuentes">Fuentes oficiales</a></div></nav>
<main><section class="hero"><div class="wrap"><div class="crumb"><a href="{DOMAIN}/">Inicio</a> / <a href="{DOMAIN}/localidades/">Localidades</a> / {escape(data['name'])}</div><p class="eyebrow">Guía local · {escape(data['party'])}</p><h1>{escape(data['name'])}</h1><p class="lead">{escape(data['summary'])}</p><div class="note">Actualizada el 30 de agosto de 2026. Los teléfonos, horarios y trámites pueden cambiar: antes de concurrir, revisá siempre la fuente oficial enlazada.</div></div></section>
<section class="section" id="servicios"><div class="wrap"><h2>Servicios básicos y gestiones</h2><p class="section-intro">Accesos rápidos para resolver necesidades frecuentes. Esta guía no reemplaza la información del organismo responsable.</p><div class="grid">{card('Municipalidad y trámites', 'Atención al vecino, tasas, licencias, reclamos y gestiones online.', data['official'])}{card('Salud pública', 'Hospitales, centros de atención, vacunación, turnos y programas de salud.', data['health'])}{card('Seguridad y prevención', 'Canales municipales de seguridad, alertas, patrullaje y prevención.', data['security'])}</div><div class="split" style="margin-top:24px"><article class="card"><h3>Temas para consultar</h3><ul>{topics}</ul></article><article class="card"><h3>Para una consulta más útil</h3><p>Indicá localidad y barrio, calle y altura aproximada, el tipo de trámite o servicio que necesitás y si se trata de una urgencia. No publiques datos personales sensibles en comentarios o formularios abiertos.</p></article></div></div></section>
<section class="section history" id="emergencias"><div class="wrap"><h2>Teléfonos de emergencia</h2><p class="section-intro">Ante una situación urgente, llamá al número correspondiente. Para información local, verificá el sistema de tu municipio.</p><div class="numbers">{emergency_cards}</div><div class="note">En una emergencia inmediata, priorizá el 911, 100, 103 o 107 según el caso. El 144 brinda orientación y asistencia ante situaciones de violencia de género.</div></div></section>
<section class="section" id="historia"><div class="wrap split"><div><p class="eyebrow">Identidad local</p><h2>Historia y características de {escape(data['name'])}</h2><p>{escape(data['history'])}</p><p>{escape(data['identity'])}</p></div><article class="card"><h3>Para seguir investigando</h3><p>La historia de una localidad se entiende mejor con archivos, museos, bibliotecas, instituciones y testimonios vecinales.</p><a href="{escape(data['history_url'])}" target="_blank" rel="noopener">Leer la historia oficial →</a></article></div></section>
<section class="section history"><div class="wrap"><h2>Otras guías de Zona Sur</h2><p class="section-intro">Seguimos construyendo fichas locales con información útil y fuentes verificables.</p><div class="links">{''.join(f'<a class="pill" href="{DOMAIN}/localidades/{other["slug"]}/">{escape(other["name"])}</a>' for other in LOCALITIES if other['slug'] != data['slug'])}</div></div></section>
<section class="section" id="fuentes"><div class="wrap"><h2>Fuentes oficiales</h2><p class="section-intro">Enlaces de referencia para confirmar horarios, teléfonos, requisitos, turnos y novedades.</p><div class="sources"><a href="{escape(data['official'])}" target="_blank" rel="noopener">{escape(data['municipality'])}</a><a href="{escape(data['health'])}" target="_blank" rel="noopener">Salud</a><a href="{escape(data['security'])}" target="_blank" rel="noopener">Seguridad</a><a href="{escape(data['history_url'])}" target="_blank" rel="noopener">Historia / ciudad</a></div><p class="source">En Zona Sur organiza y contextualiza la información; no es un sitio oficial del municipio.</p></div></section></main>
<footer><div class="wrap"><a class="brand" href="{DOMAIN}/">En Zona Sur</a><p>Guías locales, servicios y contenido útil del sur del Gran Buenos Aires.</p></div></footer></body></html>'''


def main() -> None:
    OUT.mkdir(exist_ok=True)
    (OUT / "assets").mkdir(exist_ok=True)
    (OUT / "assets" / "localidades.css").write_text(CSS.strip() + "\n", encoding="utf-8")
    index_cards = "".join(f'<a class="card" href="{data["slug"]}/"><h3>{escape(data["name"])}</h3><p>{escape(data["summary"])}</p><span>Ver guía local →</span></a>' for data in LOCALITIES)
    index = f'''<!doctype html><html lang="es-AR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Localidades de Zona Sur: servicios, trámites e historia | En Zona Sur</title><meta name="description" content="Guías útiles de Quilmes, Lanús, Avellaneda, Lomas de Zamora, Banfield, Adrogué, Burzaco, Monte Grande y Ezeiza."><link rel="canonical" href="{DOMAIN}/localidades/"><style>{CSS}</style></head><body><header class="top"><div class="wrap nav"><a class="brand" href="{DOMAIN}/">En Zona Sur</a><a href="{DOMAIN}/">Volver al inicio</a></div></header><main><section class="hero"><div class="wrap"><p class="eyebrow">Información útil y local</p><h1>Localidades de Zona Sur</h1><p class="lead">Guías prácticas con servicios básicos, municipalidad, salud, seguridad, emergencias, historia y fuentes oficiales para consultar datos actualizados.</p><div class="note">Estamos ampliando cada ficha con información verificable. Si encontrás un dato desactualizado, podés avisarnos para revisarlo.</div></div></section><section class="section"><div class="wrap"><h2>Elegí una localidad</h2><div class="grid">{index_cards}</div></div></section><section class="section history"><div class="wrap split"><div><h2>Qué vas a encontrar</h2><p>La idea es que cada ficha sea útil para vecinos, personas que se mudan, visitantes y negocios locales: información ordenada, contexto histórico y accesos directos a organismos públicos.</p></div><div class="card"><ul><li>Municipalidad y trámites</li><li>Salud y atención primaria</li><li>Policía, bomberos y emergencias</li><li>Historia e identidad local</li><li>Fuentes oficiales y fecha de actualización</li></ul></div></div></section></main><footer><div class="wrap"><a class="brand" href="{DOMAIN}/">En Zona Sur</a><p>Guías locales, servicios y contenido útil del sur del Gran Buenos Aires.</p></div></footer></body></html>'''
    (OUT / "index.html").write_text(index, encoding="utf-8")
    for data in LOCALITIES:
        directory = OUT / data["slug"]
        directory.mkdir(exist_ok=True)
        (directory / "index.html").write_text(page(data), encoding="utf-8")

    sitemap = ROOT / "sitemap.xml"
    if sitemap.exists():
        text = sitemap.read_text(encoding="utf-8")
        urls = [f"  <url><loc>{DOMAIN}/localidades/</loc><lastmod>2026-08-30</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>"]
        urls += [f"  <url><loc>{DOMAIN}/localidades/{d['slug']}/</loc><lastmod>2026-08-30</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>" for d in LOCALITIES]
        block = "\n".join(urls)
        if "<!-- localidades:start -->" in text:
            start = text.index("  <!-- localidades:start -->")
            end = text.index("  <!-- localidades:end -->", start) + len("  <!-- localidades:end -->")
            text = text[:start] + f"  <!-- localidades:start -->\n{block}\n  <!-- localidades:end -->" + text[end:]
        else:
            text = text.replace("</urlset>", f"  <!-- localidades:start -->\n{block}\n  <!-- localidades:end -->\n</urlset>")
        sitemap.write_text(text, encoding="utf-8")
    print(f"Generadas {len(LOCALITIES)} guías en {OUT}")


if __name__ == "__main__":
    main()

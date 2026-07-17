# Subir a Hostinger

## Forma correcta

Sube el contenido de esta carpeta directamente dentro de `public_html`.

En `public_html` deben quedar archivos como:

- `index.html`
- `.htaccess`
- `sitemap.xml`
- `robots.txt`
- `assets/`
- `zonas/`
- `vehiculos/`
- `servicios/`
- `polarizado-nano-ceramico-bogota/`

No debe quedar asi:

- `public_html/Polarizados-nanoceramicos-bogota/index.html`

Si queda dentro de una carpeta extra, la web puede cargar sin estilos o no abrir las paginas internas.

## Probar URLs

Despues de subir, revisa:

- `/`
- `/zonas/kennedy/`
- `/vehiculos/ford-fiesta/`
- `/assets/css/styles.css`
- `/sitemap.xml`

## Si no cargan estilos

Revisa que exista:

`public_html/assets/css/styles.css`

Si la web se instalo en una subcarpeta, las rutas absolutas `/assets/...` no funcionaran. Lo ideal para SEO es instalarla en la raiz del dominio.

## Dominio real

El sitio usa como dominio canonico:

`https://polarizadosnanoceramicosbogota.com`

Cuando tengas el dominio final, cambia `SITE.url` en `scripts/generate-site.js` y ejecuta:

```bash
node scripts/generate-site.js
```

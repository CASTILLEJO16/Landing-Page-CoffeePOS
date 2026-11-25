# Coffee POS — Landing page

Página estática de ventas de Coffee POS, hecha con Astro + Tailwind CSS.

## Correr en local

Necesitas Node.js 18.20 o más reciente.

```bash
npm install
npm run dev       # http://localhost:4321
```

Para ver en tu celular dentro de la misma red Wi-Fi: `npm run dev -- --host` y abre la IP que aparece.

Compilar y revisar la versión final:

```bash
npm run build     # genera /dist
npm run preview
```

## Qué editar

| Qué | Dónde |
| --- | --- |
| WhatsApp, correo, URL del sitio, precio, qué incluye el plan, preguntas frecuentes | `src/config/site.ts` |
| Colores y tipografía | `src/styles/global.css` (bloque `@theme`) |
| Textos de cada sección | `src/components/*.astro` |
| Capturas | `src/assets/screenshots/` (mismo nombre de archivo = no tocas código; Astro las optimiza) |
| Imagen al compartir por WhatsApp (1200×630) | `public/og.png` |
| Favicon | `public/favicon.svg` y `public/apple-touch-icon.png` |

Busca `TODO` en el proyecto para ver lo que falta revisar.

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio nuevo de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New… → Project** → importa el repositorio.
3. Vercel detecta Astro solo (Build: `npm run build`, Output: `dist`). Dale **Deploy**.
4. Copia la URL que te da Vercel y ponla en `site.url` dentro de `src/config/site.ts`. Sube el cambio: sin esto la vista previa de WhatsApp no muestra la imagen.

Otra opción, sin GitHub: `npx vercel` desde esta carpeta.

> WhatsApp guarda en caché la vista previa de un link. Si cambias `og.png`, puede tardar en actualizarse.

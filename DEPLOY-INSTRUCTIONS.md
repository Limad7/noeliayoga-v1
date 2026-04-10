# Instrucciones de Deploy - Web Developer

## Estructura del repositorio

```
Repositorio GitHub: Limad7/mis-proyectos-web
├── noelia-yoga/          # Proyecto actual
├── [futuro-proyecto]/    # Próximo proyecto
├── index.html            # Redirección a proyecto principal
├── deploy.sh             # Script de despliegue automático
└── .github/workflows/    # Workflows para GitHub Actions
```

## Proyectos registrados

| Proyecto | Carpeta | URL |
|----------|---------|-----|
| Noelia Yoga | `noelia-yoga/` | https://limad7.github.io/mis-proyectos-web/noelia-yoga/ |

## Para añadir un nuevo proyecto

1. Crear carpeta del proyecto en el repositorio:
   ```bash
   mkdir /home/linmad/.openclaw/workspace/noelia-yoga-git/[nombre-proyecto]
   ```

2. En el proyecto Vite, configurar `vite.config.js`:
   ```js
   export default defineConfig({
     base: "/mis-proyectos-web/[nombre-proyecto]/",
     plugins: [react()]
   })
   ```

3. Si usa react-router-dom, añadir `basename` en `main.jsx`:
   ```jsx
   <BrowserRouter basename="/mis-proyectos-web/[nombre-proyecto]">
   ```

4. Compilar: `npm run build`

5. Copiar `dist/` a la carpeta del proyecto en el repositorio

6. Ejecutar script de deploy:
   ```bash
   /home/linmad/.openclaw/workspace/noelia-yoga-git/deploy.sh [nombre-proyecto] "Mensaje del commit"
   ```

## Para actualizar un proyecto existente

```bash
# Opción 1: Script automático (recomendado)
/home/linmad/.openclaw/workspace/noelia-yoga-git/deploy.sh noelia-yoga "Descripción del cambio"

# Opción 2: Manual
cd /home/linmad/.openclaw/workspace/projects/site-noelia
npm run build
cp -r dist/* /home/linmad/.openclaw/workspace/noelia-yoga-git/noelia-yoga/
cd /home/linmad/.openclaw/workspace/noelia-yoga-git
git add . && git commit -m "Actualizar noelia-yoga" && git push
```

## Notas importantes

- **Siempre** configurar `base` en `vite.config.js` antes de compilar
- **Siempre** configurar `basename` en `BrowserRouter` si usa react-router
- GitHub Pages tarda 1-2 minutos en propagar cambios
- Las URLs de las páginas serán: `https://limad7.github.io/mis-proyectos-web/[proyecto]/`
- Para dominio personalizado futuro, configurar CNAME en el repositorio
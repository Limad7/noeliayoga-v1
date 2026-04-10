#!/bin/bash
# deploy.sh - Despliega un proyecto web a GitHub Pages
# Uso: ./deploy.sh <carpeta-proyecto> <mensaje-commit>
# Ejemplo: ./deploy.sh noelia-yoga "Actualizar sección de servicios"

set -e

REPO_DIR="/home/linmad/.openclaw/workspace/noelia-yoga-git"
SOURCE_DIR="/home/linmad/.openclaw/workspace/projects/site-noelia"

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Argumentos
PROJECT_FOLDER="${1:-}"
COMMIT_MSG="${2:-"Actualizar $(date +%Y-%m-%d_%H:%M)"}"

if [ -z "$PROJECT_FOLDER" ]; then
    echo -e "${RED}Error: Especifica la carpeta del proyecto${NC}"
    echo "Uso: ./deploy.sh <carpeta-proyecto> [mensaje-commit]"
    echo ""
    echo "Proyectos disponibles:"
    ls -d "$REPO_DIR"/*/ 2>/dev/null | xargs -I {} basename {}
    exit 1
fi

TARGET_DIR="$REPO_DIR/$PROJECT_FOLDER"

if [ ! -d "$TARGET_DIR" ]; then
    echo -e "${RED}Error: No existe la carpeta $TARGET_DIR${NC}"
    exit 1
fi

echo -e "${YELLOW}=== Deploy de $PROJECT_FOLDER ===${NC}"

# Paso 1: Compilar si hay package.json en el source
if [ -f "$SOURCE_DIR/package.json" ] && [ -d "$SOURCE_DIR/node_modules" ]; then
    echo -e "${YELLOW}[1/4] Compilando proyecto...${NC}"
    cd "$SOURCE_DIR"
    npm run build
    echo -e "${GREEN}✓ Build completado${NC}"
else
    echo -e "${YELLOW}[1/4] No se necesita compilación (archivos estáticos)${NC}"
fi

# Paso 2: Copiar archivos al repo
echo -e "${YELLOW}[2/4] Copiando archivos al repositorio...${NC}"
# Si hay dist/, copiar desde dist. Si no, copiar desde la carpeta directamente
if [ -d "$SOURCE_DIR/dist" ]; then
    # Limpiar destino pero conservar .git
    find "$TARGET_DIR" -mindepth 1 -not -path "*/.git/*" -delete 2>/dev/null || true
    cp -r "$SOURCE_DIR/dist/"* "$TARGET_DIR/"
    # Copiar también archivos de public/ si existen
    if [ -d "$SOURCE_DIR/public" ]; then
        cp -r "$SOURCE_DIR/public/"* "$TARGET_DIR/" 2>/dev/null || true
    fi
else
    # Proyecto estático - copiar todo excepto node_modules
    rsync -av --exclude='node_modules' --exclude='.git' "$SOURCE_DIR/" "$TARGET_DIR/"
fi
echo -e "${GREEN}✓ Archivos copiados${NC}"

# Paso 3: Commit
echo -e "${YELLOW}[3/4] Haciendo commit...${NC}"
cd "$REPO_DIR"
git add .
if git diff --cached --quiet; then
    echo -e "${YELLOW}No hay cambios para commitear${NC}"
else
    git commit -m "$COMMIT_MSG"
    echo -e "${GREEN}✓ Commit: $COMMIT_MSG${NC}"
fi

# Paso 4: Push
echo -e "${YELLOW}[4/4] Subiendo a GitHub...${NC}"
git remote set-url origin "https://Limad7:$(gh auth token)@github.com/Limad7/mis-proyectos-web.git"
git push
git remote set-url origin https://github.com/Limad7/mis-proyectos-web.git
echo -e "${GREEN}✓ Push completado${NC}"

echo ""
echo -e "${GREEN}=== Deploy completado ===${NC}"
echo -e "URL: ${GREEN}https://limad7.github.io/mis-proyectos-web/$PROJECT_FOLDER/${NC}"
echo -e "Recuerda que GitHub Pages puede tardar 1-2 minutos en propagar los cambios"

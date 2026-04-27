# 🛒 Marketplace React - Full Stack Journey

¡Bienvenido al repositorio de mi Marketplace! Este proyecto documenta mi evolución como desarrollador Full-Stack, partiendo desde los fundamentos de la manipulación del DOM hasta la construcción de una arquitectura profesional con **React** en el frontend y **Node.js** en el backend.

🔗 **Repositorio:** [https://github.com/pramirezd/marketplace-react](https://github.com/pramirezd/marketplace-react)

## 📁 Estructura del Proyecto

El repositorio está organizado como un monorepo para separar las responsabilidades de forma clara:

```text
marketplace-react/
├── frontend/             # Aplicación de React (Vite)
├── backend/              # API REST con Node.js
└── .git/                 # Control de versiones global
```

## 🚀 Hoja de Ruta y Fases

### ✅ Fases 1 a 4: Bases y Arquitectura UI
* **Setup y Componentización:** Estructura modular y asilamiento de estilos.
* **Theming Dinámico:** Implementación de Modo Claro/Oscuro usando el atributo `[data-theme]` en el `body`.
* **Data-Driven Layout (Chasis Fijo):** Cuadrícula (Grid) bidimensional calculada con `useLayoutEffect` que reacciona matemáticamente al tamaño del monitor, eliminando el scroll de ventana (App-like UI).
* **Catálogo y Paginación Inteligente:** Renderizado de productos con filtros compuestos (Búsqueda, Categoría, Rango de Precio dinámico, Ordenamiento A-Z/Precio).

### ✅ Fase 5: Git y Control de Versiones
* Inicialización del repositorio y establecimiento de políticas de Commits Atómicos.
* Documentación evolutiva (README.md).

### ✅ Fase 6: El Carrito de Compras (Estado Global)
* **Lifting State Up:** Elevación del estado del carrito a la raíz (`App.jsx`) para distribuir datos y acciones mediante Props.
* **Inmutabilidad:** Manejo estricto del estado de React usando métodos funcionales (`.map`, `.filter`, `spread operator`) para evitar mutaciones directas.
* **Datos Derivados:** Cálculo del total de ítems al vuelo usando `.reduce()`.

### ✅ Fase 7: React Router y Offcanvas
* **Single Page Application (SPA):** Implementación de `react-router-dom` para navegación instantánea al detalle del producto sin recargas de página.
* **Panel de Carrito:** Creación de un componente lateral (Offcanvas) con cálculos en tiempo real y formateo de moneda (CLP).

### ✅ Fase 8: Persistencia de Datos (LocalStorage)
* **Lazy Initial State:** Optimización del rendimiento leyendo el almacenamiento del navegador solo en el montaje inicial.
* **Sincronización:** Uso de `useEffect` para persistir el carrito y las preferencias de tema (Dark/Light).

### ✅ Fase 9: Node.js & Express (Backend API)
* **Arquitectura Cliente-Servidor:** Separación estricta entre el Frontend (Puerto 5173) y el Backend (Puerto 3001).
* **API REST:** Servidor Express exponiendo endpoints para consumo de datos.
* **Seguridad:** Configuración de CORS.
* **Módulos ES:** Uso de import/export nativo en el ecosistema Node.

### ✅ Fase 10: Base de Datos Relacional (SQLite)
* **Migración SQL:** Implementación del motor SQLite3 para reemplazar el almacenamiento estático.
* **Seeders:** Creación de un script (`seed.js`) con consultas preparadas (Prepared Statements) para inyectar masivamente el catálogo inicial de productos garantizando la idempotencia.
* **Endpoints Dinámicos:** Refactorización de la ruta `GET /api/products` para consultar los datos directamente mediante SQL (`SELECT`).

## 🎨 Identidad Visual (Sistema de Diseño)

Sistema de colores optimizado para la conversión:

| Variable CSS | Modo Claro | Modo Oscuro | Propósito |
| :--- | :--- | :--- | :--- |
| `--bg-body` | `#f1f5f9` | `#0f172a` | Fondo de la aplicación |
| `--bg-card` | `#ffffff` | `#1e293b` | Superficie de productos |
| `--primary-color` | `#0369a1` | `#38bdf8` | Color de marca (Confianza) |
| `--accent-color` | `#f59e0b` | `#fbbf24` | Llamado a la acción (CTA) |

## 🛠️ Stack Tecnológico

- **Frontend:** React 18, Vite, CSS Modules.
- **Backend:** Node.js 24 (LTS), Express (próximamente).
- **Herramientas:** Git CLI, Native Node Watch, ES Modules.

## 📦 Instalación y Ejecución Local

Para poner en marcha el proyecto, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/pramirezd/marketplace-react.git](https://github.com/pramirezd/marketplace-react.git)
   cd marketplace-react
   ```

2. **Configurar el Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Configurar el Backend:**
   ```bash
   cd ../backend
   npm install
   # Ejecución en desarrollo con el watch nativo de Node
   npm run dev
   ```

---
*Desarrollado con enfoque en arquitectura escalable por Pablo R.*
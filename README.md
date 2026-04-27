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

### Fases 1 - 2: Fundamentos y Lógica Core
- **Estructura Semántica:** Base sólida en HTML5 para accesibilidad.
- **Lógica de Filtrado:** Motores de búsqueda y filtros por categoría y precio dinámico en JS Vanilla.
- **UX con Sliders:** Sincronización visual de valores en los inputs de rango.

### Fases 3 - 5: React y Gestión de Datos
- **Componentización:** Migración a React 18 y descomposición de la UI.
- **Hooks:** Gestión de estado con `useState` y efectos secundarios con `useEffect`.
- **Catálogo Robusto:** Manejo de una base de datos simulada con más de 150 productos.

### Fases 6 - 8: Diseño y Escalabilidad
- **CSS Modules:** Estilos encapsulados para evitar colisiones de nombres.
- **Theming Dinámico:** Modo Oscuro/Claro basado en variables `:root` y atributos de datos.
- **Layout Grid:** Rejilla responsiva optimizada para catálogos extensos.

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
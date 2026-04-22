# 🛒 Marketplace React - Full Stack Journey

¡Bienvenido al repositorio de mi Marketplace! Este proyecto documenta mi evolución como desarrollador Full-Stack, partiendo desde los fundamentos de la manipulación del DOM hasta la construcción de una Single Page Application (SPA) moderna con **React** y **Vite**.

🔗 **Repositorio:** [https://github.com/pramirezd/marketplace-react](https://github.com/pramirezd/marketplace-react)

## 🚀 Hoja de Ruta del Proyecto

El desarrollo se ha estructurado de forma incremental, superando retos técnicos en cada etapa:

### Fases 1 - 2: Fundamentos y Lógica Core
- **Estructura Semántica:** Creación de una base sólida en HTML5 para accesibilidad.
- **Lógica de Filtrado:** Implementación de motores de búsqueda y filtros por categoría y rango de precio dinámico usando JavaScript Vanilla.
- **UX con Sliders:** Mejora de la experiencia de usuario mediante la sincronización visual de valores en los inputs.

### Fases 3 - 5: Migración a React y Estado Complejo
- **Componentización:** Descomposición de la interfaz en componentes funcionales reutilizables.
- **Hooks de React:** Uso de `useState` para el estado de los filtros y `useEffect` para la carga de datos.
- **Gestión de Datos:** Manejo de un catálogo robusto de productos con persistencia simulada mediante JSON local.

### Fases 6 - 8: Diseño Avanzado y Escalabilidad
- **CSS Modules:** Implementación de estilos encapsulados para evitar colisiones de nombres.
- **Theming Dinámico (Dark/Light Mode):** Sistema de temas basado en variables `:root` y atributos de datos (`data-theme`) con transiciones suaves.
- **Layout Profesional:** Uso de CSS Grid avanzado para crear una rejilla de productos responsiva y organizada.

## 🎨 Identidad Visual (Sistema de Diseño)

He implementado una paleta de colores inspirada en líderes del sector, optimizada para la lectura y la conversión:

| Variable CSS | Modo Claro | Modo Oscuro | Propósito |
| :--- | :--- | :--- | :--- |
| `--bg-body` | `#f1f5f9` | `#0f172a` | Fondo de la aplicación |
| `--bg-card` | `#ffffff` | `#1e293b` | Superficie de productos |
| `--primary-color` | `#0369a1` | `#38bdf8` | Color de marca (Confianza) |
| `--accent-color` | `#f59e0b` | `#fbbf24` | Llamado a la acción (CTA) |

## 🛠️ Stack Tecnológico

- **Core:** React 18 & Vite.
- **Estilos:** CSS Modules, CSS Grid, Flexbox.
- **Estado:** React Hooks (`useState`, `useEffect`).
- **Control de Versiones:** Git (Git CLI).

## 📦 Cómo ejecutar el proyecto localmente

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/pramirezd/marketplace-react.git](https://github.com/pramirezd/marketplace-react.git)
   ```

2. **Entrar al directorio:**
   ```bash
   cd marketplace-react
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Correr en modo desarrollo:**
   ```bash
   npm run dev
   ```

---
*Desarrollado con enfoque en calidad de código por Pablo R.*
# 🛒 Mini Marketplace (Proyecto Incremental)

Un e-commerce Full-Stack construido desde cero mediante una metodología incremental y guiada, con un enfoque absoluto en **Developer Experience (DX)** y **Arquitectura de UI Avanzada**.

## 🚀 Tecnologías (Frontend)
* **Core:** React 18 + Vite
* **Estilos:** CSS Modules puros + CSS Variables (Theming Dinámico)
* **Iconografía:** React Icons

## 🗺️ Roadmap y Progreso

### ✅ Fases 1 a 4: Bases y Arquitectura UI
* **Setup y Componentización:** Estructura modular y asilamiento de estilos.
* **Theming Dinámico:** Implementación de Modo Claro/Oscuro usando el atributo `[data-theme]` en el `body` para transiciones fluidas sin recargas.
* **Data-Driven Layout (Chasis Fijo):** Una cuadrícula (Grid) bidimensional que reacciona matemáticamente al tamaño del monitor (`ResizeObserver`), garantizando *siempre* filas completas y eliminando el scroll de ventana (App-like UI).
* **Catálogo y Paginación Inteligente:** Renderizado de más de 150 productos. El JS lee el CSS (`getComputedStyle`) para inyectar la cantidad exacta de tarjetas que caben en pantalla.
* **Filtros Compuestos:** Búsqueda por texto, categorización, límite de precio dinámico (detecta el producto más caro automáticamente) y ordenamiento (A-Z, Z-A, Precio).

---
*Desarrollado por Pablo R.*
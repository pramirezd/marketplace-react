import { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function fetchProducts() {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        if (mounted) setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        return [];
      }
    }

    fetchProducts();

    return () => { mounted = false; };
  }, []);

  console.log(products);

  return (
    <>
      <header>
        <h1>Mini Marketplace</h1>
      </header>

      <main>
        <aside>
          <h2>Menú de Filtros</h2>
          <form>
            <div className="filter-group">
              <label htmlFor="search">Buscar:
              <input id="search" type="text" placeholder="Buscar productos..." />
              </label>
            </div>
            <div className="filter-group">
              <label htmlFor="category">Categoría:</label>
              <select id="category">
                <option value="">Todas</option>
                <option value="technology">Tecnología</option>
                <option value="clothes">Ropa</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="price">Rango de Precio:</label>
              <div className="price-slider-container">
                <span>$0</span> <input id="price" type="range" min="0" max="5000" step="100" value="5000" />
                <span>$5000</span> 
              </div>
              <p>Precio máximo: <span id="price-value">$5000</span></p>
            </div>
          </form>
        </aside>
        <h2>Productos</h2>

        <section className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>

      <footer>
      <p>&copy; 2026 Mini Marketplace. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App
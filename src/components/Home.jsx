import { useEffect, useLayoutEffect, useState, useMemo, useId, useRef, useCallback } from 'react';
import { FaAngleLeft, FaAngleDoubleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
import ProductCard from './ProductCard.jsx';
import styles from './Home.module.css';

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [currentPage, setCurrentPage] = useState(1);
  const [columns, setColumns] = useState(4);
  const [rows, setRows] = useState(2);
  const [sortOrder, setSortOrder] = useState('');

  const itemsPerPage = columns * rows;

  const filterId = useId();
  const productSectionRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    async function fetchProducts() {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        if (mounted) setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    const id = setTimeout(() => setCurrentPage(1), 0);
    return () => clearTimeout(id);
  }, [columns, rows]);

  const calcGrid = useCallback((width, height) => {
    if (!width || !height) return;
    const gap = 20;
    const minCardWidth = 185;
    const minCardHeight = 280;
    const cols = Math.max(2, Math.min(8, Math.floor((width + gap) / (minCardWidth + gap))));
    const rowCount = Math.max(1, Math.min(2, Math.floor((height + gap) / (minCardHeight + gap))));
    setColumns(cols);
    setRows(rowCount);
  }, []);

  useLayoutEffect(() => {
    if (!productSectionRef.current) return;
    const { width, height } = productSectionRef.current.getBoundingClientRect();
    calcGrid(width, height);
  }, [calcGrid]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries.length) return;
      const { width, height } = entries[0].contentRect;
      calcGrid(width, height);
    });

    if (productSectionRef.current) {
      resizeObserver.observe(productSectionRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [calcGrid]);

  function handleSearchChange(value) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handleCategoryChange(value) {
    setCategory(value);
    setCurrentPage(1);
  }

  function handleMaxPriceChange(value) {
    setMaxPrice(value);
    setCurrentPage(1);
  }

  function handleSortChange(value) {
    setSortOrder(value);
    setCurrentPage(1);
  }

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.nombre.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === '' || product.categoria === category;
      const matchesPrice = product.precio <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });

    if (sortOrder === 'name-asc') {
      return [...filtered].sort((a, b) => a.nombre.localeCompare(b.nombre, 'es'));
    }
    if (sortOrder === 'price-asc') {
      return [...filtered].sort((a, b) => a.precio - b.precio);
    }
    if (sortOrder === 'price-desc') {
      return [...filtered].sort((a, b) => b.precio - a.precio);
    }
    return filtered;
  }, [products, searchTerm, category, maxPrice, sortOrder]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;

  const paginatedProducts = useMemo(() => {
    const validPage = Math.min(currentPage, Math.ceil(filteredProducts.length / itemsPerPage) || 1);
    const startIndex = (validPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const displayPage = Math.min(currentPage, totalPages);

  return (
    <main className={styles.mainContent}>
      <aside className={styles.sidebar}>
        <h2>Menú de Filtros</h2>
        <form>
          <div className={styles.filterGroup}>
            <label htmlFor={`search-${filterId}`}>Buscar:
              <input
                id={`search-${filterId}`}
                className={styles.sidebarInput}
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </label>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor={`category-${filterId}`}>Categoría:</label>
            <select
              id={`category-${filterId}`}
              className={styles.sidebarSelect}
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="technology">Tecnología</option>
              <option value="clothes">Ropa</option>
              <option value="home">Hogar</option>
              <option value="sports">Deportes</option>
              <option value="books">Libros</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor={`price-${filterId}`}>Rango de Precio:</label>
            <div className={styles.priceSliderContainer}>
              <span>$0</span>
              <input
                id={`price-${filterId}`}
                type="range"
                min="0"
                max="5000"
                step="100"
                value={maxPrice}
                onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
              />
              <span>${maxPrice}</span>
            </div>
            <p>Precio máximo: <span id={`price-value-${filterId}`} className={styles.priceValue}>${maxPrice}</span></p>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor={`sort-${filterId}`}>Ordenar por:</label>
            <select
              id={`sort-${filterId}`}
              className={styles.sidebarSelect}
              value={sortOrder}
              onChange={(e) => handleSortChange(e.target.value)}
            >
              <option value="">Relevancia</option>
              <option value="name-asc">Nombre: A → Z</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
            </select>
          </div>
        </form>
      </aside>

      <div className={styles.contentArea}>
        <h2>Productos</h2>
        <section
          ref={productSectionRef}
          className={styles.productSection}
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </section>

        <div className={styles.pagination}>
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
            <FaAngleDoubleLeft />
          </button>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
            <FaAngleLeft />
          </button>
          <span className={styles.pages}>Página {displayPage} de {totalPages}</span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
            <FaAngleRight />
          </button>
          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;

import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
  const wrapperRef = useRef(null);
  const [clampLines, setClampLines] = useState(3);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new ResizeObserver(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      // Leemos el line-height del <p> interno para calcular cuántas líneas caben
      const p = wrapper.querySelector('p');
      if (!p) return;
      const lineHeight = parseFloat(getComputedStyle(p).lineHeight);
      const lines = Math.max(1, Math.floor(wrapper.clientHeight / lineHeight));
      setClampLines(lines);
    });

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article className={`${styles.productCard} ${product.categoria}`}>
      <Link to={`/producto/${product.id}`} className={styles.cardLink}>
        <img className={styles.image} src={product.imagen} alt={product.nombre} />
        <h3>{product.nombre}</h3>

        {/*
          Separamos flex-sizing (wrapper) de line-clamp (p interior).
          El wrapper crece con flex:1 y corta con overflow:hidden — nada
          desborda ni es seleccionable más allá del área visible.
          El <p> interno aplica el line-clamp calculado dinámicamente.
        */}
        <div ref={wrapperRef} className={styles.descriptionWrapper}>
          <p
            className={styles.description}
            style={{ WebkitLineClamp: clampLines }}
          >
            {product.descripcion}
          </p>
        </div>

        <p className={styles.price}>Precio: ${product.precio}</p>
      </Link>
      <button onClick={() => addToCart(product)}>Comprar</button>
    </article>
  );
};

export default ProductCard;

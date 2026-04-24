import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p style={{ padding: '2rem' }}>Cargando...</p>;

  return (
    <main style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
        ← Volver al catálogo
      </Link>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <img
          src={product.imagen}
          alt={product.nombre}
          style={{ width: '100%', maxWidth: '360px', borderRadius: '8px', objectFit: 'cover' }}
        />

        <div style={{ flex: '1', minWidth: '220px', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ marginTop: 0 }}>{product.nombre}</h1>
          <p style={{ lineHeight: '1.6', flex: '1' }}>{product.descripcion}</p>
          <div style={{ marginTop: 'auto' }}>
            <p style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>${product.precio}</p>
            <button
              onClick={() => addToCart(product)}
              style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;

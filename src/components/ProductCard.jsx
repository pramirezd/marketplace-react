const ProductCard = ({ product }) => {
  return (
    <article className="product-card">
        <img src={product.imagen} alt={product.nombre} />
        <h3>{product.nombre}</h3>
        <p>{product.descripcion}</p>
        <p>Precio: ${product.precio}</p>
        <button>Comprar</button>
    </article>
  )
}

export default ProductCard

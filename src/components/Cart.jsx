import { FaTimes, FaTrash } from 'react-icons/fa';
import styles from './Cart.module.css';

const Cart = ({ cart, closeCart, removeFromCart, updateQuantity, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);

  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Tu Carrito</h2>
          <button className={styles.closeBtn} onClick={closeCart}>
            <FaTimes />
          </button>
        </div>

        {cart.length === 0 ? (
          <p className={styles.empty}>Tu carrito está vacío.</p>
        ) : (
          <>
            <ul className={styles.itemList}>
              {cart.map((item) => (
                <li key={item.id} className={styles.item}>
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className={styles.itemImage}
                  />
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{item.nombre}</span>
                    <span className={styles.itemPrice}>
                      ${item.precio.toLocaleString('es-CL')} c/u
                    </span>
                  </div>
                  <div className={styles.quantityControls}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() =>
                        item.quantity === 1
                          ? removeFromCart(item.id)
                          : updateQuantity(item.id, -1)
                      }
                      aria-label="Disminuir cantidad"
                    >
                      −
                    </button>
                    <span className={styles.qtyValue}>{item.quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                    <button
                      className={styles.trashBtn}
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Eliminar ${item.nombre}`}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.footerTop}>
                <span className={styles.totalLabel}>Total a Pagar</span>
                <span className={styles.totalAmount}>
                  ${total.toLocaleString('es-CL')}
                </span>
              </div>
              <button className={styles.clearBtn} onClick={clearCart}>
                <FaTrash /> Vaciar carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

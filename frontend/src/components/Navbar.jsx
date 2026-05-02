import { FaShoppingCart, FaUser, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({ theme, toggleTheme, totalCartItems, openCart, token, logout, openLogin }) => {
  return (
    <>
        <header className={styles.header}>
            <h1>Mini Marketplace</h1>
            <nav>
                {token ? (
                    <button className={styles.navButton} onClick={logout}>Cerrar Sesión</button>
                ) : (
                    <button className={styles.navButton} onClick={openLogin}>Iniciar Sesión</button>
                )}
                <button className={styles.navButton}>Registrarse</button>
                <button className={styles.navButton} onClick={openCart}>
                    <FaShoppingCart />
                    {totalCartItems > 0 && (
                        <span className={styles.cartItemCount}>{totalCartItems}</span>
                    )}
                </button>
                <button 
                    className={styles.themeToggle} 
                    onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
                </button>
            </nav>
        </header>
    </>
  )
}

export default Navbar
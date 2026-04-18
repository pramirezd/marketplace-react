import { FaShoppingCart, FaUser, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = ({theme, toggleTheme}) => {
  return (
    <>
        <header className={styles.header}>
            <h1>Mini Marketplace</h1>
            <nav>
                <button className={styles.navButton}>Iniciar Sesión</button>
                <button className={styles.navButton}>Registrarse</button>
                <button className={styles.navButton}><FaShoppingCart /></button>
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
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(productId) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setCart([]);
  }

  function updateQuantity(productId, delta) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        totalCartItems={totalCartItems}
        openCart={() => setIsCartOpen(true)}
      />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/producto/:id" element={<ProductDetail addToCart={addToCart} />} />
      </Routes>
      <footer>
        <p>&copy; 2026 Mini Marketplace. Todos los derechos reservados.</p>
      </footer>
      {isCartOpen && (
        <Cart
          cart={cart}
          closeCart={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          clearCart={clearCart}
        />
      )}
    </>
  );
};

export default App;

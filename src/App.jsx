/* eslint-disable react-refresh/only-export-components */
/* ============================================================
   APP — router, scroll restoration, cart context
   ============================================================ */
import React, { useEffect, useState, createContext } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, Furniture, Chocolates } from "./pages1.jsx";
import { Recipes, Tours, About, Contact } from "./pages2.jsx";
import { Journal, JournalPost, Shop, Commissions } from "./pages3.jsx";
import { CartDrawer } from "./components.jsx";

export const CartContext = createContext();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setCartOpen(true);
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartOpen, setCartOpen, clearCart }}>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/chocolates" element={<Chocolates />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:id" element={<JournalPost />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <CartDrawer />
      </HashRouter>
    </CartContext.Provider>
  );
}

export default App;

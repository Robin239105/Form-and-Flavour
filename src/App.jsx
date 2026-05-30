/* ============================================================
   APP — router, scroll restoration
   ============================================================ */
import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, Furniture, Chocolates } from "./pages1.jsx";
import { Recipes, Tours, About, Contact } from "./pages2.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
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
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

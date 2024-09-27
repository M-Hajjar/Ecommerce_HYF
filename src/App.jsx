// src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import FavoritesPage from './components/FavoritesPage';
import Navbar from './components/Navbar';

function CategoryPageWrapper() {
  const { category } = useParams();
  const selectedCategory = category || 'all'; // Default to 'all' if no category in URL

  return <ProductList selectedCategory={selectedCategory} />;
}

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Route for category-based product list */}
          <Route path="/" element={<CategoryPageWrapper />} />
          <Route path="/category/:category" element={<CategoryPageWrapper />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;

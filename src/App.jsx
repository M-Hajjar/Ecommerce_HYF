// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import FavoritesPage from './components/FavoritesPage';
import CategoryList from './components/CategoryList';
import Navbar from './components/Navbar';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
        <Routes>
          <Route path="/" element={<ProductList selectedCategory={selectedCategory} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;

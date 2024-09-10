// src/components/FavoritesPage.jsx
import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import useFetch from '../hooks/useFetch';
import './FavoritesPage.css'; // Ensure this file is in the same directory

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) return <p>Loading favorites...</p>;
  if (error) return <p>{error}</p>;

  // Filter products based on favorites
  const favoriteProducts = products.filter(product => favorites.includes(product.id));

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <div className="product-grid">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;

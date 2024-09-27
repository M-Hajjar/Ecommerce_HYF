import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import useFetch from '../hooks/useFetch';
import './ProductList.css'; // Import the CSS file

const ProductList = ({ selectedCategory }) => {
  // Fetch products based on selectedCategory
  const url = selectedCategory === 'all'
    ? 'https://fakestoreapi.com/products'
    : `https://fakestoreapi.com/products/category/${selectedCategory}`;
  
  const { data: products, loading, error } = useFetch(url);
  const { toggleFavorite, isFavorite } = useFavorites();

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <div className="card-content">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="price">${product.price}</div>
            </div>
          </Link>
          <button
            className="favorite-button"
            onClick={(e) => {
              e.stopPropagation(); // Prevent link click from firing
              toggleFavorite(product.id);
            }}
          >
            {isFavorite(product.id) ? '❤️' : '♡'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

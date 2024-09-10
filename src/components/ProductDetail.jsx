import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useFavorites } from '../context/FavoritesContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { toggleFavorite, isFavorite } = useFavorites();

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {product && (
        <>
          <img src={product.image} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <button onClick={() => toggleFavorite(product.id)}>
            {isFavorite(product.id) ? '❤️' : '♡'}
          </button>
        </>
      )}
    </div>
  );
};

export default ProductDetail;

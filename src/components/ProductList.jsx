import React from 'react';
import './ProductList.css'; // Import the CSS file

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

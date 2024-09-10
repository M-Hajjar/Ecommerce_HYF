// src/components/ProductCard.jsx
import { useFavorites } from '../context/FavoritesContext';

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button onClick={() => toggleFavorite(product.id)}>
        {isFavorited ? "💖" : "🤍"}
      </button>
    </div>
  );
};

export default ProductCard;

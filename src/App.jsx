import { useState } from "react";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import products from "./fake-data/all-products.js";
import categories from "./fake-data/all-categories.js";

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    console.log('Selected Category:', category); // Debugging log
    setSelectedCategory(category);
  };

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="App">
      {/* Display CategoryList at the top */}
      <CategoryList 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleCategorySelect} 
      />

      {/* Display ProductList below the categories */}
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;

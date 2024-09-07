const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
      <div>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onSelectCategory(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
    );
  };
  
  export default CategoryList;
  
// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css'; // Import the CSS file


const Navbar = () => {
  const location = useLocation();
  const categories = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link
          to="/"
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
        >
          Favorites
        </Link>

        {/* Category Links */}
        {categories.map(category => (
          <Link
            key={category}
            to={`/category/${category}`}
            className={`nav-link ${location.pathname === `/category/${category}` ? 'active' : ''}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

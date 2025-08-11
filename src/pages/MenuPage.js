// src/pages/MenuPage.js
import React from 'react';
import MenuItem from '../components/MenuItem';
import menuItems from '../data/menuData'; // Import mock menu data
import '../App.css'; // For general styles like container and section-title

function MenuPage() {
  const categories = [...new Set(menuItems.map(item => item.category))]; // Get unique categories

  return (
    <div className="page-section container">
      <h2 className="section-title">Our Delicious Menu</h2>
      <p className="section-description">Explore our wide selection of handcrafted coffee beverages, teas, and freshly baked pastries.</p>

      {categories.map(category => (
        <div key={category} className="menu-category">
          <h3 className="category-title">{category}</h3>
          <div className="menu-grid">
            {menuItems
              .filter(item => item.category === category)
              .map(item => (
                <MenuItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuPage;
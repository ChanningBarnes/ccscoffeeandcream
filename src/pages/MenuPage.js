// src/pages/MenuPage.js
import React from 'react';
import MenuItem from '../components/MenuItem';
import menuItems from '../data/menuData'; // Import mock menu data
import '../App.css'; // For general styles like container and section-title
import '../components/MenuItem.css'; // Import the new styles

function MenuPage() {
  return (
    <div className="page-section container">
      <h2 className="section-title">Our Refreshing Menu</h2>
      <p className="section-description">Handcrafted drinks made just for you.</p>

      {menuItems.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default MenuPage;
// src/pages/MenuPage.js
import React from 'react';
import '../App.css'; // For general styles like container and section-title
import '../components/MenuItem.css'; // Import the new styles

function MenuPage() {
  return (
    <div className="page-enter">
      <img
        src="/images/menu.PNG" // Replace with the path to your menu image
        alt="Full menu of CC's Coffee and Cream"
        className="full-menu-image"
      />
    </div>
  );
}

export default MenuPage;

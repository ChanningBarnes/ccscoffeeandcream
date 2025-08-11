// src/components/MenuItem.js
import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img src={item.imageUrl} alt={item.name} className="menu-item-img" />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <span className="item-price">${item.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default MenuItem;
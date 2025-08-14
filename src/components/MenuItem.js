// src/components/MenuItem.js
import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  // Check if the item has subsections (like the "Build Your Own" item)
  if (item.subsections) {
    return (
      <div className="menu-item-section">
        <h2>{item.name}</h2>
        {item.subsections.map(subsection => (
          <div key={subsection.id} className="menu-subsection">
            <h3>{subsection.name}</h3>
            <ul className="options-list">
              {subsection.options.map(option => (
                <li key={option.id}>{option.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // Check if the item has nested items (like "Creative Combinations")
  if (item.items) {
    return (
      <div className="menu-item-section">
        <h2>{item.name}</h2>
        <ul className="items-list">
          {item.items.map(nestedItem => (
            <li key={nestedItem.id} className="nested-menu-item">
              <h4>{nestedItem.name}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // This is the default case for a simple item (which no longer exists)
  return (
    <div className="menu-item">
      <div className="item-details">
        <h3>{item.name}</h3>
      </div>
    </div>
  );
}

export default MenuItem;
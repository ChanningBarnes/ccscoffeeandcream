// src/pages/OrderPage.js
import React from 'react';
import '../App.css';

function OrderPage() {
  return (
    <div className="page-section container">
      <h2 className="section-title">Order Online</h2>
      <p className="section-description">
        Coming soon! We're working on making your favorite coffee just a click away. In the meantime, please visit us!
      </p>
      <div style={{ padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <p>Please call us directly to place a pick-up order:</p>
        <p className="contact-highlight">(555) 123-4567</p>
      </div>
      {/* Here you would integrate your actual ordering system/forms */}
    </div>
  );
}

export default OrderPage;
// src/pages/OrderPage.js
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './OrderPage.css';

const cashAppStoreUrl = 'https://cash.app/$ccscoffeeandcream';

function OrderPage() {
  return (
    <section className="order-page">
      <header className="order-intro">
        <h1 className="page-title">Order Online</h1>
        <p className="page-subtitle">
          Visit our online store to order one of our delicious bottled lattes!
        </p>
      </header>

      <div className="order-options">
        <div className="order-qr">
          <div className="order-qr-code">
            <QRCodeSVG
              value={cashAppStoreUrl}
              size={220}
              level="M"
              title="QR code for CC's Coffee & Cream Cash App store"
            />
          </div>
          <p>Scan to open our Cash App store</p>
          <a
            className="btn-primary order-link"
            href={cashAppStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cash-app-icon"
              src="/images/cashapp.svg.webp"
              alt=""
              aria-hidden="true"
            />
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
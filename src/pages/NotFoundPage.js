// src/pages/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NotFoundPage() {
  return (
    <div className="page-section container text-center" style={{paddingTop: '80px', paddingBottom: '80px'}}>
      <h2 className="section-title" style={{fontSize: '4rem', color: '#d5afc0'}}>404</h2>
      <p className="section-description">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary" style={{marginTop: '30px'}}>Go to Homepage</Link>
    </div>
  );
}

export default NotFoundPage;
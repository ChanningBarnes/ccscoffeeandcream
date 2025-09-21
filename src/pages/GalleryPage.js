// src/pages/GalleryPage.js
import React from 'react';
import '../App.css'; // For general styles

// Mock data for your gallery images
// Updated to use gall1.jpeg to gall25.jpeg
const galleryImages = [
  { id: 1, url: '/images/gallery/gall13.jpeg', alt: 'Event photo 1' },
  { id: 2, url: '/images/gallery/gall4.jpeg', alt: 'Event photo 2' },
  { id: 3, url: '/images/gallery/gall5.jpeg', alt: 'Event photo 3' },
  { id: 4, url: '/images/gallery/gall8.jpeg', alt: 'Event photo 4' },
  { id: 5, url: '/images/gallery/gall10.jpeg', alt: 'Event photo 5' },
  { id: 6, url: '/images/gallery/gall12.jpeg', alt: 'Event photo 6' },
  { id: 7, url: '/images/gallery/gall1.jpeg', alt: 'Event photo 7' },
  { id: 8, url: '/images/gallery/gall14.jpeg', alt: 'Event photo 8' },
  { id: 9, url: '/images/gallery/gall15.jpeg', alt: 'Event photo 9' },
  { id: 10, url: '/images/gallery/gall16.jpeg', alt: 'Event photo 10' },
  { id: 12, url: '/images/gallery/gall18.jpeg', alt: 'Event photo 12' },
  { id: 13, url: '/images/gallery/gall19.jpeg', alt: 'Event photo 13' },
  { id: 14, url: '/images/gallery/gall20.jpeg', alt: 'Event photo 14' },
  { id: 15, url: '/images/gallery/gall21.jpeg', alt: 'Event photo 15' },
  { id: 16, url: '/images/gallery/gall22.jpeg', alt: 'Event photo 16' },
  { id: 17, url: '/images/gallery/gall24.jpeg', alt: 'Event photo 17' },
  { id: 18, url: '/images/gallery/gall25.jpeg', alt: 'Event photo 18' },
];

function GalleryPage() {
  return (
    <div className="page-section container">
      <h2 className="section-title">Our Gallery</h2>
      <p className="section-description">
        Browse through some of the memorable moments from our past events and gatherings.
      </p>
      <div className="gallery-grid">
        {galleryImages.map(image => (
          <div key={image.id} className="gallery-item">
            <img src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
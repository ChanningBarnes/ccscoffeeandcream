// src/pages/GalleryPage.js
import React, { useState, useEffect } from 'react';
import '../App.css';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, currentIndex]);

  function openLightbox(index) {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function prevImage() {
    setCurrentIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }

  function nextImage() {
    setCurrentIndex((i) => (i + 1) % galleryImages.length);
  }

  return (
    <section className="gallery-page">
      <h1 className="page-title">Our Gallery</h1>
      <p className="page-subtitle">Memorable moments from our events</p>

      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <figure key={image.id} className={`gallery-item scroll-animate delay-${(index % 6) + 1}`}>
            <button
              type="button"
              className="thumb"
              onClick={() => openLightbox(index)}
              aria-label={`Open ${image.alt}`}
            >
              <img src={image.url} alt={image.alt} loading="lazy" />
            </button>
          </figure>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-figure">
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
              <img
                className="lightbox-img"
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].alt}
              />
            </div>
            <button className="lightbox-prev" onClick={prevImage} aria-label="Previous">‹</button>
            <button className="lightbox-next" onClick={nextImage} aria-label="Next">›</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GalleryPage;

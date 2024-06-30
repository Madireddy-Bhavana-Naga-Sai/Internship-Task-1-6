// src/components/PhotoGallery.js
import React, { useState } from 'react';
import Img1 from './image-1.jpeg';
import Img2 from './image-2.jpeg';
import Img3 from './image-3.jpeg';
import Img4 from './image-4.jpeg';
import Img5 from './image-5.jpeg';
import Img6 from './image-6.jpeg';
import Img7 from './image-7.jpeg';
import Img8 from './image-8.jpeg';
import Img9 from './image-9.jpeg';
import Img10 from './image-10.jpeg';
import Img11 from './image-11.jpeg';
import Img12 from './image-12.jpeg';
import Img13 from './image-13.jpeg';
import Img14 from './image-14.jpeg';
import Img15 from './image-15.jpeg';
import Img16 from './image-16.jpeg';
import Img17 from './image-17.jpeg';
import Img18 from './image-18.jpeg';
import Img19 from './image-19.jpeg';
import Img20 from './image-20.jpeg';
import Img21 from './image-21.jpeg';
import Img22 from './image-22.jpeg';
import Img23 from './image-23.jpeg';
import Img24 from './image-24.jpeg';
import Img25 from './image-25.jpeg';
import Img26 from './image-26.jpeg';
import Img27 from './image-27.jpeg';
import Img28 from './image-28.jpeg';
import Img29 from './image-29.jpeg';
import Img30 from './image-30.jpeg';
import Img31 from './image-31.jpeg';
import Img32 from './image-32.jpeg';
import Img33 from './image-33.jpeg';
import Img34 from './image-34.jpeg';
import Img35 from './image-35.jpeg';
import Img36 from './image-36.jpeg';
import Img37 from './image-37.jpeg';
import Img38 from './image-38.jpeg';
import Img39 from './image-39.jpeg';
import Img40 from './image-40.jpeg';
import Img41 from './image-41.jpeg';
import Img42 from './image-42.jpeg';

const images = [
  { src: Img1, alt: 'Photo 1' },
  { src: Img2, alt: 'Photo 2' },
  { src: Img3, alt: 'Photo 3' },
  { src: Img4, alt: 'Photo 4' },
  { src: Img5, alt: 'Photo 5' },
  { src: Img6, alt: 'Photo 6' },
  { src: Img7, alt: 'Photo 7' },
  { src: Img8, alt: 'Photo 8' },
  { src: Img9, alt: 'Photo 9' },
  { src: Img10, alt: 'Photo 10' },
  { src: Img11, alt: 'Photo 11' },
  { src: Img12, alt: 'Photo 12' },
  { src: Img13, alt: 'Photo 13' },
  { src: Img14, alt: 'Photo 14' },
  { src: Img15, alt: 'Photo 15' },
  { src: Img16, alt: 'Photo 16' },
  { src: Img17, alt: 'Photo 17' },
  { src: Img18, alt: 'Photo 18' },
  { src: Img19, alt: 'Photo 19' },
  { src: Img20, alt: 'Photo 20' },
  { src: Img21, alt: 'Photo 21' },
  { src: Img22, alt: 'Photo 22' },
  { src: Img23, alt: 'Photo 23' },
  { src: Img24, alt: 'Photo 24' },
  { src: Img25, alt: 'Photo 25' },
  { src: Img26, alt: 'Photo 26' },
  { src: Img27, alt: 'Photo 27' },
  { src: Img28, alt: 'Photo 28' },
  { src: Img29, alt: 'Photo 29' },
  { src: Img30, alt: 'Photo 30' },
  { src: Img31, alt: 'Photo 31' },
  { src: Img32, alt: 'Photo 32' },
  { src: Img33, alt: 'Photo 33' },
  { src: Img34, alt: 'Photo 34' },
  { src: Img35, alt: 'Photo 35' },
  { src: Img36, alt: 'Photo 36' },
  { src: Img37, alt: 'Photo 37' },
  { src: Img38, alt: 'Photo 38' },
  { src: Img39, alt: 'Photo 39' },
  { src: Img40, alt: 'Photo 40' },
  { src: Img41, alt: 'Photo 41' },
  { src: Img42, alt: 'Photo 42' },
  // Add more images as needed
];

const PhotoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.gallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={styles.image}
            onClick={() => openModal(image)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} style={styles.modalImage} />
            <button onClick={closeModal} style={styles.closeButton}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: 'maroon',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  image: {
    width: '200px',
    height: 'auto',
    cursor: 'pointer',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    position: 'relative',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px 20px',
    background: '#f00',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
};

export default PhotoGallery;

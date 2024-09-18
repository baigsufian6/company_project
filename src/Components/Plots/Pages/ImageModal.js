// src/Components/ImageModal.js
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ImageModal = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl">
          <FaTimes />
        </button>
        <img src={imageUrl} alt="Enlarged View" className="max-w-full max-h-screen object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;

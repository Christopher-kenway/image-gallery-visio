import React, { useEffect, useState } from 'react';
import './Modal.css';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedImg) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [selectedImg]);

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setShowModal(false);
      setTimeout(() => {
        setSelectedImg(null);
      }, 300); // Ensure the modal closes after the animation
    }
  };

  return (
    <div className={`backdrop ${showModal ? 'show' : ''}`} onClick={handleClick}>
      {showModal && <img src={selectedImg} alt='Enlarged' />}
    </div>
  );
};

export default Modal;

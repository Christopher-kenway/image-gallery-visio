import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ selectedImg, setSelectedImg, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    if (selectedImg) {
      setShowModal(true);
    } else {
      setShowModal(false);
      setShowIcons(false);
    }
  }, [selectedImg]);

  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setShowModal(false);
      setTimeout(() => {
        setSelectedImg(null);
      }, 300); // Ensure the modal closes after the animation
    }
  };

  const toggleShareIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <div
      className={`backdrop ${showModal ? "show" : ""}`}
      onClick={handleClick}
    >
      {showModal && <img src={selectedImg} alt="Enlarged" />}
      {showModal && (
        <>
          <div className="share-button" onClick={toggleShareIcons}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-6"
            >
              <path
                fill-rule="evenodd"
                d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className={`share-icons ${showIcons ? "show" : ""}`}>
            <a
              href={`https://twitter.com/share?url=${selectedImg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                />
              </svg>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${selectedImg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href={`https://www.instagram.com/?url=${selectedImg}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 22 22"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                />
              </svg>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;

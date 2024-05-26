import React, { useState } from "react";
import "./imageGallery.css";
import useFirestore from "../../hooks/useFirestore";
import ImageCard from "../imageCard/ImageCard"; // Make sure the path to ImageCard is correct
import Modal from "../modals/Modal";

const ImageGallery = () => {
  const { docs, isLoading } = useFirestore("images"); // Fetch images from the 'images' collection
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      {/* Display loading message while images are being fetched */}
      {isLoading ? (
        <progress className="progress w-56 text-center"></progress>
      ) : (
        // Display the image grid once images are fetched
        <div className="image__grid">
          {docs.map((image) => (
            <ImageCard
              key={image.url}
              image={image}
              setSelectedImg={setSelectedImg} // Pass the setter function
            />
          ))}
        </div>
      )}
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default ImageGallery;

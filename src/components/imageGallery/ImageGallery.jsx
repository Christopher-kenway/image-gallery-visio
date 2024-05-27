import React, { useState, useEffect } from "react";
import "./imageGallery.css";
import useFirestore from "../../hooks/useFirestore";
import ImageCard from "../imageCard/ImageCard";
import Modal from "../modals/Modal";

const ImageGallery = ({ searchText }) => {
  const { docs, isLoading } = useFirestore("images"); // Fetch images from the 'images' collection
  const [selectedImg, setSelectedImg] = useState(null);

  // State to hold filtered images
  const [filteredImages, setFilteredImages] = useState([]);

  // Filter images based on search text
  useEffect(() => {
    if (docs && docs.length > 0) {
      const filtered = docs.filter(
        (doc) =>
          (doc.title &&
            doc.title.toLowerCase().includes(searchText.toLowerCase())) ||
          (doc.description &&
            doc.description.toLowerCase().includes(searchText.toLowerCase()))
      );
      setFilteredImages(filtered);
    }
  }, [docs, searchText]);

  return (
    <div>
      {isLoading ? (
        <progress className="progress w-56 text-center"></progress>
      ) : (
        // Display the image grid once images are fetched
        <div className="image__grid">
          {filteredImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              setSelectedImg={setSelectedImg}
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

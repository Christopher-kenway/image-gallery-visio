import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image, setSelectedImg }) => {
  return (
    <div className="image__card">
      <img
        src={image.imageUrl}
        alt="uploaded"
        className="card__img"
        onClick={() => setSelectedImg(image.imageUrl)}
      />

      <div className="p-2">
        <p className="text-sm text-gray-700">Uploaded by: {image.userEmail}</p>
        <p className="text-sm text-gray-500">
          Uploaded on: {new Date(image.createdAt.toDate()).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;

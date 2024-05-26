import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image, setSelectedImg }) => {
  return (
    <div className="image__card" onClick={() => setSelectedImg(image.imageUrl)}>
      <img src={image.imageUrl} alt="uploaded" className="card__img" />
      <div className="p-2">
        <p className="text-sm text-gray-700">
          Uploaded by: {image.displayName}
        </p>
        <p className="text-sm text-gray-500">
          Uploaded on: {new Date(image.createdAt.toDate()).toDateString()}
        </p>
        <p className="text-sm text-gray-700">Title: {image.title}</p>
        <p className="text-sm text-gray-700">
          Description: {image.description}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;

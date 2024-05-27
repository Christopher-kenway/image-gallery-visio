import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image, setSelectedImg }) => {
  return (
    <div className="image__card" onClick={() => setSelectedImg(image.imageUrl)}>
      <img src={image.imageUrl} alt="uploaded" className="card__img" />
      <div className="card__Details p-2">
        <p className="text-sm">Title: {image.title}</p>
        <p className="text-sm ">Description: {image.description}</p>
        <p className="text-sm ">Uploaded by: {image.userEmail}</p>
        <p className="text-sm ">
          {new Date(image.createdAt.toDate()).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;

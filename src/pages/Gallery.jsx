import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import ImageGallery from "../components/imageGallery/ImageGallery";

const Gallery = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <form className="mt-5 mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
      <ImageGallery searchText={searchText} />
    </div>
  );
};

export default Gallery;

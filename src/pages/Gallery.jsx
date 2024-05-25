import React from "react";
import Navbar from "../components/navbar/Navbar";
import ImageGallery from "../components/imageGallery/ImageGallery";
const Gallery = () => {
  // const onsubmit = (e) => {
  //   e.preventDefault();

  //   searchText(text);
  // };
  return (
    <div>
      <Navbar />
      <form className="mt-5  mb-3" onSubmit={onsubmit}>
        <input
          // onChange={(e) => setText(e.target.value)} //takes what is being typed in the form
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        ></input>
        <button type="submit">Search</button>
      </form>

      <ImageGallery />
    </div>
  );
};

export default Gallery;

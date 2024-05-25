import React from "react";
import useFirestore from "../../hooks/useFirestore";
import ImageCard from "../imageCard/ImageCard"; // Make sure the path to ImageCard is correct

const ImageGallery = () => {
  const { docs, isLoading } = useFirestore("images"); // Fetch images from the 'images' collection

  return (
    <div>
      {/* Display loading message while images are being fetched */}
      {isLoading ? (
        <progress className="progress w-56 text-center"></progress>
      ) : (
        // Display the image grid once images are fetched
        <div className="image__grid md:container md:mx-auto grid grid-cols-3 gap-2">
          {docs.map((image) => (
            <ImageCard key={image.url} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;

// import React, { useState, useEffect } from "react";
// import "./imageGallery.css";
// import ImageCard from "../imageCard/ImageCard";

// const ImageGallery = () => {
//   const [images, setImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [term, setTerm] = useState("");
//   const apiKey = "44034493-e609a207b60b1c970cef941c8";

//   useEffect(() => {
//     fetch(`https://pixabay.com/api/?key=${apiKey}&q=${term}&image_type=photo`)
//       .then((res) => res.json())
//       .then((data) => {
//         setImages(data.hits);
//         setIsLoading(false);
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   }, [term]); //adding term as a dependecy so it changes everytime it runs

//   return (
//     <div>
//       {isLoading ? (
//         <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
//       ) : (
//         <div className="image__grid md:container md:mx-auto grid grid-cols-3 gap-2">
//           {images.map((image) => (
//             <ImageCard key={image.id} image={image} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
// export default ImageGallery;

// ImageCard.jsx
import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.imageUrl} alt="uploaded" className="w-full h-auto" />
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

// import React from "react";

// const ImageCard = ({ image }) => {
//   const tags = image.tags.split(",");
//   return (
//     <div className="img__card max-w-sm shadow-lg rounded overflow-hidden">
//       <img src={image.webformatURL} alt={image.tags} className="img w-full" />
//       <div className="card-body p-4">
//         <h2 className="card-title text-lg font-bold">
//           Title of image goes here
//         </h2>
//         <p className="text-gray-700">Uploaded by: {image.user}</p>
//         <span className="text-gray-500">Created on: add date</span>
//         <div className="mt-2">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
//             >
//               #{tag.trim()}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageCard;

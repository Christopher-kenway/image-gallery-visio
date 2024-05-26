import React, { useState, useRef } from "react";
import Navbar from "../components/navbar/Navbar";
import useStorage from "../hooks/useStorage";
import "../pages styles/Create.css";
import { ReactPhotoEditor } from "react-photo-editor";
import "react-photo-editor/dist/style.css";
const Create = () => {
  const [showModal, setShowModal] = useState(false);
  const [chosenFile, setChosenFile] = useState(null); // State to hold the chosen file for editing
  const [editedImage, setEditedImage] = useState(null); // State to hold the edited image data
  const { startUpload, progress } = useStorage(); // Get upload and progress functions from storage hook

  // Function to handle file change event
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setChosenFile(e.target.files[0]);
      setEditedImage(null); // Reset edited image when a new file is chosen
    }
  };

  // Show modal if a file is selected
  const showModalHandler = () => {
    if (chosenFile) {
      setShowModal(true);
    }
  };

  // Hide modal
  const hideModal = () => {
    setShowModal(false);
  };

  // Save edited image (assuming PhotoEditor provides this functionality)
  const handleSaveImage = (editedImageData) => {
    setEditedImage(editedImageData); // Store edited image data
    setShowModal(false); // Hide modal
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!chosenFile) {
      window.alert("No file selected");
      return; // Prevent further processing if no file selected
    }

    const imageToUpload = editedImage || chosenFile; // Use edited image if available, otherwise use original
    startUpload(imageToUpload); // Trigger upload using your storage hook
    console.log(imageToUpload);
  };

  return (
    <div>
      <Navbar />
      <div className="create__wrapper mt-20 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-8"
        >
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleFileChange}
            multiple={false}
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <button type="button" onClick={showModalHandler}>
            Edit
          </button>
          {showModal && chosenFile && (
            <ReactPhotoEditor
              open={showModal}
              file={chosenFile}
              onSave={handleSaveImage} // Callback for edited image data
              onClose={hideModal} // Callback to close modal
            />
          )}
          <button
            type="submit"
            className="btn upload__btn gap-3 relative"
            disabled={!chosenFile || progress > 0}
          >
            Upload
            {progress > 0 && progress < 100 && (
              <div className="loading loading-spinner text-accent"></div>
            )}
          </button>
        </form>

        <form className="img__details">
          <div className="create__form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Add image Title"
              className="input input-bordered"
              required
              disabled={!chosenFile || progress > 0}
            />
          </div>
          <div className="create__form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Add your Description"
              className="input input-bordered"
              required
              disabled={!chosenFile || progress > 0}
            />
          </div>
          <div className="create__form-control">
            <label className="label">
              <span className="label-text">Tags</span>
            </label>
            <input
              type="text"
              placeholder="Add tags"
              className="input input-bordered"
              required
              disabled={!chosenFile || progress > 0}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

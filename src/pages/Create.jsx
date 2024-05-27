import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import useStorage from "../hooks/useStorage";
import EditImageModal from "../components/modals/EditImageModal";
import "../pages styles/Create.css";

const Create = () => {
  const [chosenFile, setChosenFile] = useState(null);
  const [editedImage, setEditedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setChosenFile(e.target.files[0]);
    }
  };

  const handleSaveEditedImage = (imageUrl) => {
    setEditedImage(imageUrl);
    setShowEditModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileToUpload = editedImage || chosenFile;
    if (!fileToUpload) {
      window.alert("No file selected");
      return;
    }
    startUpload(fileToUpload, title, description);
    setChosenFile(null);
  };

  const handleEditClick = () => {
    if (chosenFile) {
      setShowEditModal(true);
    } else {
      window.alert("Please select a file first");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-10">
        <form onSubmit={handleSubmit}>
          <div className="upload__input">
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleFileChange}
              multiple={false}
              className="file-input file-input-bordered mb-5"
            />
            <button
              type="button"
              className="btn edit__btn gap-3"
              onClick={handleEditClick}
              disabled={!chosenFile || progress > 0}
            >
              Edit
            </button>

            <button
              type="submit"
              className="btn upload__btn gap-3 relative mt-3"
              disabled={!chosenFile || progress > 0}
            >
              Upload
              {progress > 0 && progress < 100 && (
                <div className="loading loading-spinner text-accent"></div>
              )}
            </button>
          </div>

          <div className="img__details">
            <input
              type="text"
              placeholder="Add image Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered"
              disabled={!chosenFile || progress > 0}
            />
            <input
              type="text"
              placeholder="Add your Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input input-bordered"
              disabled={!chosenFile || progress > 0}
            />
          </div>
        </form>
      </div>
      {showEditModal && (
        <EditImageModal
          selectedImg={URL.createObjectURL(chosenFile)}
          onSave={handleSaveEditedImage}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default Create;

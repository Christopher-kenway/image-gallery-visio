import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import useStorage from "../hooks/useStorage";
import "../pages styles/Create.css";

const Create = () => {
  const [chosenFile, setChosenFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { startUpload, progress } = useStorage();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setChosenFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!chosenFile) {
      window.alert("No file selected");
      return;
    }
    startUpload(chosenFile, title, description);
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
          <input
            type="text"
            placeholder="Add image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered"
            required
          />
          <input
            type="text"
            placeholder="Add your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered"
            required
          />
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
      </div>
    </div>
  );
};

export default Create;

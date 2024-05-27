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
      <div className=" mt-10">
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
              type="submit"
              className="btn upload__btn gap-3 relative"
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
    </div>
  );
};

export default Create;

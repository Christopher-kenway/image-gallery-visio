import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import useStorage from "../hooks/useStorage";

const Create = () => {
  // State to hold the chosen file
  const [chosenFile, setChosenFile] = useState(null);
  //state to grab from storage
  const { startUpload, progress } = useStorage();
  // Function to handle file change event
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setChosenFile(e.target.files[0]);
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!chosenFile) {
      window.alert("No file Selected");
    } else {
      startUpload(chosenFile);
      console.log(chosenFile);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-8"
        >
          <input
            type="file"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full max-w-xs"
          />

          <button
            type="submit"
            className="btn upload__btn gap-3 relative"
            disabled={!chosenFile || progress > 0}
          >
            Upload
            {progress > 0 && progress < 100 && <div className="loader"></div>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;

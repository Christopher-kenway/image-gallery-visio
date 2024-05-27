import React, { useState, useRef } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../hooks/useAuth";
import { db } from "../firebase/firebaseConfig";

const useStorage = () => {
  // State variables to track upload progress, errors, and download URL
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const { user } = useAuth();
  const myRef = useRef(null);
  console.log(user);
  // Function to start the file upload
  const startUpload = async (file, title, description) => {
    if (!file) {
      setError("No file selected.");
      return;
    }

    try {
      const storage = getStorage();
      // Create a reference to the storage location where the file will be uploaded
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Update progress percentage
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
        },
        (error) => {
          // Handle upload errors
          setError(error);
        },
        async () => {
          // Upload completed successfully, get the download URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUrl(downloadURL);

          // Store data into Firestore
          try {
            await addDoc(collection(db, "images"), {
              imageUrl: downloadURL,
              createdAt: new Date(),
              userEmail: user.email,
              displayName: user.displayName,
              title: title,
              description: description,
            });
            console.log("Document successfully written!");
          } catch (error) {
            console.error("Error writing document: ", error);
          }
        }
      );
    } catch (error) {
      console.error("Error starting upload: ", error);
      setError("Error starting upload.");
    }
  };

  // Return the startUpload function and state variables
  return { startUpload, progress, error, url };
};

export default useStorage;

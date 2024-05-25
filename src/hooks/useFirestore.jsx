import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"; // Make sure this import path is correct

const useFirestore = (collectionName) => {
  // State to store the fetched documents
  const [docs, setDocs] = useState([]);
  // State to indicate loading status
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to run when the component mounts or the collectionName changes
  useEffect(() => {
    let unsubscribe;

    const getData = async () => {
      try {
        // Create a query to fetch documents from the collection, ordered by createdAt field in descending order
        const q = query(
          collection(db, collectionName),
          orderBy("createdAt", "desc")
        );

        // Subscribe to the query and listen for real-time updates
        unsubscribe = onSnapshot(q, (querySnapshot) => {
          const images = [];
          querySnapshot.forEach((doc) => {
            const { imageUrl, createdAt, userEmail } = doc.data();
            images.push({ id: doc.id, imageUrl, createdAt, userEmail });
          });
          // Update the state with the fetched documents
          setDocs(images);
          // Set loading to false after fetching the data
          setIsLoading(false);
        });
      } catch (error) {
        console.error("Error fetching documents: ", error);
        setIsLoading(false);
      }
    };

    // Call the getData function to fetch documents
    getData();

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe && unsubscribe();
  }, [collectionName]); // Dependency array to re-run the effect when collectionName changes

  // Return the fetched documents and loading status
  return {
    docs,
    isLoading,
  };
};

export default useFirestore;

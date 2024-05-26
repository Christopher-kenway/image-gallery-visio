import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      let documents = [];
      snapshot.forEach((doc) => {
        documents.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setDocs(documents);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { docs, isLoading };
};

export default useFirestore;

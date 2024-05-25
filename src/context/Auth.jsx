import React, { createContext, useState, useEffect } from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

// Create context with default values
export const AuthContext = createContext({
  user: null, // Represents the currently authenticated user
  isLoading: false, // Indicates whether authentication is in progress
  setUser: () => {}, // Function to update the user state (placeholder)
  setIsLoading: () => {}, // Function to update the loading state (placeholder)
});

// Create provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold the authenticated user
  const [isLoading, setIsLoading] = useState(true); // State to indicate if the authentication process is ongoing

  const auth = getAuth(); // Initialize Firebase authentication

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update the user state with the authenticated user
      setIsLoading(false); // Set loading to false as authentication check is done
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, [auth]); // Empty dependency array means this runs once on mount

  // Context value to be provided to consumers
  const value = {
    user, // Current authenticated user
    isLoading, // Loading state
    setUser, // Function to set user state
    setIsLoading, // Function to set loading state
  };

  // Provide the context to child components
  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

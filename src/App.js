import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Gallery from "./pages/Gallery";
import Create from "./pages/Create";
import { AuthProvider } from "./context/Auth";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import './App.css'

function App() {
  return (
    <AuthProvider>
     
      <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={
            <PrivateRoutes>
              <Home />
            </PrivateRoutes>
          } />
          <Route path="/signup" element={
            <PublicRoutes>
              <Signup />
            </PublicRoutes>
          } />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

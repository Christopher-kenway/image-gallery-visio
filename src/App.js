import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
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
          <Route path="/login" element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          } />
          <Route path="/gallery" element={
            <PrivateRoutes>
              <Gallery />
            </PrivateRoutes>
          } />
          <Route path="/create" element={
            <PrivateRoutes>
              <Create />
            </PrivateRoutes>
          } />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

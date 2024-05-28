import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../pages styles/Signup.css";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="hero min-h-screen">
        <div className="sign__hero-content flex-col">
          <div className="text-center">
            <h1 className="font-bold">visio</h1>
            <p className="py-6">
              "Go beyond storage. Organize, personalize & share - your photos,
              your story."
            </p>
          </div>
          <div className="sign__card shrink-0 w-full max-w-sm">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-center">
                <button type="submit" className="sign__btn w-full">
                  Login
                </button>
                <Link to="/Signup">
                  <button type="submit" className="sign__btn w-full mt-4">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

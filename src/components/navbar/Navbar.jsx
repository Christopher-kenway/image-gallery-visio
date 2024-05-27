import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./Navbar.css";

const Navbar = ({ searchText }) => {
  const [text, setText] = useState("");
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar p-3">
      <Link to="/" className="logo text-4xl font-bold">
        Visio
      </Link>
      <ul className="nav__links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={location.pathname === "/gallery" ? "active" : ""}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/create"
            className={location.pathname === "/create" ? "active" : ""}
          >
            Create
          </Link>
        </li>
      </ul>
      <div className="gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul tabIndex={0} className="dropdown-content">
            <li>
              <button className="justify-between">
                Profile
                <span className="badge">New</span>
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

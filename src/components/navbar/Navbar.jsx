import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleLogout = async () => {
    try {
      await signOut(getAuth());
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar justify-between">
      <Link to="/" className="logo text-4xl cursor-pointer font-bold">
        Visio
      </Link>
      <ul className="nav__links">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/create" className="">
            Create
          </Link>
        </li>
      </ul>
      <div className="flex-end gap-2 mt-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button className="justify-between">
                Profile
                <span className="badge">New</span>
              </button>
            </li>
            <li>
              <button>Settings</button>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

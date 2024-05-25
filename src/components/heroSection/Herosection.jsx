import React from "react";
import "./Herosection.css";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="hero mt-8 md:container md:mx-auto">
      <img
        src="https://i.pinimg.com/236x/f5/7a/68/f57a6836cab1bcbe917f3dfdd1386b7d.jpg"
        className="hero__img"
      />
      <div className="hero-content text-center w-3/6">
        <p className="text__info text-5xl">
          <strong className="mr-3">Every Picture</strong>
          Has its own Fortune to tell
        </p>
        <span className="mr-5 font-semibold">Wanna see more?</span>
        <Link to="/gallery" className="btn mt-8">
          Explore
        </Link>
      </div>
      <img
        src="https://i.pinimg.com/236x/51/ce/57/51ce575335382482249a2abab4475f9e.jpg"
        className="hero__img img2 max-w-sm"
      />
    </div>
  );
};

export default Herosection;

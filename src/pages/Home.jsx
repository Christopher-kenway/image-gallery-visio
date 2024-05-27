import React from "react";
import Navbar from "../components/navbar/Navbar";

import Herosection from "../components/heroSection/Herosection";
import Footer from "../components/footer/Footer.";
import { useAuth } from "../hooks/useAuth";

const Home = ({ setTerm }) => {
  const { user } = useAuth;
  console.log(user);
  return (
    <div>
      <Navbar searchText={(text) => setTerm(text)} />

      <Herosection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

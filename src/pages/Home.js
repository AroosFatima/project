import React from "react";
import Navbar from "../components/Navbar/index.js";

import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navbar active="home" />
      <Banner />
      <Card />
    </div>
  );
};
export default Home;

import React from "react";
import Navbar from "../components/Navbar/index.js";
import { Grid } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { add } from "../Store/slices/CartSlice.js";
import Banner from "../components/Banner";
import Card from "../components/Card";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Card />
    </div>
  );
};
export default Home;

import React, { useState } from "react";
import red from "../../assets/images/red.png";
import dragon from "../../assets/images/dragon.png";
import key from "../../assets/images/key.png";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import bag from "../../assets/images/bag.png";
import colourful from "../../assets/images/colourful.png";
import game from "../../assets/images/game.png";
import jacket from "../../assets/images/jacket.png";
import laptop from "../../assets/images/laptop.png";
import { useSelector } from "react-redux";

const Card = () => {
  const data = [
    {
      id: "7",
      img: red,
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      span: "$160",
      text: "-40%",
    },

    {
      id: "6",
      img: dragon,
      title: "AK-900 Wired Keyboard",
      price: "$960",
      span: "$1160",
      text: "-35%",
    },
    {
      id: "8",
      img: key,
      title: "IPS LCD Gaming Monitor",
      price: "$370",
      span: "$400",
      text: "-30%",
    },

    {
      id: "1",
      img: bag,
      title: "HAVIT HV-G92 Gamepad",
      price: "$120",
      span: "$160",
      text: "-40%",
    },

    {
      id: "2",
      img: colourful,
      title: "RGB liquid CPU Cooler",
      price: "$120",
      span: "$160",
      text: "-40%",
    },
    {
      id: "3",
      img: game,
      title: "GP11 Shooter USB Gamepad",
      price: "$550",
      span: "$160",
      text: "-40%",
    },
    {
      id: "4",
      img: jacket,
      title: "Quilted Satin Jacket",
      price: "$750",
      span: "$160",
      text: "-40%",
    },
    {
      id: "5",
      img: laptop,
      title: "ASUS FHD Gaming Laptop",
      price: "$960",
      span: "$160",
      text: "-40%",
    },
  ];
  const [show, setShow] = useState(false);
  const handleproduct = () => {
    setShow(!show);
  };
  const searchQuery = useSelector((state) => state.cart.search);
  console.log("data", searchQuery);
  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <section className="px-[30px] py-[10px]">
      <div className="max-w-[1140px] mx-auto px-[20px]">
        <div className=" from-blue-50 to-violet-50 flex items-center justify-center min-h-screen">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {searchQuery
                ? filteredProducts.map((val) => (
                    <div className="">
                      <div key={val.id} className="bg-gray-100 py-10 relative">
                        <div className="bg-gray-100 h-[100px] w-[100px] mx-auto rounded-md overflow-hidden">
                          <img
                            src={val.img}
                            alt="Product"
                            className=" h-50 w-50"
                          />
                        </div>

                        <span className="absolute top-1 right-1 bg-white px-1 rounded-full">
                          <FavoriteBorderIcon fontSize="small" />
                        </span>
                        <span className="absolute top-1  left-1 text-white text-xs bg-[#DB4444] p-2 rounded">
                          {val.text}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-black text-base">{val.title}</p>
                        <ul className="flex flex-wrap ">
                          <li className="px-3">
                            {" "}
                            <span className="text-[#DB4444]  text-sm">
                              {val.price}
                            </span>
                          </li>
                          <li>
                            {" "}
                            <span className="text-gray-400 line-through   text-sm">
                              {val.span}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))
                : data.slice(0, show ? data.length : 4).map((val) => (
                    <div className="">
                      <div key={val.id} className="bg-gray-100 py-10 relative">
                        <div className="bg-gray-100 h-[100px] w-[100px] mx-auto rounded-md overflow-hidden">
                          <img
                            src={val.img}
                            alt="Product"
                            className=" h-50 w-50"
                          />
                        </div>

                        <span className="absolute top-1 right-1 bg-white px-1 rounded-full">
                          <FavoriteBorderIcon fontSize="small" />
                        </span>
                        <span className="absolute top-1  left-1 text-white text-xs bg-[#DB4444] p-2 rounded">
                          {val.text}
                        </span>
                      </div>
                      <div className="mt-4">
                        <p className="text-black text-base">{val.title}</p>
                        <ul className="flex flex-wrap ">
                          <li className="px-3">
                            {" "}
                            <span className="text-[#DB4444]  text-sm">
                              {val.price}
                            </span>
                          </li>
                          <li>
                            {" "}
                            <span className="text-gray-400 line-through   text-sm">
                              {val.span}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-[40px]">
        <Button
          variant="contained"
          style={{ backgroundColor: "#DB4444", padding: "16px" }}
          onClick={handleproduct}
        >
          View All Products
        </Button>
      </div>
    </section>
  );
};
export default Card;

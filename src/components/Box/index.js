import React from "react";
import Product from "../../pages/Product";
import bag from "../../assets/images/bag.png";

import colourful from "../../assets/images/colourful.png";
import game from "../../assets/images/game.png";
import jacket from "../../assets/images/jacket.png";
import laptop from "../../assets/images/laptop.png";
import dragon from "../../assets/images/dragon.png";
import red from "../../assets/images/red.png";
import key from "../../assets/images/key.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { add } from "../../Store/slices/CartSlice.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";

const Box = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (val) => {
    const quantity = 1;
    dispatch(add({ ...val, quantity }));
  };
  const handleFav = (val) => {
    dispatch(add(val));
  };
  const productData = [
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
    {
      id: "6",
      img: dragon,
      title: "IPS LCD Gaming Monitor",
      price: "$1160",
      span: "$160",
      text: "-40%",
    },
    {
      id: "7",
      img: red,
      title: "HAVIT HV-G92 Gamepad",
      price: "$560",
      span: "$160",
      text: "-40%",
    },
    {
      id: "8",
      img: key,
      title: "AK-900 Wired Keyboard",
      price: "$200",
      span: "$160",
      text: "-40%",
    },
  ];
  const handleAll = () => {
    productData.map((val) => {
      handleAddToCart(val);
    });
  };
  return (
    <>
      <section className="px-[30px] py-[30px]">
        <div className="max-w-[1140px] mx-auto px-[20px]">
          <div className=" flex justify-between  px-[10px]">
            <span>Total Products (8)</span>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "white",
                padding: "10px",
                color: "black",
              }}
              onClick={handleAll}
            >
              Move All To Cart
            </Button>{" "}
          </div>
          <div className=" from-blue-50 to-violet-50 flex items-center justify-center min-h-screen">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {productData.map((val) => (
                  <div className="">
                    <div key={val.id} className="bg-gray-100  relative">
                      <div className="py-10">
                        <div className="bg-gray-100 h-[100px] w-[100px] mx-auto rounded-md overflow-hidden">
                          <img
                            src={val.img}
                            alt="Product"
                            className=" h-50 w-50"
                          />
                        </div>

                        <span className="absolute top-1 right-1 bg-white px-1 rounded-full">
                          <FavoriteBorderIcon
                            fontSize="small"
                            onClick={() => handleFav(val)}
                          />
                        </span>
                        <span className="absolute top-1  left-1 text-white text-xs bg-[#DB4444] p-2 rounded">
                          {val.text}
                        </span>
                      </div>
                      <div className="bg-black flex justify-center text-canter items center gap-4">
                        <span className="text-canter items center text-sm py-2">
                          <AddShoppingCartIcon style={{ color: "white" }} />
                        </span>
                        <button
                          className="text-white text-sm py-2"
                          onClick={() => handleAddToCart(val)}
                        >
                          {" "}
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-black text-base">{val.title}</p>
                      <ul className="flex flex-wrap ">
                        <li className="px-3">
                          {" "}
                          <span className="text-[#DB4444]  text-sm">
                            {val.price}
                          </span>{" "}
                        </li>
                        <li>
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
      </section>
    </>
  );
};
export default Box;

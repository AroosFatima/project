import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { add, addFav } from "../../Store/slices/CartSlice.js";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import productData from "../../data/productData";

const Box = () => {
  const handleAll = () => {
    productData.forEach((val) => handleAddToCart(val));
  };

  const dispatch = useDispatch();

  const handleAddToCart = (val) => dispatch(add({ ...val, quantity: 1 }));
  const handleFav = (val) => dispatch(addFav(val));
  const searchQuery = useSelector((state) => state.cart.search);

  return (
    <>
      <section className="px-[30px] py-[30px]">
        <div className="max-w-[1140px] mx-auto px-[20px]">
          <div className=" flex justify-between  px-[10px]">
            <span>Total Products (8)</span>
            <Button class="btn" onClick={handleAll}>
              Move All To Cart
            </Button>
          </div>
          <div className=" from-blue-50 to-violet-50 flex items-center justify-center min-h-screen">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {productData
                  .filter((product) =>
                    searchQuery
                      ? product.title
                          .toLowerCase()
                          .includes(searchQuery.toLowerCase())
                      : true
                  )
                  .map((val) => (
                    <div className="mt-10">
                      <div
                        key={val.id}
                        className="bg-gray-100  relative  card "
                      >
                        <div className="py-10 rounded-4">
                          <div className="bg-gray-100 h-[100px] w-[100px] mx-auto rounded-md overflow-hidden card">
                            <img
                              src={val.img}
                              alt="Product"
                              className=" h-50 w-50"
                            />
                          </div>

                          <span
                            className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded ${
                              val.new === "new"
                                ? "bg-[#00FF66] "
                                : "bg-[#DB4444]"
                            }`}
                          >
                            {val.new === "new" ? "New " : val.text}
                          </span>
                        </div>
                        <div className="bg-black flex justify-center text-canter items center gap-4 card1">
                          <span className="text-canter items center text-sm py-2">
                            <AddShoppingCartIcon style={{ color: "white" }} />
                          </span>
                          <button
                            className="text-white text-sm py-2 rounded-4"
                            onClick={() => handleAddToCart(val)}
                          >
                            {" "}
                            Add to Cart
                          </button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-black text">{val.title}</p>
                        <ul className="flex flex-wrap ">
                          <li className="px-3">
                            {" "}
                            <span className="text-[#DB4444]  text-sm">
                              ${val.price}
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

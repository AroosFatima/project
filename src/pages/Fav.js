import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from "../components/Navbar";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { remove } from "../Store/slices/CartSlice.js";
const Fav = () => {
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.cart.products);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <Navbar />
      <section className="px-[30px] py-[30px]">
        <div className="max-w-[1140px] mx-auto px-[20px]">
          <div className=" from-blue-50 to-violet-50 flex items-center justify-center min-h-screen">
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {Items.map((val) => (
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
                          <FavoriteBorderIcon fontSize="small" />
                          <HighlightOffIcon
                            onClick={() => handleRemove(val.id)}
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
                        <button className="text-white text-sm py-2">
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
    </div>
  );
};
export default Fav;

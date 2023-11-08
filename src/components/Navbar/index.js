import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { setSearch } from "../../Store/slices/CartSlice";

const Navbar = ({ active }) => {
  const dispatch = useDispatch();
  const favourite = useSelector((state) => state.cart.Fav);
  const cartItems = useSelector((state) => state.cart.products);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements["default-search"].value;
    dispatch(setSearch(query));
  };

  return (
    <>
      <div className="py-2 px-6  flex justify-between border border-slate-300 bg-black min-h-[30px]"></div>
      <div class="flex flex-wrap place-items-center w-full ">
        <section class="relative mx-auto w-full">
          <nav class="flex justify-between  text-white w-full  px-[30px]">
            <div class=" xl:px-12 py-3 flex w-full items-center">
              <h2 className="text-[24px] text-black text-2xl font-bold font-poppins ">
                Exclusive
              </h2>
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 Active">
                {active == "home" ? (
                  <li>
                    <Link
                      to={"/"}
                      className=" text-black hover:text-gray-200 underline underline-offset-8 "
                    >
                      Home
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to={"/"}
                      className=" text-black hover:text-gray-200  "
                    >
                      Home
                    </Link>
                  </li>
                )}
                {active == "product" ? (
                  <li>
                    <Link
                      to={"/product"}
                      className=" text-black hover:text-gray-200 underline underline-offset-8 "
                    >
                      Products
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      to={"/product"}
                      className=" text-black hover:text-gray-200 "
                    >
                      Products
                    </Link>
                  </li>
                )}
              </ul>

              <form className="mr-8  " onSubmit={handleSubmit}>
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className=" mr-6 relative ">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-64 p-3 text-sm text-gray-900 font-poppins rounded-lg bg-slate-100 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="What are you looking for?"
                    required
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none "></div>
                  <SearchIcon
                    style={{
                      color: "black",
                      position: "absolute",
                      right: "5",
                      top: "12",
                      paddingRight: "5px",
                    }}
                  />
                </div>
              </form>
              <div className="relative">
                <FavoriteBorderIcon
                  style={{
                    color: "black",
                    marginTop: "8px",
                    marginRight: "5px",
                  }}
                />
                <span className="text-gray-400 bg-[#DB4444] text-white text-xs rounded-full absolute top-0  right-0 mb-10  px-1 ">
                  {favourite.length}
                </span>
              </div>
              <div>
                <Link to={"/cart"}>
                  <div className="relative">
                    <span className="text-gray-400 bg-[#DB4444] text-white text-xs rounded-full absolute top-0  right-0 mb-10  px-1">
                      {cartItems.length}
                    </span>
                    <span>
                      {" "}
                      <AddShoppingCartIcon
                        style={{
                          color: "black",
                          marginTop: "8px",
                          marginLeft: "10px",
                        }}
                      />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </section>
      </div>

      <div class="border-b border-gray-300"></div>
    </>
  );
};
export default Navbar;

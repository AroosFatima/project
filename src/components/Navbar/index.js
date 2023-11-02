import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.products);
  // console.log("items", items);
  const [search, setSearch] = useState("");
  const filterProducts = cartItems.map((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(filterProducts);
  };
  return (
    <>
      <div className="py-2 px-6  flex justify-between border border-slate-300 bg-black min-h-[30px]"></div>
      <div class="flex flex-wrap place-items-center w-full ">
        <section class="relative mx-auto w-full">
          <nav class="flex justify-between bg-gray-100 text-white w-full  px-[30px]">
            <div class=" xl:px-12 py-3 flex w-full items-center">
              <h2 className="text-[24px] text-black text-2xl font-bold ">
                Exclusive
              </h2>
              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <Link to={"/"} className=" text-black hover:text-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/product"}
                    className=" text-black hover:text-gray-200"
                  >
                    products{" "}
                  </Link>
                </li>
              </ul>
              <form className="pr-5" onSubmit={handleSubmit}>
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                >
                  Search
                </label>
                <div class="relative flex">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon style={{ color: "gray" }} />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Products..."
                    required
                  />
                </div>
              </form>{" "}
              <Link to={"/fav"}>
                <span className="text-gray-400">{cartItems.length}</span>
                <FavoriteBorderIcon
                  style={{ color: "black", PaddingRight: "6px" }}
                />
              </Link>
              <Link to={"/cart"}>
                <span>
                  {" "}
                  <AddShoppingCartIcon style={{ color: "black" }} />
                </span>
                <span className="text-gray-400">{cartItems.length}</span>
              </Link>
            </div>
          </nav>
        </section>
      </div>

      <div class="border-b border-gray-300"></div>
    </>
  );
};
export default Navbar;

import React, { useState } from "react";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { addFav } from "../../Store/slices/CartSlice";
import productData from "../../data/productData";

const Card = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleproduct = () => {
    setShow(!show);
  };
  const searchQuery = useSelector((state) => state.cart.search);

  const handleFav = (val) => {
    dispatch(addFav(val));
  };

  const favorite = useSelector((state) => state.cart.Fav);

  return (
    <section className="px-[30px] py-[10px]">
      <div className="max-w-[1140px] mx-auto px-[20px]">
        <div className=" from-blue-50 to-violet-50 flex items-center justify-center min-h-screen">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {productData
                .slice(0, show ? productData.length : 4)
                .filter((val) =>
                  searchQuery
                    ? val.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                    : true
                )
                .map((val) => (
                  <div className="">
                    <div
                      key={val.id}
                      className="bg-gray-100 py-10 relative rounded-4"
                    >
                      <div className="bg-gray-100 h-[100px] w-[100px] mx-auto rounded-md overflow-hidden card">
                        <img
                          src={val.img}
                          alt="Product"
                          className=" h-50 w-50"
                        />
                      </div>

                      <span
                        className={`absolute top-1 right-1 px-1 rounded-full bg-white px-1 ${
                          favorite.includes(val)
                            ? "text-[#DB4444]"
                            : "text-gray-500 "
                        }`}
                      >
                        <FavoriteIcon
                          fontSize="small"
                          onClick={() => handleFav(val)}
                        />
                      </span>
                      <span className="absolute top-2  left-2  text-white text-xs bg-[#DB4444] px-2  py-1 rounded font-poppins">
                        {val.text}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-black font-poppins text-[16px] font-[500] text">
                        {val.title}
                      </p>
                      <ul className="flex flex-wrap ">
                        <li className="px-3">
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
        <Button class="button" onClick={handleproduct}>
          View All Products
        </Button>
      </div>
    </section>
  );
};
export default Card;

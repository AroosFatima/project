import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import CancelIcon from "@mui/icons-material/Cancel";
import { remove } from "../Store/slices/CartSlice.js";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const ShopCart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  const [input, setInput] = useState(cartItems.map(() => 1));

  const Head = [
    { text: "Product" },
    { text: "Price" },
    { text: "Quantity" },
    { text: "Subtotal" },
  ];
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const searchQuery = useSelector((state) => state.cart.search);

  const handleRemoveAll = () => {
    cartItems.map((itm) => dispatch(remove(itm.id)));
  };

  const total = () => {
    const value = cartItems.reduce((acc, item, index) => {
      const subtotal = item.price * input[index];
      return acc + subtotal;
    }, 0);
    return value;
  };
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text("Receipt", 10, 10);

    pdf.text(`Subtotal: $${total()}`, 10, 30);
    pdf.text("Shipping: Free", 10, 40);
    pdf.text(`Total: $${total()}`, 10, 50);
    pdf.save("receipt.pdf");
  };
  return (
    <>
      <Navbar />
      <section className="px-[30px] py-[40px]">
        <div className="max-w-[1140px] mx-auto px-[20px]">
          <div className="text-[14px] font-[400]">
            <Link to={"/"}>
              {" "}
              <span className="text-gray-500 p-2">Home</span>
            </Link>{" "}
            /<span className="p-2">Cart</span>
          </div>
          <div className=" py-6  px-4  shadow mt-10">
            <ul className="flex justify-between">
              {Head &&
                Head.map((val) => (
                  <li className="text-base text-black">{val.text}</li>
                ))}
            </ul>
          </div>
          {cartItems
            .filter((item) =>
              searchQuery
                ? item.title.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            )
            .map((item, index) => (
              <div key={item.id}>
                <div className="shadow items-center text-center">
                  <div className=" flex justify-between mt-5 px-[30px] items-center">
                    <div className=" flex  p-2  relative  group">
                      <img src={item.img} className="h-[60px]  w-[60px] p-2" />
                      <span className="absolute top-0  left-0 text-sm   mt-[13px] hidden group-hover:block text-[#DB4444] items-center">
                        <CancelIcon onClick={() => handleRemove(item.id)} />
                      </span>
                      <p className="text-sm pt-3">{item.title.slice(0, 5)}</p>
                    </div>

                    <div className=""> ${item.price} </div>

                    <div>
                      <input
                        min={0}
                        onChange={(e) => {
                          const newquantity = [...input];
                          newquantity[index] = parseInt(e.target.value);
                          setInput(newquantity);
                        }}
                        id="input"
                        type="number"
                        className="border border-gray-300 items-center text-center  mt-13"
                        value={input[index]}
                      />
                    </div>
                    <div className="mt-[10px]">
                      ${item.price * input[index]}{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className=" flex justify-between  px-[10px] pt-10 ">
            <Link to={"/product"}>
              <Button class="btn">Return to Products</Button>{" "}
            </Link>
            <Button class="btn" onClick={handleRemoveAll}>
              Remove All
            </Button>
          </div>
          <div className="border 2px-black   w-[470px]  h-[315px]   rounded-[4px] border-1.5 border-black p-4 mt-[30px]">
            <h2 className="font-bold text-base">Cart Total</h2>
            <div className="flex justify-between">
              <span className="block pt-3">Subtotal :</span>
              <span className="pt-3">${total()}</span>
            </div>
            <div className="border-b border-black pt-3"></div>
            <div className="flex justify-between">
              <span className="block pt-3">Shipping :</span>
              <span className="pt-3">Free</span>
            </div>
            <div className="border-b border-black pt-3"></div>
            <div className="flex justify-between">
              <span className="block pt-3">Total :</span>
              <span className="pt-3">${total()} </span>
            </div>

            <div className=" items-center  text-center pt-6">
              <Button class="button" onClick={handleDownload}>
                Download Reciept
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCart;

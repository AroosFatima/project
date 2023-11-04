import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { remove } from "../Store/slices/CartSlice.js";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import { setSearch } from "../Store/slices/CartSlice.js";

const ShopCart = () => {
  const Head = [
    { text: "Product" },
    { text: "Price" },
    { text: "Quantity" },
    { text: "Subtotal" },
  ];
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const searchQuery = useSelector((state) => state.cart.search);
  console.log("data", searchQuery);
  const filteredProducts = cartItems.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleRemoveAll = () => {
    cartItems.map((itm) => dispatch(remove(itm.id)));
  };

  const calculateSubtotal = (cartItems) => {
    let subTotal = 0;
    for (let item of cartItems) {
      const price = item.price;
      console.log(price, "price");
      const quantity = item.quantity;
      console.log(quantity, "quantity");

      subTotal += price * quantity;
    }
    return subTotal;
  };
  const subtotal = calculateSubtotal(cartItems);
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.text("Receipt", 10, 10);
    pdf.text(`Subtotal: $${subtotal}`, 10, 30);
    pdf.text("Shipping: Free", 10, 40);
    const total = subtotal;
    pdf.text(`Total: $${total}`, 10, 50);
    pdf.save("receipt.pdf");
  };
  return (
    <>
      <Navbar />
      <section className="px-[30px] py-[30px]">
        <div className="max-w-[1140px] mx-auto px-[20px]">
          <div className="bg-slate-100 py-6  px-4 ">
            <ul className="flex justify-between">
              {Head &&
                Head.map((val) => (
                  <li className="text-base text-black">{val.text}</li>
                ))}
            </ul>
          </div>
          {searchQuery
            ? filteredProducts.map((item) => (
                <div key={item.id}>
                  <div className="bg-slate-100">
                    <div className=" flex justify-between mt-5 px-[30px]">
                      <div className=" flex  p-2  relative">
                        <img
                          src={item.img}
                          className="h-[60px]  w-[60px] p-2"
                        />
                        <span className="absolute top-0  left-0 text-sm">
                          <HighlightOffIcon
                            onClick={() => handleRemove(item.id)}
                          />
                        </span>{" "}
                        <p className="text-base">{item.title.slice(0, 5)}</p>
                      </div>

                      <div> ${item.price} </div>

                      <div>
                        {" "}
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={item.quantity}
                        />{" "}
                      </div>
                      <div>${subtotal} </div>
                    </div>
                  </div>
                </div>
              ))
            : cartItems.map((item) => (
                <div key={item.id}>
                  <div className="bg-slate-100">
                    <div className=" flex justify-between mt-5 px-[30px]">
                      <div className=" flex  p-2  relative">
                        <img
                          src={item.img}
                          className="h-[60px]  w-[60px] p-2"
                        />
                        <span className="absolute top-0  left-0 text-sm">
                          <HighlightOffIcon
                            onClick={() => handleRemove(item.id)}
                          />
                        </span>{" "}
                        <p className="text-base">{item.title.slice(0, 5)}</p>
                      </div>

                      <div> ${item.price} </div>

                      <div>
                        {" "}
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={item.quantity}
                        />{" "}
                      </div>
                      <div>${subtotal} </div>
                    </div>
                  </div>
                </div>
              ))}
          <div className=" flex justify-between  px-[10px] pt-10">
            <Link to={"/product"}>
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  padding: "10px",
                  color: "black",
                }}
              >
                Return to Products
              </Button>{" "}
            </Link>
            <Button
              variant="outlined"
              style={{
                backgroundColor: "white",
                padding: "10px",
                color: "black",
              }}
              onClickCapture={handleRemoveAll}
            >
              Remove All
            </Button>
          </div>
          <div className="border 2px-black   w-80   m-7 p-10">
            <h2 className="font-bold text-base">Cart Total</h2>
            <div className="flex justify-between">
              {" "}
              <span className="block pt-3">Subtotal :</span>
              <span className="pt-3">${subtotal}</span>
            </div>

            <TextField variant="standard" />
            <div className="flex justify-between">
              {" "}
              <span className="block pt-3">Shipping :</span>
              <span className="pt-3">Free</span>
            </div>
            <TextField variant="standard" />
            <div className="flex justify-between">
              {" "}
              <span className="block pt-3">Total :</span>
              <span className="pt-3">${subtotal} </span>
            </div>
            <TextField variant="standard" />
            <div className="  pt-6">
              {" "}
              <Button
                variant="outlined"
                style={{
                  backgroundColor: "#DB4444",
                  padding: "10px",
                  color: "white",
                }}
                onClick={handleDownload}
              >
                Download Reciept
              </Button>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCart;

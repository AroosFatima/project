import React from "react";
import { useSelector } from "react-redux";
import { remove, increment, decrement } from "../Store/slices/CartSlice.js";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  console.log("cartitem", cartItems);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h3>Cart Items</h3>
        {cartItems.map((item) => (
          <div style={{ width: "350px", height: "400px" }}>
            <img
              src={item.image}
              alt={item.id}
              style={{ width: "300px", height: "200px" }}
            />
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h4 style={{ marginRight: "15px" }}>{item.title}</h4>
              <h5> {item.price}</h5>
              <p>Quantity:{item.quantity}</p>
              <button
                style={{ backgroundColor: "blueviolet" }}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;

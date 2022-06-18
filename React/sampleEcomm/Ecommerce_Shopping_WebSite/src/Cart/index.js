import React, { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";

function Cart() {
  const [cartItems, setCartItem] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  async function fetchCartItems() {
    const res = await axios.get("http://localhost:3001/cart");
    setCartItem(res.data);
  }

  const renderContent = () => {
    if (cartItems) {
      return cartItems.map((item) => {
        return (
          <div className="cartItem">
            <div className="title">{item.title}</div>
          </div>
        );
      });
    } else {
      return <div>No Cart Items</div>;
    }
  };

  return (
    <div className="cartItems">
      <h2>Cart Items</h2>
      <div>{renderContent()}</div>
    </div>
  );
}

export default Cart;

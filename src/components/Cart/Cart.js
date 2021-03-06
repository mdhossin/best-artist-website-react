import React from "react";
import ShowName from "../ShowName/ShowName";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // total amount count here
  const total = cart.reduce((priviousValue, currentValue) => {
    return priviousValue + parseInt(currentValue.price);
  }, 0);

  // stored object in array
  let storeName = [];
  for (const name of cart) {
    if (!storeName.includes(name)) {
      storeName.push(name);
    }
  }
  return (
    // show cart detail
    <div className="display-cart shadow">
      <h2 className="player-add-color ">
        <i className="fas fa-user"></i> Player Added : {cart.length}
      </h2>
      <h3 className="player-add-color fw-bold pb-2">Total cost : $ {total}</h3>
      {storeName.map((name) => (
        <ShowName key={name.index} cart={name}></ShowName>
      ))}
      <div className="pb-2">
        <button className="btn btn-outline-success">Buy Now</button>
      </div>
    </div>
  );
};

export default Cart;

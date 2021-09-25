import React from "react";
import ShowName from "../ShowName/ShowName";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  const total = cart.reduce((priviousValue, currentValue) => {
    return priviousValue + parseInt(currentValue.price);
  }, 0);
  let storeName = [];
  for (const name of cart) {
    storeName.push(name);
  }

  return (
    <div className="display-cart">
      <h2 className="player-add-color">
        <i className="fas fa-user"></i> Player Added : {cart.length}
      </h2>
      <h3>Total cost : $ {total}</h3>
      {storeName.map((name) => (
        <ShowName key={name.index} cart={name}></ShowName>
      ))}
    </div>
  );
};

export default Cart;

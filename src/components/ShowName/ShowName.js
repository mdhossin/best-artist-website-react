import React from "react";
import "./ShowName.css";

const ShowName = (props) => {
  const { name, picture } = props.cart;

  return (
    // when click the button show the same people in the cart
    <div className="cart-style">
      <div className="">
        <img src={picture} alt="" />
      </div>
      <div>
        <h5 className="mx-3"> {name}</h5>
      </div>
    </div>
  );
};

export default ShowName;

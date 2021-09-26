import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Artist from "../Artist/Artist";
import "./Artists.css";

const Artists = () => {
  // stored load data
  const [artists, setArtists] = useState([]);
  // stored data add ot cart button
  const [cart, setCart] = useState([]);
  // data load here
  useEffect(() => {
    fetch("./artist.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

  // add to cart button handeler function
  const addToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };

  return (
    // main content here
    <div className="px-5 pb-5">
      <div className="grid">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {artists.map((artist) => (
            <Artist
              key={artist._id}
              artist={artist}
              cartBtn={addToCart}
            ></Artist>
          ))}
        </div>
        <div className="cart-container text-center mt-2">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Artists;

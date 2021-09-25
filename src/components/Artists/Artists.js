import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Artist from "./Artist/Artist";
import "./Artists.css";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("./artist.json")
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);
  const addToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };

  return (
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
        <div className="cart-container text-center">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Artists;

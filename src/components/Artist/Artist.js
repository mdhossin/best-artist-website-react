import React from "react";
import "./Artist.css";

const Artist = (props) => {
  // destructuring here from object
  const { picture, name, age, price, country, gender, role } = props.artist;
  return (
    // show singe card
    <div>
      <div className="card h-100 single-card shadow">
        <div className="py-2 mx-auto">
          <img src={picture} className="card-img-top circle" alt="..." />
        </div>
        <div className="card-body card-text">
          <h4 className="name-color">
            Name : <span>{name}</span>
          </h4>
          <h6>Country : {country}</h6>
          <p className="fst-italic">Role : {role}</p>
          <p>Age : {age}</p>
          <p>
            <small>Gender : {gender}</small>
          </p>
          <p>
            Salary : <span className="fs-4 price-color"> $ {price}</span>
          </p>
        </div>
        <div className="text-center social-icon">
          <i className="fab fa-twitter-square twitter"></i>
          <i className="fab fa-instagram-square instagram"></i>
          <i className="fab fa-facebook-square facebook"></i>
        </div>
        <div className="card-footer card-button mb-2">
          <div className="card-button-style">
            <button
              type="button"
              className="btn btn-outline-success mx-2"
              onClick={() => props.cartBtn(props.artist)}
            >
              <i className="fas fa-shopping-cart shopping-cart"></i>
              Add to Cart
            </button>
          </div>
          <button type="button" className="btn btn-outline-danger">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Artist;

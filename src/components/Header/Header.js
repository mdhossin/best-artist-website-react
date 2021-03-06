import React from "react";

const Header = () => {
  // header
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold fst-italic" href="/">
            Music
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active " href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Join Here
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container text-center p-4">
        <h2 className="text-start">
          Selected best Musician and Singer to create a team for next Concert
        </h2>

        <h3>
          Total budget for this Concert :{" "}
          <span className="fw-bold">$ 10 Million</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;

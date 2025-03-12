import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Book Store</Link>
        <div>
          <Link className="btn btn-outline-light mx-2" to="/">Home</Link>
          <Link className="btn btn-outline-light mx-2" to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

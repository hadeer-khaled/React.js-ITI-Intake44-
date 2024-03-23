import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/" style={{ margin: "10px" }}>
        Home
      </Link>
      <Link to="/products"> All Products </Link>
    </>
  );
}

export default Navbar;

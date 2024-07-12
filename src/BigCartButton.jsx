import React from "react";
import { Link } from "react-router-dom";

function FloatButton(props) {
  return (
    <div>
      <Link className="float-button" to="/product/cartPage">
        <i className="fas fa-shopping-cart"></i>
      </Link>
    </div>
  );
}

export default FloatButton;
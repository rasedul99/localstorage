import React from "react";
import { addToCart } from "../../utilities/localStorage";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <div className="product">
      <p>{product.name}</p>
      <button
        onClick={() => {
          addToCart(product.id);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;

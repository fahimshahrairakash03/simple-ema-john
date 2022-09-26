import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, img, ratings, seller, price } = props.product;
  const { handleAddtoCart } = props;
  // console.log(props);

  return (
    <div className="product">
      <img src={img}></img>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings}</small>
        </p>
      </div>
      <button
        onClick={() => handleAddtoCart(props.product)}
        className="btn-cart"
      >
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;

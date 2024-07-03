import React from "react";

import Button from "../button/ButtonComponent";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      {/*buttontype="inverted" means that the button's colors are reversed compared to the default style */}
      <Button buttontype="inverted">Add to cart</Button>
    </div>
  );
};

export default ProductCard;

import { useContext } from "react";

import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../product-card/ProductCard";

import "./Shop.scss";

const Shop = () => {
  // TAKING ALL THE PRODUCTS
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;

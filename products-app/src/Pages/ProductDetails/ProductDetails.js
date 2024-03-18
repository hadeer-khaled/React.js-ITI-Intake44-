import React from "react";
import { useParams } from "react-router-dom";
import productsList from "../../productsList.js";
import ProductCard from "../../Components/ProductCard.js";
import MyCarousel from "../../Components/MyCarousel.js";
function ProductDetails() {
  console.log(useParams());

  const productId = useParams().productID;

  function getProductById(productId) {
    return productsList.find((product) => product.id === Number(productId));
  }

  const product = getProductById(productId);
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="w-50">
        <MyCarousel images={product.images}></MyCarousel>
      </div>
      <div>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Brand: {product.brand}</p>
      </div>
    </div>
  );
}

export default ProductDetails;

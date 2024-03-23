import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Enhancement_1
import axiosInstance from "../../apis/config";

// Enhancement_2
import { getProductById } from "../../apis/products.js";

import MyCarousel from "../../Components/MyCarousel.js";
function ProductDetails() {
  console.log(useParams());

  const productId = useParams().productID;

  // old method using productsList.js
  // function getProductById(productId) {
  //   return productsList.find((product) => product.id === Number(productId));
  // }
  // const product = getProductById(productId);

  const [requestedProduct, setRequestedProduct] = useState({});
  useEffect(() => {
    // axios

    // Enhancement_1
    // axiosInstance
    //   .get(`/products/${productId}`)

    // Enhancement_2
    getProductById(productId)
      .then((res) => {
        console.log(res.data);
        setRequestedProduct(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div className="container d-flex flex-column align-items-center">
      <div className="w-50">
        {requestedProduct.images && (
          <MyCarousel images={requestedProduct.images}></MyCarousel>
        )}
        {/* <MyCarousel images={requestedProduct.images}></MyCarousel> */}
      </div>
      <div>
        <p>Title: {requestedProduct.title}</p>
        <p>Price: {requestedProduct.price}</p>
        <p>Brand: {requestedProduct.brand}</p>
      </div>
    </div>
  );
}

export default ProductDetails;

import React, { useState, useEffect } from "react";
import ProductCard from "../../Components/ProductCard";
// import productsList from "../../productsList.js";

import axios from "axios";

// Enhancement_1
import axiosInstance from "../../apis/config";

// Enhancement_2
import { getProducts } from "../../apis/products.js";

const Products = () => {
  // const products = productsList;
  const [products_api, setProducts_api] = useState([]);

  useEffect(() => {
    // axios

    // Enhancement_1
    // axiosInstance
    //   .get("/products")

    // .get("https://dummyjson.com/users/search", {
    //   params: { q: "John" },
    //   headers: { Auth_token: "ajdflvblfmfofifvfgref" },
    // })

    // Enhancement_2
    getProducts()
      .then((res) => {
        console.log("res.data.products: ", res.data.products);
        setProducts_api(res.data.products);

        // products_api will be undefined cuz setProducts_api(res.data.products) is asynchronous
        console.log("products_api: ", products_api);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (products_api.length !== 0) {
      console.log("products_api: ", products_api);
    }
  }, [products_api]);
  return (
    <div className="container mt-3">
      <h1>Products</h1>
      <div className="row mt-3">
        {products_api.map((product) => (
          <div className="col col-lg-3 mb-3" key={product.id}>
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.images[0]}
              title={product.title}
              description={product.description}
              category={product.category}></ProductCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

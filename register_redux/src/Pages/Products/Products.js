import React, { useState, useEffect } from "react";
import ProductCard from "../../Components/ProductCard";
import productsList from "../../productsList.js";

const Products = () => {
  const products = productsList;
  return (
    <div className="container mt-3">
      <h1>Products</h1>
      <div className="row mt-3">
        {products.map((product) => (
          // <li key={product.id}>{product.title}</li>
          <div className="col col-lg-3 mb-3">
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

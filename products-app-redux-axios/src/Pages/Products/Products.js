import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProductsListThunk } from "./../../store/slices/productsSlice";
import ProductCard from "../../Components/ProductCard.js";

const Products = () => {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => {
    // console.log("state.productsList:", state.productsReducer.productsList);
    return state.productsReducer.productsList;
  });
  const isLoading = useSelector((state) => state.productsReducer.isLoading);

  useEffect(() => {
    dispatch(getProductsListThunk());
  }, [dispatch]);

  console.log("productsList:", productsList);

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading...</p>
      ) : productsList ? ( // Check if productsList is defined
        productsList.length > 0 ? (
          <div>
            <p>Products:</p>
            <div className="row mt-3">
              {productsList.map((product) => (
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
        ) : (
          <p>No Products</p>
        )
      ) : (
        <p>No Products</p>
      )}
    </div>
  );
};

export default Products;

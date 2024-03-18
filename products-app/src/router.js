import { Outlet, createBrowserRouter } from "react-router-dom";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
const router = createBrowserRouter([
  {
    path: "products",
    element: <Products></Products>,
  },
  {
    path: "products/:productID",
    element: <ProductDetails></ProductDetails>,
  },
]);

export default router;

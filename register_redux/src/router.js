import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Form from "./Pages/Form";
import UserDetails from "./Pages/UserDetails";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Form></Form>,
      },
      {
        path: "userdata",
        element: <UserDetails></UserDetails>,
      },
    ],
  },
]);

export default router;

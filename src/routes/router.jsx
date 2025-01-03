import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import Detail from "../pages/Detail/Detail";
import AddServices from "../pages/AddServices/AddServices";
import Booked from "../pages/Booked/Booked";
import Manage from "../pages/Manage/Manage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <div>error</div>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/all",
          element: <AllServices></AllServices>,
        },
        {
          path: "/detail",
          element: <Detail></Detail>,
        },
        {
          path: "/add",
          element: <AddServices></AddServices>,
        },
        {
          path: "/book",
          element: <Booked></Booked>,
        },
        {
          path: "/manage",
          element: <Manage></Manage>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
  ]);

  export default router;
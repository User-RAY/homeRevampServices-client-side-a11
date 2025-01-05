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
import ToDo from "../pages/ToDo/ToDo";
import PrivateRoute from "./PrivateRoute";

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
          path: "/services/:id",
          element: <PrivateRoute><Detail></Detail></PrivateRoute> ,
        },
        {
          path: "/add",
          element: <PrivateRoute><AddServices></AddServices></PrivateRoute> ,
        },
        {
          path: "/book",
          element: <PrivateRoute><Booked></Booked></PrivateRoute> ,
        },
        {
          path: "/manage",
          element: <PrivateRoute><Manage></Manage></PrivateRoute> ,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/todo",
          element: <PrivateRoute><ToDo></ToDo></PrivateRoute> ,
        },
      ],
    },
  ]);

  export default router;
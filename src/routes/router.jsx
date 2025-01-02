import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import Detail from "../pages/Detail/Detail";
import AddServices from "../pages/AddServices/AddServices";
import Booked from "../pages/Booked/Booked";

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
      ],
    },
  ]);

  export default router;
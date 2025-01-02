import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllServices from "../pages/AllServices/AllServices";
import Detail from "../pages/Detail/Detail";

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
      ],
    },
  ]);

  export default router;
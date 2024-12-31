import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllServices from "../pages/AllServices/AllServices";

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
          element: <h1>detail page</h1>,
        },
      ],
    },
  ]);

  export default router;
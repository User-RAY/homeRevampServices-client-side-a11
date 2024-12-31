import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

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
      ],
    },
  ]);

  export default router;
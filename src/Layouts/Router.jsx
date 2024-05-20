import { createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "../Pages/Home/Home/Home";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

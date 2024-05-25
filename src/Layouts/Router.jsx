import { createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "../Pages/Home/Home/Home";
import Ourmenu from "../Pages/OurMenu/Ourmenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import ShopCard from "../Pages/OurShop/ShopCard/ShopCard";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Ourmenu></Ourmenu>,
      },
      {
        path: "/shop/:category",
        element: <OurShop></OurShop>,
      },
      // {
      //   path: '/shop',
      //   element:<ShopCard></ShopCard>
      // }
    ],
  },
]);

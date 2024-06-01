import { createBrowserRouter } from "react-router-dom";
import Layouts from "./Layouts";
import Home from "../Pages/Home/Home/Home";
import Ourmenu from "../Pages/OurMenu/Ourmenu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";
import ShopCard from "../Pages/OurShop/ShopCard/ShopCard";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import DasboardHome from "../Pages/Dashboard/Dashboard/DasboardHome";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Reservation from "../Pages/Dashboard/resservation/Reservation";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Review from "../Pages/Dashboard/Review/Review";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import MyBooking from "../Pages/Dashboard/Mybooking/MyBooking";
import Private from "../Provider/Private/Private";
import Alluser from "../Pages/Dashboard/MangaeUser/AllUser/Alluser";

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
    ],
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
    path: "/dashboard",
    element: (
      <Private>
        <DasboardHome></DasboardHome>
      </Private>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "/dashboard/userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/review",
        element: <Review></Review>,
      },
      {
        path: "/dashboard/payment",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/booking",
        element: <MyBooking></MyBooking>,
      },
      {
        path: "/dashboard/allusers",
        element: <Alluser></Alluser>,
      },
    ],
  },
]);

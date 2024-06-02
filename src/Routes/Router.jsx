import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import PetListing from "../pages/Pet listing/PetListing";
import DonationCamp from "../pages/Donation/DonationCamp";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/pet-listing",
          element: <PetListing></PetListing>
        },
        {
          path: "/donation-camp",
          element:<DonationCamp></DonationCamp>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router;
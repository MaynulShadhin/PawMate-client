import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import PetListing from "../pages/Pet listing/PetListing";
import DonationCamp from "../pages/Donation/DonationCamp";

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
        }
      ]
    },
  ]);

  export default router;
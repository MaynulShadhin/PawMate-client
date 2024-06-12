import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import PetListing from "../pages/Pet listing/PetListing";
import DonationCamp from "../pages/Donation/DonationCamp";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import PetsByCategory from "../pages/Home/Components/Pet Category/PetsByCategory";
import PetDetails from "../pages/Pet listing/Components/PetDetails";
import DonationDetails from "../pages/Donation/Component/DonationDetails";
import Dashboard from "../layouts/Dashboard";
import AddPet from "../pages/Dashboard/AddPet/AddPet";
import PrivateRoute from "./Private Routes/PrivateRoute";
import MyAddedPet from "../pages/Dashboard/MyAddedPet/MyAddedPet";
import UpdatePet from "../pages/Dashboard/UpdatePet/UpdatePet";
import Users from "../pages/Dashboard/Users/Users";
import AdminRoutes from "./Admin Routes/AdminRoutes";
import AddDonation from "../pages/Dashboard/Add Donation/AddDonation";
import MyCamps from "../pages/Dashboard/My Donation Camp/MyCamps";
import UpdateCamp from "../pages/Dashboard/UpdateCamp/UpdateCamp";
import MyDonations from "../pages/Dashboard/My donations/MyDonations";
import AdoptionReq from "../pages/Dashboard/Adoption Requests/AdoptionReq";
import AllPets from "../pages/Dashboard/All Pets/AllPets";
import AllDonations from "../pages/Dashboard/All Donations/AllDonations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category/:categoryName",
        element: <PetsByCategory></PetsByCategory>
      },
      {
        path: "/pet-listing",
        element: <PetListing></PetListing>
      },
      {
        path: "/petDetails/:id",
        element: <PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/pet/${params.id}`)
      },
      {
        path: "/donation-camp",
        element: <DonationCamp></DonationCamp>
      },
      {
        path: "/donationDetails/:id",
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/donation-camp/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // admin routes
      {
        path: 'users',
        element: <PrivateRoute><AdminRoutes><Users></Users></AdminRoutes></PrivateRoute>
      },
      {
        path: 'allPets',
        element: <PrivateRoute><AdminRoutes><AllPets></AllPets></AdminRoutes></PrivateRoute>
      },
      {
        path: 'allDonations',
        element: <PrivateRoute><AdminRoutes><AllDonations></AllDonations></AdminRoutes></PrivateRoute>
      },

      // all routes
      {
        path: 'addPet',
        element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
      },
      {
        path: 'myPets',
        element: <PrivateRoute><MyAddedPet></MyAddedPet></PrivateRoute>
      },
      {
        path: 'updatePet/:id',
        element: <PrivateRoute><UpdatePet></UpdatePet></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/pet/${params.id}`)
      },
      {
        path: 'createCampaign',
        element: <PrivateRoute><AddDonation></AddDonation></PrivateRoute>
      },
      {
        path: 'myCampaigns',
        element: <PrivateRoute><MyCamps></MyCamps></PrivateRoute>
      },
      {
        path: 'updateCamp/:id',
        element: <PrivateRoute><UpdateCamp></UpdateCamp></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/donation-camp/${params.id}`)
      },
      {
        path: 'myDonations',
        element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>
      },
      {
        path: 'adoptionRequests',
        element: <PrivateRoute><AdoptionReq></AdoptionReq></PrivateRoute>
      }
    ]
  }
]);

export default router;
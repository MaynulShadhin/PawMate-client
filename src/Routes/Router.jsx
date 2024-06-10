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
        path: "/pets/:category",
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

      // all routes
      {
        path: 'addPet',
        element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
      },
      {
        path: 'myPets',
        element: <MyAddedPet></MyAddedPet>
      },
      {
        path: 'updatePet/:id',
        element: <UpdatePet></UpdatePet>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/pet/${params.id}`)
      },
      {
        path: 'createCampaign',
        element: <AddDonation></AddDonation>
      }
    ]
  }
]);

export default router;
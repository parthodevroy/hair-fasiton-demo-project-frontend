
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound"
import ServicesSection from "../Pages/servicesSection/ServicesSection";
import ServiceDetails from "../Pages/servicesDetails/ServicesDetails";
import Gallary from "../Pages/gallary/Gallary";
import ContactUs from "../Pages/contactUS/ContactUs";
import Team from "../Pages/ourTeam/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    
    errorElement: <NotFound />, 
    children: [
      { path: "/", element: <Home /> },
      {path:"service",element:<ServicesSection/>},
      {path:"service/:id",element:<ServiceDetails/>},
      {path:"gallary",element:<Gallary/>},
      {path:"contact",element:<ContactUs/>},
      {path:"team",element:<Team/>},


     
      { path: "*", element: <NotFound /> } 
    ],
  },
]);
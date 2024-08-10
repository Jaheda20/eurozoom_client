import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Vehicles from "../Pages/Products/Vehicles";
import VehicleDetails from "../Pages/Products/VehicleDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/contact",
            element: <Contact></Contact>
        },
        {
          path: "/vehicles",
          element: <Vehicles></Vehicles>
        }        
      ]
    },
    {
      path: "/vehicle/:id",
      element: <VehicleDetails></VehicleDetails>,
      loader: ()=>fetch('/vehicle.json')
    }
  ]);

export default router;
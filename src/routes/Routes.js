import { createBrowserRouter } from "react-router-dom";
import Additem from "../components/addItem/Additem";
import CartDetails from "../components/details/CartDetails";
import Dashbord from "../components/Home/dashbord/Dashbord";
import Home from "../components/Home/Home";
import Main from "../lyout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/dashbord',
                element: <Dashbord />
            },
            {
                path: '/details',
                element: <CartDetails />
            },
            {
                path: '/additem',
                element: <Additem />
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Additem from "../components/addItem/Additem";
import UpdateItem from "../components/addItem/UpdateItem";
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
                path: '/details/:id',
                element: <CartDetails />,
                loader: ({params})=> fetch(`https://content-management-server-eight.vercel.app/items/${params.id}`)              
            },
            {
                path: '/additem',
                element: <Additem />
            },
            {
                path: '/updateitem/:id',
                element: <UpdateItem />,
                loader: ({params})=> fetch(`https://content-management-server-eight.vercel.app/items/${params.id}`) 
            }
        ]
    }
])
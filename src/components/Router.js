import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import AboutClass from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Body from "./Body";
import Cart from "./Cart";
import RestaurantDetails from "./RestaurantDetails";
import CounterClass from "./CounterClass";

const apiRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <AboutClass/>
            },
            {
                path: '/contact',
                element: <Contact/> 
            },
            {
                path: '/cart',
                element: <Cart/> 
            },
            {
                path: '/counter',
                element: <CounterClass/>
            },
            {
                path: '/restaurant/:restaurantId',
                element: <RestaurantDetails/>
            }
        ]
    }
])

export default apiRoutes
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const apiRoutes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/> 
    }
])

export default apiRoutes
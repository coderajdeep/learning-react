import ReactDOM from "react-dom/client";
import apiRoutes from "./components/Router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={apiRoutes}/>);
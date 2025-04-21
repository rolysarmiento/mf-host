import { createBrowserRouter } from "react-router-dom";
//import Login from 'mf_login/login';
import Host from "../features/home/Home";
import Prueba from "../components/Prueba";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Prueba />,
    },
    {
        path: "/home/",
        element: <Host />,
    }
]);

export default Router;

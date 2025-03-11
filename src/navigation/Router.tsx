import { createBrowserRouter } from "react-router-dom";
import Login from 'mf_login/login';
import Host from "../features/home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/home/",
        element: <Host />,
    }
]);

export default Router;

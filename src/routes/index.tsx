import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "../layouts/MainLayout";
import Maintenance from "../pages/Maintenance";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // { index: true, element: <Home /> },
            { index: true, element: <Maintenance /> },
            { path: "about", element: <About /> },
        ],
    },
]);

import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { AppLayout } from "./layouts/App";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [{ path: '/home', element: <Home /> }]
    }
])
import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { AppLayout } from "./layouts/App";
import { Home } from "./pages/Home";
import { Schedules } from "./pages/Schedules";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/',
        element: <AppLayout />,
        children: [{ path: '/home', element: <Home /> }, { path: '/schedules', element: <Schedules /> }]
    }
])
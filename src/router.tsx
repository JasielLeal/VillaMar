import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { AppLayout } from "./layouts/App";
import { Home } from "./pages/Home";
import { Reservas } from "./pages/Reservas";
import { ReservasDia } from "./pages/ReservasDia";
import { Users } from "./pages/Users";
import { Financas } from "./pages/Financas";
import { PrivateRoutes } from "./privateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/",
        element: <PrivateRoutes >
            <AppLayout />
        </PrivateRoutes>,
        children: [
            { path: "/home", element: <Home />, },
            { path: "/reservas", element: <Reservas /> },
            { path: "/reservas/:day", element: <ReservasDia /> },
            { path: "/users", element: <Users /> },
            { path: "/financas", element: <Financas /> },
        ],
    },
]);





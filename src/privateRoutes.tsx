import { Navigate } from "react-router-dom"
import Cookies from "universal-cookie"

interface PrivateRoutesProps {
    children: React.ReactNode;
}


export function PrivateRoutes({ children }: PrivateRoutesProps) {

    const token = new Cookies

    const auth = token.get('token')

    return auth ? children : <Navigate to='/' />
}
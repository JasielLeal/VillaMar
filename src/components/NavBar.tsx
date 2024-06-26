import { GoHome } from "react-icons/go";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { NavLink } from "./NavLink";
export function NavBar() {
    return (

        <div className="text-3xl flex items-center justify-around p-3 rounded-t-xl fixed w-full bottom-0 border-t text-slate-800 bg-white">
            <NavLink to='/home'><GoHome /></NavLink>
            <NavLink to='/reservas'><RiCalendarScheduleLine /></NavLink>
            <NavLink to='/users'><FiUser /></NavLink>
            <NavLink to='/financas'><IoRocketOutline /></NavLink>
        </div>

    )
}
import { Link, LinkProps, useLocation } from "react-router-dom";


export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {

    const {pathname} = useLocation()

    return (
        <>
            <Link 
            data-current={pathname=== props.to}
            {...props}
            className=" flex items-center p-2 rounded-lg data-[current=true]:text-primary "
            />         
        </>
    )
}
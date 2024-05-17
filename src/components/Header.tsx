
import logo from '@/assets/logo2.png'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md";

export function Header() {
    return (
        <div className='px-5 py-2'>
            <div className="flex items-center justify-between pt-5">
                <img src={logo} alt="logo do site" className='w-36' />
                <div className='flex'>
                    <DropdownMenu>
                        <DropdownMenuTrigger className='flex items-center font-semibold text-slate-800'>Jasiel <MdKeyboardArrowDown /></DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Configurações</DropdownMenuItem>
                            <DropdownMenuItem className='text-red-500'>Sair</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}
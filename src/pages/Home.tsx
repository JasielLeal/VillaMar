import logo from '@/assets/logo.png'
import { LucroTotal } from '@/components/LucroTotal';
import { ReservasTotal } from '@/components/ReservasTotal';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdKeyboardArrowDown } from "react-icons/md";
export function Home() {
    return (
        <div className="px-5 bg-slate-50 w-full h-screen">
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
            <p className="text-slate-800 font-semibold mb-5 mt-10">Dashboard</p>
            <LucroTotal />
            <ReservasTotal />
        </div>
    )
}
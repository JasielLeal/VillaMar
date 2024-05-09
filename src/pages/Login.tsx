import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { IoArrowForwardOutline } from "react-icons/io5";

export function Login() {
    return (
        <div className='w-full flex justify-center h-screen items-center'>
            <div className='w-96 p-5'>
                <div className='flex justify-center mb-10'>
                    <img src={logo} alt="logo do site" className='w-72 flex' />
                </div>

                <div className='flex flex-col gap-3 mb-5'>
                    <Input placeholder='seuemail@email.com' />
                    <Input placeholder='Sua senha' />
                </div>
                <div className='flex items-center gap-4 mb-5'>
                    <Switch id="airplane-mode" />
                    <p className='font-medium'>Manter login</p>
                </div>
                <Button className='w-full flex items-center gap-2'>
                    Entrar <IoArrowForwardOutline />
                </Button>
            </div>
        </div>
    )
}
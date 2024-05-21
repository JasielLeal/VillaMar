import logo from '@/assets/logo2.png'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { LoginSchema } from '@/schemas/LoginSchema';
import { FieldValues, useForm } from 'react-hook-form';
import { IoArrowForwardOutline } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from '@tanstack/react-query';
import { LoginUser } from '@/api/Login/Login';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie'

export function Login() {

    const expiryTime = new Date();
    expiryTime.setTime(expiryTime.getTime() + (8 * 60 * 60 * 1000));
    const navigate = useNavigate()
    const cookie = new Cookies()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema),
        mode: 'all',
        criteriaMode: 'all',
    })

    const { mutateAsync: LoginFn, isPending } = useMutation({
        mutationFn: LoginUser,
        onSuccess: (response) => {
            toast.success("Sucesso");
            cookie.set('token', response.data.token, { expires: expiryTime})
            navigate('/home', { replace: true })
        },
        onError: () => {
            toast.error("Erro durante a autenticação");
        },

    })

    const onSub = async (data: FieldValues) => {
        await LoginFn(data);
    }

    return (
        <div className='w-full flex justify-center h-screen items-center'>
            <div className='w-96 p-5'>
                <form onSubmit={handleSubmit(onSub)}>
                    <div className='flex justify-center mb-10'>
                        <img src={logo} alt="logo do site" className='w-72 flex' />
                    </div>

                    <div className='flex flex-col gap-3 mb-5'>
                        <Input placeholder='seuemail@email.com' {...register('email')} />
                        {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
                        <Input placeholder='Sua senha' {...register('password')} type='password' />
                        {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
                    </div>
                    <div className='flex items-center gap-4 mb-5'>
                        <Switch id="airplane-mode" />
                        <p className='font-medium'>Manter login</p>
                    </div>
                    <Button className='w-full flex items-center gap-2' disabled={isPending}>
                        Entrar <IoArrowForwardOutline />
                    </Button>
                </form>
            </div>
        </div>
    )
}
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { FaRegSquarePlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CriarUsuarioSchema } from "@/schemas/CriarUsuarioSchema";
import { FieldValues, useForm } from "react-hook-form";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CreateUser } from "@/api/CriarUsuario/CriarUsuario";
import { useState } from "react";
export function CriarUsuario() {

    const [modal, setModal] = useState(false)

    const queryClient = useQueryClient()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CriarUsuarioSchema),
        mode: 'all',
        criteriaMode: 'all',
    });

    const { mutateAsync: criarUsuarioFn } = useMutation({
        mutationFn: CreateUser,
        onSuccess: () => {
            toast.success("Sucesso");
            queryClient.invalidateQueries(['GetAllUsers'] as InvalidateQueryFilters)
            setModal(false)
        },
        onError: () => {
            toast.error("E-mail já em uso");
        },

    })

    const onSub = async (data: FieldValues) => {
        await criarUsuarioFn(data)
    }

    function set() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    return (
        <>
            <Dialog open={modal}>
                <DialogTrigger onClick={set}>
                    <Button className="flex items-center gap-2 mt-5 mb-10">Adicionar Usuário <FaRegSquarePlus /></Button>
                </DialogTrigger>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSub)}>
                        <div className="flex items-center">
                            <p className="text-left">Nome</p>
                            {errors.name && <span className="text-red-500">{errors.name.message?.toString()}</span>}
                        </div>
                        <Input placeholder="Nome do usuário" className="mb-2" {...register('name')} />

                        <div className="flex items-center">
                            <p className="text-left">Sobrenome</p>
                            {errors.secondName && <span className="text-red-500">{errors.secondName.message?.toString()}</span>}
                        </div>
                        <Input placeholder="Sobrenome" className="mb-2"{...register('secondName')} />

                        <div className="flex items-center">
                            <p className="text-left">Email</p>
                            {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
                        </div>
                        <Input placeholder="Email" className="mb-2"{...register('email')} />

                        <div className="flex items-center">
                            <p className="text-left">Senha</p>
                            {errors.password && <span className="text-red-500">{errors.password.message?.toString()}</span>}
                        </div>
                        <Input placeholder="Digite a senha" className="mb-2"{...register('password')} type="password" />

                        <div className="flex items-center">
                            <p className="text-left">Cargo</p>
                            {errors.isOwner && <span className="text-red-500">{errors.isOwner.message?.toString()}</span>}
                        </div>
                        <div className="flex border p-2 rounded-sm mb-2">
                            <select className="text-left w-full" {...register('isOwner')}>
                                <option value="Admin">Admin</option>
                                <option value="Owner">Owner</option>
                            </select>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <Button className="w-full">Criar reserva</Button>
                            <Button className="w-full" onClick={closeModal} variant={'outline'}>Fechar</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

        </>
    )
}
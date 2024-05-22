import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CriarDispesaSchema } from "@/schemas/CriarDispesaSchema";
import { formatCurrencye } from "@/utils/Utils";
import { criarDespesa } from "@/api/CriarDespesa/CriarDespesa";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

export function CriarDespesa() {

    const [modal, setModal] = useState(false)
    const queryClient = useQueryClient()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: zodResolver(CriarDispesaSchema),
        mode: 'all',
        criteriaMode: 'all',
    });

    function set() {
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    const { mutateAsync: criarDespesaFn, isPending } = useMutation({
        mutationFn: criarDespesa,
        onSuccess: () => {
            toast.success("Sucesso");
            queryClient.invalidateQueries(['TotalDispesas'] as InvalidateQueryFilters)
            setModal(false)
        },
        onError: () => {
            toast.error("Erro durante a autenticação");
        },

    })

    const onSub = async (data: FieldValues) => {
        await criarDespesaFn(data)
    }


    const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Remove todos os caracteres que não são números
        const onlyNumbers = value.replace(/[^\d]/g, '');
        // Atualiza o valor formatado no campo de entrada
        setValue('value', formatCurrencye(onlyNumbers));
    };

    return (
        <div>
            <Dialog open={modal}>
                <DialogTrigger onClick={set} asChild>
                    <Button className="flex items-center gap-2">Adicionar Despesa</Button>
                </DialogTrigger>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSub)}>
                        <div className="flex items-center">
                            <p className="text-left">Nome</p>
                            {errors.name && <span className="text-red-500">{errors.name.message?.toString()}</span>}
                        </div>
                        <Input placeholder="Qual foi a dispesa..." className="mb-2" {...register('name')} />

                        <div className="flex items-center">
                            <p className="text-left">Valor</p>
                            {errors.value && <span className="text-red-500">{errors.value.message?.toString()}</span>}
                        </div>
                        <Input placeholder="Digite o valor" className="mb-2"{...register('value')} onChange={handleValueChange} />


                        <div className="flex gap-2 mt-5">
                            <Button className="w-full" disabled={isPending}>Criar dispesa</Button>
                            <Button className="w-full" onClick={closeModal} variant={'outline'} >Fechar</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
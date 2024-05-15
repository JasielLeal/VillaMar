import React, { useState } from "react";
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CriarReservaSchema } from "@/schemas/CriarReservaSchema";
import { formatCPF } from "@/utils/FormatCPF";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { criarReserva } from "@/api/CriarReserva/CriarReserva";
import toast from "react-hot-toast";
import { ptBR } from 'date-fns/locale';

export function CriarReserva() {
    const { day } = useParams();
    const [cpf, setCpf] = useState("");
    const queryClient = useQueryClient()
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(CriarReservaSchema),
        mode: 'all',
        criteriaMode: 'all',
    });

    const { mutateAsync: criarReservaFn, isPending } = useMutation({
        mutationFn: criarReserva,
        onSuccess: () => {
            toast.success("Sucesso");
            queryClient.invalidateQueries(['FindByDay'] as InvalidateQueryFilters)
        },
        onError: () => {
            toast.error("Erro durante a autenticação");
        },

    })

    const onSub = async (data: FieldValues) => {
        // Adicionando um dia à data de checkout para corrigir possíveis diferenças de fuso horário
        const checkoutDate = new Date(data.checkOut);
        checkoutDate.setDate(checkoutDate.getDate() + 1);

        // Formatação de checkIn e checkOut
        const checkInFormatted = format(new Date(day as string), "dd/MM/yyyy", { locale: ptBR });
        const checkOutFormatted = format(checkoutDate, "dd/MM/yyyy", { locale: ptBR });
        let statusBoolean = false
        if(data.status === "true"){
            statusBoolean = true
        }
        // Adicionando as datas formatadas ao objeto de dados
        const inData = { ...data, checkIn: checkInFormatted, checkOut: checkOutFormatted, status: statusBoolean };

        // Chamada da função de criar reserva
        await criarReservaFn(inData)
    }

    function HandleFormatCPF(event: React.ChangeEvent<HTMLInputElement>) {
        const formattedCpf = formatCPF(event.target.value);
        setCpf(formattedCpf);
    }

    return (
        <>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Criar reserva</DialogTitle>
                    <form onSubmit={handleSubmit(onSub)}>
                        <p className="text-left">Nome</p>
                        <Input placeholder="Nome do cliente" className="mb-2" {...register('name')} />
                        {errors.name && <span className="text-red-500">{errors.name.message?.toString()}</span>}
                        <p className="text-left">CPF</p>
                        <Input placeholder="CPF do cliente" className="mb-2" value={cpf} {...register('cpf')} onChange={HandleFormatCPF} />
                        {errors.cpf && <span className="text-red-500">{errors.cpf.message?.toString()}</span>}
                        <p className="text-left">Quarto</p>
                        <div className="flex border p-2 rounded-sm mb-2">
                            <select className="text-left w-full" {...register('roomName')}>
                                <option value="Quarto 1">Quarto 1</option>
                                <option value="Quarto 2">Quarto 2</option>
                                <option value="Quarto 3">Quarto 3</option>
                                <option value="Quarto 4">Quarto 4</option>
                                <option value="Quarto 5">Quarto 5</option>
                                <option value="Quarto 6">Quarto 6</option>
                                <option value="Quarto 7">Quarto 7</option>
                                <option value="Quarto 8">Quarto 8</option>
                            </select>
                        </div>
                        <p className="text-left">Check-In</p>
                        <Input placeholder={format(day as string, "dd'/'MM'/'yyyy")} className="mb-2" disabled={true} value={format(day as string, "dd'/'MM'/'yyyy")} />
                        <p className="text-left">Check-Out</p>
                        <Input placeholder="Check-out" type="date" className="mb-2" {...register('checkOut')} />
                        {errors.checkOut && <span className="text-red-500">{errors.checkOut.message?.toString()}</span>}
                        <p className="text-left">Origem</p>
                        <Input placeholder="WhatsApp, Booking, etc..." className="mb-2" {...register('FromWhere')} />
                        {errors.FromWhere && <span className="text-red-500">{errors.FromWhere.message?.toString()}</span>}
                        <p className="text-left">Valor</p>
                        <Input placeholder="Valor da reserva" className="mb-2" {...register('value')} />
                        {errors.value && <span className="text-red-500">{errors.value.message?.toString()}</span>}
                        <p className="text-left">Status do pagamento</p>
                        <div className="flex border p-2 rounded-sm mb-2">
                            <select className="text-left w-full" {...register('status')}>
                                <option value="false">Pendente</option>
                                <option value="true">Pago</option>
                            </select>
                        </div>
                        <Button className="w-full" disabled={isPending}>Criar reserva</Button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </>
    )
}
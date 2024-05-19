import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { formatCPF } from "@/utils/FormatCPF";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateStatus } from "@/api/UpdateStatus/UpdateStatus";
import toast from "react-hot-toast";
import { FaRegTrashCan } from "react-icons/fa6";
import { DeleteReserve } from "@/api/DeleteReserve/DeleteReserve";

interface DetalhesDaReservaDTO {
    reserva: {
        id: string
        name: string
        cpf: string;
        status: boolean;
        roomName: string;
        checkIn: Date
        checkOut: Date
        value: string
        FromWhere: string
        createdAt: Date
        userId: string
        userName: string
        statusReseva: string
    }
}

export interface Reserva {
    id: string
    name: string
    cpf: string;
    status: boolean;
    roomName: string;
    checkIn: Date
    checkOut: Date
    value: string
    FromWhere: string
    createdAt: Date
    userId: string
    userName: string
    statusReseva: string
}

export function DetalhesDaReserva({ reserva }: DetalhesDaReservaDTO) {

    const queryClient = useQueryClient()

    const { mutateAsync: UpdateStatusFn } = useMutation({
        mutationFn: UpdateStatus,
        onSuccess: () => {
            toast.success("Sucesso");
            queryClient.invalidateQueries(['FindByDay'] as InvalidateQueryFilters)
        },
        onError: () => {
            toast.error("Erro durante a autenticação");
        },
    })

    const { mutateAsync: DeleteReserveFn } = useMutation({
        mutationFn: DeleteReserve,
        onSuccess: () => {
            toast.success("Sucesso");
            queryClient.invalidateQueries(['FindByDay'] as InvalidateQueryFilters)
        },
        onError: () => {
            toast.error("Erro ao deletar reserva");
        },
    })


    return (
        <div className="grid grid-cols-9 w-full gap-6 items-start">
            <AccordionItem value={reserva.id} className="col-span-8">
                <AccordionTrigger>
                    <div className="flex flex-col text-left ">
                        <p>{reserva.name}</p>
                        <p className="text-xs">{reserva.roomName}</p>
                    </div>

                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-10">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">CPF:</p>
                            <p>{formatCPF(reserva.cpf)}</p>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">CheckIn:</p>
                            <p>{format(reserva.checkIn, "dd'/'LL'/'y")}</p>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">CheckOut:</p>
                            <p>{format(reserva.checkOut, "dd'/'LL'/'y")}</p>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">Quarto:</p>
                            <p>{reserva.roomName}</p>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">Origem:</p>
                            <p>{reserva.FromWhere}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">Pagamento:</p>
                            <p>
                                {reserva.status ? <Badge variant="default" className="bg-green-500">Confirmado</Badge> : <Badge variant="default" className="bg-red-500">Pendente</Badge>}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">Status da Reserva:</p>
                            <p>
                                {reserva.statusReseva == 'Finalizado' ? <Badge className="bg-green-500">Finalizado</Badge> : <Badge>Reservado</Badge>}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold">Criado por:</p>
                            <p>
                                {reserva.userName}
                            </p>
                        </div>
                        {reserva.statusReseva == 'Finalizado' ?
                            <Button disabled={true} className="w-full mt-5" onClick={async () => {
                                await UpdateStatusFn(reserva.id)
                            }}>Finalizado
                            </Button>
                            :
                            <Button disabled={false} className="w-full mt-5" onClick={async () => {
                                await UpdateStatusFn(reserva.id)
                            }}>Finalizar</Button>}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <button className="text-red-500 cols-span-1 absolute right-5 mt-7"
                onClick={async () => {
                    await DeleteReserveFn(reserva?.id)
                }
                }>
                <FaRegTrashCan />
            </button>
        </div>
    )
}
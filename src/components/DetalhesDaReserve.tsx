import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { format } from "date-fns";
import { formatCPF } from "@/utils/FormatCPF";

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
}

export function DetalhesDaReserva({ reserva }: DetalhesDaReservaDTO) {

    return (
        <>
            <AccordionItem value={reserva.id}>
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
                            <p className="font-semibold">Criado por:</p>
                            <p>
                                {reserva.userName}
                            </p>
                        </div>
                        <Button className="w-full mt-5">Finalizar</Button>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </>
    )
}
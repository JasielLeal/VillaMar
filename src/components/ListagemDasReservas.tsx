import { useQuery } from "@tanstack/react-query";
import { FindByDay, FindByDayRequest } from "@/api/FindByDay/FindByDay";
import { useParams } from "react-router-dom";
import { DetalhesDaReserva, Reserva } from "./DetalhesDaReserve";
import { Accordion } from "./ui/accordion";
import { IoRocket } from "react-icons/io5";
import { Button } from "./ui/button";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { useEffect, useState } from "react";
import { CriarReserva } from "./CriarReserva";
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"


export function ListagemDasReservas() {

    const { day } = useParams()

    const { data } = useQuery({
        queryKey: ['FindByDay', day],
        queryFn: () => FindByDay({ day } as FindByDayRequest),
    });

    const [reservasCount, setReservasCount] = useState(0);

    useEffect(() => {
        if (data) {
            setReservasCount(data.length);
        }
    }, [data]);

    return (
        <>
            {data?.length === 0 ? (
                <div>
                    <div className="flex justify-end w-full">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="mt-5 mb-5 flex " disabled={reservasCount >= 10}>Adicionar</Button>
                            </DialogTrigger>
                            <CriarReserva />
                        </Dialog>

                    </div>
                    <Alert>
                        <IoRocket className="h-4 w-4" />
                        <AlertTitle>Opss!</AlertTitle>
                        <AlertDescription>
                            Nenhuma reserva cadastrada ainda para este dia.
                        </AlertDescription>
                    </Alert>
                </div>
            ) : (
                <>
                    <div className="flex justify-end w-full">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="mt-5 mb-5 flex " disabled={reservasCount >= 10}>Adicionar</Button>
                            </DialogTrigger>
                            <CriarReserva />
                        </Dialog>
                    </div>
                    {data?.map((reserva: Reserva) => (
                        <Accordion type="single" collapsible={true} className="w-full" key={reserva.id}>
                            <DetalhesDaReserva reserva={reserva} />
                        </Accordion>
                    ))}
                </>
            )}
        </>
    );
}
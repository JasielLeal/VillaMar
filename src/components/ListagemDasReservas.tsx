import { useQuery } from "@tanstack/react-query";
import { FindByDay, FindByDayRequest } from "@/api/FindByDay/FindByDay";
import { useParams } from "react-router-dom";
import { DetalhesDaReserva, Reserva } from "./DetalhesDaReserve";
import { Accordion } from "./ui/accordion";
import { IoRocket } from "react-icons/io5";
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { CriarReserva } from "./CriarReserva";
import { Loader2 } from "lucide-react";



export function ListagemDasReservas() {

    const { day } = useParams()

    const { data } = useQuery({
        queryKey: ['FindByDay', day],
        queryFn: () => FindByDay({ day } as FindByDayRequest),
    });

    return (
        <>
           
            {data?.length === 0 ? (
                <div>
                    <div className="flex justify-end w-full">
                        <CriarReserva />
                    </div>
                    <Alert>
                        <IoRocket className="h-4 w-4" />
                        <AlertTitle><p>Opss!</p></AlertTitle>
                        <AlertDescription>
                            <p> Nenhuma reserva cadastrada ainda para este dia.</p>
                        </AlertDescription>
                    </Alert>
                </div>
            ) : (
                <>
                    <div className="flex justify-end w-full">
                        <CriarReserva />
                    </div>
                    {data?.map((reserva: Reserva) => (
                        <Accordion type="single" collapsible={true} className="w-full" key={reserva.id}>
                            <DetalhesDaReserva reserva={reserva} />
                        </Accordion>
                    ))}
                </>
            )}
             {data ?
                ''
                :
                <div className="flex items-center justify-center col-span-3">
                    <Loader2 className="h-12 w-12 animate-spin text-muted-foreground flex justify-center" />
                </div>
            }
        </>
    );
}
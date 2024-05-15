
import { Link, useParams } from "react-router-dom";
import { ptBR } from 'date-fns/locale';
import { Button } from "@/components/ui/button";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ListagemDasReservas } from "@/components/ListagemDasReservas";
import { format } from "date-fns";

export function ReservasDia() {
    const { day } = useParams();

    return (
        <div className="px-5 pt-10 pb-20">
            <div className="flex items-center w-full justify-between">
                <Button className="text-xl" size={'icon'} asChild>
                    <Link to="/reservas">
                        <MdKeyboardArrowLeft />
                    </Link>
                </Button>
                <div>
                    <h1 className="font-semibold">{format(day as string, "dd'/'MM'/'yyyy")}</h1>
                    <p className="capitalize text-sm">{format(day as string, "EEEE", { locale: ptBR })}</p>
                </div>
            </div>
            <ListagemDasReservas />
        </div>
    );
}

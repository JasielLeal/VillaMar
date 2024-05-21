import { TotalMonthlyAmount } from "@/api/TotalMonthlyAmount/TotalMonthlyAmount";
import { CriarDespesa } from "@/components/CriarDespesa";
import { DispesasTotal } from "@/components/DispesasTotal";
import { Despesa, ListaDeDespesas } from "@/components/ListaDeDespesas";
import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoIosCheckbox, IoMdEye, IoMdEyeOff } from "react-icons/io";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListaDispesas } from "@/api/ListaDispesas/ListaDispesas";

interface Mes {
    nome: string;
    valor: number;
}

export function Financas() {
    const meses: Mes[] = [
        { nome: "Janeiro", valor: 1 },
        { nome: "Fevereiro", valor: 2 },
        { nome: "Março", valor: 3 },
        { nome: "Abril", valor: 4 },
        { nome: "Maio", valor: 5 },
        { nome: "Junho", valor: 6 },
        { nome: "Julho", valor: 7 },
        { nome: "Agosto", valor: 8 },
        { nome: "Setembro", valor: 9 },
        { nome: "Outubro", valor: 10 },
        { nome: "Novembro", valor: 11 },
        { nome: "Dezembro", valor: 12 },
    ];

    const currentMonthIndex = new Date().getMonth(); // 0 = Janeiro, 11 = Dezembro
    const [selectedOption, setSelectedOption] = useState<number>(currentMonthIndex + 1);

    const [visible, setVisible] = useState(false);

    function toggleVisible() {
        setVisible(!visible);
    }

    function handleOptionSelect(option: number) {
        setSelectedOption(option);
    }

    function getMonthNameByValue(value: number): string {
        const mes = meses.find(mes => mes.valor === value);
        return mes ? mes.nome : "";
    }

    const { data } = useQuery({
        queryKey: ["TotalMonthlyAmount", selectedOption],
        queryFn: () => TotalMonthlyAmount({ day: selectedOption }),
    });

    // Incluindo selectedOption como dependência para a consulta ListaDispesas
    const { data: monthDay } = useQuery({
        queryKey: ["ListaDispesas", selectedOption],
        queryFn: () => ListaDispesas({ day: selectedOption })
    });

    return (
        <div className="pb-20 px-5">
            <div className="mt-10">
                <Card className="shadow">
                    <CardHeader className="flex gap-2">
                        <div className="flex w-full justify-between">
                            <p>Total arrecadado (Mês)</p>
                            <div className="text-xl text-primary">
                                <IoIosCheckbox />
                            </div>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            {visible ? (
                                <p className="text-xl">{data}</p>
                            ) : (
                                <div className="bg-slate-100 w-56 h-7 rounded-md"></div>
                            )}
                            {visible ? (
                                <button onClick={toggleVisible}>
                                    <p className="text-xl">
                                        <IoMdEye />
                                    </p>
                                </button>
                            ) : (
                                <button onClick={toggleVisible}>
                                    <p className="text-xl">
                                        <IoMdEyeOff />
                                    </p>
                                </button>
                            )}
                        </div>
                    </CardHeader>
                </Card>
            </div>
            <DispesasTotal data={selectedOption}/>
            <p className="font-semibold text-slate-800 mt-5 mb-3">Lista de Despesas (Mês)</p>
            <div className="flex w-full justify-between grid-cols-2">
                <div className="w-full">
                    <CriarDespesa />
                </div>
                <div className="flex border p-2 rounded-sm mb-2 w-full">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-full">
                            {getMonthNameByValue(selectedOption)}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {meses.map((mes) => (
                                <DropdownMenuItem key={mes.valor} onClick={() => handleOptionSelect(mes.valor)}>
                                    {mes.nome}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            {monthDay?.map((despesa: Despesa) => (
                <ListaDeDespesas despesa={despesa} key={despesa.id} />
            ))}
        </div>
    );
}

import { formatCurrencye } from "@/utils/Utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

export interface Despesas {
    despesa: {
        id: string
        name: string
        userName: string;
        createdAt: Date;
        value: string
    }
}

export interface Despesa {
    id: string
    name: string
    userName: string;
    createdAt: Date;
    value: string
}


export function ListaDeDespesas({ despesa }: Despesas) {
    return (
        <div className="px-5 py-2">
            <div className="my-5">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                        <div className="text-primary">
                            <FaMoneyBillTransfer />
                        </div>
                        <div>
                            <p className="font-semibold">{despesa.name}</p>
                            <p className="text-">{formatCurrencye(despesa.value)}</p>
                        </div>
                    </div>
                    <div>
                        <button >
                            <PiDotsThreeOutlineVerticalFill />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-slate-600 text-sm mt-3 capitalize">{format(despesa.createdAt, "EEEE', 'd 'De' LLLL", { locale: ptBR })}</p>
                    <p className="text-slate-600 text-sm mt-3">Criado por <strong>{despesa.userName}</strong></p>
                </div>
            </div>
        </div>
    )
}
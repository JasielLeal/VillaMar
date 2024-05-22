import { DeleteDespesa } from "@/api/DeleteDespesa/DeleteDespesa";
import { formatCurrencye } from "@/utils/Utils";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import toast from "react-hot-toast";
import { FaMoneyBillTransfer, FaRegTrashCan } from "react-icons/fa6";


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

    const queryClient = useQueryClient()

    const { mutateAsync: deleteDespesaFn, isPending } = useMutation({
        mutationFn: DeleteDespesa,
        onSuccess: () => {
            toast.success("Sucesso");
            queryClient.invalidateQueries(['TotalDispesas'] as InvalidateQueryFilters)
        },
        onError: () => {
            toast.error("Erro durante a execução");
        },


    })

    return (

        <>

            <div className="px-5 py-2">
                <div className="my-5">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-5">
                            <div className="text-primary" >
                                <FaMoneyBillTransfer />
                            </div>
                            <div>
                                <p className="font-semibold">{despesa.name}</p>
                                <p className="text-">{formatCurrencye(despesa.value)}</p>
                            </div>
                        </div>
                        <div>
                            <button className="text-red-500" disabled={isPending} onClick={async () => {
                                await deleteDespesaFn(despesa.id)
                            }}>
                                <FaRegTrashCan />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-slate-600 text-sm mt-3 capitalize">{format(despesa.createdAt, "EEEE', 'd 'De' LLLL", { locale: ptBR })}</p>
                        <p className="text-slate-600 text-sm mt-3">Criado por <strong>{despesa.userName}</strong></p>
                    </div>
                </div>
            </div>

        </>
    )
}
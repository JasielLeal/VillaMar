import { DeleteUser } from "@/api/DeleteUser/DeleteUser";
import { Badge } from "./ui/badge";
import { FaRegTrashCan } from "react-icons/fa6";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export interface Users {
    user: {
        id: string;
        name: string;
        secondName: string;
        email: string;
        isOwner: string;
    };
}

export interface User {
    id: string;
    name: string;
    secondName: string;
    email: string;
    isOwner: string;
}

export function ListagemDeUsuarios({ user }: Users) {
    const queryClient = useQueryClient();

    const { mutateAsync: DeleteUserFn } = useMutation({
        mutationFn: DeleteUser,
        onSuccess: () => {
            toast.success("Sucesso");
            queryClient.invalidateQueries(['GetAllUsers'] as InvalidateQueryFilters);
        },
        onError: () => {
            toast.error("Erro ao deletar usuário");
        },
    });

    return (
        <div className="flex items-center justify-between mb-8">
            <div>
                <p className="text-slate-800 font-semibold flex gap-2">
                    <span>{user.name} {user.secondName}</span>
                    <Badge>{user.isOwner}</Badge>
                </p>
                <p className="text-slate-500 text-sm">{user.email}</p>
            </div>
            <div>
                <button
                    className="text-red-500"
                    onClick={async () => {
                        await DeleteUserFn(user?.id);
                    }}
                >
                    <FaRegTrashCan />
                </button>
            </div>
        </div>
    );
}

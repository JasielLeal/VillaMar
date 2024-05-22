import { GetAllUsers } from "@/api/GetAllUsers/GetAllUsers";
import { CriarUsuario } from "@/components/CriarUsuario";
import { ListagemDeUsuarios, User } from "@/components/ListagemDeUsuarios";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";



export function Users() {

    const { data } = useQuery({
        queryKey: ['GetAllUsers'],
        queryFn: GetAllUsers,
    });

    return (
        <div className="px-5">
            <div>
                <p className="text-slate-800 font-semibold pt-10 text-xl">Usuários</p>
                <p className="text-sm text-slate-800">Lista de usuários cadastrados</p>
            </div>

            <div>
                <CriarUsuario />
            </div>

            {data ?
                data?.map((user: User) => (
                    <ListagemDeUsuarios user={user} key={user.id} />
                ))
                :
                <div className="flex h-[240px] items-center justify-center col-span-3">
                    <Loader2 className="h-12 w-12 animate-spin text-muted-foreground flex justify-center" />
                </div>
            }

            { }
        </div>
    )
}
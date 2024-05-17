import { GetAllUsers } from "@/api/GetAllUsers/GetAllUsers";
import { ListagemDeUsuarios, User } from "@/components/ListagemDeUsuarios";
import { useQuery } from "@tanstack/react-query";


export function Users() {

    const { data } = useQuery({
        queryKey: ['GetAllUsers'],
        queryFn: GetAllUsers,
    });

    return (
        <div className="px-5">
            <p className="text-slate-800 font-semibold pt-10 text-xl">Usuários</p>
            <p className="mb-10 text-sm text-slate-800">Lista de usuários cadastrados</p>

            {data?.map((user: User) => (
                <ListagemDeUsuarios user={user} key={user.id}/>
            ))}
        </div>
    )
}
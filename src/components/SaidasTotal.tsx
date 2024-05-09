import {
    Card,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Separator } from "./ui/separator"
import { MdOutlineMoneyOff } from "react-icons/md";
export function SaidasTotal() {
    return (
        <>
            <div className="mt-10">

                <Card className=" shadow">
                    <CardHeader className="flex gap-2">
                        <CardDescription className="flex items-center justify-between">
                            Saidas (Mês)
                            <div className="text-xl text-primary">
                                <MdOutlineMoneyOff />
                            </div>
                        </CardDescription>
                        <Separator />
                        <p className="mt-5 text-slate-800">R$ -2.345,24</p>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}
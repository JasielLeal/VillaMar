import {
    Card,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Separator } from "./ui/separator"
import { IoIosCheckbox } from "react-icons/io";

export function ReservasTotal() {
    return (
        <div className="mt-10">
           
            <Card className=" shadow">
                <CardHeader className="flex gap-2">
                    <CardDescription className="flex items-center justify-between">
                        Reservas (Mês)
                        <div className="text-xl text-primary">
                            <IoIosCheckbox />
                        </div>
                    </CardDescription>
                    <Separator />
                    <p className="mt-5">17</p>
                </CardHeader>
            </Card>
        </div>
    )
}
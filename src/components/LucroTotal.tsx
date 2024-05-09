import {
    Card,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Separator } from "./ui/separator"
import { MdAttachMoney } from "react-icons/md";

export function LucroTotal() {
    return (
        <>
            <div>
                <Card className=" shadow">
                    <CardHeader className="flex gap-2">
                        <CardDescription className="flex items-center justify-between">
                            Total Recebido (Mês)
                            <div className="text-xl text-primary">
                                <MdAttachMoney />
                            </div>
                        </CardDescription>
                        <Separator />
                        <p className="mt-5">
                            R$ 7.645,46
                        </p>
                    </CardHeader>
                </Card>
            </div>
        </>
    )
}
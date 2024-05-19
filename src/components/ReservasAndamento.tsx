import {
    Card,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Separator } from "./ui/separator"
import { IoIosCheckbox } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { TotalConfirmedReservations } from "@/api/TotalConfirmedReservations/TotalConfirmedReservations";
export function ReservasAndamento() {

    const [visible, setVisible] = useState(false)

    function toggleVisible() {
        setVisible(!visible)
    }

    const { data } = useQuery({
        queryKey: ['TotalConfirmedReservations'],
        queryFn: TotalConfirmedReservations,
    });

    return (
        <div className="">

            <Card className=" shadow">
                <CardHeader className="flex gap-2">
                    <CardDescription className="flex items-center justify-between">
                        Reservas Realizadas (Mês)
                        <div className="text-xl text-primary">
                            <IoIosCheckbox />
                        </div>
                    </CardDescription>
                    <Separator />
                    <div className="flex items-center justify-between">
                        {
                            visible ?
                            <p className="text-xl">{data}</p>
                            :
                            <div className="bg-slate-100 w-56 h-7 rounded-md"></div>
                        }
                        {visible ?
                            <button onClick={toggleVisible}>
                                <p className="text-xl">
                                    <IoMdEye />
                                </p>
                            </button>
                            :
                            <button onClick={toggleVisible}>
                                <p className="text-xl">
                                    <IoMdEyeOff />
                                </p>
                            </button>
                        }
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}
import {
    Card,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { IoIosCheckbox } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import { TotalConfirmedReservations } from "@/api/TotalConfirmedReservations/TotalConfirmedReservations";

export function ReservasAndamento() {

    const [visible, setVisible] = useState(false);

    function toggleVisible() {
        setVisible(!visible);
    }

    const { data } = useQuery({
        queryKey: ['TotalConfirmedReservations'],
        queryFn: TotalConfirmedReservations,
    });

    return (
        <div className="">
            <Card className="shadow">
                <CardHeader className="flex flex-col gap-2">

                    <div className="w-full flex justify-between">
                        <div>Reservas Realizadas (Mês)</div>
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
                        <button onClick={toggleVisible} className="text-xl">
                            {visible ? <IoMdEye /> : <IoMdEyeOff />}
                        </button>
                    </div>
                </CardHeader>
            </Card>
        </div>
    );
}

import {
    Card,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "./ui/separator";
import { IoIosCheckbox } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { totalMonthlyBooking } from "@/api/totalMonthlyBooking/totalMonthlyBooking";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

export function ReservasTotal() {

    const [visible, setVisible] = useState(false);

    function toggleVisible() {
        setVisible(!visible);
    }

    const { data } = useQuery({
        queryKey: ['totalMonthlyBooking'],
        queryFn: totalMonthlyBooking,
    });

    return (
        <>
            <Card className="shadow">
                <CardHeader className="flex flex-col gap-2">

                    <div className="flex w-full justify-between">
                        <div>Reservas Finalizadas (Mês)</div>
                        <div className="text-xl text-primary">
                            <IoIosCheckbox />
                        </div>
                    </div>

                    <Separator />
                    <div className="flex items-center justify-between">
                        {visible ? (
                            <div className="text-xl">{data}</div>
                        ) : (
                            <div className="bg-slate-100 w-56 h-7 rounded-md" />
                        )}
                        <button onClick={toggleVisible} className="text-xl">
                            {visible ? <IoMdEye /> : <IoMdEyeOff />}
                        </button>
                    </div>
                </CardHeader>
            </Card>
        </>
    );
}

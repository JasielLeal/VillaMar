import { TotalMonthlyAmount } from "@/api/TotalMonthlyAmount/TotalMonthlyAmount";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoIosCheckbox, IoMdEye, IoMdEyeOff } from "react-icons/io";

export function Financas() {

    const [visible, setVisible] = useState(false)

    function toggleVisible() {
        setVisible(!visible)
    }

    const { data } = useQuery({
        queryKey: ['TotalMonthlyAmount'],
        queryFn: TotalMonthlyAmount,
    });

    return (
        <div className="mt-10 px-5">
            <Card className=" shadow">
                <CardHeader className="flex gap-2">
                    <CardDescription className="flex items-center justify-between">
                        Total arrecadado (Mês)
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
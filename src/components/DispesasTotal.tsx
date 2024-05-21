
import { TotalDispesas } from "@/api/TotalDispesasMensal/TotalDispesasMensal";
import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { MdMoneyOff } from "react-icons/md";
export function DispesasTotal({data}) {

    const [visible, setVisible] = useState(false)

    function toggleVisible() {
        setVisible(!visible)
    }

    const { data: monthDay } = useQuery({
        queryKey: ["TotalDispesas", data],
        queryFn: () => TotalDispesas({ day: data})
    });

    return (
        <div className="mt-10">
            <Card className=" shadow">
                <CardHeader className="flex gap-2">

                    <div className="flex w-full justify-between">
                        <p>Dispesas (Mês)</p>
                        <div className="text-xl text-primary">
                            <MdMoneyOff />
                        </div>
                    </div>

                    <Separator />
                    <div className="flex items-center justify-between">
                        {
                            visible ?
                                <p className="text-xl">{monthDay}</p>
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
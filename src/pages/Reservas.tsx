import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Reservas() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const navigate = useNavigate()

    async function teste(selectedDate: Date | undefined) {
        if (selectedDate) {

            const dateFormat = selectedDate.toISOString()
            console.log(dateFormat)

            navigate(`/reservas/${dateFormat}`)
        }
    }

    return (
        <div className="px-5">
            <p className="text-slate-800 font-semibold pt-10 text-xl">Calendario</p>
            <p className="mb-8 text-sm">Selecione um dia para ver as reservas</p>
            <Calendar
                
                selected={date}
                onSelect={setDate}
                onDayClick={teste}
                className="rounded-md border flex justify-center w-full"
            />
        </div>
    )
}

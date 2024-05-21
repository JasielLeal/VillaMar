import { GraficoDeOndeVemReservas } from '@/components/GraficoDeOndeVemReservas';
import { ReservasAndamento } from '@/components/ReservasAndamento';
import { ReservasTotal } from '@/components/ReservasTotal';

export function Home() {
    return (
        <div className="px-5 w-full pb-20">
            <p className="text-slate-800 font-semibold pt-10 text-xl">Dashboard</p>
            <p className='mb-5 text-sm text-slate-800'>Relatório Mensal</p>
            <div className='mb-5'>
                <ReservasTotal />
            </div>
            <div className='mb-5'>
                <ReservasAndamento />
            </div>
            <GraficoDeOndeVemReservas />
        </div>
    )
}

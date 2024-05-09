
import { LucroTotal } from '@/components/LucroTotal';
import { ReservasTotal } from '@/components/ReservasTotal';
import { SaidasTotal } from '@/components/SaidasTotal';

export function Home() {
    return (
        <div className="px-5 bg-slate-50 w-full h-screen">
            
            <p className="text-slate-800 font-semibold mb-5 pt-10">Dashboard</p>
            <LucroTotal />
            <SaidasTotal/>
            <ReservasTotal />
        </div>
    )
}
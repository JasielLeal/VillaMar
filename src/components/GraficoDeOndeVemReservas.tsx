import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export function GraficoDeOndeVemReservas() {

    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <>
            <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                    <Pie data={data} dataKey='value'/>
                </PieChart>
            </ResponsiveContainer>
        </>
    )
}
import { MonthlyBookingsByChannel } from "@/api/MonthlyBookingsByChannel/MonthlyBookingsByChannel";
import { useQuery } from "@tanstack/react-query";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
export function GraficoDeOndeVemReservas() {

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const { data: grafico } = useQuery({
    queryKey: ['MonthlyBookingsByChannel'],
    queryFn: MonthlyBookingsByChannel,
  });

  interface BookingData {
    company: string;
    value: number;
  }

  return (
    <>
      <p className="text-slate-800 font-semibold text-xl">Reservas por Canal</p>
      <p className="text-muted-foreground text-sm">(Distribuição Mensal)</p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie data={grafico}
            dataKey="value"
            nameKey="company"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            innerRadius={50}
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180
              const radius = 12 + innerRadius + (outerRadius - innerRadius)
              const x = cx + radius * Math.cos(-midAngle * RADIAN)
              const y = cy + radius * Math.sin(-midAngle * RADIAN)

              return (
                <text
                  x={x}
                  y={y}
                  className="fill-muted-foreground text-xs"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                >
                  {grafico[index].company.length > 12
                    ? grafico[index].company.substring(0, 12).concat('...')
                    : grafico[index].company}{' '}
                  ({value})
                </text>
              )
            }}
          >
            {grafico?.map((_: BookingData, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

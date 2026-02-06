import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Seg", sales: 400 },
  { day: "Ter", sales: 600 },
  { day: "Qua", sales: 800 },
  { day: "Qui", sales: 700 },
  { day: "Sex", sales: 1200 },
]

export default function SalesChart() {
  return (
    <div className="bg-white rounded-xl shadow p-4 h-64">
      <h2 className="font-bold mb-2">Vendas da Semana</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#f97316"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

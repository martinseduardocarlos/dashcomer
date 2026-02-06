import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { day: "Seg", sales: 800 },
  { day: "Ter", sales: 1200 },
  { day: "Qua", sales: 950 },
  { day: "Qui", sales: 1400 },
  { day: "Sex", sales: 1800 },
]

export default function SalesChart() {
  return (
    <div className="card">
      <h3>Vendas da Semana</h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

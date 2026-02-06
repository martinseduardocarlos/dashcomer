import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts"

const data = [
  { name: "Pizza", orders: 45 },
  { name: "Hambúrguer", orders: 30 },
  { name: "Bebidas", orders: 60 },
  { name: "Sobremesas", orders: 20 },
]

export default function OrdersChart() {
  return (
    <div className="card">
      <h3>Pedidos por Categoria</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="orders" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

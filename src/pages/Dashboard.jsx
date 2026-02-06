import StatCard from "../components/StatCard"

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Vendas Hoje" value="R$ 1.250,00" />
        <StatCard title="Pedidos" value="87" />
        <StatCard title="Mesas Ocupadas" value="12" />
        <StatCard title="Mesas Livres" value="8" />
      </div>
    </div>
  )
}


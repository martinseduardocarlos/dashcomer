import StatCard from "../components/StatCard"
import TableStatus from "../components/TableStatus"
import SalesChart from "../components/Charts/SalesChart"
import OrdersChart from "../components/Charts/OrdersChart"


export default function Dashboard() {
  return (
    <div className="container">

      <h1 className="title">Dashboard</h1>

      <div className="section">
        <h2 className="section-title">Visão Geral</h2>

        <div className="cards">
          <StatCard title="Vendas Hoje" value="R$ 1.250,00" />
          <StatCard title="Pedidos" value="87" />
          <StatCard title="Mesas Ocupadas" value="12" />
          <StatCard title="Mesas Livres" value="8" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <SalesChart />
  <OrdersChart />
</div>


      <div className="section">
        <h2 className="section-title">Mesas</h2>

        <div className="tables">
          <TableStatus number={1} status="livre" />
          <TableStatus number={2} status="ocupada" />
          <TableStatus number={3} status="livre" />
          <TableStatus number={4} status="ocupada" />
        </div>
      </div>

    </div>
  )
}

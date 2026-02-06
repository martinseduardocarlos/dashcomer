import { topDishes } from "../data/topDishes"

export default function TopDishes() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="font-bold mb-4">Pratos Mais Pedidos</h2>

      <ul className="space-y-2">
        {topDishes.map(dish => (
          <li
            key={dish.id}
            className="flex justify-between border-b pb-1"
          >
            <span>{dish.name}</span>
            <span className="font-semibold">{dish.orders}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

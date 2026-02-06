export default function TableStatus({ number, status }) {
  const isFree = status === "livre"

  return (
    <div
      className={`p-4 rounded-xl text-center font-semibold
      ${isFree ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
    >
      Mesa {number}
      <p className="text-sm">
        {isFree ? "Livre" : "Ocupada"}
      </p>
    </div>
  )
}

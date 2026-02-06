export default function TableStatus({ number, status }) {
  const livre = status === "livre"

  return (
    <div className={`table-box ${livre ? "table-free" : "table-busy"}`}>
      Mesa {number}
      <p>{livre ? "Livre" : "Ocupada"}</p>
    </div>
  )
}

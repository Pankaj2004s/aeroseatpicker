import { SEAT_CATEGORIES } from '../data/seatCategories.js'
import { useSeats } from '../hooks/useSeats.js'
import { formatPrice } from '../utils/formatPrice.js'

function ActiveSeatCard() {
  const { passengers, activePassengerId, assignments, seatsById, removeSeat } = useSeats()
  const passenger = passengers.find((item) => item.id === activePassengerId)
  const seat = seatsById[assignments[activePassengerId]]

  if (!seat) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 p-3 text-sm text-slate-500">
        Pick a seat on the map for {passenger.name}.
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-blue-50 p-3">
      <div>
        <p className="text-xs text-blue-700">{passenger.name}</p>
        <p className="font-semibold text-slate-900">Seat {seat.id}</p>
        <p className="text-xs text-slate-600">
          {SEAT_CATEGORIES[seat.category].label} · {formatPrice(seat.price)}
        </p>
      </div>
      <button
        type="button"
        onClick={() => removeSeat(passenger.id)}
        className="rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
      >
        Remove
      </button>
    </div>
  )
}

export default ActiveSeatCard

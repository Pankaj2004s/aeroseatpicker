import { SEAT_CATEGORIES } from '../data/seatCategories.js'

const CATEGORY_STYLES = {
  standard: 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100',
  premium: 'border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100',
  legroom: 'border-sky-300 bg-sky-50 text-sky-800 hover:bg-sky-100',
}

const STATUS_STYLES = {
  occupied: 'cursor-not-allowed border-slate-200 bg-slate-200 text-slate-400',
  selected: 'border-blue-600 bg-blue-600 text-white shadow-md',
  assigned: 'border-indigo-300 bg-indigo-100 text-indigo-700',
}

function Seat({ seat, status, onSelect }) {
  const isOccupied = status === 'occupied'
  const priceText = seat.price === 0 ? 'Free' : `₹${seat.price}`
  const categoryLabel = SEAT_CATEGORIES[seat.category].label
  const style = STATUS_STYLES[status] ?? CATEGORY_STYLES[seat.category]

  return (
    <button
      type="button"
      disabled={isOccupied}
      onClick={() => onSelect?.(seat)}
      title={isOccupied ? `${seat.id} - Occupied` : `${seat.id} - ${categoryLabel} - ${priceText}`}
      aria-label={`Seat ${seat.id}, ${isOccupied ? 'occupied' : `${categoryLabel}, ${priceText}`}`}
      className={`flex h-9 w-9 items-center justify-center rounded-t-xl rounded-b-md border-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:h-11 sm:w-11 sm:text-sm ${style}`}
    >
      {isOccupied ? '×' : seat.label}
    </button>
  )
}

export default Seat

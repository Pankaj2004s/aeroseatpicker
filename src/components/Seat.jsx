import { SEAT_CATEGORIES } from '../data/seatCategories.js'
import { formatPrice } from '../utils/formatPrice.js'
import { CATEGORY_STYLES, STATUS_STYLES } from './seatStyles.js'

function Seat({ seat, status, onSelect }) {
  const isOccupied = status === 'occupied'
  const priceText = formatPrice(seat.price)
  const categoryLabel = SEAT_CATEGORIES[seat.category].label
  const style = STATUS_STYLES[status] ?? `${CATEGORY_STYLES[seat.category]} hover:brightness-95`

  return (
    <button
      type="button"
      aria-disabled={isOccupied}
      aria-pressed={status === 'selected'}
      onClick={() => onSelect?.(seat)}
      title={isOccupied ? `${seat.id} - Occupied` : `${seat.id} - ${categoryLabel} - ${priceText}`}
      aria-label={`Seat ${seat.id}, ${isOccupied ? 'occupied' : `${categoryLabel}, ${priceText}`}`}
      className={`flex h-8 w-8 items-center justify-center rounded-t-xl rounded-b-md border-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:h-11 sm:w-11 sm:text-sm ${style}`}
    >
      {isOccupied ? '×' : seat.label}
    </button>
  )
}

export default Seat

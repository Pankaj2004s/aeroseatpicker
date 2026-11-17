import { useSeats } from '../hooks/useSeats.js'
import { LAYOUTS } from '../data/layouts.js'
import SeatColumnHeader from './SeatColumnHeader.jsx'
import SeatRow from './SeatRow.jsx'

function SeatMap() {
  const { layoutId, seatRows, assignments, activePassengerId } = useSeats()

  const passengerBySeat = Object.fromEntries(
    Object.entries(assignments).map(([passengerId, seatId]) => [seatId, passengerId]),
  )

  function getSeatStatus(seat) {
    if (seat.isOccupied) return 'occupied'
    const passengerId = passengerBySeat[seat.id]
    if (!passengerId) return 'available'
    return passengerId === activePassengerId ? 'selected' : 'assigned'
  }

  return (
    <section className="mx-auto w-fit max-w-full overflow-x-auto rounded-t-[3rem] rounded-b-2xl border border-slate-200 bg-white px-4 pb-6 pt-10 shadow-sm sm:px-8">
      <SeatColumnHeader groups={LAYOUTS[layoutId].groups} />
      <div className="mt-2 flex flex-col gap-1.5">
        {seatRows.map((row) => (
          <SeatRow key={row.number} row={row} getSeatStatus={getSeatStatus} />
        ))}
      </div>
    </section>
  )
}

export default SeatMap

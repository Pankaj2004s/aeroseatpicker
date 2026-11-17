import { LAYOUTS } from '../data/layouts.js'
import { useSeats } from '../hooks/useSeats.js'
import SeatColumnHeader from './SeatColumnHeader.jsx'
import SeatMapMessage from './SeatMapMessage.jsx'
import SeatMapSkeleton from './SeatMapSkeleton.jsx'
import SeatRow from './SeatRow.jsx'

function SeatMap({ onNotify }) {
  const {
    layoutId,
    loadStatus,
    loadError,
    retryLoad,
    seatRows,
    passengers,
    assignments,
    activePassengerId,
    assignSeat,
    removeSeat,
  } = useSeats()

  if (loadStatus === 'loading') return <SeatMapSkeleton />

  if (loadStatus === 'error') {
    return (
      <SeatMapMessage
        role="alert"
        title="Couldn't load the seat map"
        text={loadError.message}
        actionLabel="Try again"
        onAction={retryLoad}
      />
    )
  }

  if (seatRows.length === 0) {
    return (
      <SeatMapMessage
        title="No seats available"
        text="This flight has no open seats right now. Please check back later."
      />
    )
  }

  const passengerBySeat = Object.fromEntries(
    Object.entries(assignments).map(([passengerId, seatId]) => [seatId, passengerId]),
  )

  function getPassengerName(passengerId) {
    return passengers.find((passenger) => passenger.id === passengerId).name
  }

  function getSeatStatus(seat) {
    if (seat.isOccupied) return 'occupied'
    const passengerId = passengerBySeat[seat.id]
    if (!passengerId) return 'available'
    return passengerId === activePassengerId ? 'selected' : 'assigned'
  }

  function handleSelect(seat) {
    const ownerId = passengerBySeat[seat.id]
    const activeName = getPassengerName(activePassengerId)

    if (seat.isOccupied) {
      onNotify(`Seat ${seat.id} is already occupied`, 'error')
      return
    }

    if (ownerId === activePassengerId) {
      removeSeat(activePassengerId)
      onNotify(`Seat ${seat.id} removed for ${activeName}`, 'info')
      return
    }

    if (ownerId) {
      onNotify(`Seat ${seat.id} is already assigned to ${getPassengerName(ownerId)}`, 'error')
      return
    }

    const previousSeatId = assignments[activePassengerId]
    assignSeat(activePassengerId, seat.id)

    onNotify(
      previousSeatId
        ? `${activeName} moved from ${previousSeatId} to ${seat.id}`
        : `Seat ${seat.id} assigned to ${activeName}`,
      'success',
    )
  }

  return (
    <section className="mx-auto w-fit max-w-full overflow-x-auto rounded-t-[3rem] rounded-b-2xl border border-slate-200 bg-white px-4 pb-6 pt-10 shadow-sm sm:px-8">
      <SeatColumnHeader groups={LAYOUTS[layoutId].groups} />
      <div className="mt-2 flex flex-col gap-1.5">
        {seatRows.map((row) => (
          <SeatRow
            key={row.number}
            row={row}
            getSeatStatus={getSeatStatus}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </section>
  )
}

export default SeatMap

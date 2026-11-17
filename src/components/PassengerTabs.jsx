import { useSeats } from '../hooks/useSeats.js'

function PassengerTabs() {
  const { passengers, activePassengerId, assignments, selectPassenger } = useSeats()

  return (
    <div
      role="group"
      aria-label="Select passenger"
      className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-x-visible lg:pb-0"
    >
      {passengers.map((passenger) => {
        const isActive = passenger.id === activePassengerId
        const seatId = assignments[passenger.id]

        return (
          <button
            key={passenger.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => selectPassenger(passenger.id)}
            className={`min-w-32 shrink-0 rounded-xl border-2 px-4 py-2 text-left transition ${
              isActive
                ? 'border-blue-600 bg-blue-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <span className="block text-sm font-semibold text-slate-900">{passenger.name}</span>
            <span
              className={`block text-xs ${seatId ? 'font-semibold text-blue-700' : 'text-slate-500'}`}
            >
              {seatId ? `Seat ${seatId}` : 'No seat selected'}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export default PassengerTabs

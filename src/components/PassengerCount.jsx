import { MAX_PASSENGERS } from '../context/seatReducer.js'
import { useSeats } from '../hooks/useSeats.js'

function StepButton({ label, disabled, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-lg font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
    >
      {children}
    </button>
  )
}

function PassengerCount() {
  const { passengers, changePassengerCount } = useSeats()
  const count = passengers.length

  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <p className="text-sm font-semibold text-slate-900">Passengers</p>
        <p className="text-xs text-slate-500">Max {MAX_PASSENGERS} per booking</p>
      </div>
      <div className="flex items-center gap-3">
        <StepButton
          label="Remove passenger"
          disabled={count <= 1}
          onClick={() => changePassengerCount(count - 1)}
        >
          −
        </StepButton>
        <span className="w-6 text-center text-lg font-bold text-slate-900" aria-live="polite">
          {count}
        </span>
        <StepButton
          label="Add passenger"
          disabled={count >= MAX_PASSENGERS}
          onClick={() => changePassengerCount(count + 1)}
        >
          +
        </StepButton>
      </div>
    </div>
  )
}

export default PassengerCount

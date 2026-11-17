import Seat from './Seat.jsx'

function SeatRow({ row, getSeatStatus, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <span className="w-5 text-right text-xs font-medium text-slate-400 sm:w-6">
        {row.number}
      </span>
      <div className="flex items-center gap-3 sm:gap-8">
        {row.groups.map((group) => (
          <div key={group[0].id} className="flex gap-[3px] sm:gap-1.5">
            {group.map((seat) => (
              <Seat key={seat.id} seat={seat} status={getSeatStatus(seat)} onSelect={onSelect} />
            ))}
          </div>
        ))}
      </div>
      <span className="hidden w-6 text-left text-xs font-medium text-slate-400 sm:block">
        {row.number}
      </span>
    </div>
  )
}

export default SeatRow

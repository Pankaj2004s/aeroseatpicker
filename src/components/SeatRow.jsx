import Seat from './Seat.jsx'

function SeatRow({ row, getSeatStatus, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="w-6 text-right text-xs font-medium text-slate-400">{row.number}</span>
      <div className="flex items-center gap-5 sm:gap-8">
        {row.groups.map((group) => (
          <div key={group[0].id} className="flex gap-1 sm:gap-1.5">
            {group.map((seat) => (
              <Seat key={seat.id} seat={seat} status={getSeatStatus(seat)} onSelect={onSelect} />
            ))}
          </div>
        ))}
      </div>
      <span className="w-6 text-left text-xs font-medium text-slate-400">{row.number}</span>
    </div>
  )
}

export default SeatRow

function SeatColumnHeader({ groups }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="w-6" />
      <div className="flex items-center gap-5 sm:gap-8">
        {groups.map((group) => (
          <div key={group.join('')} className="flex gap-1 sm:gap-1.5">
            {group.map((label) => (
              <span
                key={label}
                className="w-9 text-center text-xs font-semibold text-slate-500 sm:w-11"
              >
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="w-6" />
    </div>
  )
}

export default SeatColumnHeader

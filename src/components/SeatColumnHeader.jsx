function SeatColumnHeader({ groups }) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      <span className="w-5 sm:w-6" />
      <div className="flex items-center gap-3 sm:gap-8">
        {groups.map((group) => (
          <div key={group.join('')} className="flex gap-[3px] sm:gap-1.5">
            {group.map((label) => (
              <span
                key={label}
                className="w-8 text-center text-xs font-semibold text-slate-500 sm:w-11"
              >
                {label}
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="hidden w-6 sm:block" />
    </div>
  )
}

export default SeatColumnHeader

function SeatMapSkeleton() {
  return (
    <section
      aria-busy="true"
      aria-label="Loading seat map"
      className="mx-auto w-full max-w-md animate-pulse rounded-t-[3rem] rounded-b-2xl border border-slate-200 bg-white px-8 pb-6 pt-10 shadow-sm"
    >
      <div className="flex flex-col gap-2">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="h-9 rounded-lg bg-slate-100 sm:h-11" />
        ))}
      </div>
    </section>
  )
}

export default SeatMapSkeleton

function SeatMapMessage({ title, text, role = 'status', actionLabel, onAction }) {
  return (
    <section
      role={role}
      className="mx-auto flex w-full max-w-md flex-col items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center"
    >
      <p className="text-base font-semibold text-slate-900">{title}</p>
      <p className="text-sm text-slate-500">{text}</p>
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {actionLabel}
        </button>
      )}
    </section>
  )
}

export default SeatMapMessage

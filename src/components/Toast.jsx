const TYPE_STYLES = {
  error: 'bg-red-600',
  success: 'bg-emerald-600',
  info: 'bg-slate-800',
}

function Toast({ toast }) {
  return (
    <div
      role="status"
      aria-live="polite"
            className="pointer-events-none fixed inset-x-0 bottom-20 z-50 flex justify-center px-4 lg:bottom-4"
    >
      {toast && (
        <p
          key={toast.id}
          className={`rounded-xl px-4 py-3 text-sm font-medium text-white shadow-lg ${TYPE_STYLES[toast.type]}`}
        >
          {toast.message}
        </p>
      )}
    </div>
  )
}

export default Toast

import { LAYOUTS } from '../data/layouts.js'
import { useSeats } from '../hooks/useSeats.js'

function LayoutToggle() {
  const { layoutId, changeLayout } = useSeats()

  return (
    <div className="inline-flex rounded-xl bg-slate-200 p-1" role="group" aria-label="Seat layout">
      {Object.values(LAYOUTS).map((layout) => {
        const isActive = layout.id === layoutId

        return (
          <button
            key={layout.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => changeLayout(layout.id)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              isActive ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {layout.id}
          </button>
        )
      })}
    </div>
  )
}

export default LayoutToggle

import { SEAT_CATEGORIES } from '../data/seatCategories.js'
import { usePricing } from '../hooks/usePricing.js'
import { formatAmount, formatPrice } from '../utils/formatPrice.js'

function PriceSummary() {
  const { charges, total } = usePricing()
  const selectedCount = charges.filter((charge) => charge.seat).length

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-sm font-semibold text-slate-900">Price summary</h2>
        <p className="text-xs text-slate-500">
          {selectedCount} of {charges.length} seats selected
        </p>
      </div>

      <ul className="mt-3 divide-y divide-slate-100">
        {charges.map(({ passenger, seat, price }) => (
          <li key={passenger.id} className="flex items-center justify-between gap-3 py-2.5">
            <div>
              <p className="text-sm font-medium text-slate-900">{passenger.name}</p>
              <p className="text-xs text-slate-500">
                {seat
                  ? `Seat ${seat.id} · ${SEAT_CATEGORIES[seat.category].label}`
                  : 'No seat selected'}
              </p>
            </div>
            <p className={`text-sm font-semibold ${seat ? 'text-slate-900' : 'text-slate-300'}`}>
              {seat ? formatPrice(price) : '—'}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-3">
        <p className="text-sm font-semibold text-slate-900">Total seat charges</p>
        <p className="text-xl font-bold text-blue-700" aria-live="polite">
          {formatAmount(total)}
        </p>
      </div>
    </section>
  )
}

export default PriceSummary

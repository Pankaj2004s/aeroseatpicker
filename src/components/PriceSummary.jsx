import { SEAT_CATEGORIES } from '../data/seatCategories.js'
import { usePricing } from '../hooks/usePricing.js'
import { formatAmount, formatPrice } from '../utils/formatPrice.js'

function LineItem({ label, amount, isMuted = false }) {
  return (
    <div className="mt-0.5 flex items-center justify-between gap-3 text-xs">
      <span className={isMuted ? 'text-slate-400' : 'text-slate-600'}>{label}</span>
      <span className={`font-semibold ${isMuted ? 'text-slate-300' : 'text-slate-800'}`}>
        {amount}
      </span>
    </div>
  )
}

function PriceSummary() {
  const { charges, totals, selectedCount } = usePricing()

  return (
    <section
      id="price-summary"
      className="scroll-mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="flex items-baseline justify-between gap-2">
        <h2 className="text-sm font-semibold text-slate-900">Price summary</h2>
        <p className="text-xs text-slate-500">
          {selectedCount} of {charges.length} seats selected
        </p>
      </div>

      <ul className="mt-3 divide-y divide-slate-100">
        {charges.map(({ passenger, seat, meal, seatPrice, mealPrice }) => (
          <li key={passenger.id} className="py-2.5">
            <p className="text-sm font-medium text-slate-900">{passenger.name}</p>
            <LineItem
              label={
                seat
                  ? `Seat ${seat.id} · ${SEAT_CATEGORIES[seat.category].label}`
                  : 'No seat selected'
              }
              amount={seat ? formatPrice(seatPrice) : '—'}
              isMuted={!seat}
            />
            {meal && <LineItem label={`Meal · ${meal.name}`} amount={formatPrice(mealPrice)} />}
          </li>
        ))}
      </ul>

      <dl className="mt-2 space-y-1 border-t border-slate-200 pt-3 text-sm">
        <div className="flex justify-between text-slate-600">
          <dt>Seat charges</dt>
          <dd>{formatAmount(totals.seats)}</dd>
        </div>
        <div className="flex justify-between text-slate-600">
          <dt>Meal charges</dt>
          <dd>{formatAmount(totals.meals)}</dd>
        </div>
        <div className="flex items-center justify-between pt-1">
          <dt className="font-semibold text-slate-900">Total</dt>
          <dd className="text-xl font-bold text-blue-700" aria-live="polite">
            {formatAmount(totals.total)}
          </dd>
        </div>
      </dl>
    </section>
  )
}

export default PriceSummary

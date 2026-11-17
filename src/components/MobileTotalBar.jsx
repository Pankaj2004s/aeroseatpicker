import { usePricing } from '../hooks/usePricing.js'
import { formatAmount } from '../utils/formatPrice.js'

function MobileTotalBar() {
  const { charges, total, selectedCount } = usePricing()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div>
          <p className="text-xs text-slate-500">
            {selectedCount} of {charges.length} seats selected
          </p>
          <p className="text-lg font-bold text-blue-700">{formatAmount(total)}</p>
        </div>
        <a
          href="#price-summary"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          View breakdown
        </a>
      </div>
    </div>
  )
}

export default MobileTotalBar

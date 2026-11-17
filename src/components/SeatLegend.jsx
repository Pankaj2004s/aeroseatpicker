import { SEAT_CATEGORIES } from '../data/seatCategories.js'
import { formatPrice } from '../utils/formatPrice.js'
import { CATEGORY_STYLES, STATUS_STYLES } from './seatStyles.js'

function LegendItem({ label, swatchStyle, children }) {
  return (
    <li className="flex items-center gap-2 text-sm text-slate-600">
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-t-lg rounded-b-sm border-2 text-xs ${swatchStyle}`}
      >
        {children}
      </span>
      {label}
    </li>
  )
}

function SeatLegend() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
      {Object.values(SEAT_CATEGORIES).map((category) => (
        <LegendItem
          key={category.id}
          label={`${category.label} (${formatPrice(category.price)})`}
          swatchStyle={CATEGORY_STYLES[category.id]}
        />
      ))}
      <LegendItem label="Selected" swatchStyle={STATUS_STYLES.selected} />
      <LegendItem label="Other passenger" swatchStyle={STATUS_STYLES.assigned} />
      <LegendItem label="Occupied" swatchStyle={STATUS_STYLES.occupied}>
        ×
      </LegendItem>
    </ul>
  )
}

export default SeatLegend

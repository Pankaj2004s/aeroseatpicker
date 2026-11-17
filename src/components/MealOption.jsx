import { formatPrice } from '../utils/formatPrice.js'

const MARK_STYLES = {
  veg: 'border-emerald-600 text-emerald-600',
  'non-veg': 'border-red-600 text-red-600',
}

function DietMark({ type }) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border-2 ${MARK_STYLES[type]}`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
      </span>
      <span className="sr-only">{type === 'veg' ? 'Vegetarian' : 'Non-vegetarian'}</span>
    </>
  )
}

function MealOption({ meal, name, checked, onChange }) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-3 py-2.5 transition has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue-600 ${
        checked ? 'border-blue-600 bg-blue-50' : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      <input type="radio" name={name} checked={checked} onChange={onChange} className="sr-only" />
      {meal ? <DietMark type={meal.type} /> : <span className="h-4 w-4 shrink-0" />}
      <span className="flex-1 text-sm font-medium text-slate-900">
        {meal ? meal.name : 'No meal'}
      </span>
      {meal && (
        <span
          className={`text-sm font-semibold ${meal.price === 0 ? 'text-emerald-600' : 'text-slate-700'}`}
        >
          {formatPrice(meal.price)}
        </span>
      )}
    </label>
  )
}

export default MealOption

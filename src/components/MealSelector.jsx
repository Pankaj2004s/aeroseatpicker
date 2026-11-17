import { MEALS, MEALS_BY_ID } from '../data/meals.js'
import { useSeats } from '../hooks/useSeats.js'
import { formatPrice } from '../utils/formatPrice.js'
import MealOption from './MealOption.jsx'

function MealSelector() {
  const { passengers, activePassengerId, meals, selectMeal, removeMeal } = useSeats()

  const passenger = passengers.find((item) => item.id === activePassengerId)
  const selectedMeal = MEALS_BY_ID[meals[activePassengerId]] ?? null

  function handleChange(mealId) {
    if (mealId) selectMeal(activePassengerId, mealId)
    else removeMeal(activePassengerId)
  }

  return (
    <details className="group rounded-xl border border-slate-200">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3 py-2.5 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="block text-sm font-semibold text-slate-900">
            Meal for {passenger.name}
          </span>
          <span className="block text-xs text-slate-500">
            {selectedMeal
              ? `${selectedMeal.name} · ${formatPrice(selectedMeal.price)}`
              : 'Optional · none selected'}
          </span>
        </span>
        <span aria-hidden="true" className="text-slate-400 transition group-open:rotate-180">
          ⌄
        </span>
      </summary>

      <fieldset className="flex flex-col gap-2 border-t border-slate-100 p-3">
        <legend className="sr-only">Meal for {passenger.name}</legend>
        <MealOption
          meal={null}
          name="meal"
          checked={!selectedMeal}
          onChange={() => handleChange(null)}
        />
        {MEALS.map((meal) => (
          <MealOption
            key={meal.id}
            meal={meal}
            name="meal"
            checked={selectedMeal?.id === meal.id}
            onChange={() => handleChange(meal.id)}
          />
        ))}
      </fieldset>
    </details>
  )
}

export default MealSelector

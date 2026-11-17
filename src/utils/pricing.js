import { MEALS_BY_ID } from '../data/meals.js'

export function getCharges(passengers, assignments, meals, seatsById) {
  return passengers.map((passenger) => {
    const seat = seatsById[assignments[passenger.id]] ?? null
    const meal = MEALS_BY_ID[meals[passenger.id]] ?? null
    const seatPrice = seat ? seat.price : 0
    const mealPrice = meal ? meal.price : 0

    return { passenger, seat, meal, seatPrice, mealPrice, total: seatPrice + mealPrice }
  })
}

export function getTotals(charges) {
  const seats = charges.reduce((sum, charge) => sum + charge.seatPrice, 0)
  const meals = charges.reduce((sum, charge) => sum + charge.mealPrice, 0)

  return { seats, meals, total: seats + meals }
}

export function getSeatCharges(passengers, assignments, seatsById) {
  return passengers.map((passenger) => {
    const seat = seatsById[assignments[passenger.id]] ?? null
    return { passenger, seat, price: seat ? seat.price : 0 }
  })
}

export function getTotal(charges) {
  return charges.reduce((sum, charge) => sum + charge.price, 0)
}

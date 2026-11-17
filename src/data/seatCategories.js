export const SEAT_CATEGORIES = {
  standard: { id: 'standard', label: 'Standard', price: 0 },
  premium: { id: 'premium', label: 'Premium', price: 250 },
  legroom: { id: 'legroom', label: 'Extra Legroom', price: 350 },
}

export function getCategoryForRow(row) {
  if (row <= 2 || row === 12) return SEAT_CATEGORIES.legroom
  if (row <= 5) return SEAT_CATEGORIES.premium
  return SEAT_CATEGORIES.standard
}

import { LAYOUTS } from './layouts.js'
import { getCategoryForRow } from './seatCategories.js'

export const TOTAL_ROWS = 20

function isOccupied(row, columnIndex) {
  return (row * 7 + columnIndex * 3) % 5 === 0
}

function createSeat(row, label, columnIndex) {
  const category = getCategoryForRow(row)

  return {
    id: `${row}${label}`,
    row,
    label,
    category: category.id,
    price: category.price,
    isOccupied: isOccupied(row, columnIndex),
  }
}

export function createSeatRows(layoutId) {
  const { groups } = LAYOUTS[layoutId]
  const labels = groups.flat()

  return Array.from({ length: TOTAL_ROWS }, (_, index) => {
    const row = index + 1

    return {
      number: row,
      groups: groups.map((group) =>
        group.map((label) => createSeat(row, label, labels.indexOf(label))),
      ),
    }
  })
}

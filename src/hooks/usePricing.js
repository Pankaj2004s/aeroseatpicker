import { useMemo } from 'react'
import { getCharges, getTotals } from '../utils/pricing.js'
import { useSeats } from './useSeats.js'

export function usePricing() {
  const { passengers, assignments, meals, seatsById } = useSeats()

  return useMemo(() => {
    const charges = getCharges(passengers, assignments, meals, seatsById)
    const selectedCount = charges.filter((charge) => charge.seat).length

    return { charges, totals: getTotals(charges), selectedCount }
  }, [passengers, assignments, meals, seatsById])
}

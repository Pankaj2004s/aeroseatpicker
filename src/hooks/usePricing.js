import { useMemo } from 'react'
import { getSeatCharges, getTotal } from '../utils/pricing.js'
import { useSeats } from './useSeats.js'

export function usePricing() {
  const { passengers, assignments, seatsById } = useSeats()

  return useMemo(() => {
    const charges = getSeatCharges(passengers, assignments, seatsById)
    return { charges, total: getTotal(charges) }
  }, [passengers, assignments, seatsById])
}

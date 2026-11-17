import { useContext } from 'react'
import { SeatContext } from '../context/SeatContext.js'

export function useSeats() {
  const context = useContext(SeatContext)
  if (!context) {
    throw new Error('useSeats must be used inside SeatProvider')
  }
  return context
}

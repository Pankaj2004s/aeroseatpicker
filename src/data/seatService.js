import { createSeatRows } from './seats.js'

const LOAD_DELAY_MS = 500

export function fetchSeatRows(layoutId) {
  const simulation = new URLSearchParams(window.location.search).get('simulate')

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulation === 'error') {
        reject(new Error('Unable to load the seat map. Please try again.'))
        return
      }
      resolve(simulation === 'empty' ? [] : createSeatRows(layoutId))
    }, LOAD_DELAY_MS)
  })
}

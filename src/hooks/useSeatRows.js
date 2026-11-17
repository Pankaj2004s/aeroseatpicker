import { useCallback, useEffect, useState } from 'react'
import { fetchSeatRows } from '../data/seatService.js'

export function useSeatRows(layoutId) {
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState({ key: null, rows: [], error: null })
  const key = `${layoutId}:${attempt}`

  useEffect(() => {
    let isCurrent = true

    fetchSeatRows(layoutId)
      .then((rows) => {
        if (isCurrent) setResult({ key, rows, error: null })
      })
      .catch((error) => {
        if (isCurrent) setResult({ key, rows: [], error })
      })

    return () => {
      isCurrent = false
    }
  }, [layoutId, key])

  const retry = useCallback(() => setAttempt((count) => count + 1), [])

  const isLoading = result.key !== key
  const status = isLoading ? 'loading' : result.error ? 'error' : 'ready'

  return { status, rows: isLoading ? [] : result.rows, error: result.error, retry }
}

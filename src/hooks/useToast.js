import { useCallback, useEffect, useRef, useState } from 'react'

export function useToast(duration = 3000) {
  const [toast, setToast] = useState(null)
  const timerRef = useRef(null)

  const showToast = useCallback(
    (message, type = 'info') => {
      clearTimeout(timerRef.current)
      setToast({ id: Date.now(), message, type })
      timerRef.current = setTimeout(() => setToast(null), duration)
    },
    [duration],
  )

  useEffect(() => () => clearTimeout(timerRef.current), [])

  return { toast, showToast }
}

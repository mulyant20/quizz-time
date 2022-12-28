import { useEffect, useState } from 'react'

export const useLocalstorage = ( key: string, defaultValue: any | null = null ) => {
  const [value, setValue] = useState(() => {
    try {
      const local = localStorage.getItem(key)
      if (local) {
        return JSON.parse(local)
      }
    } catch {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

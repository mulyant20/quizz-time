import React, { useState, useEffect, useMemo } from 'react'
import TimerInner from './TimerInner'

type Props = {
  duration: number
  isPlay: boolean
}

export default function TimerBar({ duration, isPlay }: Props) {
  const [timeLeft, setTimeLeft] = useState<number>(0)
  
  const length = useMemo(() => {
    return timeLeft * 100 / duration
  }, [timeLeft])

  useEffect(() => {
    setTimeLeft(duration)

    if(!isPlay) return

    let interval = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlay])
  
  return (
    <div className='w-[120px] h-3 rounded-full bg-purple-800 overflow-hidden'>
      <TimerInner length={length} />
    </div>
  )
}

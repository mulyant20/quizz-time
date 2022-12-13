import React from 'react'
import TimerInner from './TimerInner'
import { useEffect, useState } from 'react'

type Props = {
  duration: number
}

export default function Timer({ duration }: Props) {
  const [timeleft, setTimeleft] = useState<number>(duration)

  useEffect(() => {
    let interval = setInterval(() => {
      setTimeleft((prev) => prev - 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <p className='text-[6rem] font-semibold text-white'>{timeleft}</p>
}

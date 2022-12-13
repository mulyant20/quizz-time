import React, { useEffect, useState } from 'react'

type Props = {
  length?: number
}

export default function TimerInner({ length }: Props) {
  return (
    <div
      className='h-full rounded-full bg-white ease-in duration-150'
      style={{ width: `${length}%` }}
    ></div>
  )
}

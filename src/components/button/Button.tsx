import React from 'react'

type Props = {
  children: React.ReactNode
  onclick?: (param: any) => any
}

export default function Button({ children, onclick }: Props) {
  return <button onClick={onclick}>{children}</button>
}

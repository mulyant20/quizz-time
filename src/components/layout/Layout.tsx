import React from 'react'
import { Navbar } from '../Navbar'

type Props = {
  children: React.ReactNode
  classname?: string
}

export default function Layout({ children, classname }: Props) {
  return (
    <>
      <Navbar />
      <div className={`max-w-[800px] h-fit mx-auto px-4 md:px-0 ${classname}`}>
        {children}
      </div>
    </>
  )
}

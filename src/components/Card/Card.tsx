import React from 'react'

type Props = {
  title: string
  onclick: (param: any) => any
  initial?: string[]
  color?: string
}

export default function Card({ title, onclick, initial, color }: Props) {
  return (
    <div
      onClick={onclick}
      className='w-full md:w-[250px] h-[120px] bg-[#e5e5f5] hover:bg-white rounded-[20px] p-4 cursor-pointer duration-250 ease-in relative overflow-hidden'
      style={{'background':color}}
    >
      <p className='text-lg text-white px-8 py-2 rounded-full'>
        {title}
      </p>
      <div className='w-[calc(100%+16px)] h-full absolute top-0 left-1/2 -translate-x-1/2 flex justify-between items-center'>
        {initial?.map((init, index) => <p key={index} className='text-[5rem] font-semibold text-white/40'>{init}</p>)}
      </div>
    </div>
  )
}

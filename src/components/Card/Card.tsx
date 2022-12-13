import React from 'react'

type Props = {
  title: string
  onclick: (param: any) => any
}

export default function Card({ title, onclick }: Props) {
  return (
    <div
      onClick={onclick}
      className='w-full md:w-[250px] h-[120px] bg-[#e5e5f5] hover:bg-white rounded-lg p-4 cursor-pointer duration-250 ease-in hover:shadow-lg hover:shadow-gray-400/20'
    >
      <p className='text-lg text-[#6b718d]'>
        {title}
      </p>
    </div>
  )
}

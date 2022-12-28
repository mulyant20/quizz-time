import React from 'react'

type Props = {
  ans: string
  onclick: (param: any) => any
}

export default function QuestionOption({ ans, onclick }: Props) {
  return (
    <button
      dangerouslySetInnerHTML={{ __html: ans }}
      onClick={onclick}
      className='w-full py-2 px-6 flex justify-start rounded bg-gray-200/20 hover:bg-purple-600 active:bg-purple-700 text-gray-800 hover:text-white'
    />
  )
}

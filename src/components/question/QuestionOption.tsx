import React from 'react'

type Props = {
  ans: string
  classname?: string
  onclick: (param: any) => any
}

export default function QuestionOption({ ans, onclick, classname }: Props) {
  return (
    <button
      dangerouslySetInnerHTML={{ __html: ans }}
      onClick={onclick}
      className={`${classname}`}
    />
  )
}

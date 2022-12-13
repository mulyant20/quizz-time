import React, { useState, useEffect, useMemo } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

import { shuffle } from '../../lib/shuffle'
import { question } from '../../interface/question'
import { UseScoreContext } from '../../context/ScoreContext'
import { IscoreContext } from '../../interface/score'
import QuestionOption from './QuestionOption'
import { TimerBar } from '../timer'

type Props = {
  question: question[]
  duration: number
  totalQuestion: number
}

export default function Question({ question, duration, totalQuestion }: Props) {
  const navigate: NavigateFunction = useNavigate()
  const [index, setIndex] = useState<number>(0)
  const [play, setPlay] = useState<boolean>(true)
  const { updateScore } = UseScoreContext() as IscoreContext

  const answers: string[] = useMemo(() => {
    return shuffle([
      ...question[index].incorrect_answers,
      question[index].correct_answer,
    ])
  }, [index])

  const handleAnswer = (answer: string) => {
    setPlay(false)    
    answer === question[index].correct_answer && updateScore()

    let timeout = setTimeout(() => {
      if (index < question.length - 1) {
        setIndex((prev) => prev + 1)
        setPlay(true)
        clearTimeout(timeout)
      } else {
        clearTimeout(timeout)
        navigate('/score')
      }
    }, 1500)
  }

  useEffect(() => {
    if (!play) return

    let timeout = setTimeout(() => {
      // navigate('/score')
    }, duration * 1000)

    return () => clearTimeout(timeout)
  }, [play])

  return (
    <>
      <div className='p-6 bg-purple-600 mt-4 mb-8 rounded-lg'>
        <div className='flex justify-center w-full h-fit mb-8'>
          <TimerBar duration={duration} isPlay={play}/>
        </div>
        <p className='text-white text-lg'>{index + 1} <span className='text-white/80 text-[15px]'>/ {totalQuestion}</span></p>
        <h1 dangerouslySetInnerHTML={{ __html: question[index].question }} className='text-2xl mb-6 text-white'/>
      </div>
      <ul className='flex flex-col gap-4'>
        {answers.map((ans, index) => (
          <QuestionOption
            key={index}
            onclick={() => play && handleAnswer(ans)}
            ans={ans}
            classname="w-full py-2 px-6 flex justify-start rounded bg-gray-200/20 hover:bg-purple-700 text-gray-800 hover:text-white"
          />
        ))}
      </ul>
    </>
  )
}

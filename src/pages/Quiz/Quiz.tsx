import { useState, useEffect } from 'react'
import { Question } from '../../components/question'
import { Layout, Timer } from '../../components'
import { UseScoreContext } from '../../context/ScoreContext'
import { IscoreContext } from '../../interface/score'
import { question } from '../../interface/question'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { category } from '../../interface/category'

type Props = {
  duration: number
  totalQuestion: number
}

interface quizResponse {
  response_code: number
  results: question[]
}

export default function Quiz({ duration, totalQuestion }: Props) {
  let { category } = useParams()
  const [quiz, setQuiz] = useState<question[] | null>(null)
  const [play, setPlay] = useState<boolean>(false)
  const { resetScore } = UseScoreContext() as IscoreContext

  const getData = async (category: any) => {
    try {
      const { data, status } = await axios.get<quizResponse>(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      )
      setQuiz(data.results)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message)
        return error.message
      } else {
        console.log('unexpected error: ', error)
        return 'An unexpected error occurred'
      }
    }
  }

  useEffect(() => {
    resetScore()
    getData(category)

    let timeout = setTimeout(() => {
      setPlay(true)
    }, 2800)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (!play) {
    return (
      <div className='w-screen h-screen bg-purple-700 flex justify-center items-center'>
        <Timer duration={3} />
      </div>
    )
  }

  return (
    <div className='max-w-[540px] mx-auto px-4 md:px-0'>
      {quiz !== null ? (
        <Question
          question={quiz}
          duration={duration}
          totalQuestion={totalQuestion}
        />
      ) : null}
    </div>
  )
}

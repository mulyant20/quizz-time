import React, { createContext, useState, useContext } from 'react'
import { IscoreContext } from '../interface/score'

type Props = {
  children: React.ReactNode
}

const ScoreContext = createContext<IscoreContext | null>(null)

const ScoreContextProvider = ({ children }: Props) => {
  const [score, setScore] = useState<number>(0)

  const updateScore = () => {
    setScore((prev) => prev + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <ScoreContext.Provider value={{ score, updateScore, resetScore }}>
      {children}
    </ScoreContext.Provider>
  )
}

export const UseScoreContext = () => useContext(ScoreContext)

export default ScoreContextProvider

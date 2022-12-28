import React, { createContext, useState, useContext } from 'react'
import { useLocalstorage } from '../hooks/useLocalstorage'
import { IscoreContext } from '../interface/score'

type Props = {
  children: React.ReactNode
}

const ScoreContext = createContext<IscoreContext | null>(null)

const ScoreContextProvider = ({ children }: Props) => {
  const [score, setScore] = useState<number>(0)
  const [coin, setCoin] = useLocalstorage('coins', null)
  const [exp, setExp] = useLocalstorage('exp', null)

  const updateScore = () => {
    setScore((prev) => prev + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  const saveCoin = () => {
    setCoin((prev:any) => prev + (score*2))
  }

  const buyWithCoin = (value: number) => {
    setCoin((prev: any) => prev - value)
  }

  const value = {
    score,
    updateScore,
    resetScore,
    saveCoin,
    coin,
    exp,
    buyWithCoin
  }

  return (
    <ScoreContext.Provider value={value}>
      {children}
    </ScoreContext.Provider>
  )
}

export const UseScoreContext = () => useContext(ScoreContext)

export default ScoreContextProvider

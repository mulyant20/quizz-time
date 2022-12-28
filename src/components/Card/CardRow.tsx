import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { category } from '../../interface/category'
import Card from './Card'

type Props = {
  cards: category[]
}

export default function CardRow({ cards }: Props) {
  const navigate: NavigateFunction = useNavigate()
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.name}
          onclick={() => navigate(`/quiz/${card.id}`)}
          color={card.color}
          initial={card.initial}
        />
      ))}
    </>
  )
}

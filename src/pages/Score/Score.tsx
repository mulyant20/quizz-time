import { UseScoreContext } from '../../context/ScoreContext'
import { IscoreContext } from '../../interface/score'
import {FaMedal} from 'react-icons/fa'
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function Score() {
  const navigate: NavigateFunction = useNavigate()
  const { score } = UseScoreContext() as IscoreContext
  return (
    <div className='max-w-[540px] mx-auto mt-12 flex flex-col justify-center items-center'>
      <div className='text-[4rem] my-6 text-yellow-500'><FaMedal/></div>
      <p className='text-3xl text-gray-600 uppercase'>Congrats</p>
      <p className='text-xl text-gray-500 mb-4'>Your score is</p>
      <h1 className='text-[6rem] font-semibold text-gray-500 leading-none'>{score}</h1>
      <div className='mt-6 flex gap-4'>
        <button onClick={() => navigate(-1)} className='py-2 px-6 rounded bg-gray-200 hover:bg-purple-700 text-gray-800 hover:text-white'>Retry</button>
        <button onClick={() => navigate('/')} className='py-2 px-6 rounded bg-gray-200 hover:bg-purple-700 text-gray-800 hover:text-white'>Home</button>
      </div>
    </div>
  )
}

import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Card, Layout } from '../../components'
import { CardRow } from '../../components/Card'
import { category } from '../../interface/category'

type Props = {
  name?: string
}

export default function Home({ name }: Props) {
  return (
    <Layout classname='mt-6'>
      <p className='mb-4 text-2xl text-gray-400 uppercase font-medium'>Quizz Time</p>
      <div className='flex gap-4 justify-between flex-wrap'>
        <CardRow cards={featured}/>
      </div>
    </Layout>
  )
}

const featured: category[] = [
  { id: 11, name: 'Film', initial:['F'], color:'#fc8b49' },
  { id: 18, name: 'Computers', initial:['C'], color:'#9EA1D4' },
  { id: 20, name: 'Mythology', initial:['M'], color:'#E97777' },
  { id: 31, name: 'Anime & Manga', initial:['A', 'M'], color:'#98A8F8' },
]
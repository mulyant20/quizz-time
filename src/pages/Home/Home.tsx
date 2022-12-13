import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Card, Layout } from '../../components'
import { category } from '../../interface/category'

type Props = {
  name?: string
}

export default function Home({ name }: Props) {
  const navigate: NavigateFunction = useNavigate()
  return (
    <Layout classname='mt-6'>
      <p className='mb-4 text-xl text-gray-400 uppercase'>Popular</p>
      <div className='flex gap-4 justify-between flex-wrap'>
      {categories.map((category) => (
        <Card
          key={category.id}
          title={category.name}
          onclick={() => navigate(`/quiz/${category.id}`)}
        />
      ))}
      </div>
    </Layout>
  )
}

const categories: category[] = [
  { id: 11, name: 'Film' },
  { id: 18, name: 'Computers' },
  { id: 20, name: 'Mythology' },
  { id: 31, name: 'Japanese Anime & Manga' },
]

import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Card } from '../../components'
import { category } from '../../interface/category'
import { Layout } from '../../components'

export default function Category() {
  const navigate: NavigateFunction = useNavigate()
  return (
    <Layout>
      <div className='my-8'>
        <p className='text-xl mb-6 text-gray-700'>General</p>
        <div className='flex gap-4 justify-between flex-wrap'>
          {generalCategories.map((category, index) => (
            <Card
              key={category.id}
              title={category.name}
              onclick={() => navigate(`/quiz/${category.id}`)}
            />
          ))}
        </div>
      </div>
      <div className='my-8'>
        <p className='text-xl mb-6 text-gray-700'>Science & Tech</p>
        <div className='flex gap-4 justify-between flex-wrap'>
          {scienceCategories.map((category, index) => (
            <Card
              key={category.id}
              title={category.name}
              onclick={() => navigate(`/quiz/${category.id}`)}
            />
          ))}
        </div>
      </div>
      <div className='my-8'>
        <p className='text-xl mb-6 text-gray-700'>Entertaiment</p>
        <div className='flex gap-4 justify-between flex-wrap'>
          {entertaimentCategories.map((category, index) => (
            <Card
              key={category.id}
              title={category.name}
              onclick={() => navigate(`/quiz/${category.id}`)}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

const generalCategories: category[] = [
  { id: 9, name: 'General Knowledge' },
  { id: 20, name: 'Mythology' },
  { id: 21, name: 'Sports' },
  { id: 22, name: 'Geography' },
  { id: 23, name: 'History' },
  { id: 24, name: 'Politics' },
  { id: 25, name: 'Art' },
  { id: 26, name: 'Celebrities' },
  { id: 27, name: 'Animals' },
  { id: 28, name: 'Vehicles' },
]

const entertaimentCategories: category[] = [
  { id: 10, name: 'Books' },
  { id: 11, name: 'Film' },
  { id: 12, name: 'Music' },
  { id: 29, name: 'Comics' },
  { id: 13, name: 'Musicals & Theatres' },
  { id: 14, name: 'Television' },
  { id: 15, name: 'Video Games' },
  { id: 16, name: 'Board Games' },
  { id: 31, name: 'Japanese Anime & Manga' },
  { id: 32, name: 'Cartoon & Animations' },
]

const scienceCategories: category[] = [
  { id: 17, name: 'Science & Nature' },
  { id: 18, name: 'Computers' },
  { id: 19, name: 'Mathematics' },
  { id: 30, name: 'Gadgets' },
]

import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Card } from '../../components'
import { category } from '../../interface/category'
import { Layout } from '../../components'
import { CardRow } from '../../components/Card'

export default function Category() {
  return (
    <Layout>
      <div className='my-8'>
        <p className='text-xl mb-6 text-gray-700'>General</p>
        <div className='flex gap-4 justify-between flex-wrap'>
          <CardRow cards={generalCategories} />
        </div>
      </div>
      <div className='my-8'>
        <p className='text-xl mb-6 text-gray-700'>Science & Tech</p>
        <div className='flex gap-4 justify-between flex-wrap'>
          <CardRow cards={scienceCategories} />
        </div>
      </div>
      <div className='my-8'>
        <p className='text-xl mb-6 text-gray-700'>Entertaiment</p>
        <div className='flex gap-4 justify-between flex-wrap'>
          <CardRow cards={entertaimentCategories} />
        </div>
      </div>
    </Layout>
  )
}

const generalCategories: category[] = [
  { id: 9, name: 'General Knowledge', initial: ['G'], color: '#fc8b49' },
  { id: 20, name: 'Mythology', initial: ['M'], color: '#fc8b49' },
  { id: 21, name: 'Sports', initial: ['S'], color: '#fc8b49' },
  { id: 22, name: 'Geography', initial: ['G'], color: '#fc8b49' },
  { id: 23, name: 'History', initial: ['H'], color: '#fc8b49' },
  { id: 24, name: 'Politics', initial: ['P'], color: '#fc8b49' },
  { id: 25, name: 'Art', initial: ['A'], color: '#fc8b49' },
  { id: 26, name: 'Celebrities', initial: ['C'], color: '#fc8b49' },
  { id: 27, name: 'Animals', initial: ['A'], color: '#fc8b49' },
  { id: 28, name: 'Vehicles', initial: ['V'], color: '#fc8b49' },
]

const entertaimentCategories: category[] = [
  { id: 10, name: 'Books', initial: ['B'], color: '#fc8b49' },
  { id: 11, name: 'Film', initial: ['F'], color: '#fc8b49' },
  { id: 12, name: 'Music', initial: ['M'], color: '#fc8b49' },
  { id: 29, name: 'Comics', initial: ['C', 'M'], color: '#fc8b49' },
  {
    id: 13,
    name: 'Musicals & Theatres',
    initial: ['M', 'T'],
    color: '#fc8b49',
  },
  { id: 14, name: 'Television', initial: ['T'], color: '#fc8b49' },
  { id: 15, name: 'Video Games', initial: ['V', 'G'], color: '#fc8b49' },
  { id: 16, name: 'Board Games', initial: ['B', 'G'], color: '#fc8b49' },
  { id: 31, name: 'Anime & Manga', initial: ['A', 'M'], color: '#fc8b49' },
  { id: 32, name: 'Cartoon', initial: ['C', 'R'], color: '#fc8b49' },
]

const scienceCategories: category[] = [
  { id: 17, name: 'Science & Nature', initial: ['S', 'N'], color: '#fc8b49' },
  { id: 18, name: 'Computers', initial: ['C'], color: '#fc8b49' },
  { id: 19, name: 'Mathematics', initial: ['M'], color: '#fc8b49' },
  { id: 30, name: 'Gadgets', initial: ['G', 'A'], color: '#fc8b49' },
]

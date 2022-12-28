import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome, AiFillSetting } from 'react-icons/ai'
import { BiCategoryAlt } from 'react-icons/bi'

export default function Navbar() {
  return (
    <div className='w-full py-4 px-4 lg:px-0 bg-white'>
      <div className='max-w-[800px] h-full mx-auto flex justify-between'>
        <div className='flex gap-4'>
          <Link
            to='/'
            className='nav-item'
          >
            <span className='font-bold'><AiFillHome /></span> Home
          </Link>
          <Link
            to='/category'
            className='nav-item'
          >
            <span className='font-bold'><BiCategoryAlt /></span> Categories
          </Link>
          <Link
            to='/setting'
            className='nav-item'
          >
            <span className='font-bold'><AiFillSetting /></span> Setting
          </Link>
        </div>
        
      </div>
    </div>
  )
}

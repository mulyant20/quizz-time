import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
  children: React.ReactNode
  onclose: () => any
}

export default function Modal({ children, onclose }: Props) {
  return (
    <motion.div
      {...modalAnimate}
      className='fixed top-0 left-0 w-full h-full bg-black/20 flex justify-center pt-12'
    >
      <div className='bg-white w-[560px] max-w-full mx-auto h-fit rounded-lg p-4 pt-6 relative'>
        <button className='absolute top-4 right-4' onClick={onclose}>
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </motion.div>
  )
}

const modalAnimate = {
  initial: { scale: '0', opacity: 0 },
  animate: { scale: '1', opacity: 1 },
  exit: {
    scale: '0',
    opacity: 0,
    transition: { duration: 0.1, ease: 'easeOut' },
  },
  transition: { duration: 0.2, ease: 'easeIn' },
}


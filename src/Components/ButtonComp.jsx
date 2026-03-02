import { button } from 'framer-motion/client'
import React from 'react'

const ButtonComp = ({ children, width }) => {
  return (

    <button className={`${width} bg-black text-white flex items-center justify-evenly px-4 py-2 rounded-sm hover:bg-gray-800`}>
      {children}
    </button>
  )
}

export default ButtonComp

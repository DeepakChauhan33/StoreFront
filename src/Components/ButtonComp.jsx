import { button } from 'framer-motion/client'
import React from 'react'

const ButtonComp = ({ children, width }) => {
  return (

    <button className={`${width} bg-black text-sm text-white flex items-center justify-evenly px-2 py-2 lg:px-4 lg:py-3 rounded-sm hover:bg-gray-800`}>
      {children}
    </button>
  )
}

export default ButtonComp

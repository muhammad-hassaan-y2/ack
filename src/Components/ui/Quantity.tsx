"use client"

import React, {useState} from 'react'

export const Quantity = () => {
   const [num, setNum] = useState(1);

  return (
    <div className='flex items-center gap-x-2'>
        {/* Minus */}
        
        <button className='w-6 h-6 border rounded-full center'
        onClick={() => {
        setNum(num <+ 1 ? 1 : num - 1) }}> - </button>

        {/* Number */}
          
          <span className='text-sm'>{num}</span>

        {/* Plus */}
          
        <button className='w-6 h-6 border rounded-full center'
         onClick={() => {
         setNum(num + 1) }}> + </button>

        {/* Minus */}
    </div>
  )
}




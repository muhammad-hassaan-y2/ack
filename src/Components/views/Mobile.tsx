'use client'
import React from 'react';
import Logo from "@/Components/Images/Logo.webp";
import Image from 'next/image';
import { AlignRight, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
      setIsOpen(!isOpen);
    }

  return (
    <div>
      
      <div className='grid grid-rows-1'>

       <div>
         <Image src={Logo} alt='Dine Market' />
       </div>
         
       <div>
       <div className='fixed right-4 z-50 cursor-pointer mt-14
     lg:hidden md:hidden'
     onClick={handleIsOpen}>                   
        {isOpen ? <X size={45}/> : <AlignRight size={45}/>}
      </div>
      
        {isOpen && (
          <div className='fixed top-0 right-0 w-full h-full bg-white
           shadow-2xl p-4 z-40 transition-transform transform-gpu 
           ease-in-out duration-300 object-center items-center text-center'>
           
          <div className='text-3xl font-medium mt-44 ml-10'>
          <section className='bg-gray-300 rounded-full w-10 h-10 flex 
            items-center justify-center  mb-10 mt-40'>
            <ShoppingCart />
           </section>
            <h3 className='mb-7 hover:underline'>Female</h3>
            <h3 className='mb-7 hover:underline'>Male</h3>
            <h3 className='mb-7 hover:underline'>Kids</h3>
            <h3 className='mb-7 hover:underline'>All Products</h3>
          </div>
         </div>
        )}
       </div>

      </div>

    </div>
  )
}

export default Mobile

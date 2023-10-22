import React from 'react'
import Banner from '../shared/Banner';
import Banner1 from '../shared/Banner1';
import Banner3 from '../shared/Banner3';
import Banner2 from '../shared/Banner2';
import Wrapper from '../shared/Wrapper';

const Promotion = () => {
  return (
    <Wrapper>
   <div className='ml-12 mr-12 max-w-screen-2xl overflow-x-auto'>
     <div className='mb-10'>
      <h4 className='font-bold text-blue-700 text-center text-base mt-6'>PROMOTIONS</h4>
      <h2 className='font-bold text-4xl mt-4 text-center'>Our Promotions Events</h2>
     </div>


     <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 w-full'>

    <div className='flex-grow mb-3 md:mb-0'>
        <Banner />     
        <Banner1 /> 
    </div>

    <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 flex-grow'>
        <div className=' ml-3'><Banner2 /></div>
        <div className=''><Banner3 /></div>
    </div>

        </div>





   </div>
   </Wrapper>
  )
}

export default Promotion
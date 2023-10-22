import Image from 'next/image';
import Vintag from "@/Components/Images/vintage.webp"
import Wrapper from '../shared/Wrapper';

const Vintage = () => {
  return (
    <div className=' bg-gray-100'>
    <Wrapper>
    
    <div className="flex flex-col lg:flex-row items-start justify-between 
    p-8 max-w-screen-2xl bg-gray-100">
      
      {/* Left Section: 2 text blocks with faded large text background */}
      <div className="relative flex flex-col lg:flex-row w-full p-6 
       bg-gray-100">

            {/* "Different from others" text background */}
            <h1 className="text-6xl md:text-9xl font-extrabold opacity-10 absolute ml-96 
            top-1/2 transform -translate-x-1/2 -translate-y-1/2">Different from others</h1>

            {/* Left Section: 2 text blocks */}
            <div className="w-full lg:w-1/2 mr-0 lg:mr-8 mb-6 lg:mb-0 ml-20
             mt-10">
                <div className="flex flex-col sm:flex-row justify-between mb-6">
                    <div className="w-1/2 sm:w-3/4 ">
                        <h3 className="font-bold text-2xl mb-2">Using Good Quality Materials</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                    <div className="w-1/2 sm:w-3/4 md:ml-14 mt-7 md:mt-0">
                        <h3 className="font-bold text-2xl mb-2">100% Handmade Products</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="w-1/2  sm:w-3/4  ">
                        <h3 className="font-bold text-2xl mb-2">Modern Fashion Design</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>

                    <div className="w-1/2  sm:w-3/4 md:ml-14  mt-7 md:mt-0">
                        <h3 className="font-bold text-2xl mb-2">Discount for Bulk Orders</h3>
                        <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
        </div>

      
      {/* Right Section: Main headline, image, and details */}
      <div className="flex flex-col items-center bg-gray-100 ">
            
            {/* Main headline */}
            <h2 className="font-bold text-5xl mb-8 tex mt-10 ml-14">Unique and Authentic Vintage Designer Jewellery</h2>

            {/* Model Image */}
            <div className="relative mb-4 w-96 h-96">
                <Image src={Vintag} alt="Model" layout="fill" objectFit="contain" />
            </div>
            
            {/* Description */}
            <p className="mb-6 text-center w-2/3">
                This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
            </p>

            {/* Button */}
            <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition duration-300">See All Product</button>

        </div></div>

        
        </Wrapper></div>
  )
}

export default Vintage
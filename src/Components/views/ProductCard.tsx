import Image from "next/image";
import Link from "next/link";
import { Image as IImage} from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';


function ProductCard(props: any) { 
    return (
       <Link href={`/products/${props._id}`}>
        <div> 
        <div className='py-5'>
        <Image src={urlForImage(props.image[0]).url()} alt={"imag"} 
        width={300} height={400} 
        className='max-h-[200px] object-cover object-top
        ' />
       <h2 className="font-bold text-lg mt-3">{props.title}</h2>
       <h3 className="font-bold text-lg mt-3">{props.sku}</h3>
       <h4>{props.sizes}</h4>
       <p className="font-bold text-lg">${props.price}</p>
       <p className="font-bold text-lg">Category <span className='text-base font-normal 
         capitalize'>
        {props.productDetails}
       </span> 
       </p>

       <p className="font-bold text-lg"><span className='text-base font-normal 
         capitalize'>
        {props.productDetails}
       </span> 
       </p>
       
       <p className="font-bold text-lg"><span className='text-base font-normal 
         capitalize'>
        {props.productCare}
       </span> 
       </p>

      <button
          type="button"
          className="text-white 
       bg-zinc-900 py-2.5 px-2 mt-4 rounded-lg"
         >
          Add to cart
        </button>
     </div>
     </div>
        
       </Link>
    )
  }
  
  export default ProductCard
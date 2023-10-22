import React from 'react';
import ProductCard from '@/Components/views/ProductCard';
import Image from 'next/image';
import { client } from '@/lib/sanityClient';
import { Image as IImage } from 'sanity';
import { urlForImage } from '../../../sanity/lib/image';
import Link from 'next/link';

export const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]{
    price,
    _id,
    title,
    sku,
    sizes,
    productDetails,
    productCare,
    image,
    category -> {
      name
    }
  }`);
  return res;
};

interface IProduct {
 
  title: string;
  _id: string;
  productCare: string;
  productDetails: string;
  sku: string;
  sizes: number;
  image: IImage[];
  price: number;
  category: {
    name: string;
  };
}

export default async function Home() {
  const data: IProduct[] = await getProductData();

  return (
    <div className="flex justify-evenly mt-16 py-10 flex-wrap">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-24 mx-auto">
        {data.map((item: IProduct) => (
           <div key={item._id}> <Link href={`/products/${item._id}`} 
           as={`/products/${item._id}`}>

          
              {item.image && item.image[0] && (
                <Image src={urlForImage(item.image[0]).url()} alt='Image' 
                height={500} width={300}/>
              )}
              <h1>{item.title}</h1>
              <h2>{item.sku}</h2>
              <h4>{item.price}</h4>
            
          </Link>
         
          </div>
        ))}
      </div>
    </div>
  );
}

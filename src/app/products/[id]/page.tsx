import Image from 'next/image';
import { urlForImage } from "../../../../sanity/lib/image";
import React from 'react';
import { client } from '@/lib/sanityClient';
import { Image as IImage} from 'sanity';
import Wrapper from '@/Components/shared/Wrapper';

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
}

interface IProduct {
  title: string,
  _id: string,
  productCare: string,
  productDetails: string,
  sku: string,
  sizes: number,
  image: IImage[],
  price: number,
  category : {
    name: string
  }
}

const getProductsDetail = async (id: number | string) => {
  const allProducts = await getProductData();
  return allProducts.filter((product: { _id: string | number; }) =>
   product._id == id);
};

export default async function Page({ params }: { params: { id: string } }) {
  const result = await getProductsDetail(params.id) as any[];

  return (       
    <Wrapper>
      <div className="flex mt-16 py-10 flex-wrap">
        {result.map((product: IProduct) => (
          <div key={product._id} className="flex justify-between gap-6">
            <div>
              <Image src={urlForImage(product.image[0]).url()} 
              alt={product.title} width={200} height={200} />
            </div>
            <div>
              <h1 className="text-2x">{product.title}</h1>
              <h2 className="text-base text-gray-400 font-semibold">
                {product.productDetails}</h2>
                <h2 className="text-base text-gray-400 font-semibold">
                {product.productCare}</h2>
              <p>Name {product.title}</p>
              <p>Price {product.price}</p>
              <p>Category {product.category.name}</p>
            </div> 
          </div>
        ))}

        <div>
          
        </div>


      </div>
      </Wrapper>
  );
}
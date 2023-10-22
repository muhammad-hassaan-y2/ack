import { client } from '@/lib/sanityClient';
import ProductCard from "@/Components/views/ProductCard";
import { Image as IImage } from 'sanity';

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

// Fetch product data
export const getProductData = async (category: string) => {
const allProducts = await client.fetch(`*[_type == "product"]{
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


return allProducts.filter((product:IProduct) => product.category && product.category.name === category);

}

export default async function Page({ params }: { params: { slug: string } }) {

// Get products for the specified category
const result: IProduct[] = await getProductData(params.slug);

return (
  <div className="flex flex-1 justify-evenly mt-16 py-10 mb-40">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 mx-auto">
      {result.length > 0 ? (
        result.map((item) => (
          <ProductCard
            key={item._id}
            title={item.title}
            _id={item._id}
            image={item.image}
            price={item.price}
            category={item.category}
          />
        ))
      ) : (
        <p>No Products Found</p>
      )}
    </div>
  </div>
);
}

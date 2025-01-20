import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React from 'react'

const Datafetch = async() => {
     const query = await client.fetch(`
        *[_type == "product"]{
            _id,
            name,
            price,
            description,
            "imageUrl": image.asset->url
        }
    `);
    console.log(query);

  return (
    <div>
        <h1 className='text-3xl text-center mt-16 text-[#2A254B]'>Products</h1>
    
        <div className='grid sm:grid-col-1 lg:grid-cols-3 gap-4 mt-5'>
        {query.map((product:any)=>{
            return (

                <div key={product._id} className='border p-8'>
                    <Image src={urlFor(product.imageUrl).url()} alt='{product.name}' className='w-60 items-center justify-center ' width={500} height={500} />
                    <h1 className='text-xl font-bold text-center mt-3'>{product.name}</h1>
                    <p className='text-center'>{product.description}</p>
                    <p className='text-center mt-4 font-bold'>${product.price}</p>
                </div>
                

          
            )
        })}
        </div>
      
    </div>
  )
}

export default Datafetch

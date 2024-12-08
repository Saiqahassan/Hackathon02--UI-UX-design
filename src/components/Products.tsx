import React from 'react'

const Products = () => {
  return (
    <div  className='mt-20'>
        <div className='ml-24'>
         <h1 className='text-[#2A254B] text-[32px] font-normal'>Our Popular products</h1>
        </div>

        <div className='grid grid-cols-3 mt-6 ml-24'>
            <div className='w-3/3 w-[603px]'>
                <img src='/large-sofa.jpg' alt='sofa'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Poplar suede sofa</h4>
                <p className='text-[#2A254B] text-sm'>£980</p>
            </div>
 
            <div className='w-[305px] h-[375px] ml-[195px]'>
                <img src='/chair.png' alt='chair'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Dandy chair</h4>
                <p className='text-[#2A254B] text-sm'>£250</p>
            </div>

            <div className='w-[305px] h-[375px] ml-24'>
                <img src='/chair2.png' alt='chair2'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Dandy chair</h4>
                <p className='text-[#2A254B] text-sm'>£250</p>
            </div>

            <div className='w-[170px] h-14 text-center ml-[500px] mt-12'>
             <button className='text-sm text-[#2A254B] bg-[#F9F9F9]'>View collection</button>
             </div>

             <div className='text-center justify-center mt-36'>
               <div className='w-[571px] h-[114px]'>
                 <h3 className='text-[#2A254B] text-2xl font-normal'>Join the club and get the benefits</h3>
                 <p className='w-[320px] h-[48px] text-[11px] ml-32 py-3'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
               </div>

               <div className='mt-6 ml-32 flex '>
                <button className='w-[260px] h-7 text-[8px] text-left bg-[#F9F9F9]'>your@email.com</button>
                <button className='bg-[#2A254B] text-white text-xs w-[118px] p-2'>Sign up</button>
               </div>

             </div>

      </div>

             <div className='mt-20 ml-24 h-[603px] flex'>
                <div className='p-14'>
                    <img src="/Top Content.png" alt="Content" />

                    <button className='text-[#2A254B] text-xs w-[150px] h-14 bg-[#F9F9F9] mt-60'>Get in touch</button>
                </div>

                <div>
                   <img src="/Image.png" alt="Image" /> 
                </div>

             </div>


        
    </div>
  )
}

export default Products
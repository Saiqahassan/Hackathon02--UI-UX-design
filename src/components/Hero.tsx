import React from 'react'

const Hero = () => {
  return (
    <main>
      <div className='w-[1150px] h-[500px] flex bg-[#2A254B] ml-20 mr-20'>
        <div className='text-left w-[513px] p-14 ml-6'>
          <h2 className='text-white font-sans text-[32px] font-normal leading-[44.8px]'>The furniture brand for the future, with timeless designs</h2>
          <button className='w-[170px] h-14 text-white bg-[#F9F9F926] mt-14'>View collection</button>
          <p className='text-white text-base font-normal font-sans w-[602px] mt-28'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
             with nice fonts, tasteful colors and a beautiful way to display things digitally 
             using modern web technologies.</p>
        </div>

        <div className='w-[500px] object-right'>
          <img className='object-fill h-[500px] ml-96'
          src='/chair.png' alt='chair'/>
        </div>
    </div>

    <div>
      <div className='m-28 text-center'>
      <h3 className='text-[#2A254B] text-2xl font-normal'>What makes our brand different</h3>
      </div>

      <div className='grid grid-cols-4 gap-4'>
        <div className='w-[270px] h-[124px] ml-24 text-[#2A254B]'>
          <img src='/Delivery.png' alt='delivery-logo'/>
          <h4 className='text-xl font-normal font-sans mt-4'>Next day as standard</h4>
          <p className='text-xs mt-3'>Order before 3pm and get your order
             the next day as standard</p>
        </div>

        <div className='w-[270px] h-[124px] ml-24 text-[#2A254B]'>
          <img src='/Checkmark.png' alt='checkmark-logo'/>
          <h4 className='text-xl font-normal font-sans mt-4'>Made by true artisans</h4>
          <p className='text-xs mt-3'>Handmade crafted goods made with
          real passion and craftmanship</p>
        </div>

        <div className='w-[270px] h-[124px] ml-24 text-[#2A254B]'>
          <img src='/Purchase.png' alt='purchase-logo'/>
          <h4 className='text-xl font-normal font-sans mt-4'>Unbeatable prices</h4>
          <p className='text-xs mt-3'>For our materials and quality you won’t find better prices anywhere</p>
        </div>

        <div className='w-[270px] h-[124px] ml-24 text-[#2A254B]'>
          <img src='/Sprout.png' alt='sprout-logo'/>
          <h4 className='text-xl font-normal font-sans mt-4'>Recycled packaging</h4>
          <p className='text-xs mt-3'>We use 100% recycled packaging to ensure our footprint is manageable</p>
        </div>

      </div>
    </div>
 </main>
  )
}

export default Hero
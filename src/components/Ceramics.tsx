import React from 'react'

const NewCeramics = () => {
  return (
    <div className='ml-24 mt-20'>
        <div>
         <h1 className='text-[#2A254B] text-[32px] font-normal'>New Ceramics</h1>
        </div>

        <div className='grid grid-cols-4 mt-6'>
            <div className='w-[305px] h-[462px]'>
                <img src='/chair.png' alt='chair'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Dandy chair</h4>
                <p className='text-[#2A254B] text-sm'>£250</p>
            </div>

        <div className='w-[305px] h-[462px] mt-[0.5px]'>
                <img src='/vaseset.png' alt='Vase set'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>Rustic Vase Set</h4>
                <p className='text-[#2A254B] text-sm'>£155</p>
            </div>  

        <div className='w-[305px] h-[462px]'>
                <img src='/vase.png' alt='vase'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Silky Vase</h4>
                <p className='text-[#2A254B] text-sm'>£125</p>
            </div> 

        <div className='w-[305px] h-[462px]'>
                <img src='/lamp.png' alt='Lamp'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Lucy Lamp</h4>
                <p className='text-[#2A254B] text-sm'>£399</p>
            </div>
        </div>

        <div className='w-[170px] h-14 text-center ml-[500px]'>
        <button className='text-sm text-[#2A254B] bg-[#F9F9F9]'>View collection</button>
        </div>
    </div>


    
  )
}

export default NewCeramics;

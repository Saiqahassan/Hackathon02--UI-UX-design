import React from 'react'
import { LiaLinkedin } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AllProducts = () => {
  return (
    <header className=' items-center'>
       <Header/>

        <div className="w-full h-auto">
          <img className="w-full object-cover" src="/bg-cover.png" alt="cover Image" />
        </div>

        <div className='flex flex-row px-4'>
          <div className='flex'>
            <img src='/b1.png' alt='button 1'/>
            <img src='/b2.png' alt='button 2'/>
            <img src='/b3.png' alt='button 3'/>
            <img src='/b4.png' alt='button 4'/>

         <div className='px-64'>  
            <img src='/b5.png' alt='button 5'/>
            </div> 
           </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div className="w-full sm:w-[305px] h-[462px]">
             <img src="/chair.png" alt="chair" />
             <h4 className="text-lg font-normal leading-7 mt-3 text-[#2A254B]">
               The Dandy chair
             </h4>
             <p className="text-[#2A254B] text-sm">£250</p>
        </div>

        <div className="w-full sm:w-[305px] h-[462px]">
             <img src="/vaseset.png" alt="vase-set" />
             <h4 className="text-lg font-normal leading-7 mt-3 text-[#2A254B]">
             Rustic Vase Set
             </h4>
             <p className="text-[#2A254B] text-sm">£155</p>
        </div>

        <div className="w-full sm:w-[305px] h-[462px]">
             <img src="/vase.png" alt="silky vase" />
             <h4 className="text-lg font-normal leading-7 mt-3 text-[#2A254B]">
             The Silky Vase
             </h4>
             <p className="text-[#2A254B] text-sm">£125</p>
        </div>

        <div className="w-full sm:w-[305px] h-[462px]">
             <img src="/lamp.png" alt="lamp" />
             <h4 className="text-lg font-normal leading-7 mt-3 text-[#2A254B]">
             The Lucy Lamp
             </h4>
             <p className="text-[#2A254B] text-sm">£399</p>
        </div>

            <div className='w-full sm:w-[305px] h-[462px]'>
                <img src='/AP01.png' alt='AP01'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Dandy chair</h4>
                <p className='text-[#2A254B] text-sm'>£250</p>
            </div>

            <div className='w-full sm:w-[305px] h-[462px]'>
                <img src='/AP02.png' alt='AP02'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>Rustic Vase Set</h4>
                <p className='text-[#2A254B] text-sm'>£155</p>
            </div>

            <div className='w-full sm:w-[305px] h-[462px]'>
                <img src='/AP03.png' alt='AP03'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Silky Vase</h4>
                <p className='text-[#2A254B] text-sm'>£125</p>
            </div>

            <div className='w-full sm:w-[305px] h-[462px]'>
                <img src='/AP04.png' alt='AP04'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Lucy Lamp</h4>
                <p className='text-[#2A254B] text-sm'>£399</p>
            </div>

            <div className='w-full sm:w-[305px] h-[462px]'>
                <img src='/chair.png' alt='chair'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Dandy chair</h4>
                <p className='text-[#2A254B] text-sm'>£250</p>
            </div>

            <div className='w-full sm:w-[305px] h-[462px] mt-[0.5px]'>
                <img src='/vaseset.png' alt='Vase set'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>Rustic Vase Set</h4>
                <p className='text-[#2A254B] text-sm'>£155</p>
            </div>  

            <div className='w-full sm:w-[305px] h-[462px]'>
                <img src='/vase.png' alt='vase'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Silky Vase</h4>
                <p className='text-[#2A254B] text-sm'>£125</p>
            </div> 

            <div className='w-full sm:w-[305px] h-[462px]'>
                <img src='/lamp.png' alt='Lamp'/>
                <h4 className='text-lg font-normal leading-7 mt-3 text-[#2A254B]'>The Lucy Lamp</h4>
                <p className='text-[#2A254B] text-sm'>£399</p>
            </div>
        </div>

        <button className="text-sm text-[#2A254B] px-[600px] bg-[#F9F9F9] m-4 p-2 w-full sm:w-auto">
           View collection
        </button>

       <Footer/>

    </header>
  )
}

export default AllProducts;
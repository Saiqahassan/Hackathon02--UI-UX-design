import React from 'react'
import { LiaLinkedin } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='grid grid-cols-4 bg-[#2A254B] text-white p-20 h-[380px] w-full gap-12'>
      <div className='w-[120px] pl-8'>
        <h6 className=' text-sm '>Menu</h6>
        <p className='text-xs pt-2'>New arrivals</p>
        <p className='text-xs pt-2'>Best sellers</p>
        <p className='text-xs pt-2'>Recently viewed</p>
        <p className='text-xs pt-2'>Popular this week</p>
        <p className='text-xs pt-2'>All products</p>
        </div>

        <div className='w-[120px] pl-8'>
        <h6 className=' text-sm '>Categories</h6>
        <p className='text-xs pt-2'>Crockery</p>
        <p className='text-xs pt-2'>Furniture</p>
        <p className='text-xs pt-2'>Homeware</p>
        <p className='text-xs pt-2'>Plant pots</p>
        <p className='text-xs pt-2'>Chairs</p>
        <p className='text-xs pt-2'>Crockery</p>

        </div>

        <div className='w-[120px] pl-8'>
        <h6 className=' text-sm '>Our Company</h6>
        <p className='text-xs pt-2'>About us</p>
        <p className='text-xs pt-2'>Vacancies</p>
        <p className='text-xs pt-2'>Contact us</p>
        <p className='text-xs pt-2'>Privacy</p>
        <p className='text-xs pt-2'>Returns policy</p>
        </div>

        <div className='pl-8'>
          <h6 className=' text-sm '>Join our mailing list</h6>

          <div className='mt-6 flex '>
                <button className='w-[520px] h-7 text-[8px] text-left bg-[#F9F9F926] p-2'>your@email.com</button>
                <button className='bg-white text-[#2A254B] text-xs w-[134px] p-1'>Sign up</button>
               </div>
        </div>

        <footer className='p-7 flex w-[1440px] border-t-2 border-[1px solid #4E4D93]'>
            <p className='text-xs font-light w-[164px] h-[19px]'>Copyright 2022 Avion LTD</p>
            
            <div className='flex gap-4 ml-[800px]'>
            <LiaLinkedin />
            <RiFacebookBoxLine />
            <FaInstagram />
            <SlSocialSkype />
            <CiTwitter />
            <AiOutlinePinterest />

            </div>
        </footer>
    </div>
  )
}

export default Footer

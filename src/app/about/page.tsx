import React from 'react'
import { LiaLinkedin } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

const About = () => {
  return (
    <header>
        <div>
            <div className='flex bg-[#2A254B] w-full h-[41px] text-center items-center justify-center gap-2'>
                <img className='w-4 h-4'
                src='/Delivery.png' alt='Delivery logo'/>
                <h6 className='text-white text-xs font-normal'>Free delivery on all orders over £50 with code easter checkout</h6>
            </div>

           <div className='flex justify-between p-4 '>
            <h1 className='w-[65px] h-[30px] text-2xl font-normal text-[#22202E] '>Avion</h1>
            <nav className='space-x-9 text-xs flex font-normal text-[#726E8D]'>
                <a href='/about'>About us</a>
                <a href='/contact'>Contact</a>
                <a href='/blog'>Blog</a>

             <img className='w-4 h-4'
             src='/Search.png' alt='search-icon'/>
             <img className='w-4 h-4'
             src='/Shopping-cart.png' alt='Cart'/>
             <img className='w-4 h-4'
             src='/avatar.png' alt='avatar'/>
            </nav>

             </div>

        </div>

        <div className='h-[132px] mt-3'>
            <ul className='text-center'>
                <li className='space-x-10 text-sm font-normal text-[#726E8D]'>
                    <a href="/">All products</a>
                    <a href="/">Plant pots</a>
                    <a href="/">Ceramics</a>
                    <a href="/">Tables</a>
                    <a href="/">Chairs</a>
                    <a href="/">Crockery</a>
                    <a href="/">Tableware</a>
                    <a href="/">Cutlery</a>
                </li>
            </ul>
        </div>

        <div className='flex justify-between'>
            <h1 className='w-[704px] h-[100px] text-justify ml-16 text-4xl font-normal text-[#2A254B]'>A brand built on the love of craftmanship,
            quality and outstanding customer service</h1>
            <button className='w-[192px] h-14 bg-[#F9F9F9]'>View our products</button>
        </div>

        <div className='flex gap-4'>
            <img className='ml-16'
            src='/Text Block.png' alt='text'/>
            <img src='/Image Block.png' alt='Image'/>
        </div>

        <div className='flex mt-6 '>
            <div className=' ml-6'>
            <img className=''
            src='/Image2.png' alt='Image2'/>
            </div>

            <div className='font-sans w-[720px] h-[603px] bg-[#F9F9F9] '>
             <h6 className='w-[461px] h-[68px] text-2xl font-normal text-[#2A254B] ml-16 mt-16'>Our service isn't just personal, it's actually hyper personally exquisite</h6>
             <p className='w-[536px] h-[132px] mt-6 ml-16'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>

             <button className='text-[#2A254B] text-xs w-[150px] h-14 bg-white mt-44 ml-16'>Get in touch</button>
              </div> 

        </div>

        <div>
          <div className='m-28 text-center'>
           <h3 className='text-[#2A254B] text-2xl font-normal'>What makes our brand different</h3>
           </div>

           <div className='grid grid-cols-4 gap-4 ' >
            <div className='w-[270px] h-[124px] ml-24 text-[#2A254B] bg-[#F9F9F9] p-6'>
             <img src='/Delivery.png' alt='delivery-logo'/>
             <h4 className='text-xl font-normal font-sans mt-4'>Next day as standard</h4>
             <p className='text-xs mt-3'>Order before 3pm and get your order
             the next day as standard</p>
            </div>

            <div className='w-[270px] h-[124px] ml-24 text-[#2A254B] bg-[#F9F9F9] p-6'>
             <img src='/Checkmark.png' alt='checkmark-logo'/>
             <h4 className='text-xl font-normal font-sans mt-4'>Made by true artisans</h4>
             <p className='text-xs mt-3'>Handmade crafted goods made with
             real passion and craftmanship</p>
            </div>

            <div className='w-[270px] h-[124px] ml-24 text-[#2A254B] bg-[#F9F9F9] p-6'>
             <img src='/Purchase.png' alt='purchase-logo'/>
             <h4 className='text-xl font-normal font-sans mt-4'>Unbeatable prices</h4>
             <p className='text-xs mt-3'>For our materials and quality you won’t find better prices anywhere</p>
            </div>

            <div className='w-[270px] h-[124px] ml-24 text-[#2A254B] bg-[#F9F9F9] p-6'>
             <img src='/Sprout.png' alt='sprout-logo'/>
             <h4 className='text-xl font-normal font-sans mt-4'>Recycled packaging</h4>
             <p className='text-xs mt-3'>We use 100% recycled packaging to ensure our footprint is manageable</p>
            </div>

            </div>
        </div>

        <div className='text-center place-items-center justify-center mt-36 mb-16'>
               <div className='w-[571px] h-[114px]'>
                 <h3 className='text-[#2A254B] text-2xl font-normal'>Join the club and get the benefits</h3>
                 <p className='w-[320px] h-[48px] text-[11px] ml-32 py-3'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
               </div>

               <div className='mt-6 ml-32 flex '>
                <button className='w-[260px] h-7 text-[8px] text-left bg-[#F9F9F9]'>your@email.com</button>
                <button className='bg-[#2A254B] text-white text-xs w-[118px] p-2'>Sign up</button>
               </div>

        </div>

        <footer>
        <div className='grid grid-cols-5 bg-[#2A254B] text-white p-20 h-[350px] w-full gap-12'>
          <div>
            <h1 className='text-4xl font-normal leading-[50.4px]'>Avion</h1>
            <p className='w-[152px] h-[112px] text-sm mt-2 py-2'>21 New York Street New York City United States of America 432 34</p>
          </div>

          <div>
          <h6 className=' text-sm '>Social Links</h6>

           <div className='flex gap-3 mt-6'>
            <LiaLinkedin />
            <RiFacebookBoxLine />
            <FaInstagram />
            <SlSocialSkype />
            <CiTwitter />
            <AiOutlinePinterest />

            </div>

          </div>

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

        <div className='w-[120px] pl-8 mt-1'>
        <h6 className=' text-sm '>Our Company</h6>
        <p className='text-xs pt-2'>About us</p>
        <p className='text-xs pt-2'>Vacancies</p>
        <p className='text-xs pt-2'>Contact us</p>
        <p className='text-xs pt-2'>Privacy</p>
        <p className='text-xs pt-2'>Returns policy</p>
        </div>

        <div className=' w-[1440px] border-t-2 border-[1px solid #4E4D93]'>
          <p className='text-xs font-light w-[164px] h-[19px] mt-2'>Copyright 2022 Avion LTD</p>   
         </div>

        </div>


        </footer>
    </header>
  )
}

export default About;
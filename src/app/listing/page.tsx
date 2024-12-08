import React from 'react'
import { LiaLinkedin } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

const  ProductListing = () => {
  return (
    <header>
        <div>
            <div className='flex bg-[#2A254B] w-full h-[41px] text-center items-center justify-center gap-2'>
                <img className='w-4 h-4'
                src='/Delivery.png' alt='Delivery logo'/>
                <h6 className='text-white text-xs font-normal'>Free delivery on all orders over £50 with code easter checkout</h6>
            </div>

            <div className='flex justify-between p-8'>
            <h1 className='w-[65px] h-[30px] text-2xl font-normal text-[#22202E]'>Avion</h1>
            <nav className='space-x-14 text-xs flex font-normal text-[#726E8D] text-center justify-center items-center'>
                    <a href="/">Plant pots</a>
                    <a href="/">Ceramics</a>
                    <a href="/">Tables</a>
                    <a href="/">Chairs</a>
                    <a href="/">Crockery</a>
                    <a href="/">Tableware</a>
                    <a href="/">Cutlery</a>
            <div className='flex gap-3'>
             <img className='w-4 h-4'
             src='/Search.png' alt='search-icon'/>
             <img className='w-4 h-4'
             src='/Shopping-cart.png' alt='Cart'/>
             <img className='w-4 h-4'
             src='/avatar.png' alt='avatar'/>

            </div>
              
             </nav>
            </div>   

        </div>

        <div className='flex'>
            <div className='w-[721px] h-[759px]'>
            <img src='/Image Left.png' alt='Image'/>
            </div>

            <div className='p-14 w-[522px] text-[#2A254B]'>
                <h1 className='text-3xl'>The Dandy Chair</h1>
                <p className='text-2xl'>£250</p>

                <h6 className='text-base mt-8'>Description</h6>
                <p className='text-xs mt-5'>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                <ul className='list-disc text-xs p-4'>
                    <li>Premium material</li>
                    <li> Handmade upholstery</li>
                    <li> Quality timeless classic</li>
                     
                </ul>

                <h6 className='text-base mt-8'>Dimensions</h6>
                
                <div className='grid grid-cols-3 grid-rows-2 mt-3 text-xs'>
                <div>
                    <p>Height</p>
                    <p>110cm</p>
                </div>

                <div>
                    <p>Width</p>
                    <p>75cm</p>
                </div>

                <div>
                    <p>Depth</p>
                    <p>50cm</p>
                </div>
            </div>

            <div className='flex text-xs items-center gap-6 space-x-12'>
                <p>Amount:</p>
                <img src='/Stepper.png' alt='Stepper'/>

            <div className=' w-[160px] h-14 text-[79px]'>
                <button className='bg-[#2A254B] text-white text-xs'>Add to Cart</button>
                </div>
            </div>
        </div>
            </div>

       <div className='ml-8 mt-20'>
        <div>
         <h1 className='text-[#2A254B] text-[32px] font-normal'>You might also like</h1>
        </div>

        <div className='grid grid-cols-4 mt-6 gap-16'>
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

export default  ProductListing;

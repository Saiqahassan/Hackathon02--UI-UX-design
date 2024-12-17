import React from 'react'
import { LiaLinkedin } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";



const  ProductListing = () => {
  return (
    <div>
        <div className="flex bg-[#2A254B] md:w-full h-[41px] text-center items-center justify-center gap-2">
          <img className="md:w-4 md:h-4" src="/Delivery.png" alt="Delivery logo" />
          <h6 className="text-white md:text-sm font-normal sm:text-xs">
            Free delivery on all orders over £50 with code easter checkout
          </h6>
        </div>

        <div className="flex">
          <div className='p-7 ml-6'>
          <h1 className="w-[65px] h-[30px] sm:text-center sm:text-base lg:text-2xl font-normal text-[#22202E]">
            Avion
          </h1>
          </div>

          <div className='flex'>
          <ul className="text-center mt-9 px-36">
            <li className="justify-center md:space-x-7 lg:space-x-10 text-base text-[#726E8D]">
            <a href="/">Plant pots</a>
            <a href="/">Ceramics</a>
            <a href="/">Tables</a>
            <a href="/">Chairs</a>
            <a href="/">Crockery</a>
            <a href="/">Tableware</a>
            <a href="/">Cutlery</a>
          </li>
        </ul>

        <div className='flex mt-10 space-x-4 px-16'>
            <img className="w-4 h-4" src="/Search.png" alt="search-icon" />
            <img className="w-4 h-4" src="/Shopping-cart.png" alt="Cart" />
            <img className="w-4 h-4" src="/avatar.png" alt="avatar" />

        </div>

          </div>

        </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-[721px] h-auto lg:h-[759px]'>
          <img src='/Image Left.png' alt='Chair'/>
        </div>

        <div className="p-6 sm:p-10 lg:p-14 w-full lg:w-[522px] text-[#2A254B]">
         <h1 className="text-xl sm:text-2xl lg:text-3xl">The Dandy Chair</h1>
         <p className="text-lg sm:text-xl lg:text-2xl mt-2">£250</p>

         <h6 className="text-base mt-6 lg:mt-8">Description</h6>
         <p className="text-sm sm:text-xs mt-4 lg:mt-5">
          A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
         </p>
           <ul className="list-disc text-sm sm:text-xs p-4">
             <li>Premium material</li>
             <li>Handmade upholstery</li>
             <li>Quality timeless classic</li>
           </ul>
          
           <h6 className="text-base mt-6 lg:mt-8">Dimensions</h6>

   <div className="grid grid-cols-3 grid-rows-2 mt-3 text-sm sm:text-xs gap-2">
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

    <div className="flex flex-col sm:flex-row sm:items-center text-sm sm:text-xs mt-6 lg:mt-8 gap-6">
      <p>Amount:</p>
      <img className="w-[80px] sm:w-auto" src="/Stepper.png" alt="Stepper" />

      <div className="w-full sm:w-[160px] h-10 sm:h-14">
        <button className="w-full bg-[#2A254B] text-white text-xs sm:text-sm py-2 mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  </div>


         </div>

         <div className="ml-4 sm:ml-8 mt-10 sm:mt-20">
           <div>
             <h1 className="text-[#2A254B] text-xl sm:text-2xl lg:text-[32px] font-normal">
              You might also like
              </h1>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-16 mt-6">
    <div className="w-full max-w-[305px] mx-auto sm:mx-0 h-auto">
      <img className="w-full h-auto" src="/chair.png" alt="chair" />
      <h4 className="text-base sm:text-lg font-normal leading-7 mt-3 text-[#2A254B]">
        The Dandy chair
      </h4>
      <p className="text-[#2A254B] text-sm">£250</p>
    </div>

    <div className="w-full max-w-[305px] mx-auto sm:mx-0 h-auto">
      <img className="w-full h-auto" src="/vaseset.png" alt="Vase set" />
      <h4 className="text-base sm:text-lg font-normal leading-7 mt-3 text-[#2A254B]">
        Rustic Vase Set
      </h4>
      <p className="text-[#2A254B] text-sm">£155</p>
    </div>

    <div className="w-full max-w-[305px] mx-auto sm:mx-0 h-auto">
      <img className="w-full h-auto" src="/vase.png" alt="vase" />
      <h4 className="text-base sm:text-lg font-normal leading-7 mt-3 text-[#2A254B]">
        The Silky Vase
      </h4>
      <p className="text-[#2A254B] text-sm">£125</p>
    </div>

    <div className="w-full max-w-[305px] mx-auto sm:mx-0 h-auto">
      <img className="w-full h-auto" src="/lamp.png" alt="Lamp" />
      <h4 className="text-base sm:text-lg font-normal leading-7 mt-3 text-[#2A254B]">
        The Lucy Lamp
      </h4>
      <p className="text-[#2A254B] text-sm">£399</p>
    </div>
  </div>
</div>

       <div className='w-[170px] h-14 text-center ml-[500px] mt-12'>
        <button className='text-sm text-[#2A254B] bg-[#F9F9F9]'>View collection</button>
        </div>

        <div>
    <div className="m-8 md:m-28 text-center">
          <h3 className="text-[#2A254B] text-lg md:text-2xl font-normal">
            What makes our brand different
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 px-4 md:px-16">
          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Delivery.png" alt="delivery-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Next day as standard
            </h4>
            <p className="text-xs mt-3">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>

          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Checkmark.png" alt="checkmark-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Made by true artisans
            </h4>
            <p className="text-xs mt-3">
              Handmade crafted goods made with real passion and craftsmanship
            </p>
          </div>

          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Purchase.png" alt="purchase-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Unbeatable prices
            </h4>
            <p className="text-xs mt-3">
              For our materials and quality you won't find better prices
              anywhere
            </p>
          </div>

          <div className="w-full md:w-[270px] h-auto text-[#2A254B] mx-auto">
            <img src="/Sprout.png" alt="sprout-logo" />
            <h4 className="text-lg md:text-xl font-normal font-sans mt-4">
              Recycled packaging
            </h4>
            <p className="text-xs mt-3">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-36 px-4">
        <h3 className="text-[#2A254B] text-lg sm:text-xl md:text-2xl font-normal">
          Join the club and get the benefits
        </h3>
        <p className="text-sm mt-4 mx-auto max-w-md">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores, and more.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button className="w-full sm:w-auto bg-[#F9F9F9] px-4 py-2 text-sm">
            your@email.com
          </button>
          <button className="bg-[#2A254B] text-white px-4 py-2 text-sm">
            Sign up
          </button>
        </div>
      </div>

<footer className='mt-7'>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-[#2A254B] text-white p-8 sm:p-12 lg:p-20 h-auto lg:h-[350px] w-full gap-6 sm:gap-8 lg:gap-12">
    <div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight lg:leading-[50.4px]">
        Avion
      </h1>
      <p className="w-full sm:w-[152px] text-xs sm:text-sm mt-2 py-2">
        21 New York Street New York City United States of America 432 34
      </p>
    </div>

    <div>
      <h6 className="text-sm">Social Links</h6>
      <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6">
        <LiaLinkedin />
        <RiFacebookBoxLine />
        <FaInstagram />
        <SlSocialSkype />
        <CiTwitter />
        <AiOutlinePinterest />
      </div>
    </div>

    <div className="w-full sm:w-[120px]">
      <h6 className="text-sm">Menu</h6>
      <p className="text-xs pt-2">New arrivals</p>
      <p className="text-xs pt-2">Best sellers</p>
      <p className="text-xs pt-2">Recently viewed</p>
      <p className="text-xs pt-2">Popular this week</p>
      <p className="text-xs pt-2">All products</p>
    </div>

    <div className="w-full sm:w-[120px]">
      <h6 className="text-sm">Categories</h6>
      <p className="text-xs pt-2">Crockery</p>
      <p className="text-xs pt-2">Furniture</p>
      <p className="text-xs pt-2">Homeware</p>
      <p className="text-xs pt-2">Plant pots</p>
      <p className="text-xs pt-2">Chairs</p>
      <p className="text-xs pt-2">Crockery</p>
    </div>

    <div className="w-full sm:w-[120px]">
      <h6 className="text-sm">Our Company</h6>
      <p className="text-xs pt-2">About us</p>
      <p className="text-xs pt-2">Vacancies</p>
      <p className="text-xs pt-2">Contact us</p>
      <p className="text-xs pt-2">Privacy</p>
      <p className="text-xs pt-2">Returns policy</p>
    </div>

    <div className="col-span-full border-t-[1px] border-[#4E4D93] mt-4">
      <p className="text-xs font-light w-full text-center sm:text-left sm:w-[164px] h-auto mt-2">
        Copyright 2022 Avion LTD
      </p>
    </div>
  </div>
</footer>


  </div>
  

  )
}

export default ProductListing;

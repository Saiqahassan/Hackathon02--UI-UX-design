import React from 'react';
import { LiaLinkedin } from 'react-icons/lia';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';
import { SlSocialSkype } from 'react-icons/sl';
import { CiTwitter } from 'react-icons/ci';
import { AiOutlinePinterest } from 'react-icons/ai';

const About = () => {
  return (
    <header>
      <div>
        {/* Top Banner */}
        <div className="flex bg-[#2A254B] w-full h-[41px] text-center items-center justify-center gap-2">
          <img className="w-4 h-4" src="/Delivery.png" alt="Delivery logo" />
          <h6 className="text-white text-xs font-normal">
            Free delivery on all orders over £50 with code easter checkout
          </h6>
        </div>

        {/* Navbar */}
        <div className="flex justify-between p-4">
          <h1 className="w-[65px] h-[30px] text-2xl font-normal text-[#22202E]">
            Avion
          </h1>
          <nav className="space-x-4 md:space-x-9 text-xs flex font-normal text-[#726E8D]">
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
            <img className="w-4 h-4" src="/Search.png" alt="search-icon" />
            <img className="w-4 h-4" src="/Shopping-cart.png" alt="Cart" />
            <img className="w-4 h-4" src="/avatar.png" alt="avatar" />
          </nav>
        </div>
      </div>

      {/* Submenu */}
      <div className="h-[132px] mt-3">
        <ul className="text-center">
          <li className="space-x-4 sm:space-x-6 lg:space-x-10 text-sm font-normal text-[#726E8D]">
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

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start px-6 lg:px-16 mt-6">
        <h1 className="text-center lg:text-left text-2xl lg:text-4xl font-normal text-[#2A254B]">
          A brand built on the love of craftmanship, quality, and outstanding
          customer service
        </h1>
        <button className="w-[192px] h-14 bg-[#F9F9F9] mt-4 lg:mt-0">
          View our products
        </button>
      </div>

      {/* Images */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6 px-6 lg:px-16">
        <img className="w-full lg:w-auto" src="/Text Block.png" alt="text" />
        <img className="w-full lg:w-auto" src="/Image Block.png" alt="Image" />
      </div>

      {/* Two-Column Section */}
      <div className="flex flex-col lg:flex-row mt-6 px-6 lg:px-16">
        <div className="w-full lg:w-auto">
          <img src="/Image2.png" alt="Image2" />
        </div>
        <div className="font-sans w-full lg:w-[720px] h-auto bg-[#F9F9F9] p-6">
          <h6 className="text-2xl font-normal text-[#2A254B]">
            Our service isn't just personal, it's actually hyper personally
            exquisite
          </h6>
          <p className="mt-6">
            When we started Avion, the idea was simple. Make high-quality
            furniture affordable and available for the mass market. Handmade,
            and lovingly crafted furniture and homeware is what we live, breathe
            and design so our Chelsea boutique became the hotbed for the London
            interior design community.
          </p>
          <button className="text-[#2A254B] text-xs w-[150px] h-14 bg-white mt-6">
            Get in touch
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="text-center m-16">
        <h3 className="text-[#2A254B] text-2xl font-normal">
          What makes our brand different
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 lg:px-16">
        
          <div className="w-full lg:w-[270px] text-[#2A254B] bg-[#F9F9F9] p-6">
            <img src="/Delivery.png" alt="logo" />
            <h4 className="text-xl font-normal mt-4">Next day as standard</h4>
            <p className="text-xs mt-3">Order before 3pm and get your order
            the next day as standard</p>
          </div>

          <div className="w-full lg:w-[270px] text-[#2A254B] bg-[#F9F9F9] p-6">
            <img src="/Checkmark.png" alt="logo" />
            <h4 className="text-xl font-normal mt-4">Made by true artisans</h4>
            <p className="text-xs mt-3">Handmade crafted goods made with
            real passion and craftmanship </p>
          </div>
        
          <div className="w-full lg:w-[270px] text-[#2A254B] bg-[#F9F9F9] p-6">
            <img src="/Purchase.png" alt="logo" />
            <h4 className="text-xl font-normal mt-4">Unbeatable prices</h4>
            <p className="text-xs mt-3">For our materials and quality you won't find better prices anywhere </p>
          </div>

          <div className="w-full lg:w-[270px] text-[#2A254B] bg-[#F9F9F9] p-6">
            <img src="/Sprout.png" alt="logo" />
            <h4 className="text-xl font-normal mt-4">Recycled packaging</h4>
            <p className="text-xs mt-3">We use 100% recycled packaging to ensure our footprint is manageable </p>
          </div>

      </div>

      {/* Footer */}
      <footer>
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

    </header>
  );
};

export default About;

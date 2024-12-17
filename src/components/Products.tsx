import React from 'react';
import { LiaLinkedin } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import Footer from './Footer';

const Products = () => {
  return (
    <div className="mt-20">
      <div className="ml-4 sm:ml-12 md:ml-16">
        <h1 className="text-[#2A254B] text-[24px] sm:text-[28px] md:text-[32px] font-normal">
          Our Popular products
        </h1>
      </div>

      <div className="flex flex-wrap justify-start gap-8 mt-6 ml-4 sm:ml-10 md:ml-16 ">
        <div className="w-[515px] h-[300px]">
          <img src="/large-sofa2.jpg" alt="sofa" />
          <h4 className="text-lg font-normal leading-7 mt-3 text-[#2A254B]">
            The Poplar suede sofa
          </h4>
          <p className="text-[#2A254B] text-sm">£980</p>
        </div>

        <div className="w-[305px] h-[375px]">
          <img src="/chair.png" alt="chair" />
          <h4 className="text-lg font-normal leading-7 mt-3 text-[#2A254B]">
            The Dandy chair
          </h4>
          <p className="text-[#2A254B] text-sm">£250</p>
        </div>

        <div className="w-[305px] h-[375px]">
          <img src="/chair2.png" alt="chair2" />
          <h4 className="text-lg font-normal leading-7 mt-3 text-[#2A254B]">
            The Dandy chair
          </h4>
          <p className="text-[#2A254B] text-sm">£250</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <button className="text-sm text-[#2A254B] bg-[#F9F9F9] px-6 py-2">
          View collection
        </button>
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

      <div className="mt-20 flex flex-col md:flex-row items-center gap-6 md:gap-12 px-6 sm:px-12 md:px-24">
        <div>
          <img src="/Top Content.png" alt="Content" />
          <button className="text-[#2A254B] text-xs bg-[#F9F9F9] px-6 py-2 mt-6">
            Get in touch
          </button>
        </div>
        <div>
          <img src="/Image.png" alt="Image" />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Products;

import React from 'react';
import { LiaLinkedin } from "react-icons/lia";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialSkype } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[#2A254B] text-white p-10 md:p-20 gap-8 md:gap-12 w-full">
      <div className="w-full md:w-[120px] pl-0 md:pl-8">
        <h6 className="text-sm">Menu</h6>
        <p className="text-xs pt-2">New arrivals</p>
        <p className="text-xs pt-2">Best sellers</p>
        <p className="text-xs pt-2">Recently viewed</p>
        <p className="text-xs pt-2">Popular this week</p>
        <p className="text-xs pt-2">All products</p>
      </div>

      <div className="w-full md:w-[120px] pl-0 md:pl-8">
        <h6 className="text-sm">Categories</h6>
        <p className="text-xs pt-2">Crockery</p>
        <p className="text-xs pt-2">Furniture</p>
        <p className="text-xs pt-2">Homeware</p>
        <p className="text-xs pt-2">Plant pots</p>
        <p className="text-xs pt-2">Chairs</p>
        <p className="text-xs pt-2">Crockery</p>
      </div>

      <div className="w-full md:w-[120px] pl-0 md:pl-8">
        <h6 className="text-sm">Our Company</h6>
        <p className="text-xs pt-2">About us</p>
        <p className="text-xs pt-2">Vacancies</p>
        <p className="text-xs pt-2">Contact us</p>
        <p className="text-xs pt-2">Privacy</p>
        <p className="text-xs pt-2">Returns policy</p>
      </div>

      <div className="pl-0 md:pl-8">
        <h6 className="text-sm">Join our mailing list</h6>
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="w-full sm:w-auto sm:flex-1 h-7 text-[8px] text-left bg-[#F9F9F926] p-2">
            your@email.com
          </button>
          <button className="bg-white text-[#2A254B] text-xs w-full sm:w-[82px] p-1">
            Sign up
          </button>
        </div>
      </div>

      <div className="p-2 md:p-7 flex flex-col md:flex-row items-center justify-between border-t-[1px] border-[#4E4D93]">
        <div>
        <p className="w-[250px] text-xs font-light">
          Copyright 2022 Avion LTD
        </p>
        </div>

        <div className="flex px-[700px] gap-4 mt-4 md:mt-0">
          <LiaLinkedin />
          <RiFacebookBoxLine />
          <FaInstagram />
          <SlSocialSkype />
          <CiTwitter />
          <AiOutlinePinterest />
        </div>
      </div>
    </div>
  );
};

export default Footer;

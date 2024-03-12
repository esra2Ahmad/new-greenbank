import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" w-[1530px] h-[371px]  bg-gray2/5  rounded-[18px] relative   backdrop-blur   ">
      <div className="flex  gap-[150px]">
      <div>
      <div className="flex gap-[8px] ml-[105px] pt-[68px]">
      <Image
        src="/images/Exclude.png"
        alt="logo"
        height={24}
        width={24}
        ></Image>
        
      <p className="text-white font-M PLUS 1 font-bold  text-[20px]">GreenBank</p>
      </div>
      <p className=" font-M PLUS 1 text-gray text-[16px] tracking-normal ml-[105px] mt-4">Discover the power of our secure and <br/>rewarding credit cards</p>
    </div>
    <div className="w-[816px] flex justify-between pt-[68px]">
        <ul className=" flex flex-col gap-4">
          <Link href="/about">  <li className="font-bold font-M PLUS 1 text-[16px] text-white">About us</li></Link> 
           <Link  href="/about"> <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Investors</li></Link> 
           <Link  href="/about"> <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Featurees</li></Link> 
           <Link  href="/about"><li className="font-normal font-M PLUS 1 text-[16px] text-gray">Book a demo</li></Link> 
           <Link  href="/about"> <li className="font-normal font-M PLUS 1 text-[16px] text-gray">secuirty</li></Link> 
        </ul>
        <ul className=" flex flex-col gap-4">
        <Link  href="/about"> <li className="font-bold font-M PLUS 1 text-[16px] text-white">Products</li></Link>
        <Link  href="/about"> <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Credits Cards</li></Link>
        <Link  href="/about"> <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Gift Cards</li></Link>
        <Link  href="/about"> <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Savings accounts</li></Link>
        <Link  href="/about">  <li className="font-normal font-M PLUS 1 text-[16px] text-gray">NFT</li></Link>
        </ul>
        <ul className=" flex flex-col gap-4">
        <Link  href="/about">  <li className="font-bold font-M PLUS 1 text-[16px] text-white">Useful Links</li></Link>
        <Link  href="/about">  <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Free rewards</li></Link>
        <Link  href="/about"> <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Documentation</li></Link>
        <Link  href="/about">  <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Affiliate program</li></Link>
          
        </ul>
        <ul className=" flex flex-col gap-4">
        <Link  href="/about">   <li className="font-bold font-M PLUS 1 text-[16px] text-white">Social</li></Link>
        <Link  href="/about">  <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Changelog</li></Link>
        <Link  href="/about">  <li className="font-normal font-M PLUS 1 text-[16px] text-gray">License</li></Link>
        <Link  href="/about">   <li className="font-normal font-M PLUS 1 text-[16px] text-gray">Site Maps</li></Link>
        <Link  href="/about">   <li className="font-normal font-M PLUS 1 text-[16px] text-gray">News</li></Link>
        </ul>

    </div>
    
    </div>
    
    <div className=" flex justify-between  pt-[50px] mx-[115px]">
        <p className="font-normal font-poppins text-[12px] text-gray">copyright 2023 DoraDesign All Rights Reserved</p>
        <p className="font-normal font-poppins text-[12px] text-gray">This page uses cookies. See cookies details here </p>
    </div>
  
    </div>
  );
};

export default Footer;
import React from "react";
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
  return (
    <div className="flex justify-between  w-[1240px] ml-[100px] pt-[32px]  ">

      <div className="flex gap-[8px]">
      <Image
        src="/images/Exclude.png"
        alt="logo"
        height={24}
        width={24}
        ></Image>
        
      <p className="text-white font-M PLUS 1 font-bold  text-[20px]">GreenBank</p>
      </div>
      < ul className=" flex justify-between gap-11 font-M PLUS 1 text-white text-[16px] font-medium list-none">
        <li><Link href="/about">why us</Link></li>
        <li><Link href="/about">services</Link></li>
        <li><Link href="about">Our process</Link></li>
        <li><Link href="about">Payement</Link></li>
        <li><Link href="about">FAQS</Link></li>
        </ul>
        <div>
        <button className=" w-[108px] h-[38px] rounded-[25px] text-[16px] border-green text-green font-M PLUS 1 font-bold border-[2px] ">
        <Link href="/about">contact</Link>
        </button>
        
       </div>
       
    </div>
  );
};

export default Navbar;

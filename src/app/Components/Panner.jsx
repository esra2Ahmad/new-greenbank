import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const Panner = () => {
  return (

    <div className="flex  justify-between relative mt-[200px] ml-[100px]">
      <div>
        <h1 className=" font-M PLUS 1 font-bold text-[56px] text-white  ">
          Discover the Perfect <br />
          Credit Card for You
        </h1>
        <Image
          src="/images/Vector 4.png"
          width={365}
          height={90}
          alt="vector"
          className="mt-[-85px] ml-[-20px]"
        />
        <p className=" w-[604px] text-[18px] font-M PLUS 1  text-gray  tracking-wider">
          Discover the power of our secure and rewarding credit
          <br /> cards. Explore our range of credit cards and take control
          <br /> of your finances today.
        </p>
        <div className="w-[196px] h-[56px] bg-green rounded-[65px] mt-[16px] flex gap-[12px] items-center">
          <p className="ml-[32px]  text-white font-M PLUS 1 text-[18px]">
            {" "}
            Get Started
          </p>
          <GoArrowRight className=" text-[25px] text-white" />
        </div>
        
        <div className="flex justify-between w-[313px]">
          
          <div className="flex mt-8">
        <Image
          src="/images/Ellipse.png"
          width={100}
          height={100}
          alt="Ellipse"
          className="rounded-full"
        />
         <Image
          src="/images/Ellipse(1).png"
          width={100}
          height={100}
          alt="Ellipse(1)"
          className="rounded-full relative left-[-10px]"
        />
         <Image
          src="/images/Ellipse(2).png"
          width={100}
          height={100}
          alt="Ellipse(1)"
          className="rounded-full relative left-[-20px]"
        />
        </div>
        <div className="mt-8">
          <h3 className=" text-[16px] font-bold font-M PLUS 1 text-white ">
            10.2K+
          </h3>
          <p className=" text-[12px] font-normal font-M PLUS 1 text-gray ">Active useres around the world</p>
        </div>
      
        </div>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-8 h-8  relative top-[-100px] left-[400px]"/>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-5 h-5  relative top-[150px] left-[90px]"/>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-6 h-6 relative top-[100px] left-[1000px]"/>
      </div>

      <div className="bg-green w-[562px] h-[532px] rounded-full relative left-[125px] ">
        <div className="w-[551px] h-[349px] rotate-[15deg] relative left-[-260px] top-[40px] border-[2px] backdrop-blur-xl bg-white/25     border-gray  rounded-[18px]  shadow  drop-shadow-md ">
          <div className=" w-[461px] h-[274px mt-[39px] mx-[37px] absloute bg-transparent">
           <div className=" flex  justify-between">
            <div>
           <Image
              src="/images/Exclude(1).png"
              width={50}
              height={70}
              className=" -rotate-[15deg]"
              alt="exclude"
            />
            </div>
            <div>
            <Image
              src="/images/Vector (Stroke).png"
              width={30}
              height={40}
              className=" -rotate-[15deg]"
              alt="wifi"
            />
            </div>
           </div>
           <p className="mt-6 text-[16px]  font-M PLUS 1 font-semibold text-gray1">Credit Card No.</p>
           <div className="mt-4 flex justify-between w-[382px] text-[32px] text-white font-M PLUS 1 font-bold">
            <p>1602</p>
            <p>0911</p>
            <p>2019</p>
            <p>2021</p>
           </div>
           <div className="mt-8 flex justify-between w-[182px] text-[14px] text-gray1 font-M PLUS 1 font-semibold">
            <p>Name</p>
            <p>Exp.</p> 
           </div>
           <div className="flex items-center justify-between w-[462px] text-[14px] text-white font-M PLUS 1 font-semibold">
           <div className=" flex justify-between w-[182px] text-[14px] text-white font-M PLUS 1 font-semibold">
            <p>REHAN RAIHAN</p>
            <p>09/11</p> 
           </div>
            <Image
              src="/images/Vector.png"
              width={80}
              height={80}
              className=" -rotate-[15deg]"
              alt="exclude"
            />
           </div>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Panner;

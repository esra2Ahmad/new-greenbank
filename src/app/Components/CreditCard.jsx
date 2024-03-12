import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";

const CreditCard = () => {
  return (
    <div className="w-[1350px] h-[519px]  ml-[110px] mt-[100px] flex justify-between">
      <div className="w-[604px] h-[292px] ">
        <h1 className="text-white font-bold font-M PLUS 1 text-[40px] pt-[115px]">
          Design your personalized
          <br /> credit card.
        </h1>
        <p className="text-gray2  font-popins text-[16px] pt-[20px]">
          You have the freedom to personalize the design of <br />
          your credit card, ensuring a truly unique experience
          <br /> that makes you feel extraordinary
        </p>
        <button className=" w-[213px] h-[48px] rounded-[25px] text-[16px] font-medium mt-[20px] flex gap-4 items-center justify-center border-green bg-green text-white font-M PLUS 1  border-[2px]  ">
          create new card
        <Link href="/about">  <GoArrowRight className=" text-[20px] text-white" /> </Link>
        </button>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-7 h-7 relative top-[-290px] left-[1260px] -rotate-[25deg]"/>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-4 h-4 relative top-[-250px] left-[420px] -rotate-[25deg]"/>

      </div>
      <Image src="/images/Star 17.png" alt="star"  width={100} height={50}    className="w-[300px] h-[300px] mt-[200px]  mr-[-75px] z-50" />
      <div className=" flex flex-col h-[1000px] z-10">
        <div className="w-[435px] h-[254px]  -skew-x-[30deg]  border-[3px] z-20  backdrop-blur bg-gray/20  border-gray rounded-[32px]  mr-[100px] relative top-[10px] ">
        <div className=" w-[350px] h-[214]px mt-[19px] mx-[37px] absloute bg-transparent">
           <div className=" flex  justify-between">
            <div>
           <Image
              src="/images/Exclude(1).png"
              width={40}
              height={50}
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
           <p className="mt-[4px] text-[14px]  font-M PLUS 1 font-semibold text-gray1">Credit Card No.</p>
           <div className="mt-4 flex justify-between w-[282px] text-[22px] text-white font-M PLUS 1 font-bold">
            <p>1602</p>
            <p>0911</p>
            <p>2019</p>
            <p>2021</p>
           </div>
           <div className="mt-6 flex justify-between w-[142px] text-[14px] text-gray1 font-M PLUS 1 font-semibold">
            <p>Name</p>
            <p>Exp.</p> 
           </div>
           <div className="flex items-center justify-between w-[362px] text-[14px] text-white font-M PLUS 1 font-semibold">
           <div className=" flex justify-between w-[182px] text-[14px] text-white font-M PLUS 1 font-semibold">
            <p>REHAN RAIHAN</p>
            <p>09/11</p> 
           </div>
            <Image
              src="/images/Vector.png"
              width={50}
              height={40}
              className=" -rotate-[15deg]"
              alt="exclude"
            />
           </div>
          </div>
        </div>
        <div className="w-[435px] h-[254px]  -skew-x-[30deg]     bg-green     rounded-[32px]  relative top-[-150px]  mr-[30px] z-10 ">
        <div className=" w-[350px] h-[214]px mt-[19px] mx-[37px] absloute bg-transparent">
           <div className=" flex  w-[360px] justify-between">
            <div>
           <Image
              src="/images/Exclude(2).png"
              width={40}
              height={50}
              className=" -rotate-[15deg]"
              alt="exclude"
            />
            </div>
            <div>
            <Image
              src="/images/Vector (Stroke)(1).png"
              width={30}
              height={40}
              className=" -rotate-[15deg] "
              alt="wifi"
            />
            </div>
           </div>
           <p className="mt-[4px] text-[14px]  font-M PLUS 1 font-semibold text-gray4">Credit Card No.</p>
           <div className="mt-4 flex justify-between w-[282px] text-[22px] text-gray4 font-M PLUS 1 font-bold">
            <p>1602</p>
            <p>0911</p>
            <p>2019</p>
            <p>2021</p>
           </div>
           <div className="mt-6 flex justify-between w-[142px] text-[14px] text-gray4 font-M PLUS 1 font-semibold">
            <p>Name</p>
            <p>Exp.</p> 
           </div>
           <div className="flex items-center justify-between w-[362px] text-[14px] text-gray4 font-M PLUS 1 font-semibold">
           <div className=" flex justify-between w-[182px] text-[14px] text-gray4 font-M PLUS 1 font-semibold">
            <p>REHAN RAIHAN</p>
            <p>09/11</p> 
           </div>
            <Image
              src="/images/Vector(1).png"
              width={50}
              height={40}
              className=" -rotate-[5deg]"
              alt="exclude"
            />
           </div>
          </div>
        </div>
        <div className="w-[435px] h-[254px]  -skew-x-[30deg]     bg-white     rounded-[32px]  relative top-[-280px]  mr-[150px]  ">
        <div className=" w-[360px] h-[214]px mt-[19px] mx-[37px] absloute bg-transparent">
           <div className=" flex  justify-between">
            <div>
           <Image
              src="/images/Exclude(1).png"
              width={40}
              height={50}
              className=" -rotate-[15deg]"
              alt="exclude"
            />
            </div>
            <div>
            <Image
              src="/images/Vector (Stroke)(3).png"
              width={30}
              height={40}
              className=" -rotate-[15deg]"
              alt="wifi"
            />
            </div>
           </div>
           <p className="mt-[4px] text-[14px]  font-M PLUS 1 font-semibold text-gray1">Credit Card No.</p>
           <div className="mt-8 flex justify-between w-[282px] text-[22px] text-black font-M PLUS 1 font-bold">
            <p>1602</p>
            <p>0911</p>
            <p>2019</p>
            <p>2021</p>
           </div>
           <div className="mt-6 flex justify-between w-[142px] text-[14px] text-gray1 font-M PLUS 1 ">
            <p>Name</p>
            <p>Exp.</p> 
           </div>
           <div className="flex items-center justify-between w-[362px] text-[14px] text-white font-M PLUS 1 font-semibold">
           <div className=" flex justify-between w-[182px] text-[14px] text-black font-M PLUS 1 font-semibold">
            <p>REHAN RAIHAN</p>
            <p>09/11</p> 
           </div>
            <Image
              src="/images/Vector(2).png"
              width={50}
              height={40}
              className=" -rotate-[5deg]"
              alt="exclude"
            />
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;

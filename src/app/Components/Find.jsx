import React from "react";
import Image from "next/image";
import Link from "next/link";

const Find = () => {
  return (
    <div className=" w-[1240px] h-[500px] ml-[115px] relative  rotate-[-25px] flex items-center">
              <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-8 h-8 relative top-[-340px] left-[-10px] rotate-[25deg]"/>
              <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-8 h-8 relative top-[-310px] left-[938px]   -rotate-[25deg]"/>
      <div className="flex flex-col">
        <div className="w-[422px] h-[234px]  skew-x-[5deg]  border-[3px] z-20  backdrop-blur bg-gray/20  border-gray rounded-[32px]  mr-[100px] relative top-[10px]  ">
          <div className=" w-[331px] h-[104]px mt-[19px] mx-[37px] absloute bg-transparent">
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
                  width={20}
                  height={30}
                  className=" -rotate-[15deg]"
                  alt="wifi"
                />
              </div>
            </div>
            <p className="mt-6 text-[15px]  font-M PLUS 1 font-semibold text-gray1">
              Credit Card No.
            </p>
            <div className="mt-4 flex justify-between w-[232px] text-[21px] text-white font-M PLUS 1 font-bold">
              <p>1602</p>
              <p>0911</p>
              <p>2019</p>
              <p>2021</p>
            </div>
            <div className="mt-[20px] flex justify-between w-[182px] text-[14px] text-gray1 font-M PLUS 1 font-semibold">
              <p>Name</p>
              <p>Exp.</p>
            </div>
            <div className="flex items-center justify-between w-[332px] text-[14px] text-white font-M PLUS 1 font-semibold">
              <div className=" flex justify-between w-[182px] text-[14px] text-white font-M PLUS 1 font-semibold">
                <p>REHAN RAIHAN</p>
                <p>09/11</p>
              </div>
              <Image
                src="/images/Vector.png"
                width={40}
                height={40}
                className=" -rotate-[15deg]"
                alt="exclude"
              />
            </div>
          </div>
        </div>
        <div className="w-[435px] h-[224px]  skew-x-[20deg]  rotate-[10deg]    bg-green     rounded-[32px]  relative top-[-30px] ml-[-5px] z-10 ">
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
            <p className="mt-[4px] text-[14px]  font-M PLUS 1 font-semibold text-gray4">
              Credit Card No.
            </p>
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
      </div>
      <Image
        src="/images/Star 17.png"
        width={100}
        height={70}
        alt="star"
        className="w-[250px] h-[250px] top-[110px] left-[-230px] relative z-50"
      />
      <div className=" w-[654px] h-[340px] ml-[-130px]" >
        <h1 className=" text-white font-M PLUS 1 text-[40px] font-bold">Find the Perfect Credit Card for You</h1>
        <p className=" font-popins text-[16px]  text-gray mt-4 ">Discover your ideal credit card with ease. Our comprehensive<br/> selection caters to every financial need and lifestyle. Whether you<br/>  seek cashback rewards, travel perks, or building credit, we have the<br/> perfect credit card waiting for you. Unleash the possibilities and find<br/> the credit card that fits your unique goals and aspirations.</p>
        <button className=" w-[133px] h-[48px] rounded-[25px] text-[16px] font-medium mt-[20px] flex gap-4 items-center justify-center border-green bg-green text-white font-M PLUS 1  border-[2px]  ">
        <Link href="/about"> Learn More</Link> 
        </button>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-4 h-4 relative top-[-130px] left-[58px]   -rotate-[25deg]"/>
        <Image src="/images/dora(1).png" width={10} height={10} alt="star" className=" w-4 h-4 relative top-[300px] left-[-558px]   -rotate-[25deg]"/>
      </div>
    </div>
  );
};

export default Find;

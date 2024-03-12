import React from "react";
import Section from "./Section";
import { feature } from "@/constants";
import Image from "next/image";

const Feature = () => {
  return (
    <div>
      <Image
        src="/images/dora(1).png"
        width={10}
        height={10}
        alt="star"
        className=" w-5 h-5 relative top-[-50px] left-[480px]"
      />
      <Image
        src="/images/dora(1).png"
        width={10}
        height={10}
        alt="star"
        className=" w-5 h-5 relative top-[160px] left-[840px] -rotate-12"
      />
      <h1 className=" font-M PLUS 1 font-bold text-[40px]  text-white text-center  relative mt-[100px]">
        {" "}
        What do we offer?{" "}
      </h1>
      <div className="flex flex-row justify-between  w-[1300px] h-[186px] ml-[115px] mt-[50px]   ">
        {feature.map((data, index) => (
          <Section
            key={index}
            image={data.image}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;

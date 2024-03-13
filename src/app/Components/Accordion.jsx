"use client";
import React from "react";
import { faqs } from "@/constants";

import { useState } from "react";
import { Container } from "postcss";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    if (active === index) {
      setActive(null);
    }
    setActive(index);
  };

  return (
    <div className="  ">
      <div className="w-[1420px] mr-[135px] ">
        {faqs.map((data, index) => (
          <newContainer
            key={index} onClick={() => toggle(index)
            }>
                <div className="flex justify-between w-[920px] mt-10 ml-[225px] items-center  cursor-pointer">
        <p className="font-bold font-poppins text-white  text-[24px] ">
          {data.question}
        </p>
        <span className=" text-white  text-[24px]">{active===index?  "-"  :"+"}</span>
      </div>
      <div
        className={`overflow-hidden h-0 ${
          active === index
            ? "h-auto transition-all duration-75 ease-[cubic-bezier(0,1,0,1)] "
            : ""
        }`}
      >
        <p className="w-[920px] text-gray text-poppins text-[16px] ml-[225px] my-[20px] tracking-wide ">
          {data.answer}
        </p>
        <div className="h-[1px] bg-gray w-[920px] ml-[225px] mt-[20px]"></div>
       
      </div>
      
            </newContainer>
        ))}
      </div>
    </div>
  );
};

export default Accordion;

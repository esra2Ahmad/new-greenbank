import React from "react";
import Image from "next/image";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className=" relative top-[150px]">
      <h1 className="font-bold  font-M PLUS 1 text-[40px] text-white text-center">
        FAQs
      </h1>
      <Image
        src="/images/dora(1).png"
        width={10}
        height={10}
        alt="star"
        className=" w-8 h-8 relative top-[60px] left-[198px]"
      />
      <Accordion />

      <Image
        src="/images/dora(1).png"
        width={10}
        height={10}
        alt="star"
        className=" w-8 h-8 relative top-[-224px] left-[227px]"
      />
      <Image
        src="/images/dora(1).png"
        width={10}
        height={10}
        alt="star"
        className=" w-8 h-8 relative top-[-84px] left-[827px]"
      />
      <Image
        src="/images/dora(1).png"
        width={10}
        height={10}
        alt="star"
        className=" w-2 h-2 relative top-[-264px] left-[1280px]"
      />
      <Image
        src="/images/dora(1).png"
        width={10}
        height={10}
        alt="star"
        className=" w-2 h-2 relative top-[-764px] left-[1080px]"
      />
    </div>
  );
};

export default FAQ;

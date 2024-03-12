import React from "react";
import TestimlionCard from "./TestimlionCard";
import { testimonial } from "@/constants";

const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-row justify-between  w-[1250px]  ml-[125px]    ">
        {testimonial.map((data, index) => (
          <TestimlionCard
            key={index}
            image={data.image}
            text={data.text}
            name={data.name}
            work={data.work}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

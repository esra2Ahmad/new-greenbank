import React from "react";
import { about } from "@/constants";
import Card from "./Card";


const About = () => {
  return (
    <div>
      <div className="w-[1300px] h-[186px] ml-[100px]  bg-gray2/20   backdrop-blur-md rounded-[32px] mt-[100px] ">
        <div className="flex flex-row justify-between  ">
          {about.map((data, index) => (
            <Card key={index} id={data.id} title={data.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Navbar from "./Components/Navbar";
import Panner from "./Components/Panner";
import About from "./Components/About";
import LogoSlider from "./Components/LogSlider";
import Feature from "./Components/Feature";
import CreditCard from "./Components/CreditCard";
import Find from "./Components/Find";
import Testimonial from "./Components/Testimonial";
import FAQ from "./Components/FAQ";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

const page = () => {
  return (
    <div className=" h-full w-full  bg-blackbg overflow-hidden ">
      <div  className=" w-[1440px] h-[5000px] relative  bg-[url('/images/dora(1).svg')]  ">
        <Navbar />
       
        <Panner />
        <About />
        <LogoSlider />
        <Feature />
        <CreditCard />
        <Find />
        <Testimonial />
        <FAQ/>
        <CTA/>
        <Footer/>n
      </div>
    </div>
  );
};

export default page;

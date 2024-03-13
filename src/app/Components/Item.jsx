"use client   ";

const Item = (props) => {
  return (
    <div className="mb-[10px] w-[920px]  ">
      <div className="flex justify-between w-[920px] mt-10 ml-[225px] items-center  cursor-pointer">
        <p className="font-bold font-poppins text-white  text-[24px] ">
          {props.question}
        </p>
        <span className=" text-white  text-[24px]">+</span>
      </div>
     
        <div  className={`  h-0 overflow-hidden transition-all duration-75 ease-[cubic-bezier(0,1,0,1)]  ${
          props.active ===props.index
            ? "max-h-[9999px] transition-all duration-75 ease-[cubic-bezier(1,0,1,0)] bg-red-400"
            : ""
        }`}>
        <p className=" text-gray text-poppins text-[16px] ml-[225px] mt-[1px] tracking-wide ">
          {props.answer}
        </p>
        </div>
      
    </div>
  );
};

export default Item;

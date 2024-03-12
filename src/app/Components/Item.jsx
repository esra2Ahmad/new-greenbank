"use client   ";

const Item = (props) => {
  return (
    <div>
      <div className="flex justify-between w-[1020px] mt-10 ml-[225px] items-center ">
        <p className="font-bold font-poppins text-white  text-[24px] ">
          {props.question}
        </p>
        <span className=" text-white  text-[24px]">+</span>
      </div>
      <div
        className={` h-0 overflow-hidden ${
          props.active === props.index
            ? " transition-all duration-75 ease-[cubic-bezier(0,1,0,1)] "
            : ""
        }`}
      >
        <p className="w-[920px] text-gray text-poppins text-[16px] ml-[225px] mt-[1px] tracking-wide ">
          {props.answer}
        </p>
      </div>
    </div>
  );
};

export default Item;

import React from 'react'
import Image from 'next/image'

const TestimlionCard = (props) => {
  return (
    <div className='w-[382px] h-[360px] bg-gray2/5  rounded-[18px] mt-[100px]  backdrop-blur flex flex-col'>
        <div className=' w-[56px] h-[56px]  rounded-[56px] bg-gray2 mt-[48px] ml-[24px]'>
            <Image src='/images/Frame.png' width={10} height={10} alt='comma' className='w-[24px] h-[24px] mt-[15px] ml-[15px]'/>
        </div>
        <p className='w-[344px] tracking-[0px] pl-[36px] font-poppins text-[16px] text-white  mt-8'> {props.text}</p>
        <div className='mt-8 ml-[36px] flex gap-4'>
            <Image src={props.image} width={10} height={10} alt="user" className='w-[48px] h-[48px]'/>
            <div>
                <p className='text-[16px] font-M PLUS 1 font-medium text-white'>{props.name}</p>
                <p className='text-[12px] font-M PLUS 1 font-medium text-gray'>{props.work}</p>
            </div>
        </div>

    </div>
  )
}

export default TestimlionCard
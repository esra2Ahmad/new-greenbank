import React from 'react';
import Image from 'next/image'

export default function Section(props){
    return (
        <div className=" mt-[45px]">
            <div className='flex gap-8 w-[400px]'>
           <div className='w-[64px] h-[64px] bg-gray2 rounded-[24px]'>
             <Image src={props.image} width={32} height={32} alt="feature" className=' mx-[14px] my-[15px]'/>
             </div>
           <div>
            <p className=' font-M PLUS 1 text-[24px] font-medium text-white'>{props.title}</p>
            <p className='font-M PLUS 1 text-[16px] font-medium text-gray'>{props.text}</p>
            </div>
            </div>
            
           
        </div>
    )
}
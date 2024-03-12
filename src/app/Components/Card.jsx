import React from 'react';
import Image from 'next/image'

export default function Card(props){
    return (
        <div className="mx-[100px] mt-[45px]">
            <div className='flex flex-col items-center'>
            <p className=' text-[40px] font-M PLUS 1 font-bold  text-white'>{props.id}</p>
            <p className=' text-[16px] font-M PLUS 1   text-green'>{props.title}</p>
            </div>
            
           
        </div>
    )
}
import React from 'react'
import Image from 'next/image'

const LogoSlider = () => {
  return (
    <div className='flex justify-between w-[1250px] ml-[120px] mt-[100px] '>
        <Image  alt="upwork"src="/images/upwork.png" width={105} height={32}/>
        <Image  alt="upwork"src="/images/petal.png" width={105} height={32}/>
        <Image  alt="upwork"src="/images/rakuten.png" width={105} height={32}/>
        <Image  alt="upwork"src="/images/nyt.png" width={105} height={32}/>
        <Image  alt="upwork"src="/images/vice.png" width={105} height={32}/>
        <Image  alt="upwork"src="/images/dell.png" width={105} height={32}/>
       

    </div>
  )
}

export default LogoSlider
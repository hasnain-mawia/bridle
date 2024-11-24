import Image from 'next/image'
import React from 'react'

function Slider() {
  return (
    <div className='banner'>
        <div className='p-5 text-white'>
        <Image src="/white logo.png" alt="" width={100} height={100}/>
        <h3 className='text-[28px] leading-[35px] mt-4'>
         Supercharge your equine bussiness<br/>    
         all in one place with Bridle    
        </h3>
        <p className='text-[14px] mt-4 font-light'>Manage Horse & clinets streamline finance, automate bookings & events and more. </p>
        </div>
    </div>
  )
}

export default Slider
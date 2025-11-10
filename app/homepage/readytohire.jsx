import React from 'react'
import Image from 'next/image'
import img from '../../assets/ready-to-hire.png';
import { ArrowRight } from 'lucide-react';
const Readytohire = () => {
  return (
    <div className='bg-[#E7F0F7] bg-[linear-gradient(0deg,rgba(231,240,247,1)_30%,rgba(255,255,255,1)_67%)] md:flex md:items-center md:justify-around md:py-20 py-10 px-5'>
      <div className="left ">
        <h1 className='md:text-6xl text-4xl md:font-light md:mb-8 mb-2'>Ready to Build<br/>
        <span className='text-[#2563eb] font-bold'>Your Dream Team?</span></h1>
        <p className='md:my-6 md:text-base leading-6 my-3'>Get more sales and maximize the conversion rates. Discover the most<br/>
         productive channels.</p>
          <button className='login flex items-center justify-center bg-[#2563eb] text-white md:py-3 py-2 font-medium text-base leading-6 md:px-5 px-3 rounded-xl'>Book a Free Demo<ArrowRight className='ml-2'/> </button>
      </div>
      <div className="md:py-0 py-8">
        <Image src={img} alt="Ready to Hire" />
      </div>
      
    </div>
  )
}

export default Readytohire

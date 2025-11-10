import { ArrowRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/herosection.png'
const Hero = () => {
  return (
    <div  className=' bg-[linear-gradient(179deg,rgba(231,240,247,1)_30%,rgba(255,255,255,1)_67%)] p-8 md:p-0 '>
      <div className="container mx-auto">
     <div className="top text-center ">
      <h1 className='text-2xl md:text-6xl  md:font-light leading-[67.2px]'>Fast track your <span className='text-blue-600 md:font-bold'>tech hiring</span><br/> with prescreened<br/> candidates</h1>
      <p className='py-4 md:py-2 text-sm md:text-lg md:mt-6 md:mb-8'>We provide potential hires post deep vetting tech interviews, custom tailored to your company growth.
       we'll alleviate<br/> 80% of your screening workload.</p>       
      < button className='login  flex items-center justify-center mx-auto border-blue-500 md:border-blue-500 w-[171px] bg-[#2563eb] text-white py-2 md:py-3 px-3 md:px-5 md:rounded-xl '>Start Hiring<ArrowRight className='ml-2 md:ml-4' /></button>
     </div>
     <div className="bottom md:flex md:items-center md:justify-center text-center md:py-[50px] md:px-[50px] py-10 md:gap-4">
      <div className="mb-5 md:mb-0 ">
      <Image src={img1} alt='img1' width={50} className='mx-auto mb-2'/>
      <h3 className='text-[22px] uppercase my-5'>Provide Your Job<br /> Description</h3>
      <p className='text-[15px] leading-normal'>Submit the specifics of the role you're looking to fill; include skills, qualifications, and cultural fit to help us understand your exact needs.</p>
      </div>
      <div className="mb-5 md:mb-0 ">
        <Image src={img2} alt='img2' width={50} className='mx-auto mb-2'/>
      <h3 className='text-[22px]  uppercase my-5'>We conduct initial tech<br /> interview</h3>
      <p className='text-[15px] leading-normal'>Our experts handle the first round of technical assessments, ensuring only the most qualified candidates advance, saving you time and resources.</p>
      </div>
      <div className="mb-5 md:mb-0 ">
      <Image src={img3} alt='img3' width={50} className='mx-auto mb-2'/>
      <h3 className='text-[22px]  uppercase my-5'>Proceed with the final<br /> stages</h3>
      <p className='text-[15px] leading-normal'>With the preliminary screening done, you can focus on the final interviews to select the best fit for your team from the shortlisted candidates.</p>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Hero

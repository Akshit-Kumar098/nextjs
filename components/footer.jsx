import Image from 'next/image'

import img1 from '../assets/logo.svg'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
const Footer = () => {
  return (
    <div className='bg-gray-900 text-white md:p-15 p-3'>
      <div className="md:flex md:items-start md:justify-between">
        <div className="first">
            <Image src={img1} alt='logo' width={100}/>
        </div>
        <div className="second">
            <h6 className='font-semibold text-sm '>Contact Us</h6>
            
            <p className=' text-sm my-2'>9873346669</p>
            <p className=' text-sm'>founder@mentorpal.ai</p>
        </div>
        <div className="third">
            <h6 className='font-semibold text-sm' >Our Address</h6>
            <p className=' text-sm mt-2 leading-relaxed'>MPAL SOLUTIONS PRIVATE LIMITED<br/>
Shahjahanpur, Alwar, Neemrana,<br/>
Rajasthan, India, 301706</p>
            
        </div>
        <div className="pr-18">
            <h6 className='font-semibold text-sm'>About Us</h6>
            <ul className=' text-sm mt-2'>
                <li className='my-2' >About Us</li>
                <li>Book a Demo</li>
            </ul>
        </div>
      </div>
      <div className="mt-6 ">
        <ul className='flex items-center gap-8 justify-start'>
            <li><Twitter/></li>
            <li><Instagram/></li>
            <li><Facebook/></li>
            <li><Linkedin/></li>
            <li><Youtube/></li>
           
        </ul>
        <hr className='my-[32px] border-gray-800'/>
          <p className='text-sm text-gray-300'> © 2025 Mpal Solution Pvt. Ltd. All rights reserved</p>
      </div>
     
    </div>
  )
}

export default Footer

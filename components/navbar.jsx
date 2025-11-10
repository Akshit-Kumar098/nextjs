import React from 'react'
import logo from '../assets/logo.svg'
import Image from 'next/image'
import { HamburgerIcon, HamIcon, ToggleRightIcon } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-[#E7F0F7]'>
      <div className="left-nav flex items-center justify-between">
        <div className="img">
          <Image src={logo} alt="Logo" /> 
        </div>
        <div className="navigation ml-8">
            <ul className='flex items-center justify-between gap-4 text-base leading-6  font-medium '>
                <li className='hover:text-blue-600 cursor-pointer'><Link href='/'> Home</Link></li>
                <li className='hover:text-blue-600 cursor-pointer'><Link href='/'>Product</Link></li>
                <li className='hover:text-blue-600 cursor-pointer'><Link href='/jobs'>Jobs</Link></li>
            </ul>
        </div>
      </div>
      <div className="right-nav">
        <button className='book-a-demo h-12 bg-[#2563eb] text-white py-3 px-6 rounded-xl text-sm'>Book a Demo</button>
        <button className='login h-12 bg-[#2563eb] text-white py-3 px-6 rounded-xl text-sm mx-2'>Login</button>
      </div>
    </div>
  )
}

export default Navbar

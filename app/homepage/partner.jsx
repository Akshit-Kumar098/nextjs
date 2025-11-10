"use client";
import { motion } from "framer-motion";
import React from 'react'
import Image from 'next/image';
import img1 from '../../assets/DevWise.svg';
import img2 from '../../assets/Flash.svg';
import img3 from '../../assets/invert.svg';
import img4 from '../../assets/snowflake.svg';
import img5 from '../../assets/Proline.svg';
import img6 from '../../assets/hitech.svg';


const Partner = () => {
   const rolesTop = [
    "Project Manager",
    "Designer",
    "Copywriter",
    "Admin",
    "Finance",
    "Marketing",
    "Developer",
  ];

  const rolesBottom = [
    "HR",
    "Legal",
    "Product",
    "DevOps",
    "Engineering",
    "QA",
    "Support",
  ];
  return (
    <div className='md:py-20 py-10 text-center'>
    <h1 className='md:text-3xl text-2xl leading-tight font-bold'>We partner with the best</h1>
    <div className="md:flex md:items-center md:justify-between md:py-10 grid grid-cols-3 p-6">
     <Image src={img1} alt='DevWise'/>
     <Image src={img2} alt='Flash'/>
     <Image src={img3} alt='invert'/>
     <Image src={img4} alt='snowflake'/>
     <Image src={img5} alt='Proline'/>
     <Image src={img6} alt='hitech'/>
    </div>
    <div className="overflow-hidden w-full py-6 bg-white">
      {/* 🔹 Top Row - moves right */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...rolesTop, ...rolesTop].map((role, i) => (
          <button
            key={i}
            className="border bg-blue-50 border-blue-50 font-medium px-6 py-2 min-h-[55px] text-2xl rounded-full mr-8 text-black"
          >
            {role}
          </button>
        ))}
      </motion.div>

      {/* 🔹 Bottom Row - moves left */}
      <motion.div
        className="flex whitespace-nowrap mt-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...rolesBottom, ...rolesBottom].map((role, i) => (
          <button
            key={i}
            className="border bg-blue-50 font-medium border-blue-50 px-6 py-2 rounded-full min-h-[55px] text-2xl mr-8 text-black"
          >
            {role}
          </button>
        ))}
      </motion.div>
    </div>
     
    </div>
  )
}

export default Partner

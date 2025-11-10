import React from 'react'
import { Pin , User,Search,Zap} from "lucide-react";
import { color } from 'framer-motion';

const Whyus = () => {
const whychooseusdata=[
    {   icon:Zap, 
        color:'text-blue-500',
        title:'Efficiency at Every Step',
        description:'We understand that the conventional hiring process can be a drain on your valuable resources, particularly the time of your skilled engineers. With Mentorpal, you can say goodbye to the endless cycle of screening and first-round technical rejections.'
    },
    {   
        icon:Search,color:'text-green-500',
        title:'Beyond the Resume',
        description:'In today\'s market, a good resume isn\'t good enough. We delve deeper, conducting initial technical interviews on your behalf to ensure that only the most qualified candidates make it to your doorstep.'
    },
    {   
      icon:User,
      color:'text-purple-500',
        title:'A Network of Excellence',
        description:'Our pool of interviewers isn\'t just experienced; they\'re proven experts from Tier 1 tech companies, bringing insights and evaluation standards that set us apart.'
    },
    {   icon:Pin,
      color:'text-orange-500',
        title:'Tailored Matches for Every Role',
        description:'We understand that every role is unique. Our matching algorithm and expert insights ensure candidates align with your specific technical and cultural requirements. Benefit from our deep industry knowledge and a personalized approach to every hiring challenge.'
    }
];
  return (
    <div className=' bg-[#E7F0F7] bg-[linear-gradient(354deg,rgba(231,240,247,1)_30%,rgba(255,255,255,1)_67%)]'>
        <div className="container mx-auto">
        <div className=" md:py-4 py-2">
        <button className='border-blue-50 bg-blue-50 text-blue-500 rounded-4xl md:px-4 px-3 md:py-2 py-0 md:font-medium md:text-sm' >Why choose us</button>
        <h1 className='md:text-4xl md:font-bold  text-3xl pl-3 md:pl-0 font-bold md:mt-4 my-2'>Why Mentorpal ?</h1>
        <hr className='text-blue-200  md:my-6'></hr>
         {
            whychooseusdata.map((item,index)=>{
               const Icon = item.icon;
               return(
                  <div key={index} className=' bg-white md:p-4 p-2 rounded-lg md:my-4 my-2 mx-2 shadow-md flex gap-3 items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl'>
                  <div className="icon-div bg-gray-50 w-12 shrink-0  h-12 flex items-center justify-center rounded-xl">
                  <Icon className={` w-1em h-1em  ${item.color}`} /> 
                   </div>
                  <div>
                    <h2 className='text-lg font-semibold mb-2'>{item.title}</h2>
                    <p className='text-gray-600 text-sm leading-relaxed'>{item.description}</p>
                  </div>

                </div>
               )
            })
         }
      </div>  
   </div>
    </div>
  )
}

export default Whyus

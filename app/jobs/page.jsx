
import {   MapPin, RotateCcw } from "lucide-react";
import Link from "next/link";



const Page = async() => {
 
  const res =await fetch('https://ats.api.mentorpal.ai/admin/get-job', {cache:'no-store'});
  const data =await res.json();


  return (
    <div className="p-6 bg-[#E7F0F7]">
    <div className="container mx-auto flex items-end justify-between ">
      <div className="filters">
        <form className="flex items-center justify-between gap-8">
          <div >
            <label className="text-sm font-medium grid ">Title</label>
            <input
              type="text"
              placeholder="Search Job Title"
              className="border border-gray-300 bg-white p-[7px] w-[243px] rounded-lg mt-1 outline-none"
            />
          </div>
           <div>
            <label className="text-sm font-medium grid">Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              className="border border-gray-300 bg-white p-[7px] w-[243px] rounded-lg mt-1 outline-none"
            />
          </div>
           <div>
            <label className="text-sm font-medium grid">Job Type</label>
            <input
              type="text"
              placeholder="Type"
              className="border border-gray-300 bg-white p-[7px] w-[243px] rounded-lg mt-1 outline-none"
            />
          </div>
           <div>
            <label className="text-sm font-medium grid">Work Mode</label>
            <input
              type="text"
              placeholder="Mode"
              className="border border-gray-300 bg-white p-[7px] w-[243px] rounded-lg mt-1 outline-none"
            />
          </div>
        </form>
      </div>
      <div className="button flex items-center justify-center gap-4">
      <button className="border flex  items-center justify-center p-2 text-base bg-blue-600 text-white rounded-lg"><RotateCcw className="w-[18px] mr-1"/> Reset</button>
       <button className="border  flex  items-center justify-center p-2 text-base bg-blue-600 text-white rounded-lg"><RotateCcw className="w-[18px] mr-1" />Refresh</button>
       </div>
    </div>
    <div className="jobs pt-[48px] pb-6">
  <div className="container mx-auto">

   {
   data && data.data.map((item)=>{
    const job = item.job;
  return(
     <div key={item.job._id} className=" border bg-white p-4 rounded-2xl mb-5">
      <div className="flex items-baseline justify-between mb-4">
        <div>
        <h1 className="font-semibold text-lg">{job.job_title}</h1>
        <button className="text-[10px] border border-blue-500 bg-blue-100 p-[2px] text-blue-500 rounded-[5px]">{job.job_type}</button>
        </div>
         <button className="bg-blue-600 py-2 px-4 rounded-4xl  text-white text-sm"><a href={`/jobs/${job._id}`} >Apply Now</a></button>
        </div>
        <p className="text-sm text-gray-700 flex items-center "><MapPin className="w-4 h-4 mr-2"/>{job.job_location}</p>
      </div>
  )
     
    })
   }
  </div>
  </div>
    
    </div> 

  );
};

export default Page;

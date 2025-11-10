import React from 'react'
import Image from 'next/image'
import img1 from '../../assets/c1.png';
import img2 from '../../assets/c2.png';
import img3 from '../../assets/c3.png';
import img4 from '../../assets/c4.png';
const Cards = () => {
  const cardsdata=[
    {
        img:img1,
        title:'Job Description Analysis',
        description:'Once you finalize the job description, we get to work, aligning our understanding of the required skills and your company\'s unique culture.'

    },
    {
        img:img2,
        title:'Algorithmic Shortlisting',
        description:'Our proprietary matching algorithm sifts through candidates, selecting only those who meet the stringent criteria set by you.'
    },
    {
        img:img3,
        title:'Human Touch',
        description:'Post-algorithmic shortlisting, candidates face a rigorous technical interview conducted by our elite panel. Only the best progress.'
    },
    {
        img:img4,
        title:'Feedback Loop',
        description:'Every candidate feedback, especially rejections, is a learning curve for us. We fine-tune our process continuously, ensuring better matches with each iteration.'
    }
]
  return (
    <div className='py-12 px-4' >
      <div className="container mx-auto">
        <h3 className='text-center text-xl text-gray-600 '>
            Discover what makes us the preferred choice for businesses worldwide. Our<br/> commitment to excellence drives everything we do.
        </h3>
        <hr className='w-24 h-1 border-blue-600 bg-blue-600 rounded-lg mx-auto mt-6 mb-16'/>
        <div className="card-container md:flex md:items-center md:justify-center text-center ">
          {
              cardsdata.map((item,index)=>{
                  return(
                      <div key={index} className='card group border border-gray-100 rounded-2xl md:p-[35px] md:h-[400px] w-full md:mx-2  p-6 mx-6 mb-4 shadow-lg transition-transform duration-300 hover:-translate-y-4 '>
                        <div className="mb-6 p-4 w-20 mx-auto bg-white rounded-full shadow-md transition-transform duration-300 group-hover:scale-140 ">
                      <Image src={item.img} alt={item.title} width={100} className='mx-auto  '/>
                      </div>
            
                        <h4 className='text-xl font-bold my-4 group-hover:text-blue-600 '>{item.title}</h4>
                        <p className='text-gray-600 leading-normal text-base'>{item.description}</p>
                    </div>
                )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Cards

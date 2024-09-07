import React from 'react'

const Portfolio = () => {
  return (
    <div className='portfolio text-center'>
        <h5 className='text-lg'>Our Portfolio</h5>
        <h1 className='text-4xl font-bold mt-3 mb-5 '>What do we do</h1>
        <p className='w-4/12 mx-auto font-light'>all projects that we have already done , proven can help to use more comfortable, then can used by client from our business</p>
        <div className='flex gap-20 justify-center mt-10'>
            <div className='bg-portfolio1 bg-cover h-[300px] flex justify-start w-[300px] text-white hover:scale-105 transition duration-300 ease-in'>
                <p className='bg-transparent ml-5 mt-[260px] font-bold'>Design Byte App</p>
            </div>
            <div className='bg-portfolio2 bg-cover h-[300px] flex justify-start w-[300px] text-white hover:scale-105 transition duration-300 ease-in'>
                <p className='bg-transparent ml-5 mt-[260px] font-bold'>Cloud App</p>
            </div>
            <div className='bg-portfolio3 bg-cover h-[300px] flex justify-start w-[300px] text-white hover:scale-105 transition duration-300 ease-in'>
                <p className='bg-transparent ml-5 mt-[260px] font-bold'>Design Furniture App</p>
            </div>
        </div>
        <button className='border-2 px-7 py-2 mt-8 rounded-full'>See All Portfolio</button>
    </div>
  )
}

export default Portfolio
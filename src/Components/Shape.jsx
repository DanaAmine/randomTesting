import React from 'react'
import blueShape from "../../public/Images/v1.png"
import blueTwoShape from "../../public/Images/v2.png"
import redShape from "../../public/Images/Vrouge.png"
import yellowShape from "../../public/Images/Vjaune.png"
import GreenShape from "../../public/Images/Vvert.png"
import GreenFancer from "../../public/Images/greenD.png"
const Shape = () => {
  return (
    <div  >
       <div className='w-6 absolute top-16 left-2 hidden lg:w-12 lg:top-24 lg:left-4  lg:block  '><img src={blueShape} alt="" /></div>
       <div className='w-7 absolute top-12 left-11 lg:w-12 lg:top-20 lg:left-40'><img src={blueTwoShape} alt="" /></div>
       <div className='w-8 absolute top-[6em] left- lg:w-12  lg:top-[11em] lg:left-24'><img src={redShape} alt="" /></div>
       <div className='w-4 absolute top-[7.5rem] lg:w-8 lg:top-[15rem] hidden  lg:block '><img src={yellowShape} alt="" /></div>
       <div className='w-3 absolute top-[9rem] hidden left-20 lg:w-6  lg:top-[18rem] lg:left-40'><img src={GreenShape} alt="" /></div>
       <div className='w-5 absolute top-[9rem] left-12 lg:w-8 lg:top-[18rem] lg:left-40'><img src={GreenShape} alt="" /></div>
       <div className='w-5 absolute top-[9.5rem] right-[3.5rem] lg:w-8 lg:top-[19rem] lg:right-[12rem]'><img src={yellowShape} alt="" /></div>
       <div className='w-6 absolute top-[6rem] right-[-0.5rem] lg:w-12 lg:top-[14rem] lg:right-[-1rem] hidden  lg:block'><img src={blueShape} alt="" /></div>
       <div className='w-6 absolute top-12 right-8 lg:w-12 lg:top-24 lg:right-16 hidden  lg:block'><img src={GreenShape} alt="" /></div>
       <div className='w-7 absolute top-16 right-[2.5rem] lg:w-12 lg:top-32 lg:right-[9rem]'><img src={GreenFancer} alt="" /></div>
       <div className='w-5 absolute top-[7.3rem] right-0 lg:w-8 lg:top-[14.6rem] lg:right-28'><img src={GreenFancer} alt="" /></div>
       <div className='w-4 absolute top-[10rem] right-[1rem] lg:w-8 lg:top-[10rem] lg:right-[1rem] hidden  lg:block'><img src={redShape} alt="" /></div>

    </div>
    
  )
}

export default Shape
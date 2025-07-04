import React from 'react'
import Img from '../components/Img'

const PlanCard = ({img,headingtext,numbtext}) => {
  return (
    <div className='w-[330px] md:w-[370px]  bg-white rounded-[20px] shadow-xl hover:bg-[#6B62C5] group duration-500'>
        <h4 className='text-3xl text-third font-bold font-open pt-[60px] pb-5 text-center
        group-hover:text-white duration-500'>{headingtext}</h4>
        <div className='w-[330px] md:w-[370px]  h-[170px] bg-[#ECEDF0] group-hover:bg-[#707070] duratoin-500 '>
        
          <Img src={img}/>
        </div>
        <h4 className='relative text-5xl text-[#1BBF00] font-extrabold font-nunito pt-5 pb-3 text-center'><span className='absolute top-[22px] left-[130px] text-[24px] font-medium'>$</span>{numbtext}</h4>
        <p className='w-[252px] text-lg text-[#726E9E] font-normal font-paprika text-center mx-auto pb-[59px]  group-hover:text-white duration-500'> Responsive Design
         
 Dynamic Elements
 Service Pages
 Custom Design & Features</p>
    </div>
  )
}

export default PlanCard
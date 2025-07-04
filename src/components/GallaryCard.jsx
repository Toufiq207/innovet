
import React from 'react'

const GallaryCard = ({heading,text}) => {
  return (
    
    <div className='border-r-2 border-[#4f585f33] pr-7'>
        
        <h4 className='text-[30px] md:text-[64px] text-[#1BBF00] font-extrabold font-open'>{heading}</h4>
        <p className='text-[16px] md:text-[36px] text-[#141135] font-bold font-open'>{text}</p>
        
    </div>
  )
}

export default GallaryCard
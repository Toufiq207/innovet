import React from 'react'
import Img from './Img'

const Impact = ({img,text, pra}) => {
  return (
    <>
    <div className='flex gap-x-[35px] pt-[75px]'>
    <div>
        <Img src={img}/>
    </div>
    <div>
    <h1 className=' text-[30px] text-[#030314] font-bold font-open  '>{text}</h1>
    <p className='text-lg text-[#726E9E] font-normal   font-paprika  leading-[30px] pt-[23px] pb-[30px] w-[340px]'>{pra}
    </p>
    </div>
    </div>
   
    </>
  )
}

export default Impact
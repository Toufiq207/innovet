import React from 'react'
import Img from './Img'


const ServiceCard = ({img,text,pra}) => {
  return (
    <div className='w-[370px] py-12 bg-white rounded-[20px] shadow-xl flex flex-col justify-center items-center hover:bg-[#6B62C5] duration-500 group/one'>
<Img src={img}/>
<h4 className='pt-8 text-[30px] text-[#141135] font-open font-bold group-hover/one:text-[#FAFAFE] duration-500'>{text} </h4>
<p className='text-lg text-[#726E9E] font-paprika font-normal w-[278px] text-center pb-3   group-hover/one:text-[#E6E5F3] duration-500'>{pra}

</p>
<h6 className='group/two relative  text-lg text-[#141135] font-open font-bold text-center  group-hover/one:text-[#F4F4F5]  duration-500'>Read more <span className='absolute bg-[#1bbf0080] w-[30px] group-hover/two:w-[120px] h-[40px] -top-[6px] -right-[12px] group-hover/two:rounded-l-[100px] rounded-r-[100px] duration-500  group-hover/one:bg-[#ffffff80]'></span></h6>




    </div>
  )
}

export default ServiceCard
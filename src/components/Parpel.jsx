import React from 'react'
import Img from './Img'
import Pop from '../assets/745.png'
const Parpel = ({text}) => {
  return (
    <>
    <div className='flex gap-x-[80px] pb-[60px]'>
        <div>
            <Img src={Pop}/>
        </div >
        <div>

        <div className='flex flex-col'>
            <div className='flex text-[16px] text-[#726E9E]  font-quicksand font-normal  gap-x-[60px]'> 

            <p className='hover:font-bold hover:text-[#1BBF00]'>News</p>
            <p className='hover:font-bold hover:text-[#1BBF00]'>By</p>
            <p className='hover:font-bold hover:text-[#1BBF00]'>Tomas Nikelson</p>
            <p className='hover:font-bold hover:text-[#1BBF00]'>Posted</p>
            <p className='hover:font-bold hover:text-[#1BBF00]'>5 Hours Ago</p>
            </div>
       
            
         
        </div>
        <div className='pt-[30px]'> <h1 className=' text-[30px] text-[#030314] font-bold font-open w-[700px] leading-[55px]'>{text}</h1></div>
        <span className=' group text-lg text-[#141135] font-open font-bold pt-[20px] relative'>Read more <span className='bg-[#1bbf00b3] w-[27px]   h-[30px] absolute  top-[17px] -right-[10px] group-hover:w-[120px]  rounded-r-[100px] group-hover:rounded-[100px] duration-500'></span></span>
        </div>
       
       
       
    </div>
   
    </>
  )
}

export default Parpel
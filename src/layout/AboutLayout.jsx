

import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Img from '../components/Img'
import Aboutprofile from '../assets/12861.png'
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const AboutLayout = () => {
  return (
    <section className='py-100 bg-[#F8F8FF] relative'>
        <Container>
        
<Heading className='text-center pb-[152px]' text='What The People Thinks About Us '/>
<div className='relative w-[1080px]  bg-[#FFFFFF] rounded-[20px] shadow-lg mx-auto'>
    <div className='absolute top-0 left-1/2 w-[147px] -translate-x-1/2 -translate-y-1/2 h-[147px]  '>
    <Img className='rounded-full' src={Aboutprofile}/>
    </div>
    <ul className='flex justify-center pt-[119px] text-[#FF7628] gap-x-[6px]'>
        <li><FaStar /></li>
        <li><FaStar /></li>
        <li><FaStar /></li>
        <li><FaStar /></li>
        <li><FaStar /></li>
    </ul>
    <p className='w-[800px] text-center mx-auto text-[#726E9E] font-paprika text-[24px]
    font-normal pt-8 pb-24'>Lesser Replenish bearing they’re him cattle kind dominion. You 
which fill place. Land she’d subdue divided gathering blessed
seasons it. Without, wherein days.</p>
<h5 className='text-[#221A2C] text-[25px] font-bold font-open text-center'>Lukan Depina</h5>
<p className='text-four text-[16px] font-normal font-paprika text-center pt-1 pb-[56px]'>Ceo And Head Of Idea</p>


</div>

</Container>
        <div className='w-[42px] h-[42px] bg-[#1BBF00] rounded-full flex justify-center items-center absolute top-[510px] left-0'>

<IoIosArrowBack className='text-white'/>
</div>
        <div className='w-[42px] h-[42px] bg-[#1BBF00] rounded-full flex justify-center items-center absolute top-[510px] right-0'>

<IoIosArrowForward className='text-white'/>
</div>


    </section>
  )
}

export default AboutLayout
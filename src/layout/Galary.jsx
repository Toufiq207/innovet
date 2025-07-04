import React from 'react'
import Img from '../components/Img'
import ImageOne from '../assets/Image 1.png'
import ImageTwo from '../assets/Image 2.png'
import ImageThree from '../assets/Image 3.png'
import ImageFour from '../assets/Image 4.png'
import Flex from'../components/Flex'
import  Container  from '../components/Container'
import GallaryCard from '../components/GallaryCard'

const Galary = () => {
  return (
    <section className='bg-[#F9F9FB] relative -z-20 pb-[100px] '>
      <Container>
      <Flex className="px-3 sm:px-5 md:px-0 md:justify-between items-center md:items-start relative flex-col md:flex-row gap-y-7">
        <div className='md:relative  -top-[100px] left-0 -z-10'>
        <Img src={ImageOne} alt="imageOne"/>
        </div>
        <div className='md:relative -top-[100px] left-[-0px] -z-10'>
        <Img src={ImageTwo} alt="imageTwo"/>
        </div>
        <div className='md:relative -top-[50px] left-[-0px] -z-10'>
        <Img src={ImageThree} alt="imageThree"/>
        </div>
        <div className='md:relative -top-[100px] right-[0px] -z-10'>
        < Img src={ImageFour} alt="imagefImageFour"/>
        
        </div>
       
       
      </Flex>
       <Flex className='justify-between pb-100  flex-wrap gap-y-5 md:gap-y-0 sm:px-5 md:px-0'>
        <GallaryCard heading="53k" text="Happy client"/>
        <GallaryCard heading="10k" text="Projects Done"/>
        <GallaryCard heading="120" text="Gets Award"/>
        <GallaryCard heading="16" text="Operated Years"/>
      </Flex>
      
      </Container>
     
      </section>
  )
}

export default Galary
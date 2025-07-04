

import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Impact from '../components/Impact'
import Ghori from '../assets/icon.png'
import Bati from '../assets/bati.png'
import Img from '../components/Img'
import Bigpata from '../assets/Images.png'
const ImpactLayout = () => {
  return (
<section className='bg-[#FFFFFF]'>
    <Container>
    <Heading className='text-center pt-[70px]' text='We create real impact'/>
    <div className=' w-[530px] mx-auto'>
    <p className='text-lg text-[#726E9E] font-normal   font-paprika text-center leading-[30px] pt-[23px] pb-[34px]'>We design, build and support websites and apps for clients worldwide. Create beautiful, eye-catching on-page messages without the need for a developer.
    </p>
    </div >
   <div className="flex">

   <div className='w-1/2 '>
    <Impact img={Ghori} text='Competitive analysis' pra='With an all-new look and powerful features, Ekko is the best way to ensure success for your business.'/>
    <Impact img={Bati} text='Strategy And research' pra='Save money and start building your website using the best tools available on the market today.'/>
    </div>
    <div className='w-1/2 '>
    <Img src={Bigpata}/>
    </div>


   </div>
    
        </Container>_
</section>
  )
}

export default ImpactLayout


import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Button from '../components/Button'
import Flex from '../components/Flex'
import ServiceCard from '../components/ServiceCard'
import Web from '../assets/web-design 1.png'
import Groth from '../assets/growth.png'
import Social from '../assets/social-marketing 1.png'
import Media from '../assets/social-media 1.png'
import Presentation from '../assets/presentation.png'
import { Link } from 'react-router-dom'
const Service = () => {
  return (
    <section className='py-[100px] bg-five'>
      
        <Container>
          <Flex className='gap-[30px] flex-wrap px-3 md:px-0'>
          <div className='w-[350px] h-[301px]  mr-[19px]'>
          <Heading className='text-[30px] md:text-[50px]' text='What We Do'/>
            <p className='w-auto md:w-[350px] pt-[20px] pb-[56px] text-[#6C7D93] text-lg font-open font-normal'>
            We are now a team of strategists, engineers, designers, and marketers who both use and develop technology 

            </p>
            <Button text='Contact Us'/>
        </div>
       <ServiceCard img={Web} text='web Design & Dev ' pra='Social Media has changed the way we interact & do business while creatin'/>
       <Link to="/portfolio">       <ServiceCard img={Groth} text='Software Dev' pra='Content Marketing is the other fold of online advertisement. If you are looking to build '/></Link>
       <ServiceCard img={Social} text='Content Writing' pra='Social Media has changed the way we interact & do business while creating a new avenue'/>
       
       <ServiceCard img={Media} text='Digital Marketing' pra='Social Media has changed the way we interact & do business while creating a new avenue.'/>
       <ServiceCard img={Presentation} text='Support & Training' pra='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
       
       
          </Flex>
          
    </Container>
        
     
    </section>
   
  )
}

export default Service
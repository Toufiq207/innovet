
import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import PlanCard from '../components/PlanCard'
import Flex from '../components/Flex'
import Wow from '../assets/wow.png'
import Ball from '../assets/ball.png'
import Haha from '../assets/haha.png'

const Plan = () => {
  return (
    
       <section className='py-100  bg-six'> 
       <Container>
        <Heading className='text-center pb-16' text='Choose The Right Plan'/>
        <Flex className='justify-between px-3 md:px-0 flex-wrap gap-y-[20px]'>
        <PlanCard img={Wow} headingtext='Basic' numbtext='160' />
        <PlanCard img={Ball} headingtext='Professional' numbtext='240' />
        <PlanCard img={Haha} headingtext='Exclusive' numbtext='325' />
     
      

        </Flex>
        </Container>
       </section>
    
  )
}

export default Plan
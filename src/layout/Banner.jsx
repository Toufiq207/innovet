import React from 'react'
import Container from '../components/Container'
import { Sub } from '../components/Sub'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
   
    <section className='bg-banner w-full bg-no-repeat bg-cover bg-center'>
  
      <div className='bg-[#6b62c5e6] md:pt-[246px] pt-[200px] md:pb-[246px] pb-[100px]   w-full '>
      <Container >
        <h1 className='text-[26px] sm:text-[38px] md:text-[84px] text-[#FAFAFE] font-bold font-open text-center md:w-[1070px md:w-auto px-2 md:px-0'>You’re Unique.your Website Should Be Too</h1>
        <Sub className=' md:text-2xl text:base text-white text-center w-auto md:w-[715px] mx-auto leading-[40px] pt-5 pb-4 px-2 md:px-0' text='A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. '/>
        <div className='flex gap-x-7 justify-center'> 
         <Link to='/blog'> <Button text='Get Free Quoto'/></Link>
         <Link to='/price'> <Button text='Learn More'/></Link>
        </div>
      </Container>
      </div>
    </section>
  )
}

export default Banner
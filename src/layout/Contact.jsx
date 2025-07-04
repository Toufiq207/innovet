import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Heading from '../components/Heading'
import Button from '../components/Button'

import { Sub } from '../components/Sub'
import ContactList from '../components/ContactList'



const Contact = () => {
    return (
      <section className='py-[100px] bg-[#FDFDFD]'>
          <Container>
            <Flex className='flex-col md:flex-row'>

            <div className='md:w-7/12 px-3 md:px-0'>
            <ContactList className='bg-white py-10 pl-7' text='We solve real-world problems through people and the web.'/>
            <ContactList className='py-3 px-7' text='We make processes and technology work efficiently together.'/>
            <ContactList className='py-3 px-7' text='We advance improve existing technology through research and development.'/>
            <ContactList className='py-3 px-7' text='We develop long-lasting and scalable solutions, relationships partnerships.'/>
            
        
            </div>
            <div className='md:w-5/12 mx-3 md:mx-0 pt-5 md:pt-0'>
            
            <Heading  text='Why Choose Us'/>
            <Sub className='pb-[41px] pt-[9px] ' text='We are now a team of strategists, engineers, designers, and marketers who both use and develop technology for a variety of client needs.'/>
            <Button  text='Contact Us'/>
            </div>

            </Flex>

     
          </Container>
      </section>
    )
  }
  
  export default Contact
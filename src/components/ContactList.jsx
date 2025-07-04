import React from 'react'
import Img from './Img'
import { Sub } from './Sub'
import Offon from '../assets/offon.png'
import Flex from './Flex'
const ContactList = ({className,text}) => {
  return (
    <div>
        <Flex className={`items-center gap-x-[20px] md:gap-x-[37px] w-[400px] md:w-[568px] sm:w-[580px] rounded-[12px]  py-10 px-7 ${className}`}>

        <Img src={Offon}/>
        <Sub className='w-auto md:w-319px'text={text}/>

        </Flex>
        
        
       
     
     
    </div>
  )
}

export default ContactList



import React, { useState } from 'react'
import Container from '../components/Container' 
import Flex from '../components/Flex'
import Img from '../components/Img'
import List from '../components/List'
import Button from '../components/Button'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'

const Navber = () => {
  let [show,setShow]=useState(false)
  let handleclick=()=>{
    setShow(!show)
  }
  return (
    <div>
      {/* destop start */}
        <nav className='bg-[#160c6d80] py-5 absolute  top-0 left-0 w-full hidden md:block'>
            <Container>
                <Flex className='items-center'>
                <div className='w-3/12'>
                <Link to='/'><Img src={logo} alt='logoimg'/></Link>
                </div>
                <div className='w-6/12'>
                <ul className='flex gap-x-10 justify-center cursor-pointer'>
                <Link to='/'>  <List text='Home'/></Link>
                <Link to='/about'> <List text='About'/></Link>
                <Link to='/lizon'> <List text='Service'/></Link>
                   
                  
              <Link to='/portfolio'>  <List text='Portfolio'/></Link>
                   
             
                 
                 <Link to="/price">   <List text='Price'/></Link>
              
                 <Link to='/blog'>   <List text='Blog'/></Link>
            
                
                
                
                   
                   
                </ul>
                </div>
                <div className='w-3/12 text-right'>
                <Button text='Contact Us'/>
                </div>
                </Flex>
               
            </Container>
        </nav>
        {/* destop end */}
        {/* mobile start */}


        <nav className='bg-[#160c6d80] py-5 absolute  top-0 left-0 w-full md:hidden block px-4'>
          <Flex className='items-center justify-between'>
            <div><Img className='w-[70%]'src={logo}/></div>
            <div onClick={handleclick}>
              {
                show? <RxCross2 className='text-white text-lg' />:<FaBars className='text-white text-sm' />
              }
            </div>
          </Flex>
        {
          show?  <ul className='bg-purple-500 rounded-[10px] flex flex-col items-center justify-center gap-y-3 py-10 absolute w-full top-[80px] left-0'>
          <Link to='/'>  <List text='Home'/></Link>    
           <Link to='/about'> <List text='About'/></Link>
           <Link to='/lizon'> <List text='Service'/></Link>
           <Link to='/portfolio'>  <List text='Portfolio'/></Link>
           <Link to="/price">   <List text='Price'/></Link>
           <Link to='/blog'>   <List text='Blog'/></Link>

          </ul>:""
        }
        </nav>
        {/* mobile end */}
    </div>
  )
}

export default Navber
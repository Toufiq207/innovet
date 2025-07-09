import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Img from '../components/Img'
import Innovate from '../assets/innovate.png'
import { Link } from 'react-router-dom'
import Footerlist from '../components/Footerlist'
const Footer = () => {
  return (
 <footer className='pt-[50px] md:pt-[140px] pb-[50px] bg-[#48409C]'>
     <Container>
        <div className='md:flex justify-between px-4 md:px-0'>
            
            
                
                
            <div >
            
            <Link to='/'> <Img src={Innovate}/></Link>
           <p className='pt-[44px] text-lg text-[#fefefee6] font-nunito font-normal md:w-[449px]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                
            </div>
            <div >
        
            <h6 className='pb-12 text-2xl text-[#fefefee6] font-open font-semibold'>Features</h6>
       <ul className='flex flex-col gap-y-[30px]'>
 <Link to='/'>      <Footerlist text='Home'/></Link>
         <Link to='/about'><Footerlist text='About'/></Link>
          <Link to='/lizon'><Footerlist text='Service'/></Link>
<Link to='/portfolio'> <Footerlist text='Portfolio'/></Link>
<Link to='/price'><Footerlist text='Price'/></Link>
<Link to='/blog'><Footerlist text='Blog'/></Link>
        
       </ul>
            </div>
            <div >
        
            <h6 className='pb-12 text-2xl text-[#fefefee6] font-open font-semibold'>Products</h6>
       <ul className='flex flex-col gap-y-[30px]'>
       <Footerlist text='Task Management'/>
          <Footerlist text='Company growth'/>
          <Footerlist text='Time tracking'/>
        
       </ul>
            </div>
            <div >
        
            <h6 className='pb-12 text-2xl text-[#fefefee6] font-open font-semibold'>Support</h6>
       <ul className='flex flex-col gap-y-[30px]'>
       <Footerlist text='Customer service'/>
          <Footerlist text='Accessibility'/>
          <Footerlist text='Contact us'/>
        
        
       </ul>
            </div>
           
        </div>
        <Flex className='px-4 md:px-0 flex-col md:flex-row justify-between  pt-20   text-lg text-[#fefefee6] font-nunito font-normal'>
          <div><p>@20201 Innovate.All rights reserved.</p></div>
          <div className='flex gap-x-[60px] '>
            <p>Privacy policy</p>
            <p>Terms & condition</p>
          </div>
        </Flex>
     </Container>
 </footer>
  )
}

export default Footer
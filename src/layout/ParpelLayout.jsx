
import React from 'react'
import Container from '../components/Container'
import Parpel from '../components/Parpel'

const ParpelLayout = () => {
  return (
    <section className='bg-[#F9F9FB] pb-[70px]'>
        <Container>
            <h1 className='text-[50px] text-[#030314] font-bold font-open pt-100 pb-[70px] leading-[65px]'>You May Also Like </h1>
            <Parpel text='Punto Pago Allows Quick And Secure 
        Payments For Services In Panama'/>
            <Parpel text='The User Can Also Replenish A Balance
Make Remittances '/>
            <Parpel text='The User Can Also Replenish A Balance
Make Remittances '/>
        </Container>
    </section>
  )
}

export default ParpelLayout
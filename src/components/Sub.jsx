import React from 'react'

export const Sub = ({text,className}) => {
  return (
    <p className={`text-base md:text-lg text-four font-normal font-paprika leading-[30px] ${className}`}>{text}</p>
  )
}

import React from 'react'

const Button = ({text,className}) => {
  return (
    <div>
          <button className={`bg-secendory md:py-[14px] py-2 md:px-[7px] px-4 rounded-[100px] text-white font-semibold font-open border border-transparent hover:bg-transparent hover:text-black hover:border-secendory duration-300 md:text-lg text-base${className}`}>{text}</button> 
    </div>
  )
}

export default Button
import React from 'react'

const Footerlist = ({text,className}) => {
  return (
    <li className={`text-[#fefefee6] text-lg font-semibold font-nunito list-none ${className}`}>{text}</li>
  )
}

export default Footerlist
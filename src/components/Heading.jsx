import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h2 className={`text-5xl text-third font-bold font-open ${className}`}>{text}</h2>
  )
}

export default Heading



import React from 'react'

const List = ({text,className}) => {
  return (
    <div>
        <li className={`text-primary   text-lg font-semibold list-none font-open hover:text-secendory duration-300 ${className}`}>{text}</li>
    </div>
  )
}

export default List
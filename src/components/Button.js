import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({className = '', text, url}) => {
  return (
    <Link 
      className={`text-white bg-orange-500 hover:bg-orange-400 py-3 px-12 rounded-3xl mt-5 ${className}`} 
      to={`${url}`}
    >
      { text }
    </Link>
  )
}

export default Button

import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

const Button = ({onClick}) => {
  return (
    <button onClick={onClick} className='bg-dark border m-3 p-3 flex'><AiOutlinePlus size={30} color='black' />Ekle</button>
  )
}

export default Button
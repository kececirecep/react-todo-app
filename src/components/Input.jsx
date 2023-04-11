import React from 'react'

const Input = (props) => {
  return (
    <input 
    value={props.value}
    onChange={props.onChange} 
    placeholder='Değer giriniz'
    className='bg-sky-800 text-dark p-1'
    type="text" />
  )
}

export default Input
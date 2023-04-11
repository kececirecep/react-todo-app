import React from 'react'
import {TbCircleDotted} from 'react-icons/tb'

const List = (props) => {
  return (
    <div className='containerList'>
        <p className='flex'><TbCircleDotted size={30} /><span>{props.data}</span></p>
    </div>
  )
}

export default List
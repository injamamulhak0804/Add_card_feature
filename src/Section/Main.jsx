import React from 'react'
import list from '../assets/data'
import Card from '../Components/Card'

const Main = ({ handleClick }) => {
  return (
    <div className='w-full mb-10 justify-center 
    gap-x-40 gap-y-20 items-center flex min-h-full flex-wrap mt-20'>
      {
        list.map((item, index) => (
          <Card handleClick={handleClick} key={index} {...item} />
        ))
      }
    </div>
  )
}

export default Main
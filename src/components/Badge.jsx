import React from 'react'

const Badge = ({className,txt }) => {
  return (
    <div className={`w-[70px]  bg-black ${className}`}>
        <h6 className='text-white text-center text-sm font-bold py-[6px]'>{txt}</h6>
    </div>
  )
}

export default Badge
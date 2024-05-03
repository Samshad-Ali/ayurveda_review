import React from 'react'

const Signlereview = ({title,desc,stars}) => {
  return (
    <div className='flex flex-col gap-0'>
    <p className='text-lg font-semibold'>{title}</p>
    <p>{desc}</p>
    <div className='flex gap-1 my-1 items-center'>
    {stars.map((item,idx)=> {return <span className='text-xl text-yellow-500' key={idx}>{item}</span>})}
    </div>
  </div>
  )
}

export default Signlereview
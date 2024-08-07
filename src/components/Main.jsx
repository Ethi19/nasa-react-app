import React from 'react'

function Main(props) {
  const {data} = props
  return (
    
    <div className='imgcontainer'>
    <img src={data?.hdurl} alt={data?.title} className='bgimg' />
    </div>
    
  )
}

export default Main
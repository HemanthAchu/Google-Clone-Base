import React from 'react'
import { Link } from 'react-router-dom'


const Data = ({data}) => {
  return (
    <div className='col-lg-6'>
   
     <Link to={data.formattedUrl} >{data.displayLink}</Link>
     <Link to={data.link} ><h3>{data.title}</h3></Link>
     <p>{data.snippet}</p>
    </div>
  )
}

export default Data

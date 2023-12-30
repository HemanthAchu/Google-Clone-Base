import React from 'react'
import { Link } from 'react-router-dom'

const Secindex = () => {
  return (
    <div className=''>
   <div className='row'>

<div  className='col-md-12 border-bottom ps-0 '>
<ul className='nav p-1'>
  <li className='nav-item' >
   <Link   to={"/"} className='d-flex align-items-center justify-content-between nav-link '>
  <i style={{fontSize:"12px"}} className='fa fa-search'></i>
  <a style={{textDecoration:"none",fontSize:"14px"}} className='ms-1' href="">All</a>
  </Link>
  </li>
  <li className='nav-item' >
   <Link   to={"/"} className='d-flex align-items-center justify-content-between nav-link '>
   <i style={{fontSize:"12px"}} className="fa-solid fa-play"></i>
  <a style={{textDecoration:"none",fontSize:"14px"}} className='ms-1' href="">Videos</a>
  
  </Link>
  </li>
  <li className='nav-item' >
   <Link   to={"/"} className='d-flex align-items-center justify-content-between nav-link '>
  <i style={{fontSize:"12px"}} className='fa fa-image'></i>
  <a style={{textDecoration:"none",fontSize:"14px"}} className='ms-1' href="">images</a>
  </Link>
  </li>
  <li className='nav-item' >
   <Link  to={"/"} className='d-flex align-items-center justify-content-between nav-link '>
  <i style={{fontSize:"12px"}}  className='fa fa-location-dot'></i>
  <a style={{textDecoration:"none",fontSize:"14px"}} className='ms-1' href="">maps</a>
  </Link>
  </li>
  <li className='nav-item' >
   <Link   to={"/"} className='d-flex align-items-center justify-content-between nav-link '>
   <i style={{fontSize:"12px"}} class="fa-solid fa-ellipsis-vertical"></i>
  <a style={{textDecoration:"none",fontSize:"14px"}} className='ms-1' href="">More</a>
  </Link>
  </li>
</ul>

  
</div>

   </div>
   
  </div>
  
  )
}

export default Secindex

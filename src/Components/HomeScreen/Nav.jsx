import React from 'react'

const Nav = () => {
  return (
    <div style={{height:'100px'}} className='w-100 d-flex justify-content-between align-item-center'>
      <div style={{width:"20%"}}></div>
      <div style={{
        width:"350px",
        display:"flex",
        justifyContent:"space-around",
        fontSize:"26px",
        paddingTop:"30px",
        
        
      
    }} 
      >

<a style={{textDecoration:'none',fontSize:"20px"}} href="">Gmail</a>
<a style={{textDecoration:'none',fontSize:"20px"}} href="">image</a>
<i className="fa-solid fa-flask pt-1"></i>
<i className="fa-solid fa-bars pt-1 "></i>
<i className="fa-regular fa-user pt-1"></i>
      </div>
    </div>
  )
}

export default Nav

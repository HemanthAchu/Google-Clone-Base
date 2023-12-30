import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Firstindex = ({searchTeam,setSearch,voicetrue}) => {
  const [searchText,setsearchText]= useState()
  useEffect(()=>{
    setsearchText(searchTeam)
  },[searchTeam])

  const handleSubmit =(e)=>{
    e.preventDefault();
  
    if(/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9].+" ".*/.test(searchText)){
      setSearch(searchText)
    }
  }
  const cleardata=()=>{
    setsearchText('')
  }





  return (
    <div className='col-md-12 mt-4 d-flex '>
 <Link to={"/"} >
  <img style={{height:"50px",width:"100px"}}  src="https://imgs.search.brave.com/L-LrG83vExn0tTD9CtEiswrdDe0-ezDfMuYyKNlQt44/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L3Jq/cUpFS3Y2UDlZank5/ZDNLTUd2cDgtMzIw/LTgwLmpwZw" alt="Google logo" />
 </Link>
 <div className=' w-100 d-flex justify-content-between me-2 align-items-center'style={{height:"50px"}} >
 <div style={{width:'65%',height:"45px"}} className='col-md-8  d-flex justify-content-between ms-1 align-items-center border p-1'>
<form onSubmit={handleSubmit} style={{width:"60%"}}>
  <input  onChange={(e)=>setsearchText(e.target.value)} style={{boxShadow:"none",outline:"none",height:"40px",width:"100%",paddingLeft:"0"}} type="text" value={searchText} className='form-control  border-0 ' />
</form>
{
  searchText?<i onClick={cleardata} style={{cursor:"pointer",width:"20px"}} class="fa-regular fa-circle-xmark  "></i>:null
}
<i style={{cursor:"pointer"}} onClick={voicetrue} class="fa-solid fa-microphone "></i>
<i onClick={handleSubmit} style={{cursor:"pointer"}} class="fa-solid fa-magnifying-glass "></i>
 </div>



 
 <div>
 <ul  className='nav ms-1'>
  <li className='nav-item'>
        <a href="/" className='nav-link'>
          <i style={{color:"black"}} className="fa fa-th"></i>
        </a>
  </li>
  <li className='nav-item'>
        <a href="/" className='nav-link'>
          <i style={{color:"black"}} className="fa fa-user"></i>
        </a>
  </li>
 </ul>
 </div>
 </div>
    </div>
  )
}

export default Firstindex

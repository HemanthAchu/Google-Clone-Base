import React, { useState } from 'react'

function Homescreen({setSearch,voicetrue}) {

  const [input,setinput]=useState('')

const handleSubmit =(e)=>{
  e.preventDefault();

  if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9].+" ".*/.test(input)){
    setSearch(input)
  }
}
const cleardata=()=>{
  setinput('')
}


  return (
    <div className=' d-flex justify-content-center align-items-center'>
      <div style={{height:"300px"}} className='w-50 pt-5'>
        <div style={{height:"200px",width:"100%"}} >
            <center><img   className='w-100' src="https://imgs.search.brave.com/FMfGvu3D3SfmvdBW4jdzaVHaQ6eY5PgmeMj8m6wF4lg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ibG9n/Lmh1YnNwb3QuY29t/L2hzLWZzL2h1YmZz/L1NjcmVlbiUyMFNo/b3QlMjAyMDE5LTA1/LTI4JTIwYXQlMjAy/LjQzLjIzJTIwUE0u/cG5nP3dpZHRoPTU5/OCZuYW1lPVNjcmVl/biUyMFNob3QlMjAy/MDE5LTA1LTI4JTIw/YXQlMjAyLjQzLjIz/JTIwUE0ucG5n" alt="" /></center>
       
        <div style={{border:"1px solid black",borderRadius:"60px",width:"100%",Width:"500px",height:"60px",display:"flex",justifyContent:'space-between',alignItems:"center"}}><i className=" ps-3 fa-solid fa-magnifying-glass "></i>
<form onSubmit={handleSubmit} style={{width:"70%",height:"40px",backgroundColor:"green"}}>
  <input style={{outline:"none",border:"none"}} placeholder='Search  Google type a URL' onChange={(e)=>setinput(e.target.value)} className='w-100 h-100 ' type="text" value={input} />
</form>
{input?<i onClick={cleardata} className="fa-solid fa-circle-xmark"style={{cursor:"pointer"}} ></i>:<></>}
<button style={{borderRadius:'20px',marginRight:'8px'}} className='btn '><i onClick={voicetrue}  className="fa-solid fa-microphone"></i></button>
        </div>
        <div className='d-flex justify-content-evenly align-item-center w-100 mx-auto text-center  '><button onClick={handleSubmit} className='btn'>search</button><button className='btn '>Feeling Lucky</button></div>
        </div>    
      </div>
  
    </div>
  )
}

export default Homescreen;

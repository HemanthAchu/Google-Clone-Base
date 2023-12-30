import { useEffect } from 'react'
import React from 'react'
import{ useNavigate }from 'react-router-dom'
import Navindex from './Header/Navindex'
import SearchData from './SearchData/SearchData'





const index = ({searchTeam,googledata,setSearch,voicetrue}) => {
const Navigate =useNavigate();

useEffect(()=>{
  if(searchTeam  === ''){
    Navigate('/')
  }
},[searchTeam])


  return (
      <>
        <Navindex setSearch={setSearch} searchTeam={searchTeam}  voicetrue={voicetrue}/>
      <div className='container'>
        <div className='row'>
       <SearchData googledata={googledata} />
        </div>
      </div>
      </>
  )
}  

export default index

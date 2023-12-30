import React from 'react'
import Firstindex from './Firstindex'
import Secindex from './Secindex'

const Navindex = ({searchTeam,setSearch,voicetrue}) => {
  return (
    <>
    <Firstindex searchTeam={searchTeam} setSearch={setSearch} voicetrue={voicetrue}/>
     <Secindex/>
    </>
      

  )
}

export default Navindex

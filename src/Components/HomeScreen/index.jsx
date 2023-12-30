 import React from 'react'
 import Homescreen from './Homescreen'
 import Nav from './Nav'

function index({setSearch,voicetrue}) {
  return (
     <div>
        <Nav voicetrue={voicetrue} />
      <Homescreen setSearch={setSearch} voicetrue={voicetrue} />

    </div>
   )
 }

 export default index

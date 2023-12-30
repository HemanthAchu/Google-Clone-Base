import React, { useState } from 'react'
import './App.css'
import {Route,Routes,useNavigate} from 'react-router-dom'
import Screen from './Components/Searchscreen'
import HomeScreen from './Components/HomeScreen'
import { GoogleSearch } from './API/Googlesearch'
import VoiceSearch from './Components/VoiceSearch'
import {recognition} from "./API/voicerec"



function App() {
  

const Navigate = useNavigate();
const [searchTeam,setsearchTeam] =useState("")
const [googledata,setgoogledata] = useState({})
const [voice,setvoice]=useState(false)
const setSearch = async (team)=>{
setsearchTeam(team)

const data= await GoogleSearch(team)
setgoogledata(data)
Navigate('/search')

}
const voicetrue=()=>{
   setvoice(true)
   recognition.start()
   recognition.onresult=(event)=>{
      const {transcript} =event.results[0][0]
      
      if(transcript !==null || transcript !==""|transcript !== " "){
         setvoice(false)
         setSearch(transcript)
      }else{
setvoice(false)
alert("please try again")
      }
   }

}

const voicefalse=()=>{
   setvoice(false)
   recognition.stop()
}

console.log(recognition);
  return (
    <>
    <div>
{
   voice?(<VoiceSearch  voicefalse={voicefalse}/>):null
}



  
 <Routes>
  
    <Route  path='/' element={<HomeScreen setSearch={setSearch} voicetrue={voicetrue} />}/>
   {
      searchTeam !==""?(
         <Route path='/search' element={<Screen searchTeam={searchTeam} googledata={googledata} setSearch={setSearch} voicetrue={voicetrue} />} />
      ):null
   }

 </Routes>
    </div>
  
 
 
   </>
      
    
  ) 
}

export default App

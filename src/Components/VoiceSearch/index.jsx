import React from 'react'
import "./index.css"

const VoiceSearch = ({voicefalse}) => {
  return (
    <div className='container-fluid col-md-12 d-flex align-items-center justify-content-center voiceModal'>
    <div className='col-md-4 bg-light voice-search'>
<div className="border-bottom w-100 d-flex align-items-center justify-content-between p-3">
    <h3>Voice Search</h3>
    <i onClick={voicefalse} className="fa fa-times btn btn-sm"></i>
</div>
<div className="w-100 h-50 d-flex align-items-center justify-content-center py-2">
    <div className="col-md-2 micIcon d-flex align-items-center justify-content-center bg-danger text-white">
        <i  className="fa fa-microphone"></i>
    </div>
</div>
    </div>
    </div>
  )
}

export default VoiceSearch;

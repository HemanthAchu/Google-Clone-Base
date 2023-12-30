import React from 'react'
import Data from './Data'

const SearchData = ({googledata}) => {
  return (

      <div className='col-md-12'>
        <p className='small text-dark' >
            All {googledata.searchInformation.formattedTotalResults}result are found in {googledata.searchInformation.searchTime}
        </p>
    {
      googledata?.items.map((data,id)=>(
         <Data data={data} key={id}/>
      ))
    }
      </div>
    
  )
}

export default SearchData

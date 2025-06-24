import React from 'react'

function Searchfilter({search, setsearch}) {

  const handleinputchange = (e) =>{
    e.preventDefault();
    setsearch(e.target.value)
  }

  return (
    <div className='searchfilter'>
      <input type="text" placeholder='Search' name='search' value={search} onChange={handleinputchange}/>
    </div>
  )
}

export default Searchfilter
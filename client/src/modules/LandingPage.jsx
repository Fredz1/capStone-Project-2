import React, { useState } from 'react'

const LandingPage = () => {

  // list of possible media search types
  const searchTypes = ['movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all']
      /* 
        should be able to search for movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
      */
  
     const [searchSelection, setSearchSelection] = useState({})
     const [searchResults, setSearchResults] = useState([]);
     
     /* 
       checkbox states stored in useState hook.  When user selects a box event is passed form input to function.  The input value is added to searchSelection state if is is not already.  If value is already added it is toggled based on event.target.checked bool.
     */

  const handleCheckboxInput = event => {
    let current = searchSelection
    current[event.target.value] = event.target.checked
    setSearchSelection(current)    
    console.log(current)
  }

  const handleSearchClick = async () => {
    const request = await fetch(
      '/api',
      {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(searchSelection)
      }
    )
    request.json()
    console.log(request)
  }

  return (
    <div>
      <div>
        <input type="text" placeholder='search'/>
        <div>
          {
            searchTypes.map(
              (el, index) => {
                return (
                  <>
                    <input key={index} type='checkbox' value={el} onChange={e => handleCheckboxInput(e)} />{el}
                  </>
                )
              }
            )
          }
        <button onClick={() => handleSearchClick()}>search</button>
      </div>
          {/* search resulys display */}
          {
            searchResults ? 'there are results' : 'nothing to return'
          }
      </div>      
      <div>
        {/* favorites */}
        favorites
      </div>
    </div>
  )
}

export default LandingPage

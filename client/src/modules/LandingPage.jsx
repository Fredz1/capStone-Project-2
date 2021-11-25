import React, { useState } from 'react'
import ItemCard from './ItemCard'
import searchTypes from './staticContent/staticContent'

const LandingPage = () => {

  // list of possible media search types
  
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
    await request.json()
    setSearchResults(request)
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
                  <div key={index}>
                    <input type='checkbox' value={el.searchName}  onChange={e => handleCheckboxInput(e)} />{el.displayName}
                  </div>
                )
              }
            )
          }
        <button onClick={() => handleSearchClick()}>search</button>
      </div>
          {/* search results display */}
          {
            searchResults.length === 0 ? 
              'nothing to return' : 
              'something here'
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

import React, { useState } from 'react'

const LandingPage = () => {

  // list of possible media search types
  const searchTypes = ['movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all']
      /* 
        should be able to search for movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
      */
  // use 1 usestate hook to store all search criteria
  const [searchSelection, setSearchSelection] = useState({})

  const handleCheckboxInput = event => {
    let current = searchSelection
    current[event.target.value] = event.target.checked
    setSearchSelection(current)    
    console.log(current)
  }

  return (
    
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
      </div>      
    </div>
  )
}

export default LandingPage

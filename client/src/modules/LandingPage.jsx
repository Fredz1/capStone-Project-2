import React, { useState, useEffect } from 'react'
import ItemCard from './ItemCard'
import searchTypes from './staticContent/staticContent'
import {addToStorage, getFavorites, removeFromStorage} from '../helperFunctions/sessionStorageController'
import axios from 'axios'

const LandingPage = () => {

      /* 
        api search Criteria kept in static folder
        should be able to search for movie, podcast, music, musicVideo, audiobook, shortFilm, tvShow, software, ebook, all
      */

     const [searchSelection, setSearchSelection] = useState({})
     const [searchResults, setSearchResults] = useState([])
     const [favorites, setFavorites] = useState([]);
     const [userInput, setUserInput] = useState('');
     
     /* 
       checkbox states stored in useState hook.  When user selects a box event is passed form input to function.  The input value is added to searchSelection state if is is not already.  If value is already added it is toggled based on event.target.checked bool.
     */

  const handleCheckboxInput = event => {
    let current = searchSelection
    current[event.target.value] = event.target.checked
    setSearchSelection(current)    
  }

  const handleSearchClick = async () => {
    const {status, data} = await axios.post(
      '/api',
      {
        searchSelection,
        userInput 
      }
    )
    console.log(userInput)

    status === 200 ? setSearchResults([...data.results]) : console.log(status)

  }

  // Useffect to get any existing favorites from browser session storage
  useEffect(
    () => {
      setFavorites(getFavorites())
    }, 
    []
  )

  /* 
  handle favorites
  */

  const moveToFavorites = fav => {
    addToStorage(fav)
    setFavorites(getFavorites())
  }

  const removeFromFavorites = fav => {
    removeFromStorage(fav)
    setFavorites(getFavorites())
  }

  return (
    <div>
      <h1>
        iStore Search-A-Nator
      </h1>
      <div className='userInputPanel'>
        <input type="text" placeholder='search' onChange={e => setUserInput(e.target.value)}/>
        <div className='checkboxContainer'>
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
        </div>      
        <button onClick={() => handleSearchClick()}>Search</button>
      </div>
      
      <div className="mainDisplay">
        <div className="searchResults">
          {/* search results display */}
          {
            searchResults.length === 0 ? 
              <p>Nothing on the store matches you search</p> 
              : 
              searchResults.map(
                (el, index) => {
                  return (
                    <ItemCard key={index} data={el} add={true} moveToFavorites={moveToFavorites}/>
                  )
                }
              )
          }
        </div>
        <div className='favorites'>
          {/* favorites */}
          {
            favorites.length === 0 ? 
              'No Favorites'
              : 
              favorites.map(
                (el, index) => {
                  return (
                    <ItemCard key={index} add={false} data={el} removeFromFavorites={removeFromFavorites}/>
                  )
                }
              )
          }
        </div>
      </div>
    </div>
  )
}

export default LandingPage

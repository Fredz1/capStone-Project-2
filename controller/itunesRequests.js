// handle all requests here
const fetch = require('node-fetch')

// if no input media type is sent then media defaults to all
const searchiStore = async (media, userInput) => {
  /* 
    handle textInput: Any URL-encoded text string. Note: URL encoding replaces spaces with the plus (+) character
  */
  let correctedUserInput = userInput.replace(/\s/g, '+')

  /* 
    The type of results you want returned, relative to the specified media type. For example: movieArtist for a movie media type search. The default is the track entity associated with the specified media type.
    mediaTypes: 'movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all'
  */

  let country = 'za'
  let countryURL = `&country=${country}`

  /* 
    &mediaType=${media}
    map media selection to a string
  */
  let mediaString = ''
  media.map(
    el => {
      mediaString += `&entity=${el}`
    }
  )
  if(media.length === 0 || media[0] === 'all') mediaString = ''
  

  
  try{
    const request = await fetch(`https://itunes.apple.com/search?term=${correctedUserInput}${mediaString}${countryURL}&limit=5`)
    const json = await request.json()
    if (json.errormessage) throw json
    return json
  } catch(e){
    return e
    }
  }

module.exports = searchiStore


//  https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo.
// handle all requests here
const fetch = require('node-fetch')

const searchiStore = async (media = ['all'], userInput) => {
  /* 
    handle textInput: Any URL-encoded text string. Note: URL encoding replaces spaces with the plus (+) character
  */
  let correctedUserInput = userInput.replace(/\s/g, '+')

  /* 
    The type of results you want returned, relative to the specified media type. For example: movieArtist for a movie media type search. The default is the track entity associated with the specified media type.
    mediaTypes: 'movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all'
  */
//  &mediaType=${media}
  let mediaString = ''
  media.map(
    el => {
      mediaString += `&entity=${el}`
    }
  )


  try{
    const request = await fetch(`https://itunes.apple.com/search?term=${correctedUserInput}${mediaString}&limit=3`)
    console.log(request)
    const json = await request.json()
    return json
  } catch(e){
    console.error(e)
  }
  // return await request
}


module.exports = searchiStore


//  https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo.
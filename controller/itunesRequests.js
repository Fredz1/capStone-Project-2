// handle all requests here
const fetch = require('node-fetch')

const searchTypes = ['movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all']

// limit?
// media?
const searchiStore = async (media = ['all'], userInput) => {
  console.log(media)
  /* 
    handle textInput: Any URL-encoded text string. Note: URL encoding replaces spaces with the plus (+) character
  */
    let correctedUserInput = userInput.replace(/\s/g, '+')


  
  const request = await fetch(`https://itunes.apple.com/search?term=${correctedUserInput}entity=${media}&limit=3`)
  const json = await request.json()
  return json
  // return await request
}


module.exports = searchiStore


//  https://itunes.apple.com/search?term=jack+johnson&entity=musicVideo.
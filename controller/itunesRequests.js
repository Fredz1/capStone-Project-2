// handle all requests here
const fetch = require('node-fetch')

const searchTypes = ['movie', 'podcast', 'music', 'musicVideo', 'audiobook', 'shortFilm', 'tvShow', 'software', 'ebook', 'all']

// limit?
// media?
const searchiStore = async (media, userInput) => {
  
  const request = await fetch(`https://itunes.apple.com/search?term=${userInput}&limit=10`)
  const json = await request.json()
  return json
  // return await request
}


module.exports = searchiStore
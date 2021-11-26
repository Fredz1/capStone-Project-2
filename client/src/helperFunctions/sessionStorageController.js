

const setFavorites = data => {
  return sessionStorage.setItem('favorites', JSON.stringify(data))

}

const getFavorites = () => {
  if(JSON.parse(sessionStorage.getItem('favorites')) === null) setFavorites([])
  
  let temp = JSON.parse(sessionStorage.getItem('favorites'))
  return temp
}

const addToStorage = element => {
  let temp = getFavorites()
  temp.push(element)
  setFavorites(temp)
}

export {addToStorage, getFavorites}
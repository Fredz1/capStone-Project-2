

const setFavorites = data => {
  return sessionStorage.setItem('favorites', JSON.stringify(data))

}

const getFavorites = () => {
  return JSON.parse(sessionStorage.getItem('favorites'))
}

const addToStorage = element => {
  let temp = getFavorites()
  temp.push(element)
  setFavorites(temp)
}

export {addToStorage, getFavorites}
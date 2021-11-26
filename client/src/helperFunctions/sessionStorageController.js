

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

const removeFromStorage = element => {
  let temp = getFavorites()
  let indexToRemove = temp.findIndex(
    el => {
      return el['collectionId'] === element['collectionId']
    }
  )
  temp.splice(indexToRemove, 1)
  setFavorites(temp)
}

export {addToStorage, getFavorites, removeFromStorage}
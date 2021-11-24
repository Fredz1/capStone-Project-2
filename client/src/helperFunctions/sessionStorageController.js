

const setFavorites = data => {
  sessionStorage.setItem('favorites', JSON.stringify(data))

}

const getFavorites = () => {
  JSON.parse(sessionStorage.getItem('favorites'))
}

export {setFavorites, getFavorites}
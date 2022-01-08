import React from 'react'

const ItemCard = props => {
  return (
    <div className='searchCard'>
      <img src={props.data.artworkUrl100} alt="artwork" /> 
      <div>
        {
          props.data.kind === "book" ? "Author" :
          props.data.kind === "song" ? "Artist" : 
          props.data.king === 'feature-movie' ? 'director' 
          :'creator'
        }: <br />{props.data.artistName}<br />

        {props.data.trackName}
      </div>
      {
        props.add ?
          <button onClick={() => props.moveToFavorites(props.data)} >Add to Fav</button>
          :
          <button onClick={() => props.removeFromFavorites(props.data)} >Remove Fav</button>
      }
    </div>
  )
}

export default ItemCard

/* 
artistId: 278056
artistName: "Rodney Carrington"
artistViewUrl: "https://music.apple.com/us/artist/rodney-carrington/278056?uo=4"
artworkUrl30: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/95/70/aa/9570aa48-c1fb-1861-2d11-37f7149df11f/source/30x30bb.jpg"
artworkUrl60: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/95/70/aa/9570aa48-c1fb-1861-2d11-37f7149df11f/source/60x60bb.jpg"
artworkUrl100: "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/95/70/aa/9570aa48-c1fb-1861-2d11-37f7149df11f/source/100x100bb.jpg"
collectionCensoredName: "Hangin' With Rodney"
collectionExplicitness: "explicit"
collectionId: 1440913240
collectionName: "Hangin' With Rodney"
collectionPrice: 7.99
collectionViewUrl: "https://music.apple.com/us/album/fred/1440913240?i=1440913581&uo=4"
contentAdvisoryRating: "Explicit"
country: "USA"
currency: "USD"
discCount: 1
discNumber: 1
isStreamable: true
kind: "song"
previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/e4/c5/e3/e4c5e3eb-c02f-c55c-ea1a-29442d8b2a68/mzaf_11520663632623369669.plus.aac.p.m4a"
primaryGenreName: "Comedy"
releaseDate: "1998-06-02T12:00:00Z"
trackCensoredName: "Fred"
trackCount: 18
trackExplicitness: "explicit"
trackId: 1440913581
trackName: "Fred"
trackNumber: 12
trackPrice: 0.99
trackTimeMillis: 158573
trackViewUrl: "https://music.apple.com/us/album/fred/1440913240?i=1440913581&uo=4"
wrapperType: "track"
*/
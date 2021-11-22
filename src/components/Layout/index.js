import React from 'react';
import './styles.css'

//import de Componentes en orden Alfabetico
import Header from '../Common/Header';

const logo_link = 'https://e7.pngegg.com/pngimages/158/639/png-clipart-spotify-streaming-media-logo-playlist-spotify-app-icon-logo-music-download.png'

function PageLayout ({children}) {

  return(
    <div className='layout'>
      <Header logo_url={logo_link}/>
      {children}
    </div>
  )
}

export default PageLayout 
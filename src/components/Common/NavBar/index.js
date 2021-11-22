import React from "react";
import PropTypes from 'prop-types'
import './styles.css'


/*
  content: type ['option 1' , 'option 2'] opciones del menu de navegacion
  SuperMenu: type [
    {
      principapl: Option 1,
      options: ['option 1', 'option 2']
    },
    {
      principal: Option 2,
      options: ['option 1', 'option 2']
    }]
*/

function NavBar({ content }) {

  return(
    <nav className='nav-bar'>
      <ul>
      {content.map( option => (
        <li>
          <a href={`#${option.link}`} >{option.text}</a>
        </li>
      ))}
        <li>
          <img 
            src='https://e7.pngegg.com/pngimages/670/509/png-clipart-avatar-female-girls-avatar-purple-face.png'
            alt='profile.png'/>
        </li>
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  content: PropTypes.arrayOf([
    PropTypes.shape({
      text: PropTypes.string,
      link: PropTypes.string
    })
  ])
}

export default NavBar
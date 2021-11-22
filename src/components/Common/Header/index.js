import React from "react";
import PropTypes from 'prop-types'
import './styles.css'

//import de componentes en orden alfabetico
import NavBar from '../NavBar'

const options = [
  {
    text: 'Option 1',
    link: 'option1'
  },
  {
    text: 'Option 1',
    link: 'option1'
  },
  {
    text: 'Option 1',
    link: 'option1'
  },
  {
    text: 'Option 1',
    link: 'option1'
  },
  {
    text: 'Option 1',
    link: 'option1'
  },
  {
    text: 'Option 1',
    link: 'option1'
  }
]

function Header({logo_url}) {
  return(
    <div className='page_header'>
      <img src={logo_url} alt='logo.png'/>
      <NavBar content={options}/>
    </div>
  )
}

Header.propTypes = {
  logo_url: PropTypes.string
}

export default Header

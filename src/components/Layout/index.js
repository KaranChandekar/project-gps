import React from 'react';
import './styles.css'

function PageLayout ({children}) {

  return(
    <div className='layout'>
      <nav>
        <img className='logo' src='./images/disney-logo.png' alt='logo.png' />
        <ul className='layout-menu'>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
          <li>Option 4</li>
        </ul>
      </nav>

    </div>
  )
}

export default PageLayout 
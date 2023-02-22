import React from 'react'

import './Header.css'

function Header() {

  return (
    <header className="header">
          <nav className="nav">
              <ul className='navList'>
                  <a href=""><li>Home</li></a>
                  <a href=""><li>About</li></a>
                  <a href=""><li>Skills</li></a>
                  <a href=""><li>Projects</li></a>
                  <a href=""><li>Contact</li></a>
              </ul>
          </nav>
    </header>
  )
}

export{
  Header
}

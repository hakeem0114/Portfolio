import React from 'react'

//Data
import navData from './navData'

//Css
import './NavBar.css'

function NavBar() {

  return (
    <nav className="container navBar"> 
        <h1>NavBar1</h1>
        <ul className='navMenu'>
            {
              navData.map((item)=>
                  <li>
                    <h3>Test</h3>
                    key = {item.id} {/* Id based bahavior to recognize rendered elements better. Fixes the key is needed notification issue*/}
                    <a href={item.link}> {item.title} </a>

                  </li>
              )
            }
        </ul>

        <button></button>
    </nav>
  )
}

export{
  NavBar
}
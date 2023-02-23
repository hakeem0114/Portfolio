import React from 'react'

//Data
import navData from './navData'

//Css
import './NavBar.css'

function NavBar() {

  return (
    <nav className=" navBar"> 
        <ul className='navMenu'>
            {
              navData.map((item)=>
                  <li key={item.id} >
                    
                    <a href={item.link}> {item.title} </a>

                  </li>
              )
            }
        </ul>
    </nav>
  )
}

export{
  NavBar
}
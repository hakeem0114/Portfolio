//React Libraries
import React from 'react'
import { useEffect, useRef } from 'react' /* useRef works like querySelector*/


//Data
import headerData from './headerData'

//Css
import './Header.css'
import '../../../src/index.css'

//Animation Css
import { init } from 'ityped'


function Header() {

    // console.log(myName);  To use ityped, call myName.current 
  const myName = useRef();
  useEffect(()=>{
    init(myName.current , 
          { 
              showCursor: false,
              backDelay: 2000,
              backSpeed: 40,
              loop: false,
            strings: ['Hakeem Abdul-Razak']
          }
      )
    
  },[])

  return (
    <header id="header" className=" header">

          <div className="headerIcons">
              {
                      headerData.map((item)=>
                          <li key={item.id} >
                            
                            <a target={"_blank"} href={item.link}> {item.icon} </a>

                          </li>
                      )
              }
          </div>
          
          <div className="headerRight">
              <h2  ref={myName} ></h2>
              <p>Hello there! I am a web developer & mechatronics engineer. <br/> My goal is to learn, understand, create & lead projects in my career.</p>
              
              <div className="headerLinks">
                  <button ><a  href="#contact">To Reach Me</a></button>  
                  <button><a  href="#projects">My Projects</a></button>
              </div>
          </div>
      

    </header>
  )
}

export{
  Header
}

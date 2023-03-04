import {React, useEffect } from 'react'

//Css icons
import { AiFillFilePdf } from "react-icons/ai";

//Css
import './About.css'


function About() {

  return (
    <section id="about" className=" about"> 
        <h1>In Love With Technology & Designing</h1>

      <div className="about2">
        <p> Hello There! Based in Ontario, Canada. I am an aspiring developer & mechatronics engineer. I find the immediate outcomes of applying technology to life's problems are fascinating and rewarding. The easy access to the wide breadth of programming knowledge without any expensive barriers to entry is what first drew me to software development and why I want to learn more everyday  .</p>
        <button>
            <p>Resume</p>
            <a target="_blank" href="https://drive.google.com/file/d/1ifaT0pN0jmGtOVkP1MhgeNKONNgRUHZ7/view?usp=share_link">
              
            <AiFillFilePdf/>
            </a>
   
        </button>

      </div>


      </section>
  )
}

export{
  About
}
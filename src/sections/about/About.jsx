import {React, useEffect } from 'react'

//Css icons
import { AiFillFilePdf } from "react-icons/ai";

//Css
import './About.css'


function About() {

  return (
    <section className=" about"> 
        <h1>In Love With Technology & Designing</h1>

      <div className="about2">
        <p>Howdy, based in Brisbane, Australia, I'm a Software Developer and Marketing Specialist (Who may have taken a 7-year detour as a restaurateur in Canada, but that's a whole other story). I find the outcomes of applying technology to life's problems fascinating and rewarding. It's what first drew me to software development and what I inspire to create in every project.</p>
        <button>
          <a target="_blank" href="https://drive.google.com/file/d/1ifaT0pN0jmGtOVkP1MhgeNKONNgRUHZ7/view?usp=share_link">Resume
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
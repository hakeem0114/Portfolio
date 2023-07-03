import React from 'react'
import { AiFillFilePdf } from "react-icons/ai";

//Skill Card Data
import { 
        techData,
        langData
 } from "./skillsData";


//Css
import './Skills.css'

function Skills() {

  return (
    <section  id="skills" className="skills"> 
        <h1>Skills</h1>

      <div className="skillsSection">
          <div className="lang">
                <h2>Programming</h2>

                <ul>
                    {
                      langData.map((lang)=>
                      <div className="lang2">
                        <li key={lang.id}><img src={lang.html} alt="html" /></li>
                        <li><img src={lang.js} alt="javascript" /></li>
                        <li><img src={lang.css} alt="css" /></li>
                        <li> <img src={lang.react} alt="react" /></li>
                        <li><img src={lang.c} alt="c" /></li>
                        <li> <img src={lang.vhdl} alt="vhdl" /></li>
                        <li><img src={lang.assembly} alt="assembly" /></li>
                        <li><img src={lang.appScript} alt="appScript" /></li>
                      </div>

                        
      
                      )
                    }

                </ul>

          </div>

                      
          <div className="tech">
                    <h2>Technologies</h2>
                     <ul>
                     {
                      techData.map((tech)=>
                      <div className="tech2" key={tech.id} >
                        <li key={tech.id}> <img src={tech.git} alt="git" /></li>
                        <li><img src={tech.cli} alt="cli" /></li>
                        <li><img src={tech.arduino} alt="ard" /></li>
                        <li><img src={tech.solidworks} alt="solid" /></li>
                        <li><img src={tech.autoCad} alt="autocad" /></li>
                        <li><img src={tech.matlab} alt="matlab" /></li>
                        {/* <li><img src={tech.simulink} alt="simulink" /></li> */}
                        <li><img src={tech.ansys} alt="ansys" /></li>
                        <li><img src={tech.catia} alt="catia" /></li>
                        <li><img src={tech.sap} alt="sap" /></li>
                        <li><img src={tech.zoho} alt="zoho" /></li>
                        <li><img src={tech.ms365} alt="365" /></li>
                        {/* <li><img src={tech.gSuite} alt="gSuite" /></li> */}
                        <li><img src={tech.autodesk} alt="autoDesk" /></li>
                        <li><img src={tech.illustrator} alt="illus" /></li>
                      </div> 
      
                      )
                    }
                      </ul>
                      
          </div>
          
          {/* <a target="_blank" href="https://drive.google.com/file/d/1ifaT0pN0jmGtOVkP1MhgeNKONNgRUHZ7/view?usp=share_link">Resume
          <AiFillFilePdf/>
          </a> */}


      </div>


      </section>
  )
}

export{
  Skills
}
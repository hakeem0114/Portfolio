//React library & hooks
import {React, useState, useEffect} from 'react'

//Custom Components
import { Card } from "./Card";
import {  ProjectType} from "./projectType/ProjectType";

//Css
import './Projects.css'

//Card Data
import { 
          webData,
          mechData
      } from "./cardData";

//Project Type Data
import { projectTypeData } from "./projectType/projectTypeData";



function Projects() {

    // To use the option.type string to filter out the projects,
  // the useState hook is needed to keep track

  const [selected, setSelected] = useState("web");  
  const [cardData, setCardData] = useState([]);


  useEffect(()=>{

    // Switch statement has a better O(n) that if else
      switch (selected) {
        case "all":
          setCardData(allData)
          break;
      
          case "web":
            setCardData(webData)
          break;

          case "mech":
            setCardData(mechData)
          break;
      }
      
  },[selected])

 
  const cards = cardData.map((item)=>{
      return(
            <Card 
                key={item.id}
                item = {item}

            />
      )
  })


  return (
    <section id="projects" className="projects"> 
        <h1>Projects</h1>

        <ul>
              { projectTypeData.map((option)=>
                  <ProjectType
                    key={option.id}
                    option= {option}

                    active = {selected === option.type}
                    setSelected = {setSelected}
                  />
              )
              
              }
        </ul>

        <div className="cardBox">
           {cards}      
        </div>

    </section>
  )
}

export{
  Projects
}
import {React, useState, useEffect} from 'react'

//Custom Components
import { Card } from "./Card";
import {  ProjectType} from "./projectType/ProjectType";

//Css
import './Projects.css'

//cardData
import { cardData } from "./cardData";
import { projectTypeData } from "./projectType/projectTypeData";

//Filtered Data
import {mechData} from "./mechData";
import {webData} from "./webData";

function Projects() {

    // To use the option.type string to filter out the projects,
  // the useState hook is needed to keep track

  const [selected, setSelected] = useState("all");  
  const [projectCard, selectedCard] = useState([]);


  useEffect(()=>{

    // Switch statement has a better O(n) that if else
      switch (selected) {
        case "all":
          selectedCard(cardData)
          break;
      
          case "web":
            selectedCard(webData)
          break;

          case "mech":
            selectedCard(mechData)
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
    <section className="projects"> 
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
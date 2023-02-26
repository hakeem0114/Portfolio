import React from 'react'

//Custom Components
import { Card } from "./Card";

//Css
import './Projects.css'

//cardData
import { cardData } from "./cardData";

function Projects() {

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
           <li>All</li>
           <li>Web Development</li>
           <li>Mechatronics</li>
        </ul>
        {cards}
          
    </section>
  )
}

export{
  Projects
}
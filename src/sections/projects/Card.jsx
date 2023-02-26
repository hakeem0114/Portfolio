/*File to make custom project cards*/

/*Receive props from projects.jsx*/

/* 
useEffect(()=>{
    On hover, make a gold color go from left to right & then 
    explode. Then allow a box shadow.
    Then make it float. 
    transition time = 2secs

})

Add a lock around a card if not completed ::: IF inProgress && <div class="inProgress"

*/

import React from 'react'

import './Card.css'

function Card(props) {

    return (
      <div className="card"> 
          <h3>{props.item.title}</h3>
          <img src={props.item.image} alt="Image for project" />
          <h3>{props.item.title}</h3>
          {/* 
          <p>{props.item.description}</p>
          <div className="cardBottom">
                {props.item.js && <button className= "cardButton">JS</button> }       
          </div> */}
     
          
      </div>
    )
  }
  
  export{
    Card
  }
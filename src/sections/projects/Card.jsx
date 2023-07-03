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
          <div className="cardButtons">
              <ul>
                 <li>{props.item.js && <p className= "cardButton">JS</p> } </li>
                 <li>{props.item.html && <p className= "cardButton">HTML</p> } </li>
                 <li>{props.item.css && <p className= "cardButton">CSS</p> } </li>
                 <li>{props.item.react && <p className= "cardButton">React</p> }</li>
                <li>{props.item.arduino && <p className= "cardButton">Arduino</p> }</li>
                <li>{props.item.matlab && <p className= "cardButton">MATLAB</p> }</li>
                <li>{props.item.cad && <p className= "cardButton">CAD</p> }</li>   
                <li>{props.item.vhdl && <p className= "cardButton">VHDL</p> }</li>  
                <li>{props.item.node && <p className= "cardButton">Node</p> }</li>   
                <li>{props.item.tailwind && <p className= "cardButton">Tailwind</p> }</li> 
                <li>{props.item.firebase && <p className= "cardButton">Firebase</p> }</li>              
                <li>{props.item.mui && <p className= "cardButton">Material UI</p> }</li> 
                <li>{props.item.mern && <p className= "cardButton">MERN</p> }</li> 
              </ul>
          
          </div> 
          <div className="cardDemos">
              <ul>

                  <li>
                        {props.item.github && <div className= "gitImage"></div>}

                        {/* {props.item.gitImage}    */}                   
                        
                         <a  target="_blank"  href={props.item.github}>
                             <img src={props.item.gitIcon} alt="git icon" /> 
                         </a>                    
                  
                  </li>


                  <li>
                         {props.item.demo && <div className= "cardDemo"></div> }
                         {/* {props.item.demoImage} */}
                         <a target="_blank" href={props.item.demo}>
                            <img    src={props.item.demoIcon} alt="demo icon" />
                         </a>

                    </li>   

              </ul>         
          </div> 

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
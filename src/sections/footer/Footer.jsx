import React from 'react'

//Css
import './Footer.css'

//Footer Data
import { footerData } from "./footerData";

function Footer() {

  return (
    <footer className="footer"> 
            <div className="footerIcons">
              {   
                      footerData.map((footer)=>
                          <li key={footer.id} >
                            
                            <a target={"_blank"} href={footer.link}> 
                                <img className='footerImage' src={footer.icon} alt="footerIcons" />
                                 
                            </a>

                          </li>
                      )
              }
          </div>

        <h5>hakeem0114@gmail.com</h5>

        <p>@ Copyright 2023 Hakeem Abdul-Razak</p>
          
    </footer>
  )
}

export{
  Footer
}
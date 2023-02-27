import {React, useRef, useState } from 'react';

//Email.js package
import emailjs from '@emailjs/browser';

//Css
import './Contact.css'

function Contact() {

    // Get message onSubmit
    const form = useRef();
    
    //Use State for submit
    const [message, setMessage] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();

      setMessage(true); //useState
  

      emailjs.sendForm(
        'service_eeio13h',
         'template_l8rjpfd',
          e.target,   //form.current = e.target
          'lYwtEBV-JBe0Bbtv1'
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    
  return (
    <section ref={form} onSubmit={sendEmail} className="contact"   id="contact"> 
        <h1>Contact Me</h1>

        <form >
           <input type="text" name="user_name" placeholder='John Wick'/>
          <input type="text"  name="user_email"  placeholder = "johnwick@gmail.com" id="email" required />
          <textarea name="message" id="message" placeholder='Message contents'  required></textarea>
          <button type='submit'  value="Send"  >Send</button>
          {message && <span>Submitted</span>}
                  
        </form>
          
    </section>
  )
}

export{
  Contact
}
